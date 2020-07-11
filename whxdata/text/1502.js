rh._.exports({"0":["texture_prefetch"],"1":["texture_prefetch"],"2":["texture_prefetch"],"3":["\n  ","\n  ","\n  ","This function can be used to \"prefetch\" a texture page or a group of texture pages, ie: load them into VRAM when required. You supply the unique ","texture page ID"," (as returned by the ","texturegroup_*"," functions) to prefetch a single\n    page, or you can supply a ","texture group name"," (as defined in the ","Texture Group Editor",") to prefetch all the texture pages in the group.","\n  "," ","\n  ","\n  ","texture_prefetch(tex_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tex_id","\n        ","The texture page ID (an integer) ","or"," a texture group ID (a string)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var _tex_array = texturegroup_get_textures( \"MainMenu\");"," for (var i = 0; i < array_length(_tex_array); ++i;)","     {\n    ","     texture_prefetch(_tex_array[i]);\n    ","     }\n  ","\n  ","The above code will prefetch all the texture pages under the texture group \"MainMenu\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Textures","\n        ","Next: ","texture_flush","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["texture_prefetch"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1502"})