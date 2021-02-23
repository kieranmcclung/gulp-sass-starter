# gulp-sass-starter
This is my current go-to web project starter and you're more than welcome to use it too.

## Usage
1. Clone the repo
2. Run `npm install`
3. Run `gulp watch` to check for SASS/JS changes
4. Draw the rest of the owl

## Notes
### Gulp
The `gulpfile.js` file is as basic as it comes but there are a couple of options. 

You can change the `outputDirectory` to whatever you like. I use this when I'm switching between WordPress and non-WordPress projects. 

You can change the `sassOptions` object as outlined here: https://github.com/sass/node-sass#options

### HTML
The `index.html` file is fairly bare bones but make sure to change the html lang attribute if you're site's primary content isn't in UK English.

### JavaScript
The main `script.js` file is set up with jQuery use in mind. Scrap all of that if you're a purist. 

Throw all your vendor scripts in the `src/vendor` folder and gulp will minify and concatenate them into a single, tidy little file in `dist/js`.

### SASS/CSS
#### Media Queries
The project is set up with https://eduardoboucas.github.io/include-media. I've used a few mixins in the past but this one just works.

You can find all the info above but basic usage is:

`@include media(">=md") { ... }`

Breakpoints have been defined in the `src/scss/base/variables.scss` file, so ammend accordingly.

#### Utility Classes
I've been toying with a new naming convention that pairs well with BEM. It's loosely based on Tailwind CSS media query syntax with colons. *It may well have been used before that but it's the first place I saw it.*

The utility mixin I've created will spew out the following code:

##### SCSS
```
@include utility(margin) {

   &-b {
   
      &--lg {
         margin-bottom: 3em;
      }
   }
   
   &-t {
   
      &--md {
         margin-top: 1.5em;
      }
   }
}
```

##### CSS
```
.u\:margin-b--lg {
   margin-bottom: 3em;
}
.u\:margin-t--md {
   margin-top: 1.5em;
}
```

##### HTML
`<div class="u:margin-b--lg">Look, ma! I've got a big bottom margin.</div>`
