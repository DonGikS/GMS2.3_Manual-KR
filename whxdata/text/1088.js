rh._.exports({"0":["layer_sprite_destroy"],"1":["layer_sprite_destroy"],"2":["layer_sprite_destroy"],"3":["\n  ","\n  ","\n  ","This function will destroy the given sprite element. You supply the sprite ID (which you get when you create the sprite using ","layer_sprite_create()"," or when you use the layer ID along with ","layer_get_sprite_id()",")\n    and this will remove it. Note that this does ","not"," remove the layer, only the sprite from it, and if the sprite is one that has been added in the room editor, then the next time you leave the room and then return, the sprite will be recreated\n    again. However if the room is persistent, the sprite will be removed unless room persistence is switched off again.","\n  "," ","\n  ","\n  ","layer_sprite_destroy(sprite_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite_element_id","\n        ","The unique ID value of the sprite to be destroyed","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Asset_Trees\");"," if layer_sprite_exists(lay_id, global.Asset_spr_trees)","     {\n    ","     layer_sprite_destroy(lay_id);\n    ","     }\n  ","\n  ","The above code checks the layer \"Asset_Trees\" to see if the given sprite element exists and if it does, then it is destroyed (but not the layer).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Layers","\n        ","Next: ","layer_sprite_change","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sprite_destroy"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1088"})