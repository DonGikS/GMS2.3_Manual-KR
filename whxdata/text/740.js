rh._.exports({"0":["audio_get_recorder_count"],"1":["audio_get_recorder_count"],"2":["audio_get_recorder_count"],"3":["\n  ","\n  ","\n  ","This function will return the number of audio recording sources (like microphones, etc...) currently available to your game. So, if you have a return value of, for example, four, then you will have audio input on the sources 0, 1, 2 and 3, with one\n    of these values being that which you use to start recording from using the function ","audio_start_recording()",". This value can change at any time as people plug/unplug microphones or other\n    input sources to the device. Note that you can use the function ","audio_get_recorder_info()"," to get information on each device connected.","\n  ","IMPORTANT!"," This function will always return 0 when used on the HTML5 target.","\n  "," ","\n  ","\n  ","audio_get_recorder_count();","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","if audio_get_recorder_count() > 0","    {\n    ","    channel_index = audio_start_recording(0);","    }\n  ","\n  ","The above code checks the audio recorders available and if there are 1 or more, it starts recording from the first one indexed (source 0).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Buffers","\n        ","Next: ","audio_get_recorder_info","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_get_recorder_count"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"740"})