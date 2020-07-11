rh._.exports({"0":["date_compare_date"],"1":["date_compare_date"],"2":["date_compare_date"],"3":["\n\n\n\n  ","\n  ","\n  ","With this function you can check two dates to see which one is the earlier or later than the other. The function returns -1 if date1 is earlier, 0 if both dates are the same, and 1 if date1 is later.","\n  "," ","\n  ","\n  ","date_compare_date( date1, date2 );","\n  "," ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","date1","\n        ","The first date.","\n      ","\n      ","\n        ","date2","\n        ","The date to compare it to.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","d = date_compare_date(date_create_datetime(2011, 9, 15, 11, 4, 0), date_current_datetime());","\n  ","This would set \"d\" to the corresponding value depending on which of the dates was the earliest, likely 1 since the current date would be further ahead than 15th September 2011.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Date And TIme","\n        ","Next: ","date_compare_datetime","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["date_compare_date"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1916"})