---
layout: minimal
title: Caesar Cipher
---

# Caesar Cipher <a class="btn btn-default" href="../../assets/caesar.zip" role="button"><i class="fa fa-file-archive-o"></i> Download</a>

## Introduction
The [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) is named
after Julius Caesar, who used it to encrypt his secret communications.  It's a
type of substitution cipher where every letter is shifted a fixed number of
positions down the alphabet to produce the encrypted result.

Your challenge is to implement the Caesar cipher in Python! Fill in the
code so that we can both encode **and** decode text. All code you need to
edit is located in caesar.py.

## Examples
For example, with a right shift of 3, the letter 'a' is replaced with 'd', 'm'
is replaced with 'p', and so on.

If we encrypted the following message with a right shift of 4:

**"Julius Caesar"**

It would come out as:

**"Nypmyw Geiwev"**

Which looks like gibberish to the untrained eye.  If you want to try some
examples out yourself, here's an [online Caesar encoder/decoder](http://www.xarg.org/tools/caesar-cipher/).

## Additional Details
* It's recommended to fill in the functions from top to bottom:
  * `shift_letter`
  * `caesar_encode`
  * `caesar_decode`
* Test each function as you finish it! It's easier to fix bugs if you easily
  pinpoint their location.
* There is a hint in the docstring for `shift_letter` if you need help
  figuring it out.
* Assume that your inputs will not require any wrapping. This means that you
  will not get an input of 'y' with a right shift of 2 (going to 'a'). As a
  *bonus challenge*, you may implement this behavior.

## Testing
Run the doctests to check your work by doing `python3 -m doctest
caesar.py`.

Once you've passed all the tests, you can either call the functions
yourself from the interpreter or run `cipher.py`.
