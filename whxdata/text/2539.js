rh._.exports({"0":["environment_get_variable"],"1":["environment_get_variable"],"2":["environment_get_variable"],"3":["\n  ","\n  ","\n  ","This function returns the value (a string) of the environment variable with the given name (also a string). You can get the available environment variables on macOS and Ubuntu (Linux) by typing \"","env","\" into the terminal app, and for\n    information on Windows environment variables, if you are using the command prompt then type \"","echo %PATH%","\", and using PowerShell it's \"","ls env","\". Note that on both macOS and Ubuntu (Linux) the \"HOME\"\n    environment variable will return the \"","~/","\" path which maps to \"","/Users/<username>","\" on macOS and \"","/home/<username>","\" on Ubuntu (Linux).","\n  ","NOTE",": This function is for Windows, macOS and Ubuntu (Linux) only.","\n  "," ","\n  ","\n  ","environment_get_variable(name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","The name (a string) of the environment variable to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","e_str = environment_get_variable(\"APPDATA\");","\n  ","The above code will return the full path for the environment variable \"","%appdata%","\", which is normally \"","C:\\Users\\{username}\\AppData\\Roaming","\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","external_define","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["environment_get_variable"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2539"})