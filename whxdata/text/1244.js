rh._.exports({"0":["gpu_get_alphatestref"],"1":["gpu_get_alphatestref"],"2":["gpu_get_alphatestref"],"3":["\n  ","\n  ","\n  ","You can use this function to find the current value for the alpha test reference (default is 0, but you can use ","gpu_set_alphatestref()"," to set this value to something other than this).","\n  "," ","\n  ","\n  ","gpu_get_alphatestref();","\n  "," ","\n  ","\n  ","Real (from 0 - 255)","\n  "," ","\n  ","\n  ","if gpu_get_alphatestenable()","     {\n    ","     if gpu_get_alphatestref() < 254","         {\n    ","         gpu_set_alphatestref(254);\n    ","         }\n    ","     }\n  ","\n  ","The above code checks to see if alpha testing is enabled, and if it is, it then checks the current alpha test reference value and sets it if it is less than 254.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_get_texfilter","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_get_alphatestref"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1244"})