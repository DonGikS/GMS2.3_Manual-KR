rh._.exports({"0":["xboxlive_stats_set_stat_real"],"1":["xboxlive_stats_set_stat_real"],"2":["xboxlive_stats_set_stat_real"],"3":["\n  ","\n  ","\n  ","This function can be used to set the value of a stat for the given user ID. You supply the user ID as returned by (for example) the function ","xboxlive_get_user()",", then the stat string\n    to set (","if the stat string does not already exist then a new stat will be created and set to the given value",") and a value (a real) to set the stat to. Note that the stat name must be alphanumeric only, with no symbols or spaces.","\n  ","When setting the stat value, any previous value will be overridden, therefore it is up to you to determine if the stat value should be updated or not (ie. check that the high score is actually the highest) by comparing to the current stat value with\n    the new one before setting it.","\n  ","The function will will return -1 if there was an error or the user ID is invalid, or any other value if the function was successfully called.","\n  "," ","\n  ","\n  ","xboxlive_stats_set_stat_real(user_id, stat, value);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The user ID pointer to set the stat for","\n      ","\n      ","\n        ","stat","\n        ","The statistic to set (a string)","\n      ","\n      ","\n        ","value","\n        ","The value to set the stat to (a real)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if (game_over == true)","     {\n    ","     if (xboxlive_stats_get_stat(p_user_id, \"PercentDone\") < 100)","         {\n    ","         var _val = (global.LevelsFinished / global.LevelsTotal) * 100;","         xboxlive_stats_set_stat_real(p_user_id, \"PercentDone\", _val);","         }\n    ","     }\n  ","\n  ","The above code checks a variable and if it's ","true",", then it will check the value of the \"PercentDone\" stat. If this value is less than 100, a value is then generated and the stat set to that value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_stats_set_stat_int","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_stats_set_stat_real"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2492"})