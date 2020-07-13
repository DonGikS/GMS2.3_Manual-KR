rh._.exports({"0":["audio_emitter_position"],"1":["audio_emitter_position"],"2":["audio_emitter_position"],"3":["\n  ","\n  ","\n  ","With this function you can change the position of an audio emitter within the 3D audio space. The position will affect the sound in different ways depending on where the ","listener"," is positioned within the audio space\n    too (default position is (0, 0, 0). See ","audio_listener_position()"," for more information), so for example if the emitter position is set to (100, 0, 0) and\n    the current listener is at (200, 0, 0) the audio streamed from the emitter will appear to be on the left of the audio field. The image below shows a visual representation of emitters and their relative positions to the listener:","\n  ","\n  ","\n  ","audio_emitter_position(emitter, x, y, z);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","emitter","\n        ","The index of the emitter to change.","\n      ","\n      ","\n        ","x","\n        ","The x position.","\n      ","\n      ","\n        ","y","\n        ","The y position.","\n      ","\n      ","\n        ","z","\n        ","The z position.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if speed > 0","    {\n    ","    audio_emitter_position(s_emit, x, y, 0);","    }\n  ","\n  ","The above code checks to see if the instance speed is over 0 and if it is it updates the audio emitter indexed in the variable \"s_emit\" to the current x/y position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Emitters","\n        ","Next: ","audio_emitter_velocity","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_emitter_position"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"695"})