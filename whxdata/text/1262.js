rh._.exports({"0":["gpu_set_texfilter_ext"],"1":["gpu_set_texfilter_ext"],"2":["gpu_set_texfilter_ext"],"3":["\n  ","\n  ","\n  ","This function can be used to set the linear interpolation for a single sampler \"slot\" when using ","Shaders"," in GameMaker Studio 2. When this is enabled (","true",") the sampler\n    texture will be smoothed and if this is disabled (","false",") then images will be drawn based on the nearest pixel. The default value is that set by the ","Global Game Options"," for your game, or that set using the function ","gpu_set_texfilter()",".","\n  ","NOTE",": This setting will be over-ridden by the value set when calling the function ","gpu_set_texfilter()",".","\n  ","NOTE",": On the HTML5 target, this function will only work with WebGL enabled.","\n  "," ","\n  ","\n  ","gpu_set_texfilter_ext(sampler_id, enable);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sampler_id","\n        ","The sampler id from the shader.","\n      ","\n      ","\n        ","enable","\n        ","Enable or disable texture filtering (","true"," / ","false",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var s_tex = shader_get_sampler_index(shader_glass, \"s_NoiseSampler\");"," if gpu_get_texfilter_ext(s_tex)","     {\n    ","     gpu_set_texfilter_ext(s_tex, false);","     }\n    "," else\n    ","     {\n    ","     gpu_set_texfilter_ext(s_tex, true);","     }\n  ","\n  ","The above code checks to see if texture filtering is on or off for a specific sampler ID (stored in a local variable) and switches it accordingly.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_set_texrepeat","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_set_texfilter_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1262"})