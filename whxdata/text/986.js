rh._.exports({"0":["layer_get_element_type"],"1":["layer_get_element_type,layerelementtype_background\t,layerelementtype_instance,layerelementtype_tilemap,layerelementtype_sprite,layerelementtype_particlesystem,layerelementtype_tile,layerelementtype_sequence"],"2":["layer_get_element_type,layerelementtype_background\t,layerelementtype_instance,layerelementtype_tilemap,layerelementtype_sprite,layerelementtype_particlesystem,layerelementtype_tile,layerelementtype_sequence"],"3":["\n  ","\n  ","\n  ","You can use this function to get the ","element type"," for the given element. You supply the unique element ID value (for example, as returned the function that created the element or from the room editor) and the function will return one of the following\n    constants (or -1 if the element does not exist or the ID value is erroneous):","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","layerelementtype_background","\n        ","The element is a background.","\n      ","\n      ","\n        ","layerelementtype_instance","\n        ","The element is an instance.","\n      ","\n      ","\n        ","layerelementtype_sprite","\n        ","The element is a sprite asset.","\n      ","\n      ","\n        ","layerelementtype_tilemap","\n        ","The element is a tilemap.","\n      ","\n      ","\n        ","layerelementtype_particlesystem","\n        ","The element is a particle system.","\n      ","\n      ","\n        ","layerelementtype_tile","\n        ","The element is a legacy background tile (this is only valid for projects that have been imported from previous versions of ","GameMaker",").","\n      ","\n      ","\n        ","layerelementtype_sequence","\n        ","The element is a sequence asset.","\n      ","\n    ","\n  ","\n  "," ","\n  ","Note that this function is most useful when you have multiple different element types assigned to the one layer, and that you can get a list of all the elements on any given layer using the function ","layer_get_all_elements()",".","\n  "," ","\n  ","\n  ","layer_get_element_type(element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer","\n        ","The unique ID value of the element to get the type of","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Constant (see table, above) or -1 if element does not exist or is invalid","\n  "," ","\n  ","\n  ","var a = layer_get_all_elements(layer);"," for (var i = 0; i < array_length(a); i++;)","    {\n    ","    if layer_get_element_type(a[i]) == layerelementtype_sprite","       {\n    ","       layer_sprite_destroy(a[i])\n    ","       }\n    ","    }\n  ","\n  ","The above code gets the IDs for all the instance elements assigned to the layer of the instance running the code. The code then checks to see if any of the returned elements are sprite assets and if they then they are destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_get_x","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_get_element_type"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"986"})