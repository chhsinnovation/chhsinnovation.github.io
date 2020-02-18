---
title: Desktop Developer Tools
---
{% import "macros.njk" as macro with context %}

Ready to reprogram the OI website? Follow these steps to become a true and righteous hacker. We'll install all necessary tools on your desktop computer, and show you a bit about how to use them.

## Prerequisites

You'll need a computer with one of the following operating systems. No Chromebooks, at least for now.

* [Windows 10](#windows-10)
* [Mac OS X](#mac-os-x)
* [Linux](#linux)

## Windows 10

1. Go download and install [Git for Windows](https://gitforwindows.org/). Stick with the default options during the installation process.

2. Next, install the [Git Credential Manager for Windows](https://github.com/Microsoft/Git-Credential-Manager-for-Windows). Here's a [shortcut to the download](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/latest). 

> While optional, *Git Credential Manager for Windows* is highly recommended. It helps you avoid entering a username and password to approve every little thing you do in git.

3. Now we're going to download and install our Javascript processor, [NodeJS](https://nodejs.org/en/). **LTS** version is preferred.

4. Finally, it's time to get [Visual Studio Code](https://code.visualstudio.com/). **Stable** builds are best.

> *Visual Studio Code* is not the same as Microsoft's venerable Visual Studio IDE. VS Code is a newer product. It's free, open source, cross-platform, optimized for modern programming tools and techniques. It's very popular, even beyond Microsoft's usual niches.

## Mac OS X

Mac installation should be super easy. Most of the tools we need are pre-installed into OS X.

1. Go to the App Store on your Mac and install [Xcode](https://apps.apple.com/us/app/xcode/id497799835). It's free.

> We won't be using the Xcode app to work on the OI website. But we still need to install it to get a bunch of important behind-the-scenes tools for use by NodeJS. Speaking of...

2. Download and install our Javascript processor, [NodeJS](https://nodejs.org/en/). **LTS** version is preferred.

3. Go get [Visual Studio Code](https://code.visualstudio.com/). **Stable** builds are best.

## Linux 

You're cool enough to run Linux, so you've got this. To follow the rest of the instructions below, ensure you have [git](https://git-scm.com/), [NodeJS](https://nodejs.org/en/), and [Visual Studio Code](https://code.visualstudio.com/). (Yes, Microsoft actually supports a Linux version of VS Code. 2020 is weird times.) ;)

## Get your command-line terminal

Open up Visual Studio Code. 

Within VS Code, go to the `Terminal` menu and select `New Terminal`. A command-line terminal should appear toward the bottom of the screen.

## Extras

Here's some more cool stuff you can do. All optional.

### Trick out Visual Studio Code

Visual Studio Code is highly configurable, with a rich ecosystem of extensions. The following extensions enhance your OI web slinging experience.

> Some of this won't make any sense until I write additional docs about some of these tools. No need to worry about it yet. But I won't stop you from adventuring!

#### Nunjucks Template

The [Nunjucks Template](https://marketplace.visualstudio.com/items?itemName=eseom.nunjucks-template#overview) extension provides syntax highlighting for `.njk` files.

#### VSCode-TailwindCSS

[VSCode-TailwindCSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) speeds up working with Tailwind-derived classes in our `.njk` and `.html` files.

#### Stylelint

[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) helps process the PostCSS-based fanciness in our `.css` files. But first, we need to help Stylelint.

1. Go ahead and install the [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint).

2. Go to the `View` menu and select `Command Palette`.

3. In the Command Palette, type `Open Settings`. From the menu that pops up, select `Preferences: Open Settings (JSON)`.

4. Time to do some surgery on the settings file.

We will enter the following two lines into this `settings.json` file.

``` js
"css.validate": false, 
"stylelint.enable": true, 
```

Since this is a JSON file, you'll need to insert the above two lines into the overall JSON structure. It might look something like this when you're done.

``` js
{
    "window.zoomLevel": 0, // Random stuff
    "editor.tabSize": 2, // Random stuff
    "css.validate": false,
    "stylelint.enable": true,
    // Maybe more random stuff down here, etc.
}
```

Save the `settings.json` file when done. 

So why did we do this? Left alone, VS Code throws lots of annoying warnings about all the interesting, modern things we're doing in our CSS files. The settings above disable VS Code's native CSS validators. A CSS validator just tells you what's wrong with your CSS files. We then ask Stylelint to do the job instead. No more errors.

> This is cool because Stylelint is configurable. In the OI website code, we have a file in the root folder called `.stylelintrc` which holds our Stylelint configurations for this project.

## Set up Git

Your next step is to [set up Git and GitHub, then download the code]({{ '/docs/git-setup' | url }}) to your computer.