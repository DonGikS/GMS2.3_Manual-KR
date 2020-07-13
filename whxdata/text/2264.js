rh._.exports({"0":["steam_activate_overlay_user"],"1":["steam_activate_overlay_user"],"2":["steam_activate_overlay_user"],"3":["\n  ","\n  ","\n  ","This function will open the Steam overlay to one of the chosen dialogues relating to the user ID given. The possible dialogue strings available are:","\n  ","\n    ","\"","steamid","\" - opens the Steam Community web browser to the page of the user or group","\n    ","\"","chat","\" - opens a chat window to the specified user","\n  ","\n  ","Note that Steam IDs can be large numbers and so you may need to cast your ID value as an ","int64()"," before supplying it to the function.","\n  "," ","\n  ","\n  ","steam_activate_overlay_user(dialog_name, steamid);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","dialog_name","\n        ","The dialogue to open the overlay on (see below).","\n      ","\n      ","\n        ","steamid","\n        ","The Steam user ID or group ID to use.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var key = keyboard_lastkey;"," switch (key)","     {\n    ","     case vk_f1: steam_activate_overlay_user(\"steamid\", global.GameGroupID); break;","     case vk_f2: steam_activate_overlay_user(\"chat\", global.FriendID); break;","     }\n  ","\n  ","The above code polls the last keyboard key pressed and if it is function key 1 or function key 2, it will open the Steam overlay to either see the Steam group stored in the global variable \"GamegroupID\", or it will open the chat window to\n    chat with the user stored in the global \"FriendID\" variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Steam Overlay","\n        ","Next: ","steam_is_overlay_enabled","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_activate_overlay_user"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2264"})