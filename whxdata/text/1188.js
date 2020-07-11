rh._.exports({"0":["place_meeting"],"1":["place_meeting"],"2":["place_meeting"],"3":["\n  ","\n  ","\n  ","With this function you can check a position for a collision with another instance or all instances of an object using the collision mask of the instance that runs the code for the check. When you use this you are effectively asking GameMaker Studio 2    to move the instance to the new position, check for a collision, move back and tell you if a collision was found or not. This will work for precise collisions, but only if both the instance and the object being checked for have precise collision masks\n    selected otherwise only bounding box collisions are applied. This function also accepts the special keywords ","all"," and ","other",". Please note that should you need to get the unique instance ","id"," of the object being collided with, you\n    should use ","instance_place()",".","\n  ","Note that the given x/y coordinates will be floored to the nearest integer before the check is\n    performed.","\n  "," ","\n  ","\n  ","place_meeting(x, y, obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x position to check.","\n      ","\n      ","\n        ","y","\n        ","The y position to check.","\n      ","\n      ","\n        ","obj","\n        ","The instance or object to check for.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if keyboard_check(vk_left)","    {\n    ","    if !place_meeting(x - 5, y, obj_wall) x -=5;","    }\n  ","\n  ","The above code checks to see if there is ","not"," a collision to the left of the instance and moves the instance if there is none.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Collisions","\n        ","Next: ","position_empty","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["place_meeting"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1188"})