rh._.exports({"0":["cloud_synchronise"],"1":["cloud_synchronise"],"2":["cloud_synchronise"],"3":["\n  ","\n  ","\n  ","This function would normally be called at the start of a new game and is used to retrieve the current status of the cloud service at game start up. The function returns a unique ","id"," value which would then be used in the ","Asynchronous Cloud Event","    to retrieve the relevant information from the DS map that is created.","\n  ","This function will send off to the cloud for data, which will then trigger the appropriate asynchronous event. In this event, you can check the returned ","async_load"," DS map\n    for the following values:","\n  ","\n    ","\"status\": ","This holds the status code, where a negative value denotes an error, a description of which will be contained in the \"errorString\". A value of 0 (or a positive value) indicates a success(see below for exact values),\n      and the \"resultString\" will contain the returned data or a success message.","\n    ","\"id\": ","The id which was returned from the called function. If you fire off a series of ","cloud_"," requests then you need to know which one you are getting the reply to, and so you would use this value to compare to the value you\n      stored when you originally sent the request to find the right one.","\n    ","\"description\": ","The description of the last uploaded file.","\n    ","\"resultString\": ","This holds a string which is the data blob returned from the cloud.","\n    ","\"errorString\": ","returns an Error String for any error.","\n  ","\n  ","The exact meaning of the returned \"status\" map entry is explained in the following table:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Status Value","\n        ","errorString / resultString","\n        ","Description","\n      ","\n      ","\n        ","-1","\n        ","errorString = \"Not logged in to <SERVICE>\"","\n        ","You have not successfully logged in to the given Cloud Service","\n      ","\n      ","\n        ","0","\n        ","resultString = recovered data","\n        ","New game data downloaded from the cloud (following a cloud_synchronise call)","\n      ","\n      ","\n        ","1","\n        ","resultString = \"AlreadySynchronized\"","\n        ","No new data since you last called cloud_synchronise","\n      ","\n      ","\n        ","2","\n        ","resultString = \"ConflictDeferral\"","\n        ","A conflict was encountered, but the gamer chose to ignore it","\n      ","\n      ","\n        ","3","\n        ","resultString = \"GameUploadSuccess\"","\n        ","data from ","cloud_string_save()"," or ","cloud_file_save()"," was successfully uploaded to the cloud","\n      ","\n      ","\n        ","-n","\n        ","errorString = Description of error","\n        ","Any other negative number means a synchronisation failure","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","cloud_synchronise();","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","This function would be called in an event like the ","Game Start Event"," or in an object that is placed in the first room of your game, with the idea being that you check the current data blob from the cloud server to see if it is up to\n    date or not.","\n  ","cloud_check = cloud_synchronise();","\n  ","You would then want to check the returned ","DS Map"," in the asynchronous ","Cloud Event"," to get the status and the returned string, if there is one, with something like the following code:","\n  ","if ds_map_find_value(async_load, \"id\") == cloud_check","    {\n    ","    if ds_map_find_value(async_load, \"status\") < 0","       {\n    ","       show_message_async(\"Cloud Services not available. Please check connectivity.\");","       }\n    ","    else\n    ","       {\n    ","       if ds_map_find_value(async_load, \"status\") == 0","          {\n    ","          var file = file_text_open_write(\"Save.txt\");","          file_text_write_string(file, ds_map_find_value(async_load, \"resultString\"));","          file_text_close(file);\n    ","          }\n    ","       }\n    ","    }\n  ","\n  ","The above code checks to make sure that the correct asynchronous function call is being revised, then goes on to get the status of the returned cloud DS map. if the status is a negative number, something has gone wrong and the user is informed, otherwise\n    the code will continue and retrieve the synchronised data and write it to a text file for later use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cloud Saving","\n        ","Next: ","cloud_string_save","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["cloud_synchronise"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2184"})