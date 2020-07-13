rh._.exports({"0":["physics_fixture_set_sensor"],"1":["physics_fixture_set_sensor"],"2":["physics_fixture_set_sensor"],"3":["\n  ","\n  ","\n  ","Some times you will want your game to detect and recognise when two instances with fixtures collide, but not have any physical reaction to the collision. This can be done by converting the fixture into a sensor, which basically means that they will\n    generate a collision event but with no physical response so that you can use these instances as \"triggers\" for other events to happen in the game room. Any fixture can be flagged as a sensor, and it makes no difference if the instance it\n    is bound to is static or in movement.","\n  ","NOTE",": A sensor fixture will fire off the collision event when the collision ","first occurs only",", meaning you don't get a stream of collision events as the two bodies continue to overlap (which is what would traditionally occur). If they\n    stop overlapping and overlap subsequently there will be another collision event triggered.","\n  "," ","\n  ","\n  ","physics_fixture_set_sensor(fixture, state)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","fixture","\n        ","the index of the fixture","\n      ","\n      ","\n        ","state","\n        ","whether a fixture is a sensor (true) or not (false)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","physics_fixture_set_sensor(fix_Cloud, 1);","\n  ","The code above will turn the sensor state of the fixture indexed in \"fix_Cloud\" to true.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fixtures","\n        ","Next: ","physics_fixture_set_kinematic","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_fixture_set_sensor"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2068"})