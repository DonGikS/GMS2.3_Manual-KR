rh._.exports({"0":["bbox_bottom"],"1":["bbox_bottom"],"2":["bbox_bottom"],"3":["\n  ","\n  ","\n  ","This ","read only"," variable returns the y position (within the room) of the bottom of the bounding box for the instance, where the bounding box is defined by the maximum width and height of the mask for the instance (as\n    set by the ","sprite_index"," or by the ","mask_index","). Even when a sprite has a precise collision mask, the bounding box exists and is used\n    for certain things, and so you can use this variable to find it. Please note that when the instance has no sprite assigned the value returned will be the same as the instance Y position.","\n  "," ","\n  ","\n  ","bbox_bottom;","\n  "," ","\n  ","\n  ","Real (integer)","\n  "," ","\n  ","\n  ","if bbox_bottom > room_height","     {\n    ","     y = room_height - sprite_yoffset;","     }\n  ","\n  ","The above code checks to see if the bounding box of the instance is outside the room and if it is it sets the instance to a new position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Instance Variables","\n        ","Next: ","bbox_right","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["bbox_bottom"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"606"})