rh._.exports({"0":["tilemap_get_height"],"1":["tilemap_get_height"],"2":["tilemap_get_height"],"3":["\n  ","\n  ","\n  ","Using this function you can retrieve the height (in cells) of the tilemap element. You give the tilemap element ID (which you get when you create a tilemap element using ","layer_tilemap_create()"," or when\n    you use the function ","layer_tilemap_get_id()","), and the function will return the height (number of cells wide).","\n  "," ","\n  ","\n  ","tilemap_get_height(tilemap_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","The unique ID value of the tilemap element to get the height of","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_Walls\");"," var map_id = layer_tilemap_get_id(lay_id);"," var _w = tilemap_get_width(map_id);"," var _h = tilemap_get_height(map_id);"," total_tiles = (_w * _h);","\n  ","The above code uses the retrieved tilemap ID to get the tile width and height of the tilemap and then uses those values to set an instance variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_get_x","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tilemap_get_height"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1040"})