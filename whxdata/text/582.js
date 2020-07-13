rh._.exports({"0":["sprite_delete"],"1":["sprite_delete"],"2":["sprite_delete"],"3":["\n  ","\n  ","\n  ","This function will delete a sprite from the game, freeing any memory that was reserved for it. This is a very important function for those moments when you need to create and change sprites from external sources (like loading a sprite from a file with\n    ","sprite_add()",", or duplicating a sprite using ","sprite_duplicate()",") and should always be used to remove those assets that are no longer\n    needed by a game, or to clear an indexed asset from a variable before re-assigning another asset to that variable. ","This cannot be used to delete sprites that are included in the game as part of the assets in the Asset Browser",".","\n  "," ","\n  ","\n  ","sprite_delete(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sprite to be deleted.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var spr = sprite_create_from_surface(application_surface, 0, 0, 32, 32, false, false, 16, 16);"," sprite_merge(spr_Player, spr);"," sprite_delete(spr);\n  ","\n  ","The above code creates a local variable and then stores the index of the sprite created from the application surface. This sprite is then merged with the asset indexed in the variable \"spr_Player\" before being removed from memory again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_set_alpha_from_sprite","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sprite_delete"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns","Example:"],"id":"582"})