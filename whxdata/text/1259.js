rh._.exports({"0":["gpu_set_alphatestenable"],"1":["gpu_set_alphatestenable"],"2":["gpu_set_alphatestenable"],"3":["\n  ","\n  ","\n  ","This function will enable or disable alpha testing for your game (by default this is disabled). By switching alpha testing on you can then use the companion function ","gpu_set_alphatestref()"," to set the \"cut-off\"\n    value at which all alpha values will be set to 0. The image below shows the difference that can be seen when alpha testing is switched on or off:","\n  ","\n  ","NOTE",": This function may negatively affect performance on iOS and Android devices.","\n  "," ","\n  ","\n  ","gpu_set_alphatestenable(enable);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","enable","\n        ","Enable or disable alpha testing (","true"," / ","false",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if !gpu_get_alphatestenable()","    {\n    ","    gpu_set_alphatestenable(true);\n    ","    gpu_set_alphatestref(128);\n    ","    }\n  ","\n  ","The above code will check to see if alpha testing is enabled and if not it will switch on alpha testing and set the test threshold to 128 (only pixels with an alpha over 0.5 will be drawn).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_set_alphatestref","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_set_alphatestenable"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1259"})