rh._.exports({"0":["sequence_exists"],"1":["sequence_exists"],"2":["sequence_exists"],"3":["\n  ","\n  ","\n  ","With this function you can check to see if a sequence object exists or not. You supply either the sequence object struct (as returned by the function ","sequence_create()"," or ","sequence_get()",")\n    or the sequence ID (as returned by the function ","layer_sequence_get_sequence()"," or from the sequence instance struct property ","sequence",", or the index from the asset\n    browser) and the function will return ","true"," if the sequence object exists or ","false"," if it does not.","\n  "," ","\n  ","\n  ","sequence_exists(sequence_struct_or_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sequence_struct_or_id","\n        ","The sequence object struct or ID to check for","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Bool","\n  "," ","\n  ","\n  ","if sequence_exists(my_seq)","     {\n    ","     sequence_destroy(my_seq);\n    ","     }\n  ","\n  ","The above code checks to see if the given sequence object exists and if it does it is destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n        ","Next: ","sequence_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sequence_exists"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"819"})