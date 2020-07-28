# CSS Grid Framework

- [Sass code](https://github.com/shikakun/css-grid-framework/blob/master/src/styles/_grid.scss)
- [Demo page](https://shikakun.github.com/css-grid-framework/)

## CSS classes

```html
<div class="grid">
  <div class="row">
    <div class="column"></div>
    <div class="column"></div>
  </div>
</div>
```

- `.grid`
- `.row`
    - `.-columns-[1-12]`
    - `.-gap-[(full|half|fourth|none)]`
    - `.-split`
    - `.-collapsible-[(full|half|third)]`
- `.column`
    - `.-span-[1-12]`
    - `.-pushed-[1-11]`
