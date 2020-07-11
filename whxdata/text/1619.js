rh._.exports({"0":["display_set_ui_visibility"],"1":["display_set_ui_visibility"],"2":["display_set_ui_visibility"],"3":["\n  ","\n  ","\n  ","This function can be used to show or hide the system UI on ","Android"," ","only",". The function requires you to supply one or more system ","flags"," as an integer value. When using more than a single flag, these need to be merged using the bitwise\n    \"or\", as shown in the example below. You can find a list of Android system flags ","here",".","\n  "," ","\n  ","\n  ","display_set_ui_visibility(flags);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","flags","\n      ","\n      ","\n        ","flags","\n        ","The Android SYSTEM flags to use (as an integer value).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var flags = 1024|4096;"," display_set_ui_visibility(flags);\n  ","\n  ","The above code will use the Android system flags \"SYSTEM_UI_FLAG_IMMERSIVE_STICKY\" and \"SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN\" to set the visibility of the display.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","Cameras And Display","\n        ","Back: ","\n        ","Next: ","display_set_timing_method","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["display_set_ui_visibility"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1619"})