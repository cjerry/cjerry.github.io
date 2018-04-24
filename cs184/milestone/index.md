---
layout: minimal
title: CS 184 Spring 2018 Project Milestone
---
# Cloud Simulation Milestone

Team members:
* Jerry Chen (25514439)
* Harry Ho (26795844)
* Tammy Nguyen (25526592)

---

## Summary

So far, we have implemented basic traversal of the scene, as well as
adding in some sample particles to be rendered as clouds later.

## Progress

Originally, we had planned to have some sample clouds rendered at this
point, and then add in movement controls later. It turns out that movement
of the camera is relatively straightforward, but cloud rendering using
WebGL requires a bit more planning.

Our initial idea was to use a [light scattering
model](https://software.intel.com/en-us/articles/dynamic-volumetric-cloud-rendering-for-games-on-multi-core-platforms/)
to render clouds; in the current checkpoint, we have demonstrated that
creating such particles is feasible, and it interacts well with the
movement controls we have so far. However, it will take some additional
time to figure out how to we can apply the light scattering model since
the WebGL library we are using doesn't seem to easily allow for it.

Another possibility is to try an alternate rendering approach that will be
more friendly to our current setup. For example, projecting textures onto
the scene in a way that appears realistic. It's also feasible to use
images of clouds as cloud "imposters" in the background of the scene,
since they appear far enough away that interaction is not required.

## Next Steps
We plan to explore the alternate cloud rendering approaches, and hope to
converge on one of the ideas soon.

From there, we still need to make sure that travelling into the cloud
layer is realistic, which could perhaps be simulated as fog.

## Downloads
- [Milestone slides](./milestone.pdf)
- Milestone video
<iframe width="560" height="315" src="https://www.youtube.com/embed/FIiS-2NfEUs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
