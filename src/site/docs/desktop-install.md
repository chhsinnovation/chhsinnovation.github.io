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

1. Download and install our Javascript processor, [NodeJS](https://nodejs.org/en/). **LTS** version is preferred.

2. Go get [Visual Studio Code](https://code.visualstudio.com/). **Stable** builds are best.

## Linux 

You're cool enough to run Linux, so you've got this. To follow the rest of the instructions below, ensure you have [git](https://git-scm.com/), [NodeJS](https://nodejs.org/en/), and [Visual Studio Code](https://code.visualstudio.com/). (Yes, Microsoft actually supports a Linux version of VS Code. 2020 is weird times.) ;)

## Fetching the code

Open up Visual Studio Code. 

Within VS Code, go to the `Terminal` menu and select `New Terminal`. A command line terminal should appear toward the bottom of the screen.

Our first order of business is to set up your name and email address in Git. Enter the following commands into the terminal, one line at a time, replacing "John Doe" with your own details.

``` shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Next, let's pick a folder on your computer where you want to save the site's code. For example, if you want to keep your code in the `Documents` folder, you'll want to `cd` into said folder within the terminal. 

``` shell
cd Documents
```

Now that we're in the `Documents` folder (or whatever folder you chose), let's use `git clone` to download the repository. This example will download Don's fork of the code.

``` shell
git clone https://github.com/mealordon/chhsinnovation.github.io.git
```

Now change into the folder for the code we just fetched from GitHub. In this example, we're already in the *Documents* folder from before, so we just need to `cd` into the new folder created by `clone`.

``` shell
cd chhsinnovation.github.io.git
```

**Don**, at this point, you will need to fetch the new changes from my repository to bring your fork up to date. Here's the magic to make that happen. 

``` shell
git fetch origin
git checkout netlify
git pull
```

I *think* that will pull the updates. Let me know if not. 

> At this point, you may want to refocus VS Code's attention on your new `chhsinnovation.github.io.git` folder, so you can see all the files in the left-side *Explorer* pane. Go to the `File` menu, select `Open Folder`, and navigate to the `chhsinnovation.github.io.git` folder on your computer.

## Running the code

With your terminal now pointed to the code's folder, run the following command to install the app's Javascript dependencies.

``` shell
npm install
```

You'll probably see a bunch of warnings about `fsevents` and other stuff that's safe to ignore. This may take a minute or two, so go get yourself a beer while the computer sweats it out.

Finally, it's time to run the site!

``` shell
npm run start
```

When the site is running, you'll see some web addresses. You want `Local`, which will probably be [http://localhost:8080](http://localhost:8080) or [http://localhost:8081](http://localhost:8081). Click the link that matches your terminal's output.

You did it! The site is now running on your computer.

> Any time you **save a file** in the project, your browser should automatically update with the new changes as long as the site is running. This works best with a web browser and VS Code open side-by-side.

## Stopping the code

To shut down the site, click your mouse into the terminal, then press `Control-C`. On Windows, you'll also need to hit `y` when prompted.

## Extras

Here's some more cool stuff you can do. All optional.

### Trick out Visual Studio Code

Visual Studio Code is highly configurable, with a rich ecosystem of extensions. The following extensions enhance your OI web slinging experience.

> Don, some of this won't make any sense until I write additional docs about some of these tools. No need to worry about it yet. But I won't stop you from adventuring!

The [Nunjucks Template](https://marketplace.visualstudio.com/items?itemName=eseom.nunjucks-template#overview) extension provides syntax highlighting for `.njk` files.

[VSCode-TailwindCSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) speeds up working with Tailwind-derived classes in our `.njk` and `.html` files.

[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) helps process the PostCSS-based fanciness in our `.css` files. But first, we need to help Stylelint.

1. Go ahead and install the [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint).

2. Go to the `View` menu and select `Command Palette`.

3. In the Command Palette, type `Open Settings`. From the menu that pops up, select `Preferences: Open Settings (JSON)`.

4. Time to do some surgery. We will enter the following two lines into the file.

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

Save the settings file when done.