rh._.exports({"0":["audio_debug"],"1":["audio_debug"],"2":["audio_debug"],"3":["\n  ","\n  ","\n  ","This function can be used to display debug information about the audio system, with ","true"," switching it on and ","false"," to switch it off. When you are debugging audio in this way, the overlay will show the following information:","\n  ","\n  ","\n    ","Handle ","- The OpenAL source handle (unique for every sound played)","\n    ","Data Handle"," - The OpenAL buffer handle (shows the same value for multiple sounds with the same source handle)","\n    ","Processed Buffers"," - how many buffers have been played","\n    ","Queued Buffers"," - how many buffers have been queued (and are still waiting to play)","\n    ","Gain ","- The gain value for the audio (0 - 65536)","\n    ","Play Offset"," - the sample position (current play position) into the current buffer","\n    ","Queued Buffers Bars"," - a small box diagram of the processed/queued buffers with the play offset (current position) drawn as a blue line","\n  ","\n  ","For synchronised groups of audio, you also have the function ","audio_sync_group_debug()",".","\n  ","NOTE: ","This function does not work on the HTML5 target platform.","\n  "," ","\n  ","\n  ","audio_debug(enable);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","enable","\n        ","Enable (set to ","true",") or disable (","false",") audio debugging.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (debug_mode)","    {\n    ","    audio_debug(true);\n    ","    }\n    "," else\n    ","    {\n    ","    audio_debug(false);\n    ","    }\n  ","\n  ","The above code will switch on or off the audio debug overlay depending on whether the game is running in debug mode or not.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_system_is_available","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_debug"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"690"})