rh._.exports({"0":["Rename File"],"1":["DnD™ Action - Rename File"],"2":["Rename File"],"3":["\n  ","\n  ","\n  ","With this action you can rename any file that has been saved by your game. You give the name of the file to change (as a string) and then the new name (also as a string and including the file extension), and the file will be renamed. Note that you ","cannot","    rename any file that was bundled as an Included File with your game (see the section on ","The File System"," for more information).","\n  "," ","\n  ","\n  ","\n  ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Filename","\n        ","The name (as a string) of the file to rename","\n      ","\n      ","\n        ","New Name","\n        ","The new name (as a string) for the file","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will check to see if the file \"checkpoint.sav\" exists, and if\n    it does it then checks to see if the file \"checkpoint_OLD.sav\" exists. If that file exists as well, then it is deleted, and then the original \"checkpoint.sav\" file is renamed to \"checkpoint_OLD.sav\". Finally a buffer\n    is saved as \"checkpoint.sav\" (essentially we are backing up a saved buffer file each time we save it, so that there is always a \"current\" save and an \"old\" save file).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Actions","\n        ","Next: ","Copy File","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Rename File"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"357"})