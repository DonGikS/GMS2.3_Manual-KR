rh._.exports({"0":["layer_background_stretch"],"1":["layer_background_stretch"],"2":["layer_background_stretch"],"3":["\n  ","\n  ","\n  ","Using this function you can toggle a background element sprite to stretch to fit the room or remain at 1:1 with the resolution. You supply the background element ID (which you get when you create a background element using ","layer_background_create()","    or when you use the function ","layer_background_get_id()","), and then set the stretch argument to ","true"," or ","false",". When set to ","true"," the element sprite will be stretched to fit\n    the room (either scaled up or scaled down depending on the sizes of the sprite and the room), and when set to ","false",", the element sprite will be displayed at its native resolution.","\n  "," ","\n  ","\n  ","layer_background_stretch(background_element_id, stretch)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","background_element_id","\n        ","The unique ID value of the background element to change","\n      ","\n      ","\n        ","stretch","\n        ","The stretch toggle, which can be ","true"," or ","false","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if mouse_check_button_pressed(mb_left)","     {\n    ","     var back = layer_background_get_id(layer);","     if layer_background_get_stretch(back)","         {\n    ","         layer_background_stretch(back, false);","         }\n    ","     else\n    ","         {\n    ","         layer_background_stretch(back, true);","         }\n    ","     }\n  ","\n  ","The above code checks for a mouse button press and if one is detected it will toggle the stretching of the background element sprite assigned to the layer the instance running the code is on.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_blend","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_stretch"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1066"})