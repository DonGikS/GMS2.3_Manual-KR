rh._.exports({"0":["ds_grid_value_disk_y"],"1":["ds_grid_value_disk_y"],"2":["ds_grid_value_disk_y"],"3":["\n  ","\n  ","\n  ","With this function you can get the y coordinate (within the given grid disc-shaped region) of the value being searched for. You give the DS grid index (as returned by ","ds_grid_create()",") along with the x/y positions\n    for the center cell of the disk. Then you give the radius (as an integer value) around the center cell to search, before supplying the value to search for. If the value being searched for does not exist, then the function will return -1.","\n  "," ","\n  ","\n  ","ds_grid_value_disk_y(index, xm, ym, r, val);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the grid.","\n      ","\n      ","\n        ","xm","\n        ","The x position of the disk on the grid.","\n      ","\n      ","\n        ","ym","\n        ","The y position of the disk on the grid.","\n      ","\n      ","\n        ","r","\n        ","The radius of the disk on the grid.","\n      ","\n      ","\n        ","val","\n        ","The value to find.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if ds_grid_value_disk_exists(grid, 5, 5, 5, val)","    {\n    ","    xpos = ds_grid_value_disk_x(grid, 5, 5, 5, val);","    ypos = ds_grid_value_disk_y(grid, 5, 5, 5, val);","    }\n  ","\n  ","The above code checks a DS grid for a specific value within a disk region. if it is found, it then stores the x and y position of the value in two variables for later use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Grids","\n        ","Next: ","ds_grid_copy","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_grid_value_disk_y"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1766"})