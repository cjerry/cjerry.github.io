---
layout: minimal
title: Homework 4
---

# Homework 4 <a class="btn btn-default" href="hw04.zip" role="button"><i class="fa fa-file-archive-o"></i> Download</a>

Please click the link at the top of the page to download.

Do the problems in `hw04.py`. The assignment is self graded. To test
yourself, run the following on the command line:

```
$ python3 -m doctest hw04.py -v
```

If you passed the tests, you should see the following:

```
3 items passed all tests:
   3 tests in hw04.absval
   2 tests in hw04.hailstone
   3 tests in hw04.largest_factor
8 tests in 4 items.
8 passed and 0 failed.
Test passed.
```

If any tests fail, information about what exactly failed will be
displayed. To fix your problem, try testing things out in the interpreter!

If you experience any issues with grading, first make sure you are in the
correct folder. You may have to use `cd` to change directories, and use
`ls` to make sure the file is there.

## Instructions for Hailstone

[Credit to CS 61A Spring
2018](https://inst.eecs.berkeley.edu/~cs61a/sp18/hw/hw01/#q5)

Douglas Hofstadter's Pulitzer-prize-winning book, Gödel, Escher, Bach,
poses the following mathematical puzzle.

* Pick a positive integer `n` as the start.
* If `n` is even, divide it by 2.
* If `n` is odd, multiply it by 3 and add 1.
* Continue this process until `n` is 1.

The number `n` will travel up and down but eventually end at 1 (at least
for all numbers that have ever been tried -- nobody has ever proved that
the sequence will terminate). Analogously, a hailstone travels up and down
in the atmosphere before eventually landing on earth.

This sequence of values of `n` is often called a Hailstone sequence, Write
a function that takes a single argument with formal parameter name `n`,
prints out the hailstone sequence starting at `n`, and returns the number
of steps in the sequence.
