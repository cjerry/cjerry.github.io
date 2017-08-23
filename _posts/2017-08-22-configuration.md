---
layout: post
title: "Configuration, part 1"
description: "Vim (or rather, Neovim)"
---

Development configs can be a surprisingly divisive topic (tabs vs spaces, Vim vs
Emacs, etc.). To some extent, this doesn't really matter -- as long you're
comfortable and productive with your tools, no one should care what you're using
(and yes, I'm guilty of bugging people about their config).

I have a [setup page](/cs61a/setup) that recommends a mishmash of different
tools, but doesn't really go much in depth on why I chose what I chose. This is
for a few reasons:

1. That stuff is boring, especially if you aren't looking for it.
2. Actually, really just reason #1.

I figure if you're still reading this, then reason #1 doesn't apply, so I might
as well take this opportunity to describe the reasoning behind the choices. And
even after ~4 years of coding, I still find lots of things to tweak in my
development configuration. So while this is still relevant, I hope it helps
someone out there.

### Why Vim instead of Any Other Text Editor
To me, Vim is centered around one big idea: **keyboards are faster than the
mouse/trackpad/etc., so stay on the keyboard.** In practice, this also means
that there's less frustration with doing what traditionally might be mouse-based
gestures: drag and select, cursor placement, etc.

The learning curve is a bit steep. But once you get used to keyboard navigation,
it's [incredibly addictive](https://github.com/gggritso/Vimmy.safariextension).

### Why Neovim instead of Vim
I initially switched to Neovim since I wanted async support. There's some
completion/build plugins that can really slow you down if you run synchronously.
Vim 8 seems to have this now. But Neovim has more active community involvement
among many other benefits, and there is [no shortage of pages comparing the
two](https://geoff.greer.fm/2015/01/15/why-neovim-is-better-than-vim/#ref_1) if
you care to look.

### Configuring Vim (or Neovim)
I'm going to refer to both Vim and Neovim as just Vim from now on, since much
of the configuration for a beginning user is similar. I'm not going to talk
about what's in my Vim config file (aka vimrc or init.vim). There are
[many useful examples of vimrcs online](http://spf13.com/post/perfect-vimrc-vim-config-file/),
but **blindy copying someone else's config is the wrong way to go**.
The same thing goes for installing plugins. Just copying someone else's setup
won't be that useful to you. Instead, here's what I would recommend.

You can do a lot with Vim out of the box. Very quickly however, you will
realize there's some "missing" feature. Let's say you want line numbers, syntax
highlighting, etc. (it helps to have a little bit of experience with IDEs).
These are things that are easy to add to your Vim config, piece by piece.
For more complicated things, like completion or file navigation, having a good
[plugin manager](https://github.com/junegunn/vim-plug) makes it easy to steadily
augment your configuration as well.

In this way, your version of Vim naturally evolves to fit your needs, something
you can't really get from reading some blog post. That being said, there are
some [pretty good ones](https://dougblack.io/words/a-good-vimrc.html) out there
that *do* explain what you're about to copy paste.

I'm sure there's some deep metaphor about life and minimalism here. But that's
probably enough for one post.
