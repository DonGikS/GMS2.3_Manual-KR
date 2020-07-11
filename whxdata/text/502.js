rh._.exports({"0":["array_set"],"1":["array_set"],"2":["array_set"],"3":["\n  ","\n  ","\n  ","With this function you can set the value of an index in an array to a value. The function requires you to provide a variable that holds the array as well as the index to set and the value to set it to. This function can also be used for multi-dimension\n    arrays, as long as you specify which dimension you want to set when you supply the array index, following this pattern:","\n  ","// 1D array"," array_set(my_array, 0, 100);"," // 2D array"," array_set(my_array[0], 0, 100);"," // 3D array"," array_set(my_array[0][0], 0, 100);"," // etc...","\n  "," ","\n  ","\n  ","array_set(variable, index, value);","\n  \n    ","\n      ","\n        ","\n          ","Argument","\n          ","Description","\n        ","\n        ","\n          ","variable","\n          ","The variable that holds the array.","\n        ","\n        ","\n          ","index","\n          ","The index of the array to set the value for.","\n        ","\n        ","\n          ","value","\n          ","The value to set.","\n        ","\n      ","\n    ","\n  \n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","for (var i = 0; i < 10; ++i;)","     {\n    ","     array_set(score_array, i, i*100));","     }\n  ","\n  ","The above code will set the first 10 items in the given array to a value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","array_length","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["array_set"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"502"})