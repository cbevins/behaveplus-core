**To Do**

- Why is spot location initial value null?

- Translation Table

- All Bpx import statements should reference the single src/index.js

- Add file headers

- FuelCatalog keyMap([
  ['10', '10'],['fm10', '10'], ['ten', '10'],
])

- \docs
  - scorch example

**Modules**
- Surface Fire (Fuel Modeling, Weighted Fire)
- Fire Ellipse
- Scorch Height
- Tree Mortality
- Spotting Distance (from Pile, Surface Fire, Torching Trees, Crown Fire)
- Crown Fire
- Fire Containment
- Ignition Probability

**Links**

<pre>
/1/--> Surface Fire -+->/2/--> Fire Ellipse -+->/3/--> Scorch Ht ---/4/--> Tree Mortality
                     |                       |
                     |                       +->/5/--> Fire Containment
                     |
                    /6/--> Surface Spotting
                     |
                    /7/--> Crown Fire -->/8/--> Crown Spotting

/9/--> Spotting from Pile, Trees
/10/--> Ignition Probability
</pre>

Modules are always stand-alone UNLESS a checkbox to the left of its own checkbox is active:
- /1/ Surface Fire is always stand-alone
- /2/ Fire Ellipse is linked to Surface Fire only if /1/ is checked
- /3/ Scorch Height is linked to Fire Ellipse only if /1/ or /2/  is checked
- /4/ Tree Mortality is linked to Scorch Height only if /1/, /2/, or /3/ is checked
- /5/ Fire Containment is linked to Fire Ellipse only if /1/ or /2/ is checked
- /6/ Surface Spotting is linked to Surface Fire only if /1/ is checked
- /7/ Crown Fire is linked to Surface Fire only if /1/ is checked
- /8/ Crown Spotting is linked to Crown Fire only if /1/ or /7/ is checked
- /9/ Spotting is always stand-alone
- /10/ Ignition Probability is always stand-alone

Checking one of these modules enables its downstream modules:
- /1/ - 'surfaceFire' enables
  - Surface Fire,
  - Fire Ellipse,
    - Scorch Height,
      - Tree Mortality,
  - Fire Containment,
  - Surface Spotting,
  - Crown Fire,
    - Crown Spotting
- /2/ - 'fireEllipse' enables
  - Fire Ellipse,
    - Scorch Height,
      - Tree Mortality,
    - Fire Containment)
- /3/ - 'scorchHeight' enables
  - Scorch height,
    - Tree Mortality
- /4/ - 'treeMortality'
- /5/ - 'fireContainment'
- /6/ - 'surfaceSpotting'
- /7/ - 'crownFire' enables
  - Crown Fire,
    - Crown Spotting
- /8/ - 'crownSpotting'
- /9/ - 'spottingDistance' enables
  - Burning Pile
  - Torching Tree Spotting
- /10/ - 'ignitionProbability'

Must select exactly one of the 10 boxes:
- Everything to the left is disabled (not available for linkage, input, selection)
- Everything to the right is enabled (may be selected, but input must be provided)

So there are 7 possible linkages:
- <table>
    <tr><th></th><th></th><th></th></tr>
    <tr><th>/2/ Fire Ellipse</th><th>Linked</th><th>Stand Alone</th></tr>
    <tr><td>surface.fire.ellipse.axis.effectiveWindSpeed</td>
      <td>surface.weighted.fire.effectiveWindSpeed</td>
      <td>site.fire.observed.effectiveWindSpeed</td>
    </tr>
    <tr><td>surface.fire.ellipse.axis.lengthToWidthRatio</td>
      <td>surface.weighted.fire.lengthToWidthRatio</td>
      <td>site.fire.observed.lengthToWidthRatio</td>
    </tr>
    <tr><td>surface.fire.ellipse.head.firelineIntensity</td>
      <td>surface.weighted.fire.firelineIntensity</td>
      <td>site.fire.observed.firelineIntensity</td>
    </tr>
    <tr><td>surface.fire.ellipse.head.flameLength</td>
      <td>surface.weighted.fire.flameLength</td>
      <td>site.fire.observed.flameLength</td>
    </tr>
    <tr><td>surface.fire.ellipse.head.spreadRate</td>
      <td>surface.weighted.fire.spreadRate</td>
      <td>site.fire.observed.spreadRate</td>
    </tr>
    <tr><td>surface.fire.ellipse.heading.fromUpslope</td>
      <td>surface.weighted.fire.heading.fromUpslope</td>
      <td>site.fire.observed.heading.fromUpslope</td>
    </tr>
    <tr><td>surface.fire.ellipse.heading.fromNorth</td>
      <td>surface.weighted.fire.heading.fromNorth</td>
      <td>site.fire.observed.heading.fromNorth</td>
    </tr>
    <tr><td>surface.fire.ellipse.wind.speed.atMidflame</td>
      <td>surface.weighted.fire.wind.speed.atMidflame</td>
      <td>site.wind.speed.atMidflame</td>
    </tr>
    <tr><th></th><th></th><th></th></tr>
    <tr><th>/3/ Scorch Height</th><th>Linked</th><th>Stand Alone</th></tr>
    <tr><td>scorch.firelineIntensity</td>
      <td>surface.fire.ellipse.head.firelineIntensity</td>
      <td>site.fire.observed.firelineIntensity</td>
    </tr>
    <tr><td>scorch.flameLength</td>
      <td>surface.fire.ellipse.head.flameLength</td>
      <td>site.fire.observed.flameLength</td>
    </tr>
    <tr><th></th><th></th><th></th></tr>
    <tr><th>/4/ Tree Mortality</th><th>Linked</th><th>Stand Alone</th></tr>
    <tr><td>mortality.scorchHeight</td>
      <td>surface.fire.ellipse.head.scorchHeight</td>
      <td>site.fire.observed.scorchHeight</td>
    </tr>
    <tr><th></th><th></th><th></th></tr>
    <tr><th>/5/ Fire Containment</th><th>Linked</th><th>Stand Alone</th></tr>
    <tr><th></th><th></th><th></th></tr>
    <tr><th>/6/ Surface Spotting</th><th>Linked</th><th>Stand Alone</th></tr>
    <tr><td>spotting.surfaceFire.firelineIntensity</td>
      <td>surface.weighted.fire.firelineIntensity</td>
      <td>site.fire.observed.firelineIntensity</td></tr>
    <tr><th></th><th></th><th></th></tr>
    <tr><th>/7/ Crown Fire</th><th>Linked</th><th>Stand Alone</th></tr>
    <tr><td>crown.fire.surface.firelineIntensity</td>
        <td>surface.weighted.fire.firelineIntensity</td>
        <td>site.fire.observed.firelineIntensity</td>
    </tr>
    <tr><td>crown.fire.surface.flameLength</td>
        <td>surface.weighted.fire.flameLength</td>
        <td>site.fire.observed.flameLength</td>
    </tr>
    <tr><td>crown.fire.surface.heatPerUnitArea</td>
        <td>surface.weighted.fire.heatPerUnitArea</td>
        <td>site.fire.observed.heatPerUnitArea</td>
    </tr>
    <tr><th></th><th></th><th></th></tr>
    <tr><th>/8/ Crown Spotting</th><th>Linked</th><th>Stand Alone</th></tr>
      <td>spotting.crownFire.firelineIntensity</td>
      <td>crown.fire.active.firelineIntensity</td>
      <td>site.fire.crown.firelineIntensity</td>
    </tr>
  </table>

**Surface Fire SubModels**

- Custom (Behave) fuel modeling
- Dynamic chaparral fuel modeling
- Dynamic palmetto-gallberry fuel modeling
- Dynamic western aspen fuel modeling
- Fuel model catalog
- Surface fire upslope maximum spread and fireline intensity
- Surface fire cross-slope maximum spread, fireline inetnsity, and heading direction
- Flame length

**Wind and Fire Directions**

- 'surface.primary.fuel.fire.wind.heading.fromUpslope',
- 'surface.secondary.fuel.fire.wind.heading.fromUpslope',
- 'site.wind.direction.heading.fromUpslope'
- 'site.wind.direction.heading.fromNorth',
- 'site.wind.direction.source.fromUpslope',
- 'site.wind.direction.source.fromNorth',
- 'crown.canopy.fuel.fire.wind.heading.fromUpslope', (always 0)

- 'surface.primary.fuel.fire.heading.fromUpslope',
- 'surface.primary.fuel.fire.heading.fromNorth',
- 'surface.secondary.fuel.fire.heading.fromUpslope',
- 'surface.secondary.fuel.fire.heading.fromNorth',
- 'surface.weighted.fire.heading.fromUpslope',
- 'surface.weighted.fire.heading.fromNorth',
- 'surface.fire.ellipse.heading.fromUpslope',
- 'surface.fire.ellipse.heading.fromNorth',
- 'site.fire.observed.heading.fromUpslope',
- 'site.fire.observed.heading.fromNorth',
