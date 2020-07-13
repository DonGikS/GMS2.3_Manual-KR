rh._.exports({"0":["steam_get_user_steam_id"],"1":["steam_get_user_steam_id"],"2":["steam_get_user_steam_id"],"3":["\n  ","\n  ","\n  ","You can use this function to return the unique Steam ","user id"," of the user currently logged into the Steam client. This is a unique 64 bit value that can be used to identify individual users and ","not"," their on screen user name (this can be\n    found using the function ","steam_get_persona_name()","). As this is an int64 you may need to cast it as such when using it in subsequent functions using the ","int64()","    function.","\n  "," ","\n  ","\n  ","steam_get_user_steam_id();","\n  "," ","\n  ","\n  ","Integer (int64)","\n  "," ","\n  ","\n  ","if steam_initialised()","     {\n    ","     global.u_id = steam_get_user_steam_id();","     }\n  ","\n  ","The above code will set a global variable to the current users unique Steam ID if the Steam client API is correctly initialised.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Steam API","\n        ","Next: ","steam_get_persona_name","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_get_user_steam_id"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2252"})