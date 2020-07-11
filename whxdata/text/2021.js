rh._.exports({"0":["matrix_build"],"1":["matrix_build"],"2":["matrix_build"],"3":["\n\n\n\n  ","\n  ","\n  ","This function can be used to create your own custom matrix and will return an index value for this new matrix which should be stored in a variable for future reference and use. The matrix itself is created as 16 value ","array","    where the first 4 elements are row 1, the second 4 elements are row 2 etc... of a 4x4 matrix.","\n  ","NOTE",": When you build a new matrix in this way the order of operation is YXZ.","\n  "," ","\n  ","\n  ","matrix_build(x, y, z, xrotation, yrotation, zrotation, xscale, yscale, zscale);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x component of the translation vector.","\n      ","\n      ","\n        ","y","\n        ","The y component of the translation vector.","\n      ","\n      ","\n        ","z","\n        ","The z component of the translation vector.","\n      ","\n      ","\n        ","xrotation","\n        ","The angle to rotate around the x-axis (in degrees °).","\n      ","\n      ","\n        ","yrotation","\n        ","The angle to rotate around the y-axis (in degrees °).","\n      ","\n      ","\n        ","xzotation","\n        ","The angle to rotate around the z-axis (in degrees °).","\n      ","\n      ","\n        ","xscale","\n        ","The x scale amount.","\n      ","\n      ","\n        ","yscale","\n        ","The y scale amount.","\n      ","\n      ","\n        ","zscale","\n        ","The z scale amount.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Matrix index (4x4 Matrix)","\n  "," ","\n  ","\n  ","t_matrix = matrix_build(x, y, 0, 0, 90, 0, 1, 2, 1);","\n  ","The above code will build a new matrix transform and store the resulting matrix index in the variable \"t_matrix\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Matrix Functions","\n        ","Next: ","matrix_multiply","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["matrix_build"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2021"})