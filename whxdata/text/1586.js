rh._.exports({"0":["window_set_fullscreen"],"1":["window_set_fullscreen"],"2":["window_set_fullscreen"],"3":["\n  ","\n  ","\n  ","With this function you can set the game window to be full screen (","true",") or not (","false","). Please note that for the ","macOS"," target, you ","must"," have unchecked the \"Start In Fullscreen\" option and checked the \"Allow\n    the player to resize the game window\" option in the ","Game Options",", otherwise this function will fail. Also note that this function will ","not"," work on HTML5 unless add in as a \"clickable\"\n    callback (see ","here"," for more details).","\n  "," ","\n  ","\n  ","window_set_fullscreen(full);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","full","\n        ","Whether to set the screen to fullscreen (true) or not (false).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if mouse_check_button_pressed(mb_left)","     {\n    ","     if window_get_fullscreen()","         {\n    ","         window_set_fullscreen(false);\n    ","         }\n    ","     else\n    ","         {\n    ","         window_set_fullscreen(true);\n    ","         }\n    ","     }\n  ","\n  ","The above code checks for a mouse button press and then sets the window to fullscreen if it is not already, or sets it to windowed if it is already.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Game Window","\n        ","Next: ","window_set_position","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["window_set_fullscreen"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1586"})