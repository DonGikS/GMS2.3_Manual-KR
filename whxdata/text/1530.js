rh._.exports({"0":["camera_get_view_mat"],"1":["camera_get_view_mat"],"2":["camera_get_view_mat"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the view matrix. The function returns the matrix ID value which can then be used in other ","matrix functions"," or to set the view matrix of\n    another camera (using ","camera_set_view_mat()","). Note that this function is generally for use with cameras created using ","camera_create()",", but it can also be used\n    on those created in the room editor (or with ","camera_create_view()",") - in which case the returned matrix will only be valid after the given camera is used in a view port for the first time.","\n  "," ","\n  ","\n  ","camera_get_view_mat(camera_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","camera_id","\n        ","The unique camera ID value returned when you created the camera","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Matrix ID (real)","\n  "," ","\n  ","\n  ","mat = camera_get_view_mat(camera_view[0]);","\n  ","The above code gets the view matrix for the camera assigned to view port[0].","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_get_proj_mat","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["camera_get_view_mat"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1530"})