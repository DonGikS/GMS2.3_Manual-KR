rh._.exports({"0":["gif_save"],"1":["gif_save"],"2":["gif_save"],"3":["\n  ","\n  ","\n  ","With this function you can save out a GIF animation. You supply the GIF index (as returned by the function ","gif_open()",") as well as a filename to save it with. Note that GameMaker Studio 2 does not automatically\n    append the ",".gif"," file extension, so you should include this as part of the filename string if you wish the saved file to be identified as a GIF. The created GIF will be palletized using the Universal 884 Palette (see ","here"," for more information).","\n  ","Note that if the function is successful and the GIF is saved correctly, then it will return 0, otherwise it will return -1.","\n  "," ","\n  ","\n  ","gif_save(gif_index, fname);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","gif_index","\n        ","The ID of gif to save","\n      ","\n      ","\n        ","fname","\n        ","The filename to use for the gif","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","if save_gif == true"," {\n    "," if count == 0","     {\n    ","     gif_image = gif_open(room_width, room_height);","     }\n    "," else if count < 30","     {\n    ","     gif_add_surface(gif_image, application_surface, 6/100);","     }\n    "," else\n    ","     {\n    ","     gif_save(gif_image, \"GameCapture.gif\");","     count = 0;","     save_gif = false;","     }\n    "," count++;\n    "," }\n  ","\n  ","The above code will create a GIF image file with 30 frames taken from the application surface and then save it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And Display","\n        ","Next: ","gif_save_buffer","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gif_save"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1624"})