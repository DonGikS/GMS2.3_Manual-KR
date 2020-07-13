rh._.exports({"0":["matrix_stack_top"],"1":["matrix_stack_top"],"2":["matrix_stack_top"],"3":["\n\n\n\n\n  ","\n  ","\n  ","This function returns the current top matrix of the stack, but does ","not"," remove it (for that use ","matrix_stack_pop()",").","\n  "," ","\n  ","\n  ","matrix_stack_top();","\n  "," ","\n  ","\n  ","Matrix index","\n  "," ","\n  ","\n  ","var m1 = matrix_build(66, 145, 0, 0, 0, 0, 1, 1, 1);"," var m2 = matrix_build(0, 0, 0, 0, 0, image_angle * 6, 1, 1, 1) ;"," matrix_stack_push(m1);\n    "," matrix_stack_push(m2);\n    "," matrix_set(matrix_world, matrix_stack_top());"," draw_sprite(tyre, 0, 0, 0);"," matrix_stack_pop();\n    "," matrix_stack_pop();\n  ","\n  ","The above code will build two new matrices and then push them onto the matrix stack. The world matrix is then set to the top of the stack, a sprite is drawn and the transforms are then popped from the stack.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Matrix Functions","\n        ","Next: ","matrix_get","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["matrix_stack_top"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2034"})