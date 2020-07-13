rh._.exports({"0":["image_blend"],"1":["image_blend"],"2":["image_blend"],"3":["\n  ","\n  ","\n  ","This variable controls the \"tinting\" of the instance sprite and the default value is -1 (but can also be ","c_white","). Any other value (including internal colour constants like ","c_red",", or ","c_aqua",") will blend the specified\n    colour with the original sprite. Please note that for changes in this variable to be visible, the instance should have either ","no"," draw event (and so GameMaker Studio 2 will default draw the sprite) or be drawn using one of the extended drawing\n    functions like ","draw_self()"," or ","draw_sprite_ext()",".","\n  ","\n  ","Please note that you should try to limit blending on the HTML5 platform (unless using WebGL), as each blended sprite has to be cached separately and so having many blended sprites may adversely affect performance (you can also set the cache size using\n    the function ","sprite_set_cache_size()",").","\n  "," ","\n  ","\n  ","image_blend;","\n  "," ","\n  ","\n  ","Real (single precision floating point value)","\n  "," ","\n  ","\n  ","image_blend = make_colour_hsv(255, 255, random(255));","\n  ","The above code will set the image_blend of the sprite defined for the instance to a random colour.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Instance Variables","\n        ","Next: ","image_index","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["image_blend"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"599"})