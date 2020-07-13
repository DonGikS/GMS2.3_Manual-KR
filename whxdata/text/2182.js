rh._.exports({"0":["show_message_async"],"1":["show_message_async"],"2":["show_message_async"],"3":["\n  ","\n  ","\n  ","This function opens a window and displays the message you define in the function to the user. This is an asynchronous function, and as such GameMaker Studio 2 does ","not"," block the device it is being run on while waiting for answer, but rather\n    keeps on running events as normal. Once the user has pressed the \"Okay\" button, an asynchronous ","Dialog"," event is triggered which, for the duration\n    of that event ","only",", will have a ds_map stored in the variable ","async_load",".","\n  ","This map will contain the two keys, \"id\" and \"status\", with \"id\" being the value that was returned by the function when called, and the \"status\" being either ","true"," for the \"Okay\" button being\n    pressed, or ","false"," if the message was cancelled (where available as not all target platforms permit the cancellation of dialogues).","\n  "," ","\n  ","\n  ","show_message_async(string);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","String","\n        ","The message to show to the user.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","The ","left mouse press event"," (for example) of the object that is showing the message would have the following code:","\n  ","msg = show_message_async(\"You will now be taken to the store\");","\n  ","The above will show a message with the given string. The message id is stored in the variable \"msg\" and will be used in the asynchronous Dialogs event as shown below:","\n  ","var i_d, stat;"," i_d = ds_map_find_value(async_load, \"id\");"," if i_d == msg","     {\n    ","     if ds_map_find_value(async_load, \"status\")","         {\n    ","         url_open(\"https://play.google.com/store\");\n    ","         }\n    ","     }\n  ","\n  ","The above code checks the \"id\" key of the returned ","DS Map"," against the value stored in the variable \"msg\". If they are the same, it then checks to see if the \"Okay\" button was pressed (rather than the window being\n    closed/cancelled) and if it returns ","true"," it opens a url.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Dialog","\n        ","Next: ","show_question_async","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["show_message_async"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2182"})