rh._.exports({"0":["layer_reset_target_room"],"1":["layer_reset_target_room"],"2":["layer_reset_target_room"],"3":["\n  ","\n  ","\n  ","This function is used to reset the layer target to the current room. See the function ","layer_set_target_room()"," for further information.","\n  "," ","\n  ","\n  ","layer_reset_target_room()","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","layer_set_target_room(rm_Game);"," var l = layer_get_id(\"SpriteAssets\");"," repeat(50)\n    ","    {\n    ","    layer_sprite_create(l, random(room_get_width(rm_Game)), random(room_get_height(rm_Game)), spr_Trees);","    }\n    "," layer_reset_target_room();\n  ","\n  ","The above code sets the target room to the room \"rm_Game\" and then gets the layer ID for the layer called \"SpriteAssets\" in that room. This layer ID is then used to add 50 random sprite assets to the layer, before the layer target\n    is reset to the current room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_exists","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_get_target_room"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1017"})