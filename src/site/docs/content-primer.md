---
title: Intro to Content
---
{% import "macros.njk" as macro with context %}

Let's take a tour through editing a page and submitting it to GitHub.

## Prerequisites

If you haven't [installed the dev tools]({{ '/docs/desktop-setup' | url }}), [set up Git]({{ '/docs/git-setup' | url }}), and [spun up the site]({{ '/docs/npm-setup' | url }}), then go complete those steps first.

{% include './set-the-workspace.md' %}

## Pick a page

We'll start by applying a minor edit to one of the pages.

Within Visual Studio Code, take a moment to check out the left-hand *Explorer* pane. You should see a bunch of files. (If not, click on the stacked-files icon for *Explorer*.) You're looking at the full codebase for the OI website. 

Let's start by expanding the `src` folder, then the `site` folder within. There's a lot to discuss within the `site` folder, but let's gloss over that for now by opening up the `pages` folder. In `src/site/pages`, you'll see documents for all the site's top-level pages, like the [Playbook]({{ '/playbook' | url }}).

Observe the `.md` files. This stands for Markdown, the format in which we write our content pages. 

> Markdown is pretty straight-forward. For a quick reference, check out [this cheatsheet]({{ 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet' | url }}). We'll cover this in greater detail elsewhere in the documentation. More to come.

For the next exercise, click `join.md`.

## Open the page

With `join.md` open in Visual Studio Code, go to the corresponding page in your web browser. The address would be [http://localhost:8080/join](http://localhost:8080/join) or [http://localhost:8081/join](http://localhost:8081/join).

## Edit something, anything

Back in Visual Studio Code, make any change to the `join.md` page. Save the file. The web browser should update automatically to reflect the edit. Undo the change and save the file again. The web browser should update again. 

This is the basic feedback cycle when editing pages on the OI website. Edit the file, save the file, see the results. Depending upon your level of OCD, you may be hitting save every few seconds. :P

## Create your profile page

For our next exercise, we're going to create a new page from scratch. Go back to the *Explorer* in VS Code and take a look inside the `src/site/people` folder. We're going to create a page to represent you!

Right-click on the `people` folder and select `New Page`. This will create a new page in the `people` folder. Give the new file a simple name, all lowercase without spaces, with `.md` as the file extension. Examples, examples.

* `jon.md`
* `mealor.md`
* `marni.md`
* Etc.

Open up your new file and add the following boilerplate to get started.

``` text
---
name: Firstname Lastname
position: Innovation Specialist or Fun King or Whatever
tags:
  - person
---
Write your first paragraph here. This is your bio. 

Make it as long or as short as you like. Talk about how cool you are.

Insert blank lines between each paragraph. 

Get your Markdown on. Go nuts.
```

When you've saved your file, your name should now appear toward the bottom of the About page ([http://localhost:8080/about](http://localhost:8080/about) or [http://localhost:8081/about](http://localhost:8081/about)). Click into your page and continue to edit, observing your changes with each save.

## Send your profile page to GitHub

When you're satisfied with your new profile page, it's time to send it to GitHub. 

Let's get started by shutting down the site, because we'll need the terminal to use Git. Click into the terminal and hit `Control-C`. On Windows you'll also need to hit `y` when prompted.

Use the `git status` command to understand which files you've changed within the codebase. This will include new files, deleted files, and edited files.

``` shell
git status
```

> Dense info-bomb incoming! Stay with me!

In Git, we batch our changes into little bundles called *commmits*. 

Commits are assembled by adding files to *staging*. (This is sometimes called the *Index*.)

We use the `git add` command to add files to staging. To add just the profile page into staging, you might enter a command like the following. Replace Jon's file with your own.

``` shell 
git add src/site/people/jon.md
```

If you enter the `git status` command again, you'll now see `jon.md` under `Changes to be committed`. Yay! 

And no, you don't need to add each file to staging piecemeal, one command at a time. Fortunately, we have a nuclear option to add all changes to staging at once.

``` shell
git add -A
```

With all our changes added to staging, it's time to create a commit. The message should be very short, less than 8 words. Summarize the essence of the changes.

``` shell
git commit -m "Create Jon's profile page"
```

You can confirm the commit by using the `log` commmand. (Push `q` to exit.) Check for your message at the top of the list.

``` shell
git log
```

Finally, let's send it to GitHub with `push`.

``` shell
git push
```

## Pull Requests

If you're using your own fork, there's one more step before this commit gets published on the live site: the Pull Request. Ask Jon about this for now, he'll document it soon.

