//------------------------------------------------------------------------------
/*! \file Contain6.cpp
    \author Copyright (C) 2017 by Collin D. Bevins.
    \license This is released under the GNU Public License 2.
    \brief An implementation of the Fried and Fried containemnt model.

    This is a fire containment algorithm based upon the paper
        Fried, Jeremy S. and Fried, Burton D.  1995.
            <i>Simulating wildfire containment with realistic tactics.</i>
    and heavily adapted from the FCAT Fire Containment Algorithm Test Pascal
    program by Jeremy S. Fried (1991).

    Primary assumptions are that the fire is growing under uniform fuel,
    terrain, and weather conditions, resulting in a steadily growing
    elliptical fire (except where contained).

    Containment "tactics" may be either head or rear attack.
    Containment resources are evenly divided and applied to each flank.

    All times (elapsed, resource arrival, containment time, etc)
    are from when the fire was first \b reported.
 */


//==============================================================================
//==============================================================================
//
//   Modified by MAF, 10/6/2008
//
//        added functionality for hourly varying spread rates
//        functions added:
//             SetDiurnalSpreadRates(double *rates)
//             SetFireStartTimeMinutes(double starttime)
//             GetDiurnalSpreadRate(double minutesSinceReport)
//
//        To use, for each fire:
//             1. Initialize Contain Class array of 24 double hourly spread rates
//                  with call to SetDiurnalSpreadRates().
//             2. Initialize the actual start time (this.StartTime, in minutes
//                  with call to SetFireStartTimeMinutes();
//             3. Replace call to fire = spreadRate( minutesSinceReport );
//                  with fire = GetDiurnalSpreadRate( minutesSinceReport );
//
//==============================================================================
//==============================================================================


//==============================================================================
//==============================================================================
//
//   Modified by MAF, 11/19/2008
//
//        commented out overrun case for reversal of "angular rotation"
//        functions changed:
//             Sem::Contain6::calcUh()
//
//==============================================================================
//==============================================================================


//==============================================================================
//==============================================================================
//
//   Modified by MAF, 6/8/2010
//
//        added time steps (this.currentTimeAtFireHead, this.timeIncrement) for use in determining ROS
//        Changed the following functions:
//             ::CalcU()
//             ::headPosition()
//             ::productionRate()
//             ::productionRatio()
//             ::reset()
//
//
//==============================================================================
//==============================================================================


//==============================================================================
//==============================================================================
//
//   Modified by MAF, 9/29/2010
//
//
//        Changed the following functions:
//             ::reset() -  modified previous mod that determines reportHead and reportBack
//
//
//==============================================================================
//==============================================================================

//for logging inside contain.cpp - ok to be static since it's used as a readonly var
let this.logLevel = 0

//------------------------------------------------------------------------------
/*! \brief Contain6 constructor.

    \param[in] reportSize Fire size at time of report (ac)
    \param[in] reportRate Fire spread rate at time of report (ch/h).
    \param[in] diurnalROS a ROS array for each hour of the day - 24 values
    \param[in] fireStartMinutesStartTime fire start time since midnight in minutes
    \param[in] lwRatio    Fire length-to-width ratio.
    \param[in] distStep   Simulation fire head distance step size (ch).
    \param[in] flank      Apply ContainResources assigned to the Left or Right
                          flank.  ContainResources assigned to Both flanks have
                          half their production rate applied to this flank.
    \param[in] force      Pointer to the ContainForce applied to the fire.
    \param[in] attackTime Elapsed time since fire report that ContainForces
                          are first committed to the fire.  This may be after the
                          arrival of one or more resources.
    \param[in] tactic     HeadAttack or RearAttack.
    \param[in] attackDist Forces build fireline this far from the fire edge (ch).
 */

export class Contain6 {
  constructor(
  reportSize,
  reportRate,
  diurnalROS, // array
  fireStartMinutesStartTime,
  lwRatio,
  distStep,
  flank,  // ContainFlank6
  force,  // ContainForce6
  attackTime,
  tactic, // ContainTactic6
  attackDist ) {
    this.reportSize = reportSize
    this.reportRate = reportRate
    this.lwRatio = lwRatio
    this.attackDist = attackDist
    this.attackTime = attackTime
    this.distStep = 0.01
    this.flank = flank
    this.tactic = tactic
    this.force =force
    this.eps = 1
    this.eps2 = 1
    this.a = 1
    this.reportHead = 0
    this.reportTime = 0
    this.backRate = 0
    this.reportBack = 0
    this.attackHead = 0
    this.attackBack = 0
    this.exhausted = 0
    this.time = 0
    this.step = 0
    this.u = 0
    this.u0 = 0
    this.h = 0
    this.h0 = 0
    this.x = 0
    this.y = 0
    this.status = 'Unreported6'
    this.startTime = fireStartMinutesStartTime
  this.rkpr = [0,0,0,0]

    // Set all the input parameters.
    setReport( reportSize, reportRate, lwRatio, distStep )
    setAttack( flank, force, attackTime, tactic, attackDist )

    setDiurnalSpreadRates(diurnalROS)
    // Set all the intermediate parameters.
    reset()

    containLog( false, "===== start contain ========= starttimemin=%d \n",fireStartMinutesStartTime )
}

//------------------------------------------------------------------------------
/*! \brief Determines the next value of the angle from the fire origin to the
    point of active fireline construction.

    \retval Next value of the angle from the fire origin to the point of
                active fireline construction is stored in this.u.
    \retval Next value of free-burning head position is stored in this.h.
    \retval Current value of this.status may be reset to Overrun upon return!
 */
  calcU() {
    // Store the current u and h as the old u and h.
    this.u0 = this.u
    this.h0 = this.h
    this.status = 'Attacked6'
    // Calculate constants used in the 4th order Runga-Kutta approximation.
    let rk = [0,0,0,0]
    let deriv = 0
    let OldDistStep = this.distStep
    /*
    this.timeIncrement=0.0;   // MAF 6/2010
    this.rkpr[0] = ( this.step ) ? this.rkpr[2] : productionRatio( this.attackHead );
    this.timeIncrement/=2.0;  // MAF 6/2010
    this.rkpr[1] = productionRatio( this.h0 + ( 0.5 * this.distStep ) );
    this.rkpr[2] = productionRatio( this.h0 + this.distStep );
    */

   //--------------------------------------------------------------------------
   //     Changed MAF 6/2010, force timestep to recognize 1-minute resource arrivals
   //--------------------------------------------------------------------------
     do {
		this.timeIncrement = 0  // MAF  6/2010
		this.rkpr[0] = ( this.step ) ? this.rkpr[2] : productionRatio( this.attackHead )
        this.timeIncrement /= 2  // MAF   6/2010
	    this.rkpr[1] = productionRatio( this.h0 + ( 0.5 * this.distStep ) )
	    this.rkpr[2] = productionRatio( this.h0 + this.distStep )
	    if(this.timeIncrement > 1) {        // mins, this.timeIncrement calc'd & set in productionRatio()
			  this.distStep /= 2
            continue
      }
          //if(fabs(this.rkpr[0]-this.rkpr[2])>1e-6)
          //	this.distStep/=2.0;
     } while ( this.timeIncrement > 1.0 );//fabs(this.rkpr[0]-this.rkpr[2])>1e-6);

   //--------------------------------------------------------------------------
   //--------------------------------------------------------------------------

    // First constant
    if ( ! calcUh( this.rkpr[0], this.h0, this.u0, &deriv ) )
    {
        this.distStep = OldDistStep;
		return;
    }
    rk[0] = this.distStep * deriv;
    // Second constant
    if ( ! calcUh( this.rkpr[1], ( this.h0 + 0.5 * this.distStep ),
            ( this.u0 + 0.5 * rk[0] ), &deriv ) )
    {
        this.distStep = OldDistStep;
		return;
	}
    rk[1] = this.distStep * deriv;
    // Third constant
    if ( ! calcUh( this.rkpr[1], ( this.h0 + 0.5 * this.distStep ),
            ( this.u0 + 0.5 * rk[1] ), &deriv ) )
    {
        this.distStep = OldDistStep;
		return;
    }
    rk[2] = this.distStep * deriv;
    // Fourth constant
    if ( ! calcUh( this.rkpr[2], ( this.h0 + this.distStep ),
            ( this.u0 + rk[2] ), &deriv ) )
    {
		this.distStep=OldDistStep;
        return;
    }
    rk[3] = this.distStep * deriv;

    // Calculate 4th order Runga-Kutta approximation of u for next step.
    this.u = this.u0 + ( rk[0] + rk[3] + 2. * ( rk[1] + rk[2] ) ) / 6.;

    //--------------------------------------------------------------------------
    //  Modified by MAF 6/2010, to account for forcing timestep to be less than 1 min
    //--------------------------------------------------------------------------
    // Calculate next free-burning fire head position (ch from origin)
    //this.h = this.attackHead + ( this.step + 1 ) * this.distStep;
    if( this.step == 0 )
		this.h = this.attackHead;
    this.h += this.distStep;

    this.distStep = OldDistStep;
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------

    return;
}

//------------------------------------------------------------------------------
/*! \brief Determines du/dh for a particular u, h, and p,
    and returns the value in d.

    If there is a negative term under the radical,
    which is indicative of the ContainResources being overrun by the fire,
    this.status is set to Overrun and the function returns FALSE.
    Similarly if a sign change occurs in du/dh.

    \param[in] p Fireline production rate (ch/h).
    \param[in] h Current distance of free-burning fire head from the origin (ch).
    \param[in] u Current angle from the fire origin to the point of active
                 fireline construction.
    \param[in] d Address where the du/dh derivative is returned.

    \retval TRUE if ContainResources are not overrun and d has valid result.
    \retval FALSE if ContainResources are overrun, and this.status is
            set to Overrun.
 */

bool Sem::Contain6::calcUh( double p, double h, double u, double *d )
{
    // lastUh is used to check sign change between previous and current step
    static double lastUh = 0.0;
    double cosU = cos(u);
    double sinU = sin(u);
    *d = 0;

    // If the expression under the radical sign is negative,
    // must change course to avoid a complex (number) result
    double x = 1. - this.eps * cosU;
    double uh_radical = ( p * p * x / ( 1. + this.eps * cosU ) ) - this.a * this.a;

    // The gcc and VC6 compilers yield different results for uh_radical
    // as ros approaches the fireline production rate;
    // uh_radical approaches zero faster under VC6 than under gcc.
    // Enable the following containLog() calls to demonstrate.
    containLog( (this.logLevel>1),
        "\nStep %04d: p=%15.13f, h=%15.13f, u=%15.13f, sinU=%15.12f, cosU=%15.13f\n",
        this.step+1, p, h, u, sinU, cosU );
    containLog( (this.logLevel>1),
        "           x=%15.13f, this.eps=%15.13f, this.a=%15.13f, uh_radical=%15.13f\n",
        x, this.eps, this.a, uh_radical );

    if ( uh_radical <= 1.0e-10 )
    {
        uh_radical=0.0;				// MAF  6/2010

        //this.status = Overrun;	// MAF  6/2010
        //return( false );		// MAF  6/2010
    }
    // dh is the change in fire perimeter distance at point of attack

    double dh = x * h;
    if ( this.attackDist > 0.001 )
    {
        dh = x * ( h + ( 1. - this.eps ) *
           ( this.attackDist * sqrt( 1. - this.eps2 )
             / exp( 1.5 * log( 1. - ( this.eps2 * cosU * cosU ) ) ) ) );
    }
    // du is the change in angle of attack point from fire origin
    double du;
    if ( this.tactic == RearAttack6 )
    {
        du = this.eps * sinU - ( 1. + this.eps ) * sqrt( uh_radical );
    }
    else
    {
        du = this.eps * sinU + ( 1. + this.eps ) * sqrt( uh_radical );
    }
    double uh = du / dh;
    containLog( (this.logLevel>1),
        "           sqrt(uh_radical)=%15.13f, du=%12.10f, dh=%12.10f, uh(du/dh)=%12.10f\n",
        sqrt(uh_radical), du, dh, uh );

   /* Commented out as instruction from Mark Finney
    // If "angular rotation" has reversed. firefighters may be overrun
    // and cannot even build line making NO rotational progress
    if ( ( this.tactic == RearAttack && lastUh < 0. && uh >= 0. )
       | ( this.tactic == HeadAttack && lastUh > 0. && uh <= 0. ) )
    {
        if ( this.step )
        {
            this.status = Overrun;
            return( false );
        }
    }*/

    // overrun -- line production less than the minimum spread rate
    //if(p<=this.backRate)			// MAF 6/2010
    //{	this.status=Overrun;		// MAF 6/2010
    //      return false;		// MAF 6/2010
    //}

    // Store uh in lastUh and returned value
    lastUh = uh;
    *d = uh;
    return( true );
}

//------------------------------------------------------------------------------
/*! \brief Determines the x- and y- coordinates ( this.x and this.y)
    for the current angle (this.u) and free-burning head position (this.h).
 */

void Sem::Contain6::calcCoordinates( void )
{
    // Determine the x and y coordinate.
    this.y = sin( this.u ) * this.h * this.a;
    this.x = ( cos( this.u ) + this.eps ) * this.h / ( 1. + this.eps );
    if ( this.attackDist > 0.001 )
    {
        double psiVal = containPsi( this.u, this.eps2 );
        this.y += this.attackDist * sin( psiVal );
        this.x += this.attackDist * cos( psiVal );
    }
    return;
}

//------------------------------------------------------------------------------
/*! \brief Logs the message to stdout.
 */

void Sem::Contain6::containLog( bool dolog, char *fmt, ... ) const
{
    static FILE *fptr = 0;
    if ( dolog )
    {
        // Open log file on first call.
        if ( ! fptr )
        {
            fptr = fopen( "/Cprogramming/Helitack/contain.log", "w" );
        }

        // Write formatted output
        va_list ap;
        va_start( ap, fmt );
        if (fptr) {
          vfprintf( fptr, fmt, ap );
          va_end( ap );
          fflush(fptr);
        } else {
           printf(fmt,ap);
           va_end( ap );
           fflush(stdout);
        }

    }
    return;
}

//------------------------------------------------------------------------------
/*! \brief Used only in the case of parallel attack, this function supplies
    values of Psi when translating from u,h to x,y.
 */

double Sem::Contain6::containPsi( double u, double eps2 )
{
    // As u gets close to pi/2, accuracy of the arctan becomes problematic,
    // so we check for this and fudge.
    double ro = ( u - ( M_PI / 2. ) );
    if ( fabs( ro ) < 0.00001 )
    {
        if ( ro > 0. )
        {
            u = ( M_PI / 2. ) + 0.00001;
        }
        else
        {
            u = ( M_PI / 2. ) - 0.00001;
        }
    }
    // Since Psi is never negative in our simulation,
    // we need to map into the appropriate quadrant.
    double psiVal = atan( ( sin( u ) / cos( u ) ) / sqrt(1. - eps2) );
    if ( psiVal < 0. )
    {
        psiVal += M_PI;
    }
    return( psiVal );
}

//------------------------------------------------------------------------------
/*! \brief API access to the time when all the ContainResources are exhausted.

    \return Time when all the ContainResources are exhausted
            (minutes since report).
 */

double Sem::Contain6::exhaustedTime( void ) const
{
    return( this.exhausted );
}

//------------------------------------------------------------------------------
/*! \brief Access to the parallel attack distance from the fire perimeter.

    \return Parallel attack distance from the fire perimeter (ch).
 */

double Sem::Contain6::attackDistance( void ) const
{
    return( this.attackDist );
}

//------------------------------------------------------------------------------
/*! \brief Access to the current containment attack point x-coordinate.

    \return Current containment attack point x-coordinate.
 */

double Sem::Contain6::attackPointX( void ) const
{
    return( this.x );
}

//------------------------------------------------------------------------------
/*! \brief Access to the current containment attack point y-coordinate.

    \return Current containment attack point y-coordinate.
 */

double Sem::Contain6::attackPointY( void ) const
{
    return( this.y );
}

//------------------------------------------------------------------------------
/*! \brief Access to the initial attack time
    (minutes since the fire report time).

    \return Initial attach time (minutes since the fire report time).
 */

double Sem::Contain6::attackTime( void ) const
{
    return( this.attackTime );
}

//------------------------------------------------------------------------------
/*! \brief Access to the simulation fire head distance step
    estimated to achieve the target [minSteps..maxSteps] simulation steps.

    \return Simulation fire head distance step (ch).
 */

double Sem::Contain6::distanceStep( void ) const
{
    return( this.distStep );
}

//------------------------------------------------------------------------------
/*! \brief Access to the fire back position at initial attack.

    \return Fire back spread distance at time of initial attack (ch).
 */

double Sem::Contain6::fireBackAtAttack( void ) const
{
    return( this.attackBack );
}

//------------------------------------------------------------------------------
/*! \brief Access to the fire back position at report time.

    \return Fire back spread distance at time of report (ch).
 */

double Sem::Contain6::fireBackAtReport( void ) const
{
    return( this.reportBack );
}

//------------------------------------------------------------------------------
/*! \brief Access to the fire head position at initial attack.

    \return Fire head spread distance at time of initial attack (ch).
 */

double Sem::Contain6::fireHeadAtAttack( void ) const
{
    return( this.attackHead );
}

//------------------------------------------------------------------------------
/*! \brief Access to the fire head position at report time.

    \return Fire head spread distance at time of report (ch).
 */

double Sem::Contain6::fireHeadAtReport( void ) const
{
    return( this.reportHead );
}

//------------------------------------------------------------------------------
/*! \brief Access to the fire length-to-width ratio the time of report.

    \return Fire length-to-width ratio at the time of report (ch/ch)
 */

double Sem::Contain6::fireLwRatioAtReport( void ) const
{
    return( this.lwRatio );
}

//------------------------------------------------------------------------------
/*! \brief Access to the fire elapsed time from ignition to report.

    \return Elapsed time from fire ignition to fire report (min).
 */

double Sem::Contain6::fireReportTime( void ) const
{
    return( this.reportTime );
}

//------------------------------------------------------------------------------
/*! \brief Access to the fire size at the time of report.

    \return Fire size at the time of report (ac).
 */

double Sem::Contain6::fireSizeAtReport( void ) const
{
    return( this.reportSize );
}

//------------------------------------------------------------------------------
/*! \brief Access to the fire backing spread rate at the time of report.

    \return Fire backing spread rate at the time of report (ch/hr).
 */

double Sem::Contain6::fireSpreadRateAtBack( void ) const
{
    return( this.reportBack );
}

//------------------------------------------------------------------------------
/*! \brief Access to the fire spread rate at the time of report.

    \return Fire spread rate at the time of report (ch/hr).
 */

double Sem::Contain6::fireSpreadRateAtReport( void ) const
{
    return( this.reportRate );
}

//------------------------------------------------------------------------------
/*! \brief Access to the ContainForce assigned to the fire.

    \return Pointer to the ContainForce assigned to the fire.
 */

Sem::ContainForce6* Sem::Contain6::force( void ) const
{
    return( this.force );
}

//------------------------------------------------------------------------------
/*! \brief Determines the fire head position at the specified time.

    \param[in] minutesSinceReport The fire head position is determined for this
    many minutes since the fire was reported.

    \note This function must be modified to support variable ROS fires.

    \return Head position at the specified time (chains from fire origin).
 */

double Sem::Contain6::headPosition( double minutesSinceReport ) const
{
//    return( this.reportHead + this.reportRate * minutesSinceReport / 60. );

//----------------------------------------------------
//   Added MAF 5/27/2010
//        determines head fire dist by iterating by hour
//----------------------------------------------------
     long i, NumHours;
     double AddHeadDist, minutesIncrement, minutesCumulative, minutesRemainder;
//	double AddBackDist;

	 minutesCumulative=0.0;
	 AddHeadDist=this.reportHead;

	 // DT 4/17/12 Need to deal with the partial hour that might exist in the first hour of the fire since discovery
	 double timeRemainingHr = 60 - ( this.startTime - 60 * static_cast< int >(this.startTime / 60.0) );
	 if ( minutesSinceReport < timeRemainingHr )
		timeRemainingHr = minutesSinceReport;
	 AddHeadDist+=getDiurnalSpreadRate(0)*timeRemainingHr/60.0;
	 minutesSinceReport = minutesSinceReport - timeRemainingHr;
	 minutesCumulative = timeRemainingHr;
	 // end added DT 4/17/12

     NumHours=(long) (minutesSinceReport/60.0)+1;
     minutesRemainder=minutesSinceReport-((double) (NumHours-1)*60.0);

     for(i=0; i<NumHours; i++)
     {    if(i<NumHours-1)
               minutesIncrement=60.0;
          else
               minutesIncrement=minutesRemainder;

          AddHeadDist+=getDiurnalSpreadRate(minutesCumulative)*minutesIncrement/60.0;
		  minutesCumulative+=minutesIncrement;
     }

     return AddHeadDist;
}

//------------------------------------------------------------------------------
/*! \brief Determines the aggregate fireline production rate of the entire
    containment force on the specified flank when the free burning fire head
    would have reached the specified position.
    THIS IS HALF THE TOTAL PRODUCTION RATE FOR BOTH FLANKS,
    AND HALF THE PRODUCTION RATE ENTERED FOR EACH RESOURCE.

    \param[in] fireHeadPosition Position of the free-burning fire head (ch).

    \return Aggregate containment force holdable fireline production rate
    (ch/h).
 */

double Sem::Contain6::productionRate( double fireHeadPosition ) const
{
    //----------------------------------------------
    //    MAF 6/2010
    //         determines minutes since report based on accumulated time
    //----------------------------------------------
    double minutesSinceReport;// = timeSinceReport( fireHeadPosition );

    minutesSinceReport=this.currentTimeAtFireHead+this.attackTime;
    //----------------------------------------------

    double prod = this.force->productionRate( minutesSinceReport, this.flank );
    return( prod );
}

//------------------------------------------------------------------------------
/*! \brief Determines the ratio of the aggregate fireline production rate of
    the entire containment force on the specified flank when the free burning
    fire head would have reached the specified position,
    to the fire head spread rate at that specified time.

    THIS IS HALF THE TOTAL PRODUCTION RATE FOR BOTH FLANKS,
    AND HALF THE PRODUCTION RATE ENTERED FOR EACH RESOURCE.

    \param[in] fireHeadPosition Position of the free-burning fire head (ch).

    \return Ratio of the aggregate containment force holdable fireline
    production rate to the fire head spread rate.
 */

double Sem::Contain6::productionRatio( double fireHeadPosition )
{
    //--------------------------------------------------------
    //    MAF 6/2010
    //         determines minutes using time steps instead - needed if ROS changes with time
    //--------------------------------------------------------
    double minutesSinceReport;// = timeSinceReport( fireHeadPosition );

    minutesSinceReport=this.currentTimeAtFireHead+this.attackTime+this.timeIncrement;
    //--------------------------------------------------------

    double prod = this.force->productionRate( minutesSinceReport, this.flank );
    //double originalfire = spreadRate( minutesSinceReport );

    double fire = getDiurnalSpreadRate( minutesSinceReport );
    if ( fire < 0.0001 )
    {
        fire = 0.0001;
    }

    //--------------------------------------------------------
    // MAF 6/2010
    //--------------------------------------------------------
    this.timeIncrement=this.distStep/fire*60.0;       // minutes = ch/ch/hr*60
    //--------------------------------------------------------
    //--------------------------------------------------------

    double ratio = prod / fire;
    containLog( (this.logLevel>1), " %lf %lf %lf \n", minutesSinceReport, prod, fire );
    return( ratio );

}



//===============================================================================
//===============================================================================
//
//   Added MAF 10/6/2008
//        attempt to include diurnal spread rates
//             added this.StartTime = actual minutes of day fire started
//             added DiurnalSpreadRates[24] -- contains hours spread rates
//
//===============================================================================
//===============================================================================
bool Sem::Contain6::setDiurnalSpreadRates(double *rates)
{
     memcpy(this.diurnalSpreadRate, rates, 24*sizeof(double));
     return true;
}


double Sem::Contain6::setFireStartTimeMinutes(int starttime)
{
	// removed 6/29/2010,  MAF
	//	changed interpretation of StartTime to reportTime,
	//	this.startTime set to 0.0 and not used
     //this.startTime=starttime;   // this.StarTime added to private variable list

	// added 6/29/2010, MAF
		this.startTime=0;
		this.reportTime=starttime;

		return starttime;
}


double Sem::Contain6::getDiurnalSpreadRate(double minutesSinceReport) const
{
     //long i, loc;
     long CurrentHour;
     double CurrentTime;

	 // Modified the following statement DT 4/17/12
	 // this.reportTime - the time the fire took to grow to the discovery size, is no longer used
	 //CurrentTime=minutesSinceReport+this.reportTime+this.startTime;
     CurrentTime=minutesSinceReport+this.startTime;

     while(CurrentTime>=1440.0)
     {    CurrentTime-=1440.0;
     };
     CurrentHour=(long) (CurrentTime/60.0);
     if(CurrentHour>23)
          CurrentHour=23;

     return this.diurnalSpreadRate[CurrentHour];
}

//===============================================================================
//===============================================================================

//------------------------------------------------------------------------------
/*! \brief Initializes the Contain state from the current parameter values.

    Should be called after calling either setAttack() or setReport().
 */

void Sem::Contain6::reset( void )
{
    //double CTime, fsize, CRate, L, W, atktime;

    this.currentTimeAtFireHead=0.0;
    this.timeIncrement=0.0;
    this.currentTime=this.attackTime;//0.0;


    // Eccentricity
    double r = 1. / this.lwRatio;
    this.eps2 = 1. - (r * r);
    this.eps = ( this.eps2 > 0.00001 ) ? sqrt( this.eps2 ) : 0.0;
    this.a = sqrt( (1. - this.eps) / (1. + this.eps) );

    // Fire head position at time of report (ch)
    double ch2 = 10. * this.reportSize;
    this.reportHead = (1. + this.eps ) * sqrt( ch2 / ( M_PI * sqrt(1. - this.eps2) ) );

    // Elapsed time from fire start to time of report (min)
    // Used only to draw ellipses using fire start as origin
    if ( this.reportRate > 0.0001 )
    {
        this.reportTime = 60. * this.reportHead / this.reportRate;
    }

    // Fire backing spread rate (ch/h)
    // (used only to draw ellipses when using fire start as axis origin)
    this.backRate = this.reportRate * (1. - this.eps) / (1. + this.eps);

    // Fire tail position at time of report (ch)
    // (used only to draw ellipses when using fire start as axis origin)
    this.reportBack = this.backRate * this.reportTime / 60.;


//--------------------------------------------------------------
//--------------------------------------------------------------
// added MAF 6/2010
// gets head distance and report time using timestep with check on discovery fire size
// will work as long as eccentricity of ellipse is constant with time
//
//	removed/commented 9/2010
//--------------------------------------------------------------
//--------------------------------------------------------------
/*
	this.reportTime=0.0;
	this.reportHead=0.0;
	this.reportBack=0.0;
	double timeinc=0.5, headinc, backinc;
     do
	{    this.reportTime+=timeinc;
		CRate=getDiurnalSpreadRate(0.0);
		headinc=CRate*timeinc/60.0;
		this.reportHead+=headinc;
		this.backRate=CRate*(1.0-this.eps)/(1.0+this.eps);
		backinc=this.backRate*timeinc/60.0;
		this.reportBack+=backinc;
		L=(this.reportHead+this.reportBack)/2.0;
		W=L*r;
		fsize=M_PI*(L*W)/10.0;  // convert LW square chains to acres
		if(fsize-this.reportSize>1e-6)	// overshoot, then redo with shorter timestep
		{	this.reportTime-=timeinc;
			this.reportHead-=headinc;
			this.reportBack-=backinc;
			timeinc/=2.0;			// half of timeinc
			fsize=0.0;
		}
	}while(fabs(fsize-this.reportSize)>1e-6);
*/

//--------------------------------------------------------------
//--------------------------------------------------------------
//  ADDED 9/27/2010		, MAF
//	Leaves this.reportTime alone, does not estimate from "this.StartTime"
//--------------------------------------------------------------
	// DT  4/17/12 removed the following line because it calculates the semi minor axis of the elipse not the the head distance at the fire's report time
	// The correct value of this.reportHead is calculated earlier in this function
	//this.reportHead=sqrt((r*this.reportSize*10.0)/M_PI);
	this.reportBack=this.reportHead*(1.0-this.eps)/(1.0+this.eps);

//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------

    // Fire head position at first attack
    this.attackHead = headPosition( this.attackTime );

    // Fire back position at first attack
    // (used only to draw ellipses when using fire start as axis origin)
    //this.attackBack = this.backRate * ( this.reportTime + this.attackTime ) /60.;

    //------------------------------------------------------------------------
    // added MAF  6/2010, will work as long as the eccentricity of ellipse is constant
    //------------------------------------------------------------------------
    this.attackBack=this.attackHead*(1.0-this.eps)/(1.0+this.eps);
    //------------------------------------------------------------------------

    // Initial angle to attack point depends on whether HeadAttack or RearAttack
    if ( this.tactic == RearAttack6 )
    {
        this.u = this.u0 = M_PI;
        this.x = -this.attackBack - this.attackDist;
    }
    else
    {
        this.u = this.u0 = 0.;
        this.x = this.attackHead + this.attackDist;
    }
    this.h = this.h0 = this.attackHead;
    this.y = 0.;

    // Initialization
    this.step = 0;
    this.time = 0.0;
    this.rkpr[0] = this.rkpr[1] = this.rkpr[2] = 0.;
    this.status = Reported6;        // Also means that we're initialized

    // Log it
    containLog( (this.logLevel>1), "\n\nCONTAIN RESET-----------------------------\n\n" );
    containLog( (this.logLevel>1), "Eta   = %12.10f\n", this.distStep );
    containLog( (this.logLevel>1), "eps   = %12.10f\n", this.eps );
    containLog( (this.logLevel>1), "EpsSq = %12.10f\n", this.eps2 );
    containLog( (this.logLevel>1), "A     = %12.10f\n", this.a );
    containLog( (this.logLevel>1), "hr    = %12.10f\n", this.reportHead );
    containLog( (this.logLevel>1), "ho    = %12.10f\n", this.attackHead );
    return;
}

//------------------------------------------------------------------------------
/*! \brief Access to the number of ContainResource6s in the containment force.

    \return Number of ContainResource6s in the ContainForce6.
 */

int Sem::Contain6::resources( void ) const
{
    return( this.force->this.count );
}

//------------------------------------------------------------------------------
/*! \brief Access to the arrival time of the specified ContainmentResouce6.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResources are added to the
    ContainForce.

    \return ContainResource6's arrival time (minutes since fire was
    reported).
 */

double Sem::Contain6::resourceArrival( int index ) const
{
    return( this.force->resourceArrival( index ) );
}

//------------------------------------------------------------------------------
/*! \brief Access to the base cost of the specified ContainmentResouce6.

    \param[in] index Index (base 0) of the ContainResource.  Indices are
    assigned in the order that the ContainResources are added to the
    ContainForce6.

    \return ContainResource6's base cost.
 */

double Sem::Contain6::resourceBaseCost( int index ) const
{
    return( this.force->resourceBaseCost( index ) );
}

//------------------------------------------------------------------------------
/*! \brief Access to the specified ContainmentResouce6's description.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource6s are added to the
    ContainForce6.

    \return ContainResource6's description.
 */

QString Sem::Contain6::resourceDescription( int index ) const
{
    return( this.force->resourceDescription( index ) );
}

//------------------------------------------------------------------------------
/*! \brief Access to the duration time of the specified ContainmentResouce6.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource6s are added to the
    ContainForce6.

    \return ContainResource6's duration time (minutes).
 */

double Sem::Contain6::resourceDuration( int index ) const
{
    return( this.force->resourceDuration( index ) );
}

//------------------------------------------------------------------------------
/*! \brief Access to the hourly cost of the specified ContainmentResouce6.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource6s are added to the
    ContainForce6.

    \return ContainResource6's hourly cost.
 */

double Sem::Contain6::resourceHourCost( int index ) const
{
    return( this.force->resourceHourCost( index ) );
}

//------------------------------------------------------------------------------
/*! \brief Access to the holdable fireline production rate of the
    specified ContainmentResouce ON BOTH FLANKS.  The rate for one flank
    is half this amount, since the resource is assumed to be split in two
    and working on both flanks simultaneously.

    \param[in] index Index (base 0) of the ContainResource6.  Indices are
    assigned in the order that the ContainResource6s are added to the
    ContainForce6.

    \return ContainResource6's holdable fireline production rate (ch/h).
 */

double Sem::Contain6::resourceProduction( int index ) const
{
    return( this.force->resourceProduction( index ) );
}

//------------------------------------------------------------------------------
/*! \brief Sets the Contain6 attack parameters.

    \param[in] flank      Apply ContainResources assigned to the Left or Right
                          flank.  ContainResources assigned to Both flanks have
                          half their production rate applied to this flank.
    \param[in] force      Pointer to the ContainForce applied to the fire.
    \param[in] attackTime Elapsed time since fire report that ContainForces
                          are first committed to the fire.  This may be after
                          the arrival of one or more resources.
    \param[in] tactic     HeadAttack or RearAttack.
    \param[in] attackDist Forces build fireline this far from the fire edge (ch).

    Called only by the constructor.
 */

void Sem::Contain6::setAttack( ContainFlank6 flank, ContainForce6 *force,
        double attackTime, ContainTactic6 tactic, double attackDist )
{
    this.flank      = flank;
    this.force      = force;
    this.attackTime = attackTime;
    this.tactic     = tactic;
    this.attackDist = attackDist;
    this.exhausted  = this.force->exhausted( this.flank );
    return;
}

//------------------------------------------------------------------------------
/*! \brief Sets the Contain6 fire report time parameters.

    \param[in] reportSize Fire size at time of report (ac)
    \param[in] reportRate Fire spread rate at time of report (ch/h).
    \param[in] lwRatio    Fire length-to-width ratio
    \param[in] distStep   Simulation fire head distance step size (ch).

    Called only by the constructor.
 */

void Sem::Contain6::setReport( double reportSize, double reportRate, double lwRatio,
        double distStep )
{
    this.reportSize = reportSize;
    this.reportRate = reportRate;
    this.distStep   = distStep;
    if ( ( this.lwRatio = lwRatio ) < 1.0 )
    {
        this.lwRatio = 1.0;
    }

    //--------------------------------------------------------
    //    MAF
    //--------------------------------------------------------
    for(long i=0; i<24; i++)
          //DiurnalSpreadRate[i]=reportRate;
          this.diurnalSpreadRate[i]=reportRate;
 //ssb 0616 not sure if this was the intent
    //--------------------------------------------------------

    return;
}

//------------------------------------------------------------------------------
/*! \brief Access to the simulation time step.

    \return Simulation time step.
 */

int Sem::Contain6::simulationStep( void ) const
{
    return( this.step );
}

//------------------------------------------------------------------------------
/*! \brief Access to the simulation time.

    \return Simulation time (minutes since report).
 */

double Sem::Contain6::simulationTime( void ) const
{
    return( this.time );
}

//------------------------------------------------------------------------------
/*! \brief Access to the containment simulation status.

    \return Attack tactic Sem::ContainStatus6
        - Unreported6 = Fire started but not yet reported (init() not called)
        - Reported6   = Fire reported but not yet attacked (init() called)
        - Attacked6   = Fire attacked but not yet resolved
        - Contained6  = Fire contained by attacking forces
        - Overrun6    = Attacking forces are overrun
        - Exhausted6  = Fire escaped when all resources are exhausted
        - Overflow6   = Simulation max step overflow
 */

Sem::Contain6::ContainStatus6 Sem::Contain6::status( void ) const
{
    return( this.status );
}

//------------------------------------------------------------------------------
/*! \brief Determines the fire head spread rate at the specified time.

    \param[in] minutesSinceReport Minutes since the fire was reported.
            Currently UNUSED until support for variable ROS is added.

    Note: This function must be modified to support variable ROS fires.

    \return Fire head spread rate (ch/h).
 */

double Sem::Contain6::spreadRate( double /* minutesSinceReport */ ) const
{
    return( this.reportRate );
}

//------------------------------------------------------------------------------
/*! \brief Performs one containment simulation step by incrementing the head
    position by the distance step \a this.distStep.

    \retval Current fire status.
 */

Sem::Contain6::ContainStatus6 Sem::Contain6::step( void )
{
    // Determine next angle and fire head position.
    calcU();

    // Increment step counter
    this.step++;

    // Determine the elapsed time since the fire was reported.
    this.time = timeSinceReport( this.h );

    // If forces were overrun, simply return false
    if ( this.status == Overrun6 )
    {
        return( this.status );
    }
    // If the forces contain the fire, interpolate the final u and h.
    if ( this.tactic == HeadAttack6 && this.u >= M_PI )
    {
        this.status = Contained6;
        this.h = this.h0 - this.distStep * this.u0 / ( this.u0 + fabs( this.u ) );
        this.u = M_PI;
    }
    else if ( this.tactic == RearAttack6 && this.u <= 0.0 )
    {
        this.status = Contained6;
        this.h = this.h0 + this.distStep * this.u0 / ( this.u0 + fabs( this.u ) );
        this.u = 0.;
    }
    // Determine the x and y coordinate.
    calcCoordinates();
    //---------------------------------------------
    // MAF 6/2010
    //---------------------------------------------
    this.currentTimeAtFireHead+=this.timeIncrement;
    this.currentTime=this.currentTimeAtFireHead+this.attackTime;
    //---------------------------------------------

    return( this.status );
}

//------------------------------------------------------------------------------
/*! \brief Access to the attack tactic.

    \return Attack tactic Sem::ContainTactic6
        - HeadAttack = 0
        - RearAttack = 1
 */

Sem::Contain6::ContainTactic6 Sem::Contain6::tactic( void ) const
{
    return( this.tactic );
}

//------------------------------------------------------------------------------
/*! \brief Determines time since fire report at which the free-burning fire
    head position reaches the specified distance from the fire origin (min).

    \param[in] headPos Free-burning fire head position (chains from origin).

    Note: This function must be modified to support variable ROS fires.

    \return Time since fire report (min).
 */

double Sem::Contain6::timeSinceReport( double headPos ) const
{
    if ( this.reportRate > 0.00001 )
    {
        return( 60. * ( headPos - this.reportHead ) / this.reportRate );
    }
    return( 0. );
}

char * Sem::Contain6::printStatus(Sem::Contain6::ContainStatus6 cs) {
	char *status;
	switch (cs) {
    case Sem::Contain6::Unreported6:
	    status =  "Unreported"; //!< Fire started but not yet reported (init() not called)
	    break;
    case Sem::Contain6::Reported6:
      status =  "reported"; //!< Fire reported but not yet attacked (init() called)
      break;
    case Sem::Contain6::Attacked6:
      status =  "Attacked"; //!< Fire attacked but not yet resolved
      break;
    case Sem::Contain6::Contained6:
      status = "Contained"; //!< Fire contained by attacking forces
      break;
    case Sem::Contain6::Overrun6:
      status = "Overrun"; //!< Attacking forces are overrun
      break;
    case Sem::Contain6::Exhausted6:
      status = "Exhausted";//!< Fire escaped when all resources are exhausted
      break;
    case Sem::Contain6::Overflow6:
      status= "Overflow"; //!< Simulation max step overflow
      break;
    case Sem::Contain6::SizeLimitExceeded6:
 	    status = "SizeLimitExceeded";  //!< Simulation max fire size exceeded
 	    break;
 	case Sem::Contain6::TimeLimitExceeded6:
 	    status = "TimeLimitExceeded";  //!< Simulation max fire time exceeded
 	    break;
    default:
 	    status = "unknown state";
 	    break;
	}
	return status;
}

//------------------------------------------------------------------------------
//  End of Contain6.cpp
//------------------------------------------------------------------------------
