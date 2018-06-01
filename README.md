# Coffeekraken s-table-component <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffrrkraken/s-table-component">
		<img src="https://img.shields.io/travis/coffrrkraken/s-table-component.svg?style=flat-square" />
	</a> -->
	<a href="https://www.npmjs.com/package/coffeekraken-s-table-component">
		<img src="https://img.shields.io/npm/v/coffeekraken-s-table-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffrrkraken/s-table-component/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-s-table-component.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffrrkraken/s-table-component">
		<img src="https://img.shields.io/npm/dt/coffeekraken-s-table-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffrrkraken/s-table-component">
		<img src="https://img.shields.io/github/forks/coffrrkraken/s-table-component.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffrrkraken/s-table-component">
		<img src="https://img.shields.io/github/stars/coffrrkraken/s-table-component.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

Full stack table styling with support for colored, striped, bordered, responsive table and more...

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-table-component)**
2. [Features](#readme-features)
3. [Install](#readme-install)
4. [Get Started](#readme-get-started)
5. [SASS API](doc/sass)
6. [Browsers support](#readme-browsers-support)
7. [Contribute](#readme-contribute)
8. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
9. [Licence](#readme-license)

<a name="readme-features"></a>
## Features

1. Default tables style
2. Colored tables
3. Striped tables
4. Bordered tables
5. Responsive and responsive-overflow tables
6. More...

<a name="readme-install"></a>
## Install

```
npm install coffeekraken-s-table-component --save
```

<a name="readme-get-started"></a>
## Get Started

First, import the component into your scss file like so:

```scss
@import 'node_modules/coffeekraken-s-table-component/index';
```

Then generate the classes using the mixins provided like so:

```scss
@include s-table-classes(
	$colors: default primary secondary,
	$modifiers: striped bordered hover responsive responsive-overflow interactive middle center
);
```

Then simply use it inside your html like so:

```html
<table class="table table--primary">
	<thead>
		<tr>
			<th>Col #1</th>
			<th>Col #2</th>
			<th>Col #3</th>
			<th>Col #4</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>item #1</td>
			<td>item #2</td>
			<td>item #3</td>
			<td>item #4</td>
		</tr>
		<tr>
			<td>item #1</td>
			<td>item #2</td>
			<td>item #3</td>
			<td>item #4</td>
		</tr>
	</tbody>
</table>
```

<a id="readme-browsers-support"></a>
## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| --------- | --------- | --------- | --------- |
| IE11+ | last 2 versions| last 2 versions| last 2 versions

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-contribute"></a>
## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
