---
title: Setting up Git
---
{% import "macros.njk" as macro with context %}

We use [Git](https://git-scm.com/) and [GitHub](https://github.com/) to track code changes, share edits, and publish to the OI website. In this document, we'll set up your GitHub account. Then we'll download the OI website's Git repository to your computer. 

## Prerequisites

This document assumes you have access to a command-line terminal, with Git already installed. Our document on [installing the developer tools]({{ '/docs/desktop-setup' | url }}) will bring you up to speed.

You should also **sign up for an account** at [GitHub](https://github.com/). Skip any annoying *Enterprise* trial offers.

## Get forked

For now, we're going to work in our own forks. You'll need your own fork to proceed.

> In Git, a fork is like your own copy of the code. You can do whatever you want without worrying about breaking anyone else's work.

First, go to [Jon's fork on GitHub](https://github.com/xjensen/chhsinnovation.github.io).

> Jon's fork is pretty far ahead of the [original repository](https://github.com/chhsinnovation/chhsinnovation.github.io), including such conveniences as this very document, so we recommend you use it as your baseline for now. 

Next, look for the `Fork` button toward the top-right of the page. Click it. You're forked! GitHub will make a copy of the code within your own account.

The page for your fork should pop up. Look for a big green `Clone or download` button. Click it to get a pop-up menu. **Copy down the web address** that appears in the menu, then proceed.

> You'll be tempted to choose the `Download ZIP` option, but don't do it! To contribute changes back to GitHub, you'll need to use Git's `clone` tool to download the code. 

## Git clone

We need to get your fork's code downloaded onto your computer, so you can work on it.

Go ahead and open up your command-line terminal. [Here's a refresher if you can't find it.]({{ '/docs/desktop-setup#get-your-command-line-terminal' | url }}) 

Choose a folder on your computer where you want to store the code for the OI website. We're going to point your termimnal to said folder. For example, if you want to keep your code in the `Documents` folder, enter the following command within the terminal. 

``` shell
cd Documents
```

You can confirm the current folder of your terminal at any time with the `pwd` command. Try it now to confirm your location.

``` shell
pwd
```

With the folder confirmed, let's do some cloning. Enter the following command, replacing the URL with the one you copied down from the `Clone or download` menu on your fork. This example uses Don's fork.

``` shell
git clone https://github.com/mealordon/chhsinnovation.github.io.git
```

`git clone` will create a new folder called `chhsinnovation.github.io` to hold the code. We can confirm this by using the `ls` command to list out all the contents of the current folder. Try out `ls` now, looking for the new `chhsinnovation.github.io` folder in the results.

``` shell 
ls
```

Switch into the new folder by using `cd` again.

``` shell
cd chhsinnovation.github.io
```

> At this point, you may want to refocus VS Code's attention on your new `chhsinnovation.github.io` folder, so you can see all the files in the left-side *Explorer* pane. Go to the `File` menu, select `Open Folder`, and navigate to the `chhsinnovation.github.io` folder on your computer.

## Check status

To ensure your terminal is pointed to the right folder, with Git properly configured for this project, try out Git's `status` tool. If you see some stuff about *commits* and *branches*, you're in the right place.

``` shell
git status
```

## Tell Git about yourself

Git needs to know your name and email address. This information is affixed to all of your edits, to keep track of all the things you add, change, delete, break, etc. Enter the following commands, one line at a time, replacing "John Doe" with your own details.

``` shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Switch branch

A Git repository divides code into branches. Consider branches as separate, divergent versions of the code. Currently, the most up-to-date code on Jon's fork is in the `netlify` branch. So let's switch to it.

First, set up Jon's fork as *upstream* on your repository. You only need to do this once.

``` shell 
git remote add upstream https://github.com/xjensen/chhsinnovation.github.io.git
```

Next, switch to the `netlify` branch.

``` shell 
git checkout netlify
```

If it's been hours to days since you created the fork, you might want to fetch the latest upstream changes from Jon's code.

``` shell
git fetch upstream
git merge upstream/netlify
```

And now you should have the latest changes.

## Running the site

We'll cover these commands and concepts in greater depth later. For now, Git and GitHub are configured, with code downloaded. You're ready for the next step in our installation odyssey, [running the site]({{ '/docs/npm-setup' | url }}).