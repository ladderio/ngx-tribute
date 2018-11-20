# ngx-tribute

This is an Angular 2+ wrapper directive for native JS library for @mentions - [tributejs](https://github.com/zurb/tribute)

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