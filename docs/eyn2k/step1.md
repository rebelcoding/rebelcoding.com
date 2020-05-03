<!-- ## Step 1: HTML & CSS -->

HTML & CSS are the basic building blocks for most web-pages, and dare I say mobile applications. In the following example we compare building a webpage to building a house or similar structure.

HTML code determines the structural look of a web page. This is the layout, walls, stairs, and open spaces for doors, windows, outlets, and the like. CSS is the paint colors, motifs and patterns that will decorate our structure, while also able to influence structural aspects (think mobile designs).

HTML also introduces us to our first basic pattern in coding.

`<html><head></head><body></body></html>`

HTML uses *tags*, enclosed by arrows (<>), to contain information. Notice how each tag has an explicit beginning and an explicit end. We gotta make sure we finish what we start!

Below is a code example containing, *nearly*, the least amount of code needed to display a webpage using HTML.

```
<html>
    <head>
        <title>Home</title>
    </head>
    <body>
        <h1>Welcome to Rebel Coding</h1>
    </body>
</html>
```


That's it! It’s our little dollhouse of a webpage!

Granted ... all the webpage has, is a headline that says "Welcome to Rebel Coding".

## HTML Page Structure

So what’s going on with these first HTML tags?

`<html><head></head><body></body></html>`

**HTML:** Declarative containers might also you use DOCHTML

**Head:** Unseen information, pulling in files.

Later on we’ll be getting our own set of files to start with; and in the `<head>` tag you’ll see a bunch of `<link>` tags that have links to other files. This is like the brain gathering all the information the `<body>` below will need to carry out it’s prescribed operations.

**Body:** Where all the visible action happens!

## Nested Properties / Attributes

Basic coding concept #2: nested properties, attributes and objects.

Let’s introduce the `<h1>` tags with this topic.

```
<h1>Header 1</h1>

<h2>Header 2</h2>

<h3>Header 3</h3>
```

But what if I want Header 1 to be the color green??

`<h1 style=”color: green;”>Header 1</h1>`

Important to notice how deeply nested structures can become.

Here we have a property (color) within a property (style) within a tag (h1)!!

And this is just the beginning of the idea; how objects can contain other objects, be they variables, functions or entirely other objects themselves ~ in JavaScript everything is an object though ~~ eeks, more later!


## Basic HTML Tags

As we’ve just noted, HTML tags have a beginning and an end:

```
<title>Home: Rebel Coding</title>
```

This title tag is an excellent example; it defines the title of our webpage.

HTML tags also have properties, or attributes, of their own.

Another common HTML tag is the `<a>` tag, or anchor tag.

The HTML tag is what connects the web, using its *property* ‘href’.

```
<a href=”[www.duckduckgo.com](http://www.duckduckgo.com)”>DuckDuckGo</a>
```

And tags can have more than one attribute, or property; an important one is the class property:

```
<table class=”table”></table>
```

As we’ll see later, classes (and id’s) can be used to modify a group of components in our webpage/application.

Lists are just good to go over; both ordered, and unordered lists; can you tell the difference?

```
<ul><li></li></ul>

<ol><li></li></ol>
```

These HTML tags don’t seem to end, or do they?

```
<img/>

<br/>
```

That’s because the ending is embedded at the tailing slash :0)

Some tags have no information to include between a start and end point, such as images or line breaks. And so, the exception is mended by placing an end slash as such.

Remember our `<link/>` tags within the `<head>` tag? Same thing; no info needed to be included between the tags; all of the info is gathered through the tag’s properties.


## CSS - Cascading Style Sheets

**Cascading Style Scripts** are *scripts that style our code*; we'll explain the cascading part in a moment.

If I want to change the color of an item, I would use CSS; utilizing the style attribute of the header HTML tag. We saw this earlier.

```
<h1 style=”color: #FE23DD;”>Rebel Coding</h1>
```

There are many different ways to use CSS, and like JavaScript, the number of CSS libraries seems to always be growing.

Regardless, the basics are as follows:


### Inline

Here we add the styling code directly within the tag to which it is to be applied; as shown above.

We add a *style* property to the tag we’re modifying, and then include our preferred augmentation. We are changing the color, and size of our `<h1>` text.

```
<html>
    <head>
        <title>Home</title>
    </head>
    <body>
        <h1 style="color: #42FD23; font-size: 5em;">Welcome to SF</h1>
    </body>
</html>
```

### Embedded

As we alluded to earlier, what makes CSS so useful is how we can use it to make adjustments to a whole groups tags!

Instead of including a *style* property on the `<h1>` tag, we use the `<style>` tag up in the header! Now we are able to list the tags we want to affect, and define our preferences.

```
<html>
    <head>
        <title>Home</title>
        <style>
            h1 {
                color: #42FD23;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to Rebel Coding</h1>
    </body>
</html>
```

### Embedded + Class

What if you don't want to affect every `<h1>` tag?

We use classes! Classes are heavily used in CSS and styling libraries.

Notice how the *class* attribute, in an HTML tag, allows for more than one parameter, separated by a space. Notice that the class attribute can contain more than one class.

```
<html>
    <head>
        <title>Home</title>
        <style>
            h1 {
                color: #42FD23;
            }
            .headline {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <h1 class="headline other-class">Welcome to SF</h1>
    </body>
</html>
```

### Imported

Lastly we must realize that for an entire application there will be a whole heap of CSS code. And having it all in the same file as the base index file would be ridiculous!

So, we are going to write a completely separate file, and *import* it into our index file.

We do this using a `<link>` tag, that contains two properties, *rel* and *href*. *rel* defines the relationship of the file being consumed; and *href* provides the address at which the file can be found, *hyperlink-reference*.

```
<html>
    <head>
        <title>Home</title>
        <link rel="stylesheet" href="./style.css"/>
    </head>
    <body>
        <h1>Welcome to Rebel Coding</h1>
    </body>
</html>
```

### So what does Cascading Styles Sheets Mean ?

**Cascading** refers to how instructions are interpreted.

What if the *style.css* scripts says `<h1>` tags should all be green, but a style property on the page specifies that this specific `<h1>` tag should be blue?? Which will take precedence?

And what if a style attribute is on a specific `<h1>` tag, saying it should be yellow?

*Most of the time* the page, or component, specific parameter/property/attribute will take precedence in styling the tag. And this is attributed to the cascading nature of style scripts :)

1. Inline CSS modifications
2. Mods in the `<head>` tag
3. Imported Scripts in descending order (last to load take precedence.)


## WireFraming

Now you need to start designing your website!! And the first step is to draw a picture.

Yup, you heard me -- bust out the crayon and markers, we gotta draw!

That’s what wireframing is -- drawing a rough outline of how you want your webpage to look -- deciding where you want certain sections to appear; heck deciding what sections you want to have in the first place!

How do you want your menu to operate?

Are you wanting to make a single, or multi-, page site?

These are the questions wireframing helps us to answer; and when we’re ready, we simply transcribe our drawings into an HTML/CSS structure. 


## Your Website Build-Out

You’ve got a few options to start with - you can start with a blank page or use one of the templates provided!


### Basic

Displays paragraphs, links, lists and tables.


### Basic +

Implements JavaScript


### Parallax

Fancy pantalones, with sprinkles!


## Templating with Bootstrap

One of the first CSS libraries was called Bootstrap which uses a grid system to create mobile-friendly web pages.

Let’s dig into how it does that.

After pulling in our necessary libraries, Bootstrap uses a collection of classes to define various parameters. The grid-specific classes are best paired with `<div>` & `<span>` tags; while it being important to note, tags can have multiple classes.

```
<div class=”col-lg-6 col-md-8 col-sm-12 col-xs-12”></div>
```

Bootstrap operates off of a 12 block grid system with four adjustable display size categories: large, medium, small, extra-small.

In the previous line of code we said that we wanted the contents of that `<div>` tag to occupy six blocks on a large screen, eight blocks on a medium-sized screen, and 12 blocks, or the entire page, on smaller screens.


## CSS More In-Depth (SASS/LESS)

What is this all about? CSS Preprocessor language that is compiled into CSS.

Variables, mixins, etc -- 

[https://en.wikipedia.org/wiki/Sass_(stylesheet_language)](https://en.wikipedia.org/wiki/Sass*(stylesheet_language))

[https://en.wikipedia.org/wiki/Less_(stylesheet_language)](https://en.wikipedia.org/wiki/Less*(stylesheet_language))


## Looking Ahead to Mobile

Back to the grid structure --- what are apps?

**Using an inspector.** If you’re using Firefox or Chrome, right click on any browser window and choose the Inspect Element option. 

In the upper bar of the new window that appears will be an option to toggle between full-screen and alternate view.

You can do this to see how the mobile friendly design you created using Bootstrap, will appear on various-sized screens.