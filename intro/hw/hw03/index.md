---
layout: minimal
title: Homework 3
---

<!-- Hey there! Yes, you can copy the HTML/CSS for this page too. -->

# Homework 3
## Stylizing your webpage
For this part of the homework, you will be "improving" your website from Homework 2.

Use CSS to stylize your page. I'd recommend making a separate CSS file and then importing it into your HTML (see [Day 3 Notes](/intro)). This is open ended, but here are some things you should try out:
* Change font and font size for different elements.
* Use different background colours throughout your website. To do this, use divs to break your website up into different parts.
* Add some [webkit transformations](https://webkit.org/blog/138/css-animation/).
* If you want some more inspiration, take a look at the CSS for elements on some of your favorite webpages. As the saying goes: "good artists copy, but great artists steal."

> Webkit is only supported by Safari and Chrome. If you're not using
> Safari or Chrome, [you will need a different CSS
> prefix](https://stackoverflow.com/a/3468311).

## Bootstrap
Create a new webpage for this part of the homework.

You will be experimenting with [Bootstrap](https://getbootstrap.com), a popular starting point for creating responsive (ready for a variety of devices) and decent looking websites.

> If you're having trouble filling your webpage with text to test out, try a dummy text generator such as [Bacon Ipsum](https://baconipsum.com) or [Lorem Ipsum](https://lipsum.com). This is actually common practice for web developers when they first design a website but do not know what content will fill it yet.

1. Copy and paste the [starter
   template](https://getbootstrap.com/docs/4.1/getting-started/introduction/#starter-template)
   into a new file. You can ignore the optional JavaScript components. You
   do not need to understand the contents between the `head`  tags.

2. Explore some of the [Bootstrap examples](https://getbootstrap.com/docs/4.1/examples/) and [components](https://getbootstrap.com/docs/4.1/components/). Pick 4 features that you like (they can be from different examples or components) and add them to your own webpage.
	* For example, one popular feature is the [jumbotron](https://getbootstrap.com/docs/4.1/components/jumbotron/). The example on the page even nests a button within.
	* If you use [tables](https://getbootstrap.com/docs/4.1/content/tables/), try resizing your browser window and see what happens.
3. If you haven't tried [containers](https://getbootstrap.com/docs/4.1/layout/overview/#containers) yet, include a few on your page. Once again, resize your webpage and see how it reacts.
4. Include your own stylesheet (CSS file). In your own file, try making some changes to overwrite the Bootstrap styles (i.e. change the font color for all paragraphs).
* What happens if you import your CSS after Bootstrap's stylesheet?
* What happens if you import your CSS before Bootstrap's stylesheet?
> If you want to better understand why this happens, [read this article on CSS cascading](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance).
