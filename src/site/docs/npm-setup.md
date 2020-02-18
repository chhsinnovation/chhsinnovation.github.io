---
title: Running the Site
---
{% import "macros.njk" as macro with context %}

Learn how to start and stop the site on your own computer.  

## Prerequisites

This document assumes you have completed our guides on [installing desktop developer tools]({{ '/docs/desktop-setup' | url }}) and [setting up Git]({{ '/docs/git-setup' | url }}).

## Setting up

Open up Visual Studio Code, go to the `File` menu, select `Open Folder`, and navigate to the `chhsinnovation.github.io` folder on your computer. 

Next, open up your command-line terminal by going to the `Termimnal` menu and selecting `Open Terminal`.

## Running the code

Run the following command to install the app's Javascript dependencies.

``` shell
npm install
```

You'll probably see a bunch of warnings about `fsevents` and other stuff that's safe to ignore. This may take a minute or two, so go grab yourself a beer while the computer sweats it out.

Finally, it's time to run the site!

``` shell
npm run start
```

When the site is running and ready, you'll see some web addresses appear in the terminal. You want `Local`, which will probably be [http://localhost:8080](http://localhost:8080) or [http://localhost:8081](http://localhost:8081). Click the link that matches your terminal's output.

You did it! The site is now running on your computer.

> Any time you **save a file** in the project, your browser should automatically update with the new changes as long as the site is running. This works best with a web browser and VS Code open side-by-side.

## Stopping the code

To shut down the site, click your mouse into the terminal, then press `Control-C`. On Windows, you'll also need to hit `y` when prompted.

## Make your changes

With the site running on your computer, now comes the hard work. Continue forward to learn [how to edit content]({{ '/docs/content-primer' | url }}).