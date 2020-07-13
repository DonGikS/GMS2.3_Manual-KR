rh._.exports({"0":["physics_joint_revolute_create"],"1":["physics_joint_revolute_create"],"2":["physics_joint_revolute_create"],"3":["\n  ","\n  ","\n  ","A revolute joint forces two bodies to share a common anchor point (often called a hinge point) and the joint has a single degree of freedom - the relative rotation of the two bodies around this point. To specify a revolute you need to provide two instances\n    and a single anchor point in the room, as you can see in the image provided:","\n  ","If you look at the image, you can see that the two instances have been created\n    to over-lap and at the point where they are touching, we have defined a revolute joint. Now, this joint can be limited in its freedom of rotation thanks to the \"ang_min_limit\" and \"ang_max_limit\" values. How does this work? Well,\n    let's look at another image:","\n  ","As you can see, angles in the physics world are ","not"," the same as the standard\n    GameMaker Studio 2 angles where right is 0 degrees and then it goes anti-clockwise so that up is 90, left is 180, and down is 270. No, when dealing with the revolute joint, the 0 degrees axis runs from the joint position to the origin of the\n    second instance defined by the function and the angles are then calculated in a clockwise direction. If you switch on angle limiting, the limits are defined as being relative to this 0 degree axis and the limit range ","should include zero",", otherwise\n    the joint will lurch when the room begins. Finally, you can define the joint as having a motor or not. This means that when uninfluenced by a collision the joint will move in a direction, which is defined by the motor speed with a positive number\n    being clockwise and a negative number being anti-clockwise. The \"max_motor_torque\" argument is for limiting the speed of the rotation so that you don't get a perpetually accelerating motor and to limit the influence that a collision\n    may have on the rotation. In this way you can use a joint motor to simulate joint friction by setting joint speed to zero and maximum torque to some small, but significant value. The motor will try to prevent the joint from rotating, but will yield\n    to a significant load.","\n  ","As with all the joints, if you set the \"col\" value to ","true"," then the two instances can interact and collide with each other but ","only"," if they have collision events, however if it is set to ","false",", they will not collide\n    no matter what.","\n  "," ","\n  ","\n  ","physics_joint_revolute_create(inst1, inst2, w_anchor_x, w_anchor_y, ang_min_limt, ang_max_limit, ang_limit, max_motor_torque, motor_speed, motor, col)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","inst1","\n        ","The first instance to connect with the joint","\n      ","\n      ","\n        ","inst2","\n        ","The second instance to connect with the joint","\n      ","\n      ","\n        ","w_anchor_x","\n        ","The x coordinate for the joint, within the game world","\n      ","\n      ","\n        ","w_anchor_y","\n        ","The y coordinate for the joint, within the game world","\n      ","\n      ","\n        ","ang_min_limit","\n        ","The lower permitted limit for the joint angle","\n      ","\n      ","\n        ","ang_max_limit","\n        ","The upper permitted limit for the joint angle","\n      ","\n      ","\n        ","ang_limit","\n        ","Whether the to limit the angle of the joint (true) or not (false)","\n      ","\n      ","\n        ","max_motor_torque","\n        ","Sets the maximum motor torque used to achieve the desired motor speed (in Newtons per meter)","\n      ","\n      ","\n        ","motor_speed","\n        ","This is the speed at which the motor should rotate","\n      ","\n      ","\n        ","motor","\n        ","Whether the motor should be active (true) or not (false)","\n      ","\n      ","\n        ","col","\n        ","Whether the two instances can collide (true) or not (false)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer (index of the joint)","\n  "," ","\n  ","\n  ","var mainFixture, o_id;"," mainFixture = physics_fixture_create();"," physics_fixture_set_circle_shape(mainFixture, sprite_get_width(sprite_index) / 2);"," o_id=instance_create_layer(x+25, y, \"Instances\", obj_Door);"," physics_fixture_bind(mainFixture,\n    id);"," physics_fixture_bind(mainFixture, o_id);"," physics_joint_revolute_create(id, o_id, x+25, y, -90, 90, 1, 0, 0, 0, 0);"," physics_fixture_delete(mainFixture);\n  ","\n  ","The above code creates and defines a new fixture and then creates an instance of \"obj_Door\", binding the created fixture to the two new objects. They are then joined by a revolute joint with no motor and the angles limited to a +/- 90 degree\n    swing. Finally the fixture is deleted as it is no longer needed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Joints","\n        ","Next: ","physics_joint_prismatic_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_joint_revolute_create"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2081"})