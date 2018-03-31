# styling-kit

Style interface, mostly common web-sites, apps and etc in a common way.
This kit allows to style OS interface, apps and websites with the same color palette.

![screenshoot](https://raw.githubusercontent.com/a2nt/styling-kit/master/screenshot.png)

At the screen shoot you can see Gnome Shell interface + styled website.

# Requirements
node
npm
gulp

# Supports

## Interfaces

+ GNOME Shell
+ GTK 2.0, 3.0, 3.2
+ Metacity
+ Unity
+ xfwm4

## Apps

+ nautilus
+ gedit
+ lightdm
+ pantheon
+ budgie
+ geary

## Web

+ leprosorium.ru

# Development

## Getting started

```
git clone https://github.com/a2nt/styling-kit.git
cd styling-kit
npm install
node ./index.js
```

## Add extra style

1) Create style at ./web/*site_name_domain*/scss/index.scss
2) Create domain specific variables at ./web/*site_name_domain*/scss/_variables.scss and include global variables ./_variables.scss
3) Edit global ./_variables.scss
4) Compile styles using node ./index.js
5) Compiled styles will be placed into ./dist/ directory

## Example

Take a look to ./web/example-domain.com 