What is the sikre frontend?
---------------------------

This is a mobile first frontend for the sikre API, it's just the part that the user sees.

Dependencies
------------

We're assuming that before you start using this project you have the followind dependencies installed:

- A Linux-based operating system
- Git
- Node.JS
- Ruby 1.9+
- Bower
- Compass
- Grunt

How to install sikre-frontend
-----------------------------

If not, and assuming you have a debian-based linux distro like Ubuntu, run these commands to install everything. Please thake in mind that "#" means a root shell and "$" means a regular user shell.

    # sudo aptitude install nodejs npm ruby
    # npm install -g bower gulp

Those dependencies will be installed globally in your system, that means they will be available for any future project that you create and uses those dependencies. Now we will install compass on our home folder, so it doesn't interfere with other users installations:

    $ gem install compass

Now enter your project directory and run the following commands:

    $ npm install
    $ npm update
    $ bower install
    $ bower update
    $ gulp

That will install the rest of the dependencies into your project folder and compile all the static files for the first time, you will find out that there's tons of new folders, don't worry. Just don't get confused when editing stuff!

How to work after installing
----------------------------

Every time that you make a modification in the static files (SCSS, JavaScript, images or fonts) you will have to recompile the bundle. This can be done in two ways:

Set a watch so everything gets recompiled as soon as you make modifications:

    $ gulp watch

Recompile manually, if you don't need to see the results inmediately:

    $ gulp

License
-------

This project is licensed under an Apache 2.0 license

Copyright 2014-2016 Clione Software
