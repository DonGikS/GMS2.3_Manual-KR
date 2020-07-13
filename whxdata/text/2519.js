rh._.exports({"0":["xboxlive_matchmaking_set_joinable_session"],"1":["xboxlive_matchmaking_set_joinable_session"],"2":["xboxlive_matchmaking_set_joinable_session"],"3":["\n  ","\n  ","\n  ","This function sets a (previously created) session to be available for other users to join through the system UI. A user only has one joinable session at once, and when they leave the session (or the session ends) this will be cleared, however you can\n    clear it manually by passing -1 in for the session argument.","\n  "," ","\n  ","\n  ","xboxlive_matchmaking_set_joinable_session(local_user, session_that_is_joinable);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","local_user","\n        ","The local user ID pointer.","\n      ","\n      ","\n        ","session_that_is_joinable","\n        ","The session ID to make joinable, or -1.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (global.session_ID != -1)","     {","     xboxlive_matchmaking_set_joinable_session(xboxlive_user_for_pad(0), global.session_ID);","     }","\n  ","The above code checks for a valid session ID value, and if one is detected it sets the session to be joinable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Match Making","\n        ","Next: ","xboxlive_matchmaking_join_invite","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_matchmaking_set_joinable_session"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2519"})