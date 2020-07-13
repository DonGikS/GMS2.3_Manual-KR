rh._.exports({"0":["instance_position"],"1":["instance_position"],"2":["instance_position"],"3":["\n  ","\n  ","\n  ","With this function you can check a position for a collision with another instance or all instances of an object. When you use this you are checking a single point in the room for an instance or an object. This check will be done against the bounding\n    box of the instance or against the mask of the instance if that instance has precise collisions checked and will return the unique instance ","id",". If you do not need the id of the colliding instance you\n    should consider using ","position_meeting()"," instead. This function also accepts the special ","keywords","\n    ","all"," and ","other"," and will return the keyword ","noone"," if no collision occurs or the unique ID value of the instance found if a collision does occur.","\n  "," ","\n  ","\n  ","instance_position( x, y, obj );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x position to check for instances.","\n      ","\n      ","\n        ","y","\n        ","The y position to check for instances.","\n      ","\n      ","\n        ","obj","\n        ","The object to check for instances of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (either an instance ID value or the keyword ","noone",")","\n  "," ","\n  ","\n  ","var inst;"," inst = instance_position(mouse_x, mouse_y, obj_Pause_Button);"," if (inst != noone)","     {\n    ","     with (inst) image_index=1;","     instance_create_layer(room_width / 2, 0, \"Controllers\", obj_Menu);","     }\n  ","\n  ","The above code will check for a collision with an instance of \"obj_Pause_Button\" at the mouse position, and if there is one it will then use the returned id to set its image_index to a new value before creating a new instance of the object\n    \"obj_Menu\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instances","\n        ","Next: ","instance_position_list","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instance_position"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"942"})