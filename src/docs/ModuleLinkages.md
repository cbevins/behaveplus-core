# BehavePlus Module Dependencies

BehavePlus has historically been divided into 10 model groups called *modules*.  Modules can be run in *stand-alone* mode, or they can be *linked* together such that the output values of upstream modules automatically become input values of downstream modules.

The 'configure.module' Node determines the active linkages between the 10 BehavePlus modules.

<table>
<tr><th>Num</th><th>configure.model</th><th>Enables these Modules</th></tr>
  <tr><td>/1/</td><td>'surfaceFire'</td>
    <td>Surface Fire, Fire Ellipse, Scorch Height, Tree Mortality, Fire Containment, Surface Spotting, Crown Fire, Crown Spotting</td></tr>
  <tr><td>/2/</td><td>'fireEllipse'</td>
    <td>Fire Ellipse, Scorch Height, Tree Mortality, Fire Containment</td></tr>
  <tr><td>/3/</td><td>'scorchHeight'</td><td>Scorch height, Tree Mortality</td></tr>
  <tr><td>/4/</td><td>'treeMortality'</td><td>Tree Mortality</td></tr>
  <tr><td>/5/</td><td>'fireContainment'</td><td>Fire Containment</td></tr>
  <tr><td>/6/</td><td>'surfaceSpotting'</td><td>Surface Fire Spotting</td></tr>
  <tr><td>/7/</td><td>'crownFire'</td><td>Crown Fire, Crown Fire Spotting</td></tr>
  <tr><td>/8/</td><td>'crownSpotting'</td><td>Crown Fire Spotting</td></tr>
  <tr><td>/9/</td><td>'spottingDistance'</td><td>Burning Pile Spotting, Torching Trees Spotting</td></tr>
  <tr><td>/10/</td><td>'ignitionProbability'</td><td>Ignition Probability</td></tr>
</table>

The following diagram illustrates the linakes between modules depending upon the 'configure.module' value.  Locate the configure.module value, and:
- everything to the left is disabled (not available for linkage, input, selection)
- everything to the right is enabled (may be selected, but input must be provided)

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

A module is in stand-alone mode UNLESS a checkbox (/1/, /2/, ...) to the left of its own checkbox is active.  Thus,

<table>
  <tr><th>Num</th><th>Module</th><th>Links to</th><th>when configure.module</th></tr>
  <tr><td>/1/</td><td>Surface Fire</td><td>---</td><td></td></tr>
  <tr><td>/2/</td><td>Fire Ellipse</td><td>Surface Fire</td><td>surfaceFire</td></tr>
  <tr><td>/3/</td><td>Scorch Height</td><td>Fire Ellipse</td>
    <td>surfaceFire</br>fireEllipse</td></tr>
  <tr><td>/4/</td><td>Tree Mortality</td><td>Scorch Height</td>
    <td>surfaceFire</br>fireEllipse</br>scorchHeight</td></tr>
  <tr><td>/5/</td><td>Fire Containment</td><td>Fire Ellipse</td>
    <td>surfaceFire</br>fireEllipse</td></tr>
  <tr><td>/6/</td><td>Surface Fire Spotting</td><td>Surface Fire</td><td>surfaceFire</td></tr>
  <tr><td>/7/</td><td>Crown Fire</td><td>Surface Fire</td><td>surfaceFire</td></tr>
  <tr><td>/8/</td><td>Crown Fire Spotting</td><td>Crown Fire</td>
    <td>surfaceFire</br>crownFire</td></tr>
  <tr><td>/9/</td><td>Spotting from Pile, Tree</td><td>---</td><td></td></tr>
  <tr><td>/10/</td><td>Ignition Probability</td><td>---</td><td></td></tr>
</table>

The 'configure.module' Node value enables its downstream modules:

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

---

# Linkage Effects on Node Methods and Inputs

The 'configure.module' value affects the update method and providers of 13 Nodes as shown in the table below.

<table>
  <tr><th>configure.value</th><th>Node</th></tr>
  <tr><td>crownFire</td><td><ul>
    <li>spotting.crownFire.firelineIntensity (also affected by 'surfaceFire')</li>
    </ul></td>
  </tr>
  <tr><td>surfaceFire</td><td><ul>
    <li>crown.fire.surface.firelineIntensity
    <li>crown.fire.surface.flameLength
    <li>crown.fire.surface.heatPerUnitArea
    <li>spotting.crownFire.firelineIntensity (also affected by 'crownFire')
    <li>spotting.surfaceFire.firelineIntensity
    <li>surface.fire.ellipse.axis.effectiveWindSpeed</li>
    <li>surface.fire.ellipse.axis.lengthToWidthRatio</li>
    <li>surface.fire.ellipse.head.firelineIntensity</li>
    <li>surface.fire.ellipse.head.flameLength</li>
    <li>surface.fire.ellipse.head.spreadRate</li>
    <li>surface.fire.ellipse.heading.fromUpslope</li>
    <li>surface.fire.ellipse.wind.speed.atMidflame</li>
  </tr>
  <tr><td>scorchHeight</td><td><ul>
    <li>mortality.scorchHeight (also affected by 'treeMortality')</li>
  </tr>
  <tr><td>treeMortality</td><td><ul>
    <li>mortality.scorchHeight (also affected by 'scorchHeight')</li>
  </tr>
</table>

## Genome File Nodes Affected By configure.module


<table>
  <tr><th></th><th></th><th></th><th></th></tr>
  <tr><th>Crown Fire Genome</th><th>Configuration</th><th>Method</th><th>Inputs</th></tr>
  <tr>
    <td>crown.fire.surface.firelineIntensity</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.firelineIntensity</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.firelineIntensity</td>
  </tr>
  <tr>
  <tr>
    <td>crown.fire.surface.flameLength</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.flameLength</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.flameLength</td>
  </tr>
  <tr>
    <td>crown.fire.surface.heatPerUnitArea</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.heatPerUnitArea</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.heatPerUnitArea</td>
  <tr>
  <tr><th></th><th></th><th></th><th></th></tr>
  <tr><th>Mortality Genome</th><th>Configuration</th><th>Method</th><th>Inputs</th>></tr>
  <tr>
    <td>mortality.scorchHeight</td>
    <td>/3/ scorchHeight</td>
    <td>scorchHeight</td>
    <td>site.fire.observed.firelineIntensity</br>
        site.wind.speed.atMidflame</br>
        site.temperature.air
    </td>
  </tr>
  <tr>
    <td></td>
    <td>/4/ treeMortality</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.scorchHeight</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>surface.fire.ellipse.head.scorchHeight</td>
  </tr>
  <tr><th></th><th></th><th></th><th></th></tr>
  <tr><th>Spotting Genome</th><th>Configuration</th><th>Method</th><th>Inputs</th>></tr>
  <tr>
    <td>spotting.crownFire.firelineIntensity</td>
    <td>/1/ surfaceFire<br>/7/ crownFire</td>
    <td>Dag.bind</td>
    <td>crown.fire.active.firelineIntensity</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>firelineIntensityThomas</td>
    <td>site.fire.crown.flameLength</td>
  </tr>
  <tr>
    <td>spotting.surfaceFire.firelineIntensity</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.firelineIntensity</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.firelineIntensity</td>
  </tr>
  <tr><th></th><th></th><th></th><th></th></tr>
  <tr><th>Fire Ellipse Genome</th><th>Configuration</th><th>Method</th><th>Inputs</th>></tr>
  <tr>
    <td>surface.fire.ellipse.axis.effectiveWindSpeed</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.effectiveWindSpeed</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.effectiveWindSpeed</td>
  </tr>
  <tr>
    <td>surface.fire.ellipse.axis.lengthToWidthRatio</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.lengthToWidthRatio</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.lengthToWidthRatio</td>
  </tr>
  <tr>
    <td>surface.fire.ellipse.head.firelineIntensity</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.firelineIntensity</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.firelineIntensity</td>
  </tr>
  <tr>
    <td>surface.fire.ellipse.head.flameLength</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.flameLength</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.flameLength</td>
  </tr>
  <tr>
    <td>surface.fire.ellipse.head.spreadRate</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.spreadRate</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.spreadRate</td>
  </tr>
  <tr>
    <td>surface.fire.ellipse.heading.fromUpslope</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.heading.fromUpslope</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.fire.observed.heading.fromUpslope</td>
  </tr>
  <tr>
    <td>surface.fire.ellipse.wind.speed.atMidflame</td>
    <td>/1/ surfaceFire</td>
    <td>Dag.bind</td>
    <td>surface.weighted.fire.wind.speed.atMidflame</td>
  </tr>
  <tr>
    <td></td>
    <td>otherwise</td>
    <td>Dag.bind</td>
    <td>site.wind.speed.atMidflame</td>
  </tr>
</table>

---
# BehavePlus Style Linkages

- &#9745; Surface Fire
    - &#9745; Crown Fire
        - &#9745; Crown Fire Spotting
    - &#9745; Fire Ellipse
        - &#9744; Fire Containment
    - &#9745; Surface Fire Spotting
    - &#9745; Scorch Height
        - &#9745; Tree Mortality
- &#9745; Spotting from Burning Pile or Torching Trees
- &#9745; Ignition Probability

<table border>
<tr><th>Link</th><th>Variable</th><th>Enabled</th><th>Disabled</th></tr>
  <tr><td>link.surfaceFire.crownFire</td>
        <td>crown.fire.surface.firelineIntensity</td>
          <td>surface.weighted.fire.firelineIntensity</td>
          <td>site.fire.observed.firelineIntensity</td>
  </tr>
  <tr><td></td>
        <td>crown.fire.surface.flameLength</td>
          <td>surface.weighted.fire.flameLength</td>
          <td>site.fire.observed.flameLength</td>
  </tr>
  <tr><td></td>
        <td>crown.fire.surface.heatPerUnitArea</td>
          <td>surface.weighted.fire.heatPerUnitArea</td>
          <td>site.fire.observed.heatPerUnitArea</td>
  </tr>

  <tr><td>link.surfaceFire.scorchHeight</td>
        <td>scorch.firelineIntensity</td>
          <td>surface.weighted.fire.firelineIntensity</td>
          <td>site.fire.observed.firelineIntensity</td>
  </tr>

  <tr><td></td>
        <td>scorch.wind.speed</td>
          <td>surface.weighted.fire.wind.speed.atMidflame</td>
          <td>site.wind.speed.atMidflame</td>
  </tr>

  <tr><td>link.scorchHeight.treeMortality</td>
        <td>mortality.scorchHeight</td>
          <td>scorch.height</td>
          <td>site.fire.observed.scorchHeight</td>
  </tr>

  <tr><td>link.crownFire.crownSpotting</td>
        <td>spotting.crownFire.firelineIntensity</td>
          <td>crown.fire.active.firelineIntensity</td>
          <td>firelineIntensityThomas( site.fire.crown.flameLength )</td>
  </tr>

  <tr><td>link.surfaceFire.surfaceSpotting</td>
        <td>spotting.surfaceFire.firelineIntensity</td>
          <td>surface.weighted.fire.firelineIntensity</td>
          <td>site.fire.observed.firelineIntensity</td>
  </tr>

  <tr><td>link.surfaceFire.fireEllipse</td>
        <td>surface.fire.ellipse.axis.effectiveWindSpeed</td>
          <td>surface.weighted.fire.effectiveWindSpeed</td>
          <td>site.fire.observed.effectiveWindSpeed</td>
  </tr>

  <tr><td></td>
        <td>surface.fire.ellipse.axis.lengthToWidthRatio</td>
          <td>surface.weighted.fire.lengthToWidthRatio</td>
          <td>site.fire.observed.lengthToWidthRatio</td>
  </tr>

  <tr><td></td>
        <td>surface.fire.ellipse.head.firelineIntensity</td>
          <td>surface.weighted.fire.firelineIntensity</td>
          <td>site.fire.observed.firelineIntensity</td>
  </tr>

  <tr><td></td>
        <td>surface.fire.ellipse.head.flameLength</td>
          <td>surface.weighted.fire.flameLength</td>
          <td>site.fire.observed.flameLength</td>
  </tr>

  <tr><td></td>
        <td>surface.fire.ellipse.head.spreadRate</td>
          <td>surface.weighted.fire.spreadRate</td>
          <td>site.fire.observed.spreadRate</td>
  </tr>

  <tr><td></td>
        <td>surface.fire.ellipse.heading.fromUpslope</td>
          <td>surface.weighted.fire.heading.fromUpslope</td>
          <td>site.fire.observed.heading.fromUpslope</td>
  </tr>

  <tr><td></td>
        <td>surface.fire.ellipse.wind.speed.atMidflame</td>
          <td>surface.weighted.fire.wind.speed.atMidflame</td>
          <td>site.wind.speed.atMidflame</td>
  </tr>
</table>

# To Do
  - Add Nodes:
    - scorch.height
    - scorch.wind.speed
  - Add link.<from>.<to> Nodes
  - Replace configure.module
