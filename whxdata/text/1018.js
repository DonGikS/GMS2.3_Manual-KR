rh._.exports({"0":["Tile Map Layers"],"2":["Tile Map Layers"],"3":["\n  ","\n  ","\n  ","The GameMaker Studio 2 ","Room Editor"," permits you to add tiles into any given room using ","layers",". As the name implies, a tile map layer is simply a collection of tile set tiles that\n    are all considered to be at the same depth within the room, and by stacking layers you can make some things draw over or under others. You can also control certain aspects of layers from code, adding or removing things, or changing certain properties\n    of the layer or what it contains at run time. Note that in the room editor you are limited to one tile map per layer (the ","Tile Layer","), but when working with\n    them in code, you can have multiple tile maps assigned to a single layer, with each map having its own unique ID and properties, so:","\n  ","\n    ","The ","tile set"," is the resource that you use to create tile layers and tile maps","\n    ","The ","tile layer"," is what you create in the Room Editor to add tile sets to","\n    ","The ","tile map"," is what you call the collection of tiles that are added to a layer, either in the room editor or through code, as a single element on that layer","\n  ","\n  ","Below is a list of all the functions that can be used for editing ","tile map layers",":","\n  "," ","\n  ","\n    ","layer_tilemap_get_id","\n    ","layer_tilemap_exists","\n    ","layer_tilemap_create","\n    ","layer_tilemap_destroy","\n    ","tilemap_tileset","\n    ","tilemap_clear","\n    ","tilemap_x","\n    ","tilemap_y","\n    ","tilemap_set","\n    ","tilemap_set_at_pixel","\n    ","tilemap_set_mask","\n    ","tilemap_set_global_mask","\n    ","tilemap_set_width","\n    ","tilemap_set_height","\n    ","tilemap_get_mask","\n    ","tilemap_get_global_mask","\n    ","tilemap_get_tileset","\n    ","tilemap_get_frame","\n    ","tilemap_get_tile_width","\n    ","tilemap_get_tile_height","\n    ","tilemap_get_width","\n    ","tilemap_get_height","\n    ","tilemap_get_x","\n    ","tilemap_get_y","\n    ","tilemap_get","\n    ","tilemap_get_at_pixel","\n    ","tilemap_get_cell_x_at_pixel","\n    ","tilemap_get_cell_y_at_pixel","\n    ","draw_tilemap","\n  ","\n  "," ","\n  ","Apart from the functions listed above to set tile maps, you also have a number of functions that can be used to manipulate the data of individual tiles. A \"blob\" of tile data is made up of the tile index plus a few extra bits to show whether\n    the tile has been rotated, flipped or mirrored. You also have the possibility of adding your own bitmask to the tile data, although this is for advanced users only as you will be masking off bits that are reserved for the tile index - essentially\n    there are 19 bits reserved for your tile indices, but if you only use 8 of them, then you have eleven bits left over that can be used to create a custom mask. This mask can then be used and checked in code to create custom tile collisions or whatever.\n    However, you would normally not need to create your own tile data blobs, and would instead use the function ","tilemap_get()"," to get the tile data, then you would manipulate it using the functions below, and then\n    you would set it again using ","tilemap_set()",".","\n  ","Below is a list of all the functions that can be used for editing individual ","tiles",":","\n  "," ","\n  ","\n    ","tile_get_empty","\n    ","tile_get_index","\n    ","tile_get_flip","\n    ","tile_get_mirror","\n    ","tile_get_rotate","\n    ","tile_set_empty","\n    ","tile_set_index","\n    ","tile_set_flip","\n    ","tile_set_mirror","\n    ","tile_set_rotate","\n    ","draw_tile","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","Background Layers","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Tile Map Layers"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"1018"})