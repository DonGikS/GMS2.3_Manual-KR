rh._.exports({"0":["os_powersave_enable"],"1":["os_powersave_enable"],"2":["os_powersave_enable"],"3":["\n  ","\n  ","\n  ","With this function you can turn on or off the power saving features of the device. This is important as certain games (for example those that use the tilt functions) may not generate events that the OS can interpret as being user input and so shut down\n    the screen or exit the game. By setting this function to ","false"," you can disable the power saving features and ensure that the screen (and game) are always functioning.","\n  ","NOTE",": This is limited to iOS and Android targets.","\n  "," ","\n  ","\n  ","os_powersave_enable(flag)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","flag","\n        ","Set to ","true"," or ","false"," to enable or disable powersave functions.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (os_type == os_android) || (os_type == os_ios)","    {\n    ","    os_powersave_enable(false);\n    ","    }\n  ","\n  ","The above code checks the OS type and if it is either Android or an iOS then power saving features are deactivated.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","OS And Compiler","\n        ","Next: ","os_lock_orientation","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["os_powersave_enable"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2527"})