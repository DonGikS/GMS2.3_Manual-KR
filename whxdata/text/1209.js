rh._.exports({"0":["rectangle_in_circle"],"1":["rectangle_in_circle"],"2":["rectangle_in_circle"],"3":["\n  ","\n  ","\n  ","This function will check a rectangular area that you define to see if it is either not in collision, completely within the destination bounds, or if it is simply touching, a defined circular area. If they are not touching at all the function will return\n    0, if the source is completely within the destination it will return 1, and if they are simply overlapping then it will return 2. The image below illustrates this:","\n  ","\n  "," ","\n  ","\n  ","rectangle_in_circle(sx1, sy1, sx2, sy2, x, y, rad);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sx1","\n        ","The x coordinate of the left side of the source rectangle.","\n      ","\n      ","\n        ","sy1","\n        ","The y coordinate of the top side of the source rectangle.","\n      ","\n      ","\n        ","sx2","\n        ","The x coordinate of the right side of the source rectangle.","\n      ","\n      ","\n        ","sy2","\n        ","The y coordinate of the bottom side of the source rectangle.","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of the centre of the circle","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of the centre of the circle.","\n      ","\n      ","\n        ","rad","\n        ","The radius around the center point in which to check for a collision.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","inst = instance_nearest(x, y, obj_Bullet);"," if instance_exists(inst)","    {\n    ","    if rectangle_in_circle(inst.x - 5, inst.y - 5, inst.x + 5, inst.y + 5, x, y - 25, 20) > 0","       {\n    ","       hit = true;","       }\n    ","    }\n  ","\n  ","The above code uses the ","rectangle_in_circle"," function to check for a collision within a circular area and the rectangle around a found instance. If there is a collision (either an edge overlap or encompassed) then a variable will be set to ","true",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Collisions","\n        ","Next: ","place_empty","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["rectangle_in_circle"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1209"})