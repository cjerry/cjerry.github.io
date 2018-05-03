---
layout: minimal
title: CS 184 Spring 2018 Final Report
---
# Cloud Simulation

---
<link rel="stylesheet" href="assets/css/main.css?version=1.3"/>

<div id="container">
<canvas id="maincanvas"></canvas>
<div class="controls_container">
<p>
Controls <br/>
<b>WASD:</b> fly<br/>
<b>QE:</b> roll<br/>
<b>Left-Right arrows:</b> yaw<br/>
<b>Up-Down arrows:</b> pitch<br/>
<b>Drag:</b> look
</p>
</div>

<div id="canvas-stats">
</div>
</div>

<button type="button" id="demo" class="btn btn-primary">Show/Hide Demo</button>

<script>
var button = document.getElementById('demo');

button.onclick = function() {
    var div = document.getElementById('container');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

var canvas = document.getElementById('maincanvas');
canvas.style.width ='100%';
canvas.style.height = '480px';
canvas.width  = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
</script>

<!-- vertex and fragment shader for point cloud -->
<script type="x-shader/x-vertex" id="v_shader">
// we need to retain the alpha values between vertex and frag
attribute vec4 aVertexPosition;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying float alpha;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
}

</script>
<script type="x-shader/x-fragment" id="f_shader">

varying float alpha
varying vec3 color

void main() {
  gl_FragColor = vec4(color, alpha)
}
</script>

<script src="assets/js/three.min.js"></script>
<script src="assets/js/FlyControls.js"></script>
<script src="assets/js/Sky.js"></script>
<script src="assets/js/Lensflare.js"></script>
<script src="assets/js/Stats.js"></script>
<script src="assets/js/main.js?version=1.4"></script>

## Summary
For our project, we will use OpenGL to accurately render the appearance of
clouds from close up in real time. Additionally, we will allow the user to
traverse the scene to observe clouds illuminated from a variety of
different angles.

## Technical Approach

## Results

## References

## Contributions from each team member


# Old


## Problem Description
There are many ways to include clouds in graphics programs, ranging in
realism from a simple flat texture to a complex particle simulation. For
some applications, a simple texture far in the background is sufficient.
But in something like a real-time flight simulator, having realistic
renderings of the sky is a critical part of the experience.

Cloud renderings differ from the surface renderings we implemented in the
raytracer project in that clouds are made up of millions of miniscule
particles that refract and reflect light, separated by air and suspended
in the atmosphere. We will have to figure out a way to simulate these
particles in real time to create the illusion that the viewer is flying
through the clouds.

Based on the existing literature, there exist methods to do cloud
rendering in real time, but the most advanced techniques take advantage of
GPU acceleration to achieve real time performance. Our goal is to create
believable cloud renders in real time without relying upon expensive high
performance hardware. This tradeoff is likely going to be the most
challenging aspect of the project.

[This paper from
Intel](https://software.intel.com/en-us/articles/dynamic-volumetric-cloud-rendering-for-games-on-multi-core-platforms/)
(dynamic volumetric cloud rendering) mentions a particle method for
simulating clouds that we would like to try in OpenGL (which does support
        parallelism). It uses "a multithread framework and Intel® Streaming SIMD
Extensions (Intel® SSE) instructions" to achieve real time performance. On
top of that, the method described also simulates dynamic evolution of
clouds, which could be a feasible stretch goal.

## Goals

### Main
Our main goal is to create a believable real time demo of a scene
featuring static clouds as well as a light source (the sun) using WebGL.
There will also be keyboard controls that allow the user of our demo to
traverse the scene. They will be able to fly above the clouds, seeing
differences in appearance based on how the clouds interact with the light
reflecting off or passing through it.

Of course, accuracy of the clouds is going to be fairly subjective -- our
goal is to create realistic enough clouds that it takes a non-cloud expert
at least a few seconds to discern that the image they are looking at is a
computer generated render. For rendering clouds, we will investigate and
implement ray penetration through volume textures based on both direct and
indirect light. Direct lighting will come from a fixed point, while the
indirect lighting will deal mainly with light bouncing off of other
objects, such as other clouds.

Performance of the demo will be easier to assess. As a baseline, we hope that
the demo is performant enough that the controls are responsive. As a rough
estimate, this
[StackExchange](https://ux.stackexchange.com/questions/3830/ui-lag-whats-considered-smooth)
response suggests that 10 FPS is a bare minimum for responsiveness. We'll aim
for this minimum target on a standard 2014 Macbook Pro. We will also have a
reasonable 2 GB cap on memory usage for the WebGL implementation. This is to
ensure we properly close off any potential memory leaks and prevent newly
generated clouds from churning through too much memory.

### Stretch
Performance wise, while something like 10 FPS is the bare minimum, we hope
to achieve at least 30 FPS for our demo. Of course, this will vary
depending on the device that the demo is run on. We would like to have
varying volumetric renderings of clouds that change size and shape over
time.

There are a couple of additional graphical features we would like to
showcase, given the time.
* The ability to travel through and below clouds. This would showcase the
difference in appearance of clouds from below vs above.
* Dynamic cloud evolution.
* Weather effects, like lightning and rain.
* Refraction effects from water droplets on the screen (imagine flying
        through precipitation).
* Lens flare that might result from facing the sun at certain angles.


## Schedule
For the first week, we plan to setup our development environments and get
acquainted with OpenGL. At this point, we will also conduct research into
the feasibility of our current plan, and scope out alternative cloud
rendering approaches.

From there, it's a bit difficult to estimate how much time it will take to
complete the different parts of the project. We hope to have the static
cloud rendering done by the checkpoint, at which point we would turn our
attention to implementing traversal. Any remaining time after that would
be put towards our stretch goals.

## Resources
### Reference

| Resource | Notes |
| :-- | :-- |
| [ThreeJS example of fog and terrain](https://threejs.org/examples/#webgl_geometry_terrain_fog) | |
| [Volumetric Path Tracing - Wikipedia](https://en.wikipedia.org/wiki/Volumetric_path_tracing) | |
| [Crepuscular Rays - Wikipedia](https://en.wikipedia.org/wiki/Crepuscular_rays) | |
| [Clouds with WebGL demo](http://www.html5code.com/gallery/mr-doob-clouds/)| This is a very basic implementation of what we want to achieve.
| [Intel article about dynamic realtime rendering](https://software.intel.com/en-us/articles/dynamic-volumetric-cloud-rendering-for-games-on-multi-core-platforms/) |
| [Scattering model for fog/mist paper](https://cseweb.ucsd.edu/~ravir/papers/singlescat/scattering.pdf) | Originally linked under the project ideas. |
| [Real-Time Cloud Rendering paper](https://pdfs.semanticscholar.org/a999/d556007e2782c470dd3948b91676f37b7261.pdf) | Presents a technique targeted at flight simulation and games. |
| [Rough HI Guidelines from StackExchange](https://ux.stackexchange.com/questions/3830/ui-lag-whats-considered-smooth ) ||

### Compute
We have laptops, and will run WebGL on our CPUs only. After seeing other
WebGL demos, we are optimistic that this will run with acceptable
performance. If needed, we will use the discrete GPUs on lab computers to
render.

