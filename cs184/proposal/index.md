---
layout: minimal
title: CS 184 Spring 2018 Project Proposal
---
# Cloud Simulation

Team members:
* Jerry Chen (25514439)
* Harry Ho (26795844)
* Tammy Nguyen (25526592)

---

![](/assets/cloudy.jpg)
Picture of clouds by <a href="https://en.wikipedia.org/wiki/User:Muhammad_Mahdi_Karim" class="extiw" title="w:User:Muhammad Mahdi Karim">Muhammad Mahdi Karim</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://www.gnu.org/licenses/old-licenses/fdl-1.2.html" title="GNU Free Documentation License 1.2">GFDL 1.2</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=9105111">Link</a>

## Summary
For our project, we will use OpenGL to accurately render the appearance of
clouds from close up in real time. Additionally, we will allow the user to
traverse the scene to observe clouds illuminated from a variety of
different angles.

## Problem Description
There are many ways to include clouds in graphics programs, ranging in
realism from a simple flat texture to a complex particle simulation. For
some applications, a simple texture far in the background is sufficient.
But in something like a real-time flight simulator, having realistic is a
critical part of the experience.

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
objects.

Performance of the demo will be easier to assess. As a baseline, we hope
that the demo is performant enough that the controls are responsive. As a
rough estimate, this
[StackExchange](https://ux.stackexchange.com/questions/3830/ui-lag-whats-considered-smooth)
response suggests that 10 FPS is a bare minimum for responsiveness. We'll
aim for this minimum target on a standard 2014 Macbook Pro.

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
* Weather effects, like lightning and rain
* Refraction effects from water droplets on the screen (imagine flying
  through precipitation)


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

