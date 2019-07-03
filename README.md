# ngx-tribute

This is an Angular 2+ wrapper directive for native JS library for @mentions - [tributejs](https://github.com/zurb/tribute).
It supports contenteditable and Reactive Forms.

To install:
```
npm i tributejs ngx-tribute
```

Note: At least version `3.3.5` of `tributejs` is required.

Usage
--

Import `NgxTributeModule`:

```typescript
import {NgxTributeModule} from 'ngx-tribute';

@NgModule({
  imports: [
    NgxTributeModule
  ],
  ...
})
export class AppModule { }
```

and use `[ngxTribute]` directive on your `input`, `textarea` or `[contenteditable]`:

```html
<input [ngxTribute]="tributeOptions">
```

Import default CSS from `node_modules/tributejs/dist/tribute.css` to get a minimal working example.

Check [tributejs docs](https://github.com/zurb/tribute#a-collection) for a detailed description of the configuration object.

Check [a demo](https://ladderio.github.io/ngx-tribute/) and [it's code](https://github.com/ladderio/ngx-tribute/blob/master/src/app/app.component.ts)
to see different ways of using the directive. It integrates well with template forms and reactive forms.

API Docs
--

Inputs:

- `[ngxTribute]` - Tribute.js configuration object, refer to [original library docs](https://github.com/zurb/tribute#a-collection) for details
- `[implicitFormControl]` - pass `FormControl` if it's value will be altered by Tribute
  (this isn't required if you use `[formControl]` or `[formControlName]` directives)
- `[menuContainer]` - if you want to use `menuContainer` option from Tribute.js, pass element obtained
  by template ref variable here, instead of manually retrieving element from DOM. See "Using `menuContainer`"
  below for an explanation and example
  
Outputs:

- `(onMentioned)` - emits the whole value of input each time when a new mention is added
- `(mentionItemSelected)` - emits the original object of input each time when a new mention is added

Reactive forms
--

When using Angular reactive forms, form control value needs to be updated whenever you select any mention.
This directive does it automatically by intercepting Angular `[formControl]` or `[formControlName]`
directive attached to the same element as Tribute.js or one of its ancestors.
If for some reason you're not using standard directives, you can use `[implicitFormControl]`
input to pass form control, which should be updated, directly to `ngxTribute` directive.

See [demo app](https://ladderio.github.io/ngx-tribute/) and [it's code](https://github.com/ladderio/ngx-tribute/blob/master/src/app/app.component.ts) for an example.

Using `menuContainer`
--

Tribute.js allows to pass a DOM element, to which menu should be attached, by using `menuContainer` option.
It's a bad practice in Angular to obtain elements via `document` methods (eg. `document.getElementById()`).
Angular gives it's own methods for accessing DOM nodes. In this case, Template Reference Variable should be used.

See following example:
```typescript
@Component({
    template: `
        <input [ngxTribute]="options" [menuContainer]="container">
        <div #container></div>
    `
})
class MyComponent {
    options = {
        values: [
            { key: 'foo', value: 'Foo' },
            { key: 'bar', value: 'Bar' },
            { key: 'baz', value: 'Baz' }
        ],
        positionMenu: false
    }
}
```

Contributing
--

- library code is located in `projects/ngx-tribute` and demo code in `src`
- run `npm install` after cloning the repo
- run `npm run build-lib` to build the library used by demo app
- run `npm start` to start a dev server with demo app
- whenever you change something in the library code, you need to run `npm run build-lib` to see that changes in demo app
- after finishing, run `npm run build-demo` to rebuild a demo app

Story behind this lib
--

We were rewriting a project from AngularJS 1.5 to Angular 2 and faced the lack of a good library for @mentions in the new Angular.
There were some, but we needed a good support for `[contenteditable]`, and none of existing solutions satisfied our needs.
We decided to check for some lib written in pure JS and add an Angular wrapper for it.
We were so happy with the result, that we decided to share that with the rest of the world :)

[This is just a tribute](https://www.youtube.com/watch?v=_lK4cX5xGiQ)
