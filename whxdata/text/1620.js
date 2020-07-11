rh._.exports({"0":["screen_save"],"1":["screen_save"],"2":["screen_save"],"3":["\n  ","\n  ","\n  ","With this function you can save a screenshot of the game as it currently appears in the game window. The file will be saved to the working directory of the game, which in windows is located at ","<drive>:/Users/YOURUSERNAME/AppData/Local/[Game Name]/","    and on Mac it would be ","~/Library/Application Support/[Game Name]/",". The image captured will be the final render of the application surface of the game, or (if the app surface has been disabled) it will be an image of the whole display or window.\n    It is important to note that the function is designed to be called in the ","Draw GUI End Event",", which should give consistent results across all platforms. Using it in any other event may not work as expected, and may give different results across\n    different targets and even devices. Should you need more control over what is being saved, you should use the function ","screen_save_part()",".","\n  ","NOTE: ","This function does not work on the HTML5 target.","\n  "," ","\n  ","\n  ","screen_save(fname);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","fname","\n        ","The filename for the screenshot to save","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if keyboard_check_pressed(ord(\"S\"))","     {\n    ","     screen_save(working_directory + \"Screens\\Screen_\" + string(num++) + \".png\")","     }\n  ","\n  ","The above code takes a screenshot of the game when the user presses the \"S\" key. This screen shot is saved to a specific directory and numbered using a variable which is then incremented.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","Cameras And Display","\n        ","Back: ","\n        ","Next: ","screen_save_part","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["screen_save"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1620"})