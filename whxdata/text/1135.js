rh._.exports({"0":["game_end"],"1":["game_end"],"2":["game_end"],"3":["\n  ","\n  ","\n  ","With this function you can end the game (and the ","Game End Event"," will be triggered). This will not happen instantaneously, but rather at the end of the current step, so any code\n    you have in the same step after this function has been called will still run. Please note that this function has the following restrictions:","\n  ","\n    ","On Android (and Amazon Fire) devices, calling ","game_end()"," will push the app into the background, but it will ","not"," close the app. This must be done by the user.","\n    ","On iOS it will do nothing and silently fail.","\n    ","On UWP, XBoxOne, PS4 and Nintendo Switch it may crash the game (or at least fail silently) and so ","must not be used",".","\n    ","On HTML5 it will end the game, but leave the user staring at a blank draw canvas on the web page, and as such it isn't recommended that it be used on that target platform.","\n    ","On Windows, Linux and Mac the function simply ends the game and closes the game window ( a ","Game End Event"," will be triggered).","\n    ","\n  ","\n  "," ","\n  ","\n  ","game_end();","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if keyboard_check_pressed(vk_escape) game_end();","\n  ","This would end the game if the player presses the \"escape\" key.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Game Control","\n        ","Next: ","game_restart","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["game_end"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1135"})