rh._.exports({"0":["fps"],"1":["fps"],"2":["fps"],"3":["\n  ","\n  ","\n  ","In GameMaker Studio 2 there are two main ways that can be used to tell the speed at which your game runs. The ","game speed"," (as specified in the Game Options) and the ","fps","    (frames per second). These values are often confused, but basically one is the number of game steps that GameMaker Studio 2 is supposed to be completing in a second, while the other (the fps) is the number of CPU steps that GameMaker Studio 2    is actually completing in a second ","up to a maximum value of the room speed itself",". To get the true fps, ie. the actual number of cpu steps per game step, use the ","fps_real"," variable.","\n  ","This ","read-only"," variable returns the current fps as an integer value. Please note that the function will only update once every step of your game and so may appear to \"jump\" from one value to another, but this is quite normal.","\n  "," ","\n  ","\n  ","fps","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if debug_mode","    {\n    ","    draw_text(32, 32, \"FPS = \" + string(fps));","    }\n  ","\n  ","The above code will check to see if the game is in debug mode and if it is it will display the current fps on the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Debugging","\n        ","Next: ","fps_real","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["fps"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2558"})