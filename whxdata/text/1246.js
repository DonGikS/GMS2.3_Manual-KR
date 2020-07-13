rh._.exports({"0":["gpu_get_texfilter_ext"],"1":["gpu_get_texfilter_ext"],"2":["gpu_get_texfilter_ext"],"3":["\n  ","\n  ","\n  ","With this function you can check to see whether texture interpolation (linear interpolation) is enabled (returns ","true",") or not (returns ","false",") for a given shader sampler texture.","\n  ","NOTE",": On the HTML5 target, this function will only work with WebGL enabled.","\n  "," ","\n  ","\n  ","gpu_get_texfilter_ext(sampler_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sampler_id","\n        ","The sampler id from the shader.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var s_tex = shader_get_sampler_index(shader_glass, \"s_NoiseSampler\");"," if gpu_get_texfilter_ext(s_tex)","     {\n    ","     gpu_set_texfilter_ext(s_tex, false);","     }\n    "," else\n    ","     {\n    ","     gpu_set_texfilter_ext(s_tex, true);","     }\n  ","\n  ","The above code checks to see if texture filtering is on or off for a specific sampler ID (stored in a local variable) and switches it accordingly.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_get_texrepeat","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_get_texfilter_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1246"})