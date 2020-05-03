<!-- ## Step 3: Python / Scrapers -->

What if you could automate processes in your building … but not just simple processes - intensive analysis and creation ?

Enter Python!

Python has access to systems level functionality allowing it to interact with the hardware in a larger variety of ways!

And though this is a bit more of a detailed tutorial, compared to what we've already done; we'll still stay in the shallow end of the pool for writing our first scraper.

There are few tools that one can use to bypass the method outlined belows; Beautiful Soup is one such tool. Though we're gonna opt for directly using the toolset around which Beautiful Soup is built.

> QN: A quick note about Package Managers

Package managers ... manage the packages, libraries and software our systems use.

If you are using Ubuntu, you will likely be using a package manager called `apt`, Mac users may be using one called `homebrew`, while Windows users can use one called `chocolatey`.

Individual languages can also have their own package managers.

NodeJS has `npm`, Ruby uses a tool called RubyGems, and Python uses `pip`.

Depending on your chose operating system, you will need to learn how to use your operating systems package manager, and subsequently acquire `pip` for Python.

For those wanting to dive in head first, you can check out the official `pip` documentation: https://pip.pypa.io/en/stable/installing/.

Make sure to read the warnings.

Alright, let's dig in!!!

## Your First Python Scraper

### Prep Virtual Environment

Now that we've got `pip`, we want to the ability to make Python *virtual environments*.

The reason we want to use a *virtual environment* is to keep our systems *clean*.

We will be downloading quite a few Python packages that may not be necessary afterwards; or that may interfere with packages we want to use later.

In short, uing virtual environments allows such keep the packages utilized for each project we pursue compartmentalized.

The command to run is `pip install virtualenv`; bells will ring, whistles will be blown, and when it's all done; you'll have Python Virtual Environments accessible on your computer!

### Start VEnv & Install LXML

Next week need to create a virtual environment.

In order to spin-up our virtual environment we run the following command:

`virtualenv pickYourOwnName`

More bells and whistles will sound, and when it's all down we'll have a new folder into which we will `cd`.

There are three folders that are created within our new folder; though for the sake of introductions and brevity, I will only highlight the following two:

`bin` - this is where the commands for our virtual environment reside.
`lib` - here is where all of our environments packages will reside.
 

In order to activate our virtual environment, from within our newly created folder run the command `source bin/activate`.

And next we will acquire the base packages we need to begin scraping:

`pip install requests`
`pip install lxml`

Error: If you get an error when trying to install LXML, that is totally natural and reasonable. Sometimes, some may say, that's the benefit of using a tool such as Beautiful Soup, it manages many dependencies, so that new users don't have to.

Though in truth, the effort required to supply LXML's dependencies are relatively minimal.

The package depends on a series of `c` files; for Mac users, admittedly, this may require acquiring and updating XCode to include their Command Line Tools package.

For Windows users may have their own issues, regarding Visual C++ components; notice that LXML is dependent on C-language packages.

If you run into any issues, this is your chance to check out what solutions others have found using your favorite search engine.

And if still unable to resolve the errors you receive, please reach out on social media, or on our Discord server!

### Create New Python File

Phew! We got through that entire process.

Congratuluation!!!

You've done some great work so far; we're navigating the command-line to build a custom toolset.

That is no small accomplishment!

Next up, we start building.

Open up Notepad, or your favorite text editor, and create new file; naming it however you like, though with the `.py` extention at the end.

### Import Libraries

Our process for building our scraper file is very similar to the steps we took when building our webpage.

First we need to gather our necessary tools.

On the first line of our file we will import our first package by typing the command `import requests`.

Yup, it is that easy; so next we will import the tools we need from LXML with the following command:

`from lxml import html`

Feels almost magically simple doesn't it ?

Lastly, lets grab one more toolset by adding the line

`from pprint import pprint as ppr`

This is a tool that will allow us to print our data in a more readable format.

So let's get to scraping!!

### Get Site (requests)

What website do you want to scrape?

Mind you, some websites load their data using JavaScript (many websites do, in fact.)

And these websites will require additional tools to scrape.

Nonetheless, the command to *scrape* a website is as follows:

`root = requests.get('https://www.linux.org')`

Operations will happen in the background, and when all is said and done, we will have a variable called `root` which contains our webpage.

But it's a Python object, and there's a bunch of other info attached to the variable that we don't need right now ...

### Extract Code (lxml.html)

Huzzah, this is where we will use the `html` tool we brought in from `lxml` by running the following command:

`base = html.fromstring(root.text)`

What we are doing is using the `html` tool to transform the `text` of the website's code into elements we can parse using another LMXL tool set.

### Parse Code (xpath)

Enter XPATH!

> QN: Notice how HTML & LXML both have the same two letters at the end of them; they stand for *markup language*. And yes they are related.

XML stands for *Extensible Markup Language*; and XPATH is a tool we can use to traverse and parse code written in this language.

Our previous command `html.fromstring` transformed the text of our code into XML elements, with which we can use their `xpath` property to navigate and extract specific data.

A fun command to run is `base.xpath('.//*')` as this will show us all of the root elements of the code we transformed using `html.fromstring`; any of it look familiar?

Now let's dig a bit deeper.

In the example available in the [Rebel Coding startScraping repository](https://github.com/RebelCoding/startScraping/blob/master/startScraping.py) the example code runs the following command:

`items = base.xpath('.//*[@class="rgMasterTable"]/tbody/tr')`

What we are doing here is traversing our `base` element to find *any* object with the `class` of `rgMasterTable`.

Within that element we want to dig a bit further to our `tbody` element, and finally, we want to grab *all* of the table rows contained!

We put all of these rows into our variable called `items`; and now we have a list of row elements we can cycle through to extract more specific data.

### Organize & Display Code

In our example script from RebelCoding/startScraping we use the following code to process our newly acquired items:

```
for i in items[:5]:
    d = {}
    title = i.xpath('.//td[1]/*/a/font/text()')
    d['title'] = title[0].strip()
    d['link'] = i.xpath('.//td[1]/*/a/@href')[0]
    ppr(d)
```

We use a *for-loop* to run through the first 5 items in our list of items; and the first thing we do is create an empty dictionary in which to store our desired information.

We do this so that we can more easily access this information later.

Next, we use XPATH to specify the information we're after.

XPATH returns a list of elements by default; and if there are not items, it will return an empty list.

If there is one item, it will return a list with one item; and so in our next line, we extract that singular item and apply the `strip()` method to remove any excess empty space on either side of our news acquired `title`.

On the next line we shorten this process a bit, by simply adding the index position `[0]` to the end of our `xpath` command.

Lastly we use the Python tool *pretty print* to display our newly acquired data.

In order to run our code, we navigate to our file's location; hopefully you've saved it in our Virtual Environment's folder for ease of use.

And with our virtual environment activated we will run the command `python myFirstScrape.py`.

Though using whatever name you save your file as; having remembered the `.py` extension at the end.

Y'all just wrote your first web scraper!!!

Pour your a delicious glass of your favorite beverage or commence any other suitably celebrative action ~ cause y'all just did that!

## More About Python

We've glossed over quite a bit just to get ourselves up and running.

The example script provided in the Rebel Coding startScraping repository goes a bit deeper; so definitely check that out.

Though now you know how to use the Python `requests` package to mechanically grab websites; and you know how to use LXML to read the code from those sites!

Now let's wrap up by learning about the *full stack*, by which many of these sites are built and run.

## Python Classes & JS Objects
## Python DateTime Structure

```
for i in items[:5]:
    d = {}
    title = i.xpath('.//td[1]/*/a/font/text()')
    d['title'] = title[0].strip()
    d['link'] = i.xpath('.//td[1]/*/a/@href')[0]
    date = i.xpath('.//td[2]/font/text()')
    time = i.xpath('.//td[4]/font/span/font/text()')
    time_complete = " ".join(date + time)
    format_date = '%m/%d/%Y %I:%M %p'
    d['real_date'] = datetime.strptime(time_complete, format_date)
    ppr(d)
```


## Reading & Writing CSV/JSON