rh._.exports({"0":["ds_list_destroy"],"1":["ds_list_destroy"],"2":["ds_list_destroy"],"3":["\n  ","\n  ","\n  ","This function will remove the given list data-structure from memory, freeing up the resources it was using and removing all values that it contained. This function should always be used when you are finished using the ds_list to prevent memory leaks\n    that can slow down and crash your game. Note that destroying a list will de-reference any data structures stored in it giving a memory leak, so you would need to go through the list and destroy all data structure items manually before destroying it\n    to prevent this. The only time this is not required is when you have flagged any items in the list as another ","DS list"," or as a ","DS map",", in which case these items will be destroyed and their\n    memory cleaned up automatically as well.","\n  ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that data structures of different types can have the ","same"," index value, so if in doubt you should be using the\n    ","ds_exists()"," function before accessing them. Also note that indices are re-used, so a destroyed data structure index value may be used by a newly created one afterwards so we recommend\n      always setting the variable that held the DS index to -1 after destroying.","\n  "," ","\n  ","\n  ","ds_list_destroy(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the data structure to remove.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (lives == 0)","     {\n    ","     ds_list_destroy(AI_list);\n    ","     AI_list = -1;","     room_goto(rm_Menu);\n    ","     }\n  ","\n  ","The above code will check the value of the built in global variable \"lives\" and if it is 0, it destroys the DS list indexed in the variable \"AI_list\" and then changes rooms.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Lists","\n        ","Next: ","ds_list_clear","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_list_destroy"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1771"})