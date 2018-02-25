---
layout: post
title: "A very Pane-ful Presentation"
description: "Saner terminal demos with tmux"
---

Credit for this idea goes to this [StackOverflow
answer](https://stackoverflow.com/a/30275065). I just wanted to raise
awareness and also share some tweaks I made to make this smoother.

I've recently come up against an interesting setup challenge. I needed to
satisfy both requirements while teaching:

1. Display a keynote along with speaker notes (so display mirroring won't
   work).
2. Display a terminal for demo purposes. Display mirroring would be nice
   here, so that I wouldn't need to put the terminal on the screen behind
   me and crane my neck while I type.

Point 1 is fairly straightforward, but it requires disabling display
mirroring. So my approach (at least for now) is to accomplish point 2
*without* display mirroring. I considered a few alternatives:
- Just put the terminal on the projector screen and crane my neck as I
  type. This has the drawback of being bad for my neck! What a pain (in
  the neck).
- This is cheating, but abandon point 1 and just do display mirroring. I
  would print out my speaker notes or have it on another device. This
  would probably work, but I don't like having to sync up notes with
  another device. Having paper notes would probably work but it's a little
  bit annoying to prep beforehand.
- Secret option 3: do something completely different.

## Secret Option 3
[tmux](https://github.com/tmux/tmux/wiki) is a terminal multiplexer,
which, in a nutshell, brings you the following benefits (and since I'm a
tmux newbie, probably many more that I am not aware of):
- **Open multiple terminal windows in a single session.** Windows in tmux
  don't open a new terminal window, but behave kinda like tabs.
- **Open multiple terminal sessions within a single window.** This isn't
  super relevant here, but it's still a nice feature. You can split a
  single window into many terminal instances.
- **Detach and attach terminal sessions.** This is where the magic
  happens! Usually, when a terminal application is quit, the terminal
  session is closed as well. *Detaching* allows you to exit a terminal
  session in tmux  without closing it.  You can return to a detached
  session by *attaching* to it.

Most importantly, it's possible to attach to a given terminal session in
tmux multiple times. This means I can have two separate windows attached
to one terminal, both displaying the same thing! You can probably see
where this is going.

To get started, I create a new tmux session and name it according to
whatever thing I'm doing just to keep things simple:

    $ tmux new -s demo

Then I open another terminal window to put on a separate screen, and
attach to that session:

    $ tmux attach -t demo

Here it is in action:

![Mirrored terminals](/assets/posts/mirror_terminals.gif)

Therefore, with not very much setup, it's possible to get the best of both
worlds: a projected terminal without needing to resort to display
mirroring.

There's one final detail, which is that tmux windows will size themselves
according to the minimum dimensions of attached sessions. So if one
terminal window is bigger than the other, there will be a size mismatch.
Usually, the projected terminal is smaller (since it's more zoomed in), so
the user terminal will end up with a bit less space.

![Size difference in terminals](/assets/posts/size_diff.png)
