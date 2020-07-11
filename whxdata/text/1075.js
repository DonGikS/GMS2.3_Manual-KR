rh._.exports({"0":["layer_background_get_htiled"],"1":["layer_background_get_htiled"],"2":["layer_background_get_htiled"],"3":["\n  ","\n  ","\n  ","This function can be used to find out if the background element is tiled horizontally or not. You give the background element ID (which you get when you create a background element using ","layer_background_create()","    or when you use the function ","layer_background_get_id()","), and the function will return either ","true"," if the element is currently tiled, or ","false"," if it is not.","\n  "," ","\n  ","\n  ","layer_background_get_htiled(background_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","background_element_id","\n        ","The unique ID value of the background element to get the information from","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Background_sky\");"," var back_id = layer_background_get_id(lay_id);"," if !layer_background_get_htiled(back_id)","     {\n    ","     layer_background_htiled(back_id, true);","     }\n  ","\n  ","The above code will get the layer ID for the layer named \"Background_sky\" and then use that to get the ID of the background element on that layer. This ID is then used to check if the element is tiling across the horizontal axis, and if it\n    is not then it is set to do so.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_get_vtiled","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_get_htiled"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1075"})