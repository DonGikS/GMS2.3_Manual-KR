rh._.exports({"0":["room_previous"],"1":["room_previous"],"2":["room_previous"],"3":["\n  ","\n  ","\n  ","With this function you can retrieve the index of the room ","before"," the room input into the function. For example you can use the variable ","room"," to get the index of the current room and then use this function to find\n    the room that comes before it, as listed in the ","Room Manager",". If there is no room before the one you input then -1 is returned. Note that this function will not recognise or take into consideration\n    rooms that have been added dynamically using ","room_add()"," or ","room_duplicate()",".","\n  "," ","\n  ","\n  ","room_previous(numb);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","numb","\n        ","The index of the room to get the one before from.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Index","\n  "," ","\n  ","\n  ","if room_previous(room) != -1","    {\n    ","    room_goto_previous());\n    ","    }\n  ","\n  ","The above code will check to see if the previous room exists and if so, it will go to it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["room_previous"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"953"})