# CSS Grid Framework

- [Sass code](https://github.com/shikakun/css-grid-framework/blob/master/src/styles/_grid.scss)
- [Demo page](https://shikakun.github.com/css-grid-framework/)

## API

### CSS classes

- `.grid` (Parent element)
    - `.-columns-[1-12]`
    - `.-split`
    - `.-collapsible-full`
    - `.-collapsible-half`
    - `.-collapsible-third`
- `.column` (Child element)
    - `.-span-[1-12]`
    - `.-pushed-[1-11]`

### Sass mixins

- `@mixin grid-columns($number)`
- `@mixin column-span($number)`
- `@mixin column-pushed($number)`
