rh._.exports({"0":["skeleton_animation_set_ext"],"1":["skeleton_animation_set_ext"],"2":["skeleton_animation_set_ext"],"3":["\n  ","\n  ","\n  ","When you set an animation set for your skeletal animation sprite, it is assigned ","track 0"," internally. However, you can assign further sets to further tracks (1 and above) and in this way have your sprite play two (or\n    more) animations at the same time. Note that the sprite should have been designed in your animation program with this in mind, such that the \"base\" animation in track 0 only has keyframes for certain bones, while the next tracks have keyframes\n    for the others. For example, if you have a \"walk\" animation and its keyframes only affect the legs of the sprite, you can then have a set of head animations and arm animations which you can set in tracks 1 and 2 respectively, permitting\n    you to have a base movement and adapt on it in real-time while the game is being played.","\n  "," ","\n  ","\n  ","skeleton_animation_set_ext(animname, track);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","animname","\n        ","The name (a string) of the animation set to use.","\n      ","\n      ","\n        ","track","\n        ","The track for the animation set to use.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if mouse_check_button(mb_left)","     {\n    ","     skeleton_animation_set_ext(\"bodyfight\", 1);","     }\n    "," else\n    ","     {\n    ","     skeleton_animation_set_ext(\"bodywalk\", 1);","     }\n  ","\n  ","The above code will change the animation set being used by track 1 to the \"bodyfight\" set or the \"bodywalk\" set when the left mouse button is pressed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Animation","\n        ","Next: ","skeleton_animation_get_duration","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_animation_set_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"615"})