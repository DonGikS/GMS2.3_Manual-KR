rh._.exports({"0":["friction"],"1":["friction"],"2":["friction"],"3":["\n  ","\n  ","\n  ","Friction"," is one of the \"built in\" properties that instances can have and can be used to slow the instance down over time when the ","speed"," is other than zero. It works simply by subtracting an amount\n    from the speed every step until the object has a speed of 0, so if the friction is set to, for example, 0.1 and the speed of the instance is 1 (1 pixel per step), it will slow down and stop after 10 steps have passed. Note too that the friction is\n    applied to positive and negative speeds equally with the net result always being that the object has a speed of 0 after a given time.","\n  "," ","\n  ","\n  ","friction;","\n  "," ","\n  ","\n  ","Real (single precision floating point value)","\n  "," ","\n  ","\n  ","if abs(speed) > 0","     {\n    ","     friction = 0.05;","     }\n    "," else\n    ","     {\n    ","     friction = 0;","     }\n  ","\n  ","The above code will only apply friction if the instance's ","absolute"," speed is above 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instance Variables","\n        ","Next: ","gravity","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["friction"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"908"})