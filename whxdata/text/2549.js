rh._.exports({"0":["exception_unhandled_handler"],"1":["exception_unhandled_handler"],"2":["exception_unhandled_handler"],"3":["\n  ","\n  ","\n  ","This runtime function can be used to \"take over\" the default GameMaker Studio 2 error message when a runtime exception occurs. You supply a method or function and it will be passed the exception struct that is created when the exception\n    was thrown. This struct has the following format:","\n  ","{"," message : \"\",               // a string that is a short message for this exception"," longMessage : \"\",           // a string that is a longer message for this exception"," script : \"\",                // a string\n    that describes where the exception came from"," stacktrace : [ \"\", \"\" ],    // an array of strings that is the stack frame the exception was generated"," }\n  ","\n  ","Using this function means that no error message will be shown to the user, and note that the context for running the method is ","not"," in an event and so it is highly unlikely that anything could be rendered at this time to the screen. In general,\n    the safest thing that could be done at this point is to save a file with the exception context information so it could be - for example - parsed and processed on the next run of the game and then dealt with.","\n  ","The function will not return anything by default, but if you use the ","return"," statement in the supplied method, then the given value will be converted to an integer and used as the exit code from the runner.","\n  "," ","\n  ","\n  ","exception_unhandled_handler(user_handler);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_handler","\n        ","The method (user-defined function) to use as the exception handler.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer (if supplied)","\n  "," ","\n  ","\n  ","exception_unhandled_handler(function(ex))","     {\n    ","     show_debug_message( \"--------------------------------------------------------------\");","     show_debug_message( \"Unhandled exception \" + string(ex) );","     show_debug_message( \"--------------------------------------------------------------\");","        if file_exists(\"crash.txt\") file_delete(\"crash.txt\");","     var _f = file_text_open_write(\"crash.txt\");","     file_text_write_string(_f, string(ex));","     file_text_close(_f);\n    ","     return 0;","     }\n    "," )\n  ","\n  ","The above code will create an exception handler method and use it to save a file with the exception data.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Debugging","\n        ","Next: ","get_integer","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["exception_unhandled_handler"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2549"})