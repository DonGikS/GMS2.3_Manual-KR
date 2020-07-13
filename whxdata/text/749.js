rh._.exports({"0":["audio_sync_group_get_track_pos"],"1":["audio_sync_group_get_track_pos"],"2":["audio_sync_group_get_track_pos"],"3":["\n  ","\n  ","\n  ","This function returns the current play position of the given sync group. The group index is the value returned when you created the group using the function ","audio_create_sync_group()",", and the return\n    value is the time in seconds that the tracks have been playing.","\n  ","NOTE",": This functionality is not available for the HTML5 target platform.","\n  "," ","\n  ","\n  ","audio_sync_group_get_track_pos(group_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","group_index","\n        ","The group index to get the position of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var real_secs = audio_sync_group_get_track_pos(sg);"," var secs = real_secs mod 60;"," var mins = string(real_secs div 60);"," if (secs > 9)","    {\n    ","    secs = string(secs);","    }\n    "," else\n    ","    {\n    ","    secs = \"0\" + string(secs);","    }\n    "," draw_text(32, 32, \"Time = \" + mins + \":\" + secs);","\n  ","The above code gets the time position for the sync group indexed in the variable \"sg\", then uses this value to draw the time played on the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Synchronisation","\n        ","Next: ","audio_destroy_sync_group","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_sync_group_get_track_pos"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"749"})