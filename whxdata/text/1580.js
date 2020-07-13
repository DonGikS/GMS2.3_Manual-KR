rh._.exports({"0":["window_get_cursor"],"1":["window_get_cursor"],"2":["window_get_cursor,cr_none,cr_default,cr_arrow,cr_cross,cr_beam,cr_size_nesw,cr_size_ns,cr_size_nwse,cr_size_we,cr_uparrow,cr_hourglass,cr_drag,cr_appstart,cr_handpoint,cr_size_all"],"3":["\n  ","\n  ","\n  ","With this function you can get the current cursor being used in the game window, with the return value being any one of the constants listed below (to set the current cursor being used you can use the function ","window_set_cursor()","    which also takes these constants):","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Cursor","\n      ","\n      ","\n        ","cr_none","\n        "," ","\n      ","\n      ","\n        ","cr_default","\n        ","\n      ","\n      ","\n        ","cr_arrow","\n        ","\n      ","\n      ","\n        ","cr_cross","\n        ","\n      ","\n      ","\n        ","cr_beam","\n        ","\n      ","\n      ","\n        ","cr_size_nesw","\n        ","\n      ","\n      ","\n        ","cr_size_ns","\n        ","\n      ","\n      ","\n        ","cr_size_nwse","\n        ","\n      ","\n      ","\n        ","cr_size_we","\n        ","\n      ","\n      ","\n        ","cr_uparrow","\n        ","\n      ","\n      ","\n        ","cr_hourglass","\n        ","\n      ","\n      ","\n        ","cr_drag","\n        ","\n      ","\n      ","\n        ","cr_appstart","\n        ","\n      ","\n      ","\n        ","cr_handpoint","\n        ","\n      ","\n      ","\n        ","cr_size_all","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","window_get_cursor();","\n  "," ","\n  ","\n  ","Constant","\n  "," ","\n  ","\n  ","if mouse_check_button_pressed(mb_left)","     {\n    ","     if window_get_cursor() != cr_drag window_set_cursor(cr_drag);","     }\n  ","\n  ","The above code will change the window cursor to the standard windows drag cursor if the left mouse button has been pressed and it has not already been changed previously.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Game Window","\n        ","Next: ","window_get_visible_rects","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["window_get_cursor"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1580"})