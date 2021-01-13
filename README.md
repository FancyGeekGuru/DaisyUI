<div align="center">

[![][logo-url]](#)  

**UI Components for Tailwind CSS**  
Themeable, Scalable and Designer-Friendly  
[ [See all components][netlify-url] ]
  
[![][tweet]][tweet-url]  

</div>

[![][banner-url]][netlify-url]  

# DaisyUI  
[![][build]][build-url] [![][install-size]][install-size-url] [![][styled-css]][styled-css-url]  
[![][npm]][npm-url] [![][dl]][npm-url] [![][commit]][gh-url] [![][license]][license-url]

>***It's like Tailwind CSS on steroids!***  
>You have everything from [Tailwind CSS][tailwind-url], *but* you can also use component classes like `btn`, `card`, etc...

---

## 🔗 Links
- 👉 Demo and samples [Netlify][netlify-url] / [Github][gh-pages-url]
- 🎲 Try it online: [Tailwind Play][tw-play-url] / [Codepen][codepen-url]
- 📘 [Theming guide][theming-url]
- 📘 [List of components][components-url]
- 📘 [FAQ][faq-url]
- 📦 Source: [GitHub][gh-url] / [NPM][npm-url]
- 📦 CDN: [Unpkg][unpkg-url] / [JSdeliver][jsdeliver-url]

---

## 🌼 Features   
- **Tailwind CSS plugin**: Simply add it to your Tailwind config.
- **CSS components**: It adds component classes to Tailwind. Classes like `btn`, `card`,... No need to write hundreds of utility classes
- **Designer-friendly**: You can disable `styled` config to remove colors and visual styling of components, so you can design your own style on a basic skeleton.
- **Scalable**: All your components will use the same design system. No more classname madness when your app gets bigger.
- **Customizable**: Customize the style of elements with Tailwind utility classes.
- **Themeable**: Add multiple themes or change colors with a CSS variable. You can even set a theme for a specific section of your page [ * ][theming-url].  
- **Semantic color names**: Use color names like `primary`, `secondary`, `accent`,... just like your design system defines.  
- **Default Themes (optional)**: DaisyUI has 9 default themes.  
- **RTL supported**: Enable `rtl` config for right to left layouts   

---

## 👩‍💻 Install now!  

```
npm i daisyui
```

Then add DaisyUI to your `tailwind.config.js`
```js
module.exports = {
  
  plugins: [
    require('daisyui'),
  ],

  // OPTIONAL: if you want to use DaisyUI colors everywhere
  theme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },

}
```


<details>
<summary>
  Or use a CDN
</summary>


>*Loading CSS files from CDN is not recommended for production. It's better to install Tailwind and DaisyUI as Nodejs dependencies so you can config/customize everything, and purge unused styles.*  

- **Full.css** (Tailwind's default style + DaisyUI components)  
  [![][full-css]][full-css-url]  
  ```
  https://unpkg.com/daisyui@0.7.x/dist/full.css
  ```
- **Default themes** (optional)  
  [![][theme-css]][theme-css-url]   
  ```
  https://unpkg.com/daisyui@0.7.x/dist/themes.css
  ```


</details>

---
## 🎉 Use  
Use component classes like `btn`, `card`, etc... to build your UI.  
```html
<a class="btn">Hello!</a>
```
```html
<div class="shadow card">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2> 
    <p>Card text</p>
  </div>
</div> 
```

👉 [See all components][netlify-url]  
🎲 [Try it online][tw-play-url]  

---

## 🎨 Customize theme and colors (optional)  
Add your custom colors in CSS file  
[ [Theming guide and examples][theming-url] ↗︎ ]

<details>
<summary>
  Quick example
</summary>

```css
/* Values are HSL (hue, saturation, lightness) */
:root {
  --d: 0 0% 100%; /* default color */
  --p1: 340 82% 62%; /* Primary color - light */
  --p2: 340 82% 52%; /* Primary color - normal */
  --p3: 340 82% 42%; /* Primary color - dark */
  --s1: 262 52% 56%; /* Secondary color - light */
  --s2: 262 52% 46%; /* Secondary color - normal */
  --s3: 262 52% 36%; /* Secondary color - dark */
  --a1: 199 98% 58%; /* Accent color - light */
  --a2: 199 98% 48%; /* Accent color - normal */
  --a3: 199 98% 38%; /* Accent color - dark */
  --c1: 220 14% 96%; /* Content colors */
  --c2: 228 14% 93%;
  --c3: 220 15% 84%;
  --c4: 218 14% 65%;
  --c5: 220 14% 46%;
  --c6: 220 14% 37%;
  --c7: 219 14% 28%;
  --c8: 222 13% 19%;
  --c9: 223 14% 10%;
  --cp: 0 0% 100%; /* Foreground content color to use on a primary color */
  --cs: 0 0% 100%; /* Foreground content color to use on a secondary color */
  --ca: 0 0% 100%; /* Foreground content color to use on a accent color */
  --in: 207 90% 54%; /* Info */
  --su: 174 100% 29%; /* Success */
  --wa: 36 100% 50%; /* Warning */
  --er: 14 100% 57%; /* Error */
}
```

</details>

---
  
<div align="center">
  
  
Please share  
  
[![][tweet]][tweet-url]  

</div>



[install-size]: https://badgen.net/bundlephobia/min/daisyui?label=Package%20size&color=purple
[base-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui@0.7.x/dist/base.css?label=base.css&color=purple
[styled-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui@0.7.x/dist/styled.css?label=CSS%20size&color=purple
[full-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui@0.7.x/dist/full.css?label=full.css&color=purple
[theme-css]: https://badgen.net/badgesize/normal/https/unpkg.com/daisyui@0.7.x/dist/themes.css?label=themes.css&color=pink
[build]: https://badgen.net/github/checks/saadeghi/daisyui?label=build
[npm]: https://badgen.net/npm/v/daisyui?label=version&icon=npm&color=purple
[dl]: https://badgen.net/npm/dt/daisyui?icon=npm&color=purple
[commit]: https://badgen.net/github/last-commit/saadeghi/daisyui?icon=github&color=purple
[license]: https://badgen.net/github/license/saadeghi/daisyui?color=purple
[tweet]: https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fsaadeghi%2Fdaisyui

[install-size-url]: https://bundlephobia.com/result?p=daisyui
[base-css-url]: https://unpkg.com/daisyui@0.7.x/dist/base.css
[styled-css-url]: https://unpkg.com/daisyui@0.7.x/dist/styled.css
[full-css-url]: https://unpkg.com/daisyui@0.7.x/dist/full.css
[theme-css-url]: https://unpkg.com/daisyui@0.7.x/dist/themes.css
[license-url]: https://github.com/saadeghi/daisyui/blob/master/LICENSE
[npm-url]: https://www.npmjs.com/package/daisyui
[gh-url]: https://github.com/saadeghi/daisyui
[tw-play-url]: https://play.tailwindcss.com/908kXKMIeO
[codepen-url]: https://codepen.io/saadeghi/pen/gOwWKvv
[unpkg-url]: https://unpkg.com/browse/daisyui/
[jsdeliver-url]: https://www.jsdelivr.com/package/npm/daisyui
[build-url]: https://github.com/saadeghi/daisyui/actions
[tweet-url]: https://twitter.com/intent/tweet?text=DaisyUI%20%0D%0AUI%20Components%20for%20Tailwind%20CSS%20%0D%0Ahttps://github.com/saadeghi/daisyui

[theming-url]: https://github.com/saadeghi/daisyui/blob/master/docs/theming.md
[faq-url]: https://github.com/saadeghi/daisyui/blob/master/docs/faq.md
[components-url]: https://github.com/saadeghi/daisyui/blob/master/docs/components.md
[netlify-url]: https://daisyui.netlify.app/
[gh-pages-url]: https://saadeghi.github.io/daisyui-demo/
[tailwind-url]: https://tailwindcss.com/
[logo-url]: https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg
[banner-url]: https://raw.githubusercontent.com/saadeghi/files/main/daisyui/presentation/dark-theme-wide.png

