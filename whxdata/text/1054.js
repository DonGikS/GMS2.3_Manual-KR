rh._.exports({"0":["tile_set_index"],"1":["tile_set_index"],"2":["tile_set_index"],"3":["\n  ","\n  ","\n  ","This function can be used to set the tile index (the position of the tile within the tile set image) for a set of tiledata. You give the tiledata, which can be retrieved using the function ","tilemap_get()",", and then\n    the integer value that represents the position of the tile (its index) within the tile set. The function will return a modified tiledata set which can then be applied using the ","tilemap_set()"," function.","\n  "," ","\n  ","\n  ","tile_set_index(tiledata, index)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tiledata","\n        ","the tiledata to set","\n      ","\n      ","\n        ","index","\n        ","The integer index value of the tile set to use","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (tiledata)","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_sky\");"," var map_id = layer_tilemap_get_id(lay_id);"," var mx = tilemap_get_cell_x_at_pixel(map_id, mouse_x, mouse_y);"," var my = tilemap_get_cell_y_at_pixel(map_id, mouse_x, mouse_y);"," var data\n    = tilemap_get(map_id, mx, my);"," var ind = tile_get_index(data);"," data = tile_set_index(data, irandom(23));"," tilemap_set(map_id, data, mx, my);","\n  ","The above code gets the tilemap ID from the given layer and then uses that to get the tiledata for the cell under the mouse position. This data is then used to set the tile index to a random number.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tile_set_flip","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tile_set_index"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1054"})