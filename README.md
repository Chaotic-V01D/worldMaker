# WorldMaker
For generating Forgotten-Realms-esque nations

## Nation Features
Each nation has the following traits:
- Population
- Populace
- Races
- Primary race
- Primary terrain
- Scale
- Diplomacy level (controls relations with other nations)
- Extra-planar-influence level
- Religion (not by name, each is labelled religionA, religionB, etc)
- Primary export (partially based on primary terrain)
- Relations with each other (based on corresponding populace, religion, compatable exports (?), similar government types, and diplomacy level)
- Government type

## TODO
- Add human names gen
- Add orc names gen
- Implement relations generation system
- Create map-building system?
  - Each nation would select a random point in a grid system and grow in proportion to their scale feature.
  - Then the terrain type of each grid would be determined by the nations primary terrain to create a rough map
  - Random segments would be determined to be mountainous to create elevation
  - Rivers would be created off of the mountains to mimic irl rivers
