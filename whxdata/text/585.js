rh._.exports({"0":["sprite_save"],"1":["sprite_save"],"2":["sprite_save"],"3":["\n  ","\n  ","\n  ","This function can be used to save any sub-image of any sprite to disc, giving it the specified filename. This image ","must"," be a ","*.png"," file.","\n  ","NOTE",": Depending on the target platform that is chosen you are limited as to where you can save and load files from. See ","File Handling"," for more information.","\n  "," ","\n  ","\n  ","sprite_save(ind, subimg, fname);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the sprite to save.","\n      ","\n      ","\n        ","subimg","\n        ","The sub-image of the sprite to save.","\n      ","\n      ","\n        ","fname","\n        ","The filename for the saved sprite.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var surf, spr_custom;"," surf = surface_create(32, 32);"," surface_set_target(surf);\n    "," draw_clear_alpha(c_black, 0);"," draw_sprite(spr_Body, 0, 0, 0);"," draw_sprite(spr_Clothes, 0, 0, 0);"," draw_sprite(spr_Hair, 0, 0, 0);"," spr_custom = sprite_create_from_surface(surf, 0, 0, 32, 32, true, true, 16, 16);"," surface_reset_target();\n    "," surface_free(surf);\n    "," sprite_save(spr_custom, 0, \"Player_Custom_Sprite.png\");"," sprite_delete(spr_Custom);\n  ","\n  ","The above code creates a surface and stores its index in the local variable \"surf\". It then targets that surface, clears it and draws several sprites on top of each other. It creates a new sprite from the composite image drawn on the surface\n    and assigns its index to the local variable \"spr_Custom\" before freeing up the memory used by the surface. Finally, the resulting sprite is saved to a file and then removed from memory too.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_save_strip","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sprite_save"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns","Example:"],"id":"585"})