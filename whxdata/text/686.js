rh._.exports({"0":["audio_get_master_gain"],"1":["audio_get_master_gain"],"2":["audio_get_master_gain"],"3":["\n  ","\n  ","\n  ","With this function you can get the absolute value for the global volume of all sounds and music for a specific listener. The default listener index is 0, but you can use the function ","audio_get_listener_info()"," to\n    get the different indices available for the target platform. The gain value returned is based on a linear scale from 0 (silent) to 1 (full volume). Note that on some platforms you can have a gain of greater than 1, although a value of 1 is considered\n    \"full volume\" and anything greater may introduce audio clipping.","\n  "," ","\n  ","\n  ","audio_get_master_gain(listenerIndex);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","listenerIndex","\n        ","The index of the listener to get the gain of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var num = audio_get_listener_count();"," for( var i = 0; i < num; ++i;)","    {\n    ","    var info = audio_get_listener_info(i);","    var ind = info[? \"index\"];","    if audio_get_master_gain(ind) != 1","       {\n    ","       audio_set_master_gain(info[? \"index\"], 1);","       }\n    ","    ds_map_destroy(info);\n    ","    }\n  ","\n  ","The above code loops through the available listeners, checking to see if their gain is 1 or not, and if it is not it sets it to 1 for each of them.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_channel_num","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_get_master_gain"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"686"})