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
    NgxTributeModule,
  ],
  ...
})
export class AppModule { }
```

and use `[ngxTribute]` directive on your `input`, `textarea` or `[contenteditable]`:

```html
<input [ngxTribute]="tributeOptions">
```

Check [tributejs docs](https://github.com/zurb/tribute#a-collection) for a detailed description of the configuration object.

Check [a demo](https://ladderio.github.io/ngx-tribute/) and [it's code](https://github.com/ladderio/ngx-tribute/blob/master/src/app/app.component.ts)
to see different ways of using the directive. It integrates well with template forms and reactive forms.

Contributing
--

- library code is located in `projects/ngx-tribute` and demo code in `src`
- run `npm install` after cloning the repo and `npm start` to start a dev server
- whenever you change something in the library code, you need to run `npm run build-lib` to see that changes in demo app
- after finishing, run `npm run build-demo` to rebuild a demo app