rh._.exports({"0":["layer_set_visible"],"1":["layer_set_visible"],"2":["layer_set_visible"],"3":["\n  ","\n  ","\n  ","With this function you can toggle the visibility of a layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will have a performance\n    impact) as well as the toggle value for the layer where visible is ","true"," and invisble is ","false",".","\n  ","When a layer is invisible, nothing that is assigned to the layer will be drawn, and if any instances are assigned to the layer then they will not even run their draw event (much the same as if you set the instance variable ","visible"," to ","false",").\n    Note that any instances that are already flagged as invisible will ","not"," be flagged as visible if the layer they are on is set to visible, as these are two independent settings, although their behaviour is the same.","\n  "," ","\n  ","\n  ","layer_set_visible(layer_id, visible)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n      ","\n        ","visible","\n        ","Whether the layer should be visible (","true",") or not (","false",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Instances\");"," if layer_get_visible(lay_id)","    {\n    ","    layer_set_visible(lay_id, false);","    }\n    "," else\n    ","    {\n    ","    layer_set_visible(lay_id, true);","    }\n  ","\n  ","The above code gets the ID value for the layer named \"Instances\" in the room editor, then uses the ID to check if the layer is visible or not, toggling the layer visibility depending on the returned value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_get_visible","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_set_visible"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1003"})