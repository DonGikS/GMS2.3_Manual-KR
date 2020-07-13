rh._.exports({"0":["layer_sequence_destroy"],"1":["layer_sequence_destroy"],"2":["layer_sequence_destroy"],"3":["\n  ","\n  ","\n  ","With this function you can destroy (remove from the room) a sequence element. You supply the sequence element ID as returned by ","layer_sequence_create()"," or by one of the ","layer element functions","    and the sequence will be destroyed.","\n  "," ","\n  ","\n  ","layer_sequence_destroy(sequence_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sequence_element_id","\n        ","The unique ID value of the sequence element to target","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var a = layer_get_all_elements(layer);"," for (var i = 0; i < array_length(a); i++;)","     {\n    ","     if layer_get_element_type(a[i]) == layerelementtype_sequence","         {\n    ","         layer_sequence_destroy(a[i])\n    ","         }\n    ","     }\n  ","\n  ","The above code gets the IDs for all the elements assigned to the layer of the instance running the code. The code then checks to see if any of the returned elements are sequence assets and if they then they are destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_x","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sequence_destroy"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1111"})