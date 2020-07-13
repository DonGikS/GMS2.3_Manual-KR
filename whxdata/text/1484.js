rh._.exports({"0":["Particle Emitters"],"2":["Particle Emitters"],"3":["\n  ","\n  ","\n  ","Particle ","emitters ","are used by GameMaker Studio 2 to emit particles over an area of the screen which can have different forms and distributions. They can also either create a continuous stream of particles\n    or they can burst out a number of particles all at once, depending on the way the functions are used.","\n  ","Since a particle emitter is a dynamically created resource, you must create it and store the returned index in a variable to reference the emitter in all further function calls, and it is very important that you also destroy the emitter when it is no\n    longer needed or else you will have a memory leak that will slow down and eventually crash your game. It is also worth noting that particle emitters will live on forever after they are created, even if the index is no longer stored. So even if you\n    change room or restart the game, the systems and the particles will remain, and be visible, in all further rooms so you should ensure you destroy them once you no longer need them.","\n  ","The following functions are available to set the emitters and to let them create particles. Note that each of them gets the index of the ","particle system"," to which it belongs as a first argument.","\n  "," ","\n  ","\n    ","part_emitter_exists","\n    ","part_emitter_create","\n    ","part_emitter_clear","\n    ","part_emitter_region","\n    ","part_emitter_burst","\n    ","part_emitter_stream","\n    ","part_emitter_destroy","\n    ","part_emitter_destroy_all","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particles","\n        ","Next: ","Particle Systems","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Particle Emitters"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"1484"})