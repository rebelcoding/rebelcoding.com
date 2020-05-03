<!-- ## Step 2: JavaScript -->

If HTML is the framing of our building, and CSS provides the aesthetic; JavaScript is the plumbing and electrical ~ the gadgetry!

JavaScript is HUGE ~ there is no way that we could even give you a preview of everything. Instead we cover the basic uses for building preliminary interactivity, and the basics of consuming APIs.

So now let’s get into the muck and mire of coding, and start by learning some of the basic tools in our cache!


## Variables

Variables are the building blocks of code. They help us store information, and allow us to retain information changes while interacting with other variables and code chunks.

You can see variations of the following *objects* in almost all of the computer languages you ever investigate.

So let’s begin!


### Integers & Floats

Integers are whole numbers, and they can be positive or negative.

Floats, on the other hand, are numbers that contain decimals.

We’ll see a bit later how this distinction is used, though it is an important delineation of which to be aware!


### Strings

Strings are *a collection of alphanumeric characters and symbols enclosed by quotations*, single or double, it doesn’t matter which.

```
var item = 'some string';

let item3 = 'some other string';

const newItem = 'new string';
```

The first two lines, using *var* and *let*, have the same meaning. Each set a variable that can later be changed, or is *mutable*.

Opposingly, *const* sets a variable that *can not* be changed, or is *immutable*.


### Boolean

Boolean values are *true/false* values.

Translated into machine code, values are either a 0 or 1.

var target = true;

**or**

var target = 1;

Notice that in JavaScript the true or false values are spelled with a lower-case first-letter; this too is specific to JavaScript.

In Python the True & False need to be capitalized to be treated as boolean variables.


### Lists

Lists are a collection of objects separated by commas and enclosed by square brackets [].

```
let newList = ['some', 'list', 'of', 'strings', ['with another list', 'within', 235], true,];
```

The objects do not all need to be of the same type.


##### List Indexes

At times, one may wish to obtain an object by its position in a list, or an operation of similar effect.

This would mean, to obtain objects by their list index number.

In both JavaScript and Python, lists begin at 0.

In our example newList from above, if I wanted to get the first object in the list I would use the following code:

`let specificItem = newList[0]`

**If we wanted the third object**

`let item3 = newList[2]`

Why is that?

Notice that we are not using quotations around this number, and that it is placed with square-brackets.

How would you get the second item of the list within our example list?


### Dictionary

Dictionaries are a collection of *key-value pairs enclosed by curly brackets*. 

`var target = {'text': 'some string', 'published': false, 'colors': ['red', 'blue',],};`

Breaking this code down, the *key* is defined by a string, and separated from the *value* by a colon.

Each *key/value pair* is then separated by a comma.

This is all enclosed within *curly brackets* {}.

Notice again how the value can be any type of variable.


## The Moving Parts


### If-Else Statement

```
if (x < y) {
  var display = "Welcome to Rebel Coding 101";
} else if (x < z) {
  var display = "Welcome to Rebel Coding 102";
} else {
  var display = "We haven't planned this far ahead yet :/
}
```

Read it out-loud:

If *x is less than y*, the variable *display* equals a certain string.

*Else, if x* is not less than *y and is less than z*, *display* equals a different string.

If *x is larger than them all, using the else* statement, *display* is set to equal a third string.


### For-Loop

```
for (var i = 0; i < 9; i++) {
 console.log(i);
 // more statements
}
```

Read it out:

For *variable i* that equals zero, when *i is less than 9, i*++. *console.log(i);* ?

console.log() prints out whatever is contained in the parentheses.

In JavaScript the shortened version to increment a value by 1 is *++*.

It’s different in Python (+=1).

Search for other variations; also what sequence of numbers does this for-loop print do you think?


### Functions

Functions are where it all comes together, in a sense.

First we define an object that consumes other objects, and uses them to create an output.

```
var blump = function(prop1, prop2){
                var a = prop1
                var b = prop2
                var c = a/b
            return c
            };

blump(5, 3)
```

So let's read this out-loud:

Variable *blump* is a function that consumes/uses two objects, *prop1* and *prop2*.

Within our function these two objects are made into variables *a and b*, which are then used to create a third variable *c*.

This last variable *c* is then returned by our function.

> QN: Mathematical operators Review

Remember when we made the distinction between integers and floats ?

Here is where it comes into play; arithmetic operations are not notated as you may have learned them in school.

Sure addition still uses the “+” sign.

Subtraction still uses the “-” sign, and division still uses the “/” sign.

But multiplication uses an asterisk “\*”.

While exponentiation uses the double-asterisk “\*\*”.

We also have another operator we can use to find the remainders of division.

This is called the modulus operator, “%”.

Pretty nifty, eh.


## jQuery & the DOM

We have seen with CSS that we can modify the aesthetics of our webpages. Be this by adding colors, changing font sizes, and other modifications. But what if you could "automate that"? How would you do such a thing?

First things first, we need to import a few libraries:

```
<script src="bootstrap.min.js"></script>

<script src="jquery.min.js"></script>
```

Then, we need to *hook into* the HTML structure, or the DOM, Document Object Model.

We do this using the dollar-sign notation, which is specific to jQuery, that allows us to reach into the HTML code and make changes!

```
<script>
$(".jobLabel a").on("click", function(){

    var target = $(this).attr("rel");

    $("#"+target).show().siblings("div").hide();   
});
</script>
```

While this may appear to be a complex-looking function, let's disassemble it and see what's going on:


### The $

The dollar-sign allows us to access the DOM.

Once inside the DOM, we can identify specific elements and change them!

Parenthesis contain things (*duh*), and contained in these first parenthesis are set of items separated by a space, *.jobLabel* and *a*.

We recognize the syntax of *.jobLabel* from CSS, and determine that it indicates a class, while the *a* is an html tag!

So now we have identified a specific set of objects on the webpage/DOM with which to work!

`$('.jobLabel a')` which means all of the *a* tags with the class 'jobLabel'.


### Interactivity

Now that we have the objects discerned, what do we do with them?!

There is a period after our parenthetical statement, followed by the word *on*, and another set of parentheses.

This is called "chaining" operations.

We have an action, or set of actions: .on('click',function(){});

To translate, what we have so far $('.jobLabel a').on('click', function(){});:

For all *a* tags with the class "jobLabel" ... when the element is clicked perform the following function.


### Acting
```
var target = $(this).attr("rel");

$("#"+target).show().siblings("div").hide();
```

Within this function we declare and define a variable called *target*.

Next, we set this variable using our dollar-sign, while specifying a specific property attribute, *rel*.

This attribute value is then used to identify a third object.

Finally, we have our action.

To *show* our selected item, while *hiding* all of its *siblings*.

Within the function we are able to affect,and change, the DOM.

```
var target = $(this).attr('rel');
$("#"+target).show().siblings("div").hide();
```

Notice how each line ends with a semicolon.

And how each parenthetical statement, or bracketed statement, is closed.

Lastly, I want us to notice the use of show() and hide().

While other parentheses have items within them, these parentheses are left empty ...

In this instance the parenthesis are identifying a function that is to be performed, and requires no parameters


## Importing External Scripts & CDN’s

Earlier we just pulled in Bootstrap and jQuery from our local folders … this was easy.

Though most of the time we will need to, or want to, pull scripts from external sources, one type of which are called CDN’s, or content  delivery networks.

These are locations that contain our necessary files pre-packaged and ready to be expedited, super-quickly, to our production websites.

[jQuery CDN](https://code.jquery.com/)

[Bootstrap CDN](https://www.bootstrapcdn.com/)

Remember to [do your own research](https://en.wikipedia.org/wiki/Content*delivery*network) if something is confusing.