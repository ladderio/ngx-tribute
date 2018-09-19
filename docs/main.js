(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-tribute/fesm5/ladder-ngx-tribute.js":
/*!******************************************************!*\
  !*** ./dist/ngx-tribute/fesm5/ladder-ngx-tribute.js ***!
  \******************************************************/
/*! exports provided: NgxTributeModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTributeModule", function() { return NgxTributeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxTributeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tributejs */ "./node_modules/tributejs/dist/tribute.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tributejs__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var NgxTributeDirective = /** @class */ (function () {
    function NgxTributeDirective(element, formControlName, formControlDirective, ngModelDirective) {
        this.element = element;
        this.formControlName = formControlName;
        this.formControlDirective = formControlDirective;
        this.ngModelDirective = ngModelDirective;
        this.onMentioned = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(NgxTributeDirective.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.implicitFormControl ||
                (this.formControlName && this.formControlName.control) ||
                (this.formControlDirective && this.formControlDirective.control) ||
                (this.ngModelDirective && this.ngModelDirective.control);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxTributeDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tribute = new tributejs__WEBPACK_IMPORTED_MODULE_2___default.a(this.options);
        this.tribute.attach(this.element.nativeElement);
        this.element.nativeElement.addEventListener('tribute-replaced', function () {
            /** @type {?} */
            var value = ['INPUT', 'TEXTAREA'].includes(_this.element.nativeElement.tagName)
                ? _this.element.nativeElement.value
                : _this.element.nativeElement.innerHTML;
            _this.onMentioned.emit(value);
            if (_this.control) {
                _this.control.setValue(value);
            }
        });
    };
    NgxTributeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngxTribute]'
                },] },
    ];
    /** @nocollapse */
    NgxTributeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    NgxTributeDirective.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngxTribute',] }],
        implicitFormControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onMentioned: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgxTributeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxTributeModule = /** @class */ (function () {
    function NgxTributeModule() {
    }
    NgxTributeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [NgxTributeDirective],
                    exports: [NgxTributeDirective]
                },] },
    ];
    return NgxTributeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFkZGVyLW5neC10cmlidXRlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AbGFkZGVyL25neC10cmlidXRlL2xpYi9uZ3gtdHJpYnV0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BsYWRkZXIvbmd4LXRyaWJ1dGUvbGliL25neC10cmlidXRlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIE5nTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBUcmlidXRlLCB7VHJpYnV0ZU9wdGlvbnN9IGZyb20gJ3RyaWJ1dGVqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neFRyaWJ1dGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hUcmlidXRlRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoJ25neFRyaWJ1dGUnKVxuICAgIG9wdGlvbnM6IFRyaWJ1dGVPcHRpb25zPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBpbXBsaWNpdEZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcblxuICAgIEBPdXRwdXQoKVxuICAgIG9uTWVudGlvbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICB0cmlidXRlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBmb3JtQ29udHJvbERpcmVjdGl2ZTogRm9ybUNvbnRyb2xEaXJlY3RpdmUsXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbmdNb2RlbERpcmVjdGl2ZTogTmdNb2RlbFxuICAgICkge31cblxuICAgIGdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbGljaXRGb3JtQ29udHJvbCB8fFxuICAgICAgICAgICAgKHRoaXMuZm9ybUNvbnRyb2xOYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2wpIHx8XG4gICAgICAgICAgICAodGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZSAmJiB0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlLmNvbnRyb2wpIHx8XG4gICAgICAgICAgICAodGhpcy5uZ01vZGVsRGlyZWN0aXZlICYmIHRoaXMubmdNb2RlbERpcmVjdGl2ZS5jb250cm9sKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50cmlidXRlID0gbmV3IFRyaWJ1dGUodGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy50cmlidXRlLmF0dGFjaCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJpYnV0ZS1yZXBsYWNlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gWydJTlBVVCcsICdURVhUQVJFQSddLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnRhZ05hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA/IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgOiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgIHRoaXMub25NZW50aW9uZWQuZW1pdCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ3hUcmlidXRlRGlyZWN0aXZlfSBmcm9tICcuL25neC10cmlidXRlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmd4VHJpYnV0ZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOZ3hUcmlidXRlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUcmlidXRlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7SUFtQkksNkJBQ1ksU0FDWSxlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsZ0JBQXlCO1FBSHJDLFlBQU8sR0FBUCxPQUFPO1FBQ0ssb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFTOzJCQVJuQyxJQUFJLFlBQVksRUFBVTtLQVNwQztJQUVKLHNCQUFJLHdDQUFPOzs7O1FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxtQkFBbUI7aUJBQzFCLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7aUJBQ3JELElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDO2lCQUMvRCxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hFOzs7T0FBQTs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFOztZQUM1RCxJQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQ3hDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDckM7a0JBQ0ssS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSztrQkFDaEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1lBRTNDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTdCLElBQUksS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQztTQUNKLENBQUMsQ0FBQztLQUNOOztnQkE5Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO2lCQUMzQjs7OztnQkFOa0IsVUFBVTtnQkFDYyxlQUFlLHVCQW9CakQsUUFBUTtnQkFwQkksb0JBQW9CLHVCQXFCaEMsUUFBUTtnQkFyQjJDLE9BQU8sdUJBc0IxRCxRQUFROzs7MEJBZlosS0FBSyxTQUFDLFlBQVk7c0NBR2xCLEtBQUs7OEJBR0wsTUFBTTs7OEJBZFg7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQjs7MkJBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.options = {
            values: [
                { key: 'foo', value: 'Foo' },
                { key: 'bar', value: 'Bar' },
                { key: 'baz', value: 'Baz' }
            ]
        };
        this.form = this.fb.group({
            control: ['']
        });
        this.customControl = this.fb.control('Initial state');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n        <h1>ngx-tribute demo</h1>\n        <p>\n            This demo intends to demonstrate just <a href=\"https://github.com/ladderio/ngx-tribute\">ngx-tribute</a>\n            which is an Angular wrapper for <a href=\"https://github.com/zurb/tribute\">Zurb's Tribute</a>.\n            For complete reference of available configuration please refer to the original library docs.\n        </p>\n\n        <h2>Simple usage on text input</h2>\n        <input [ngxTribute]=\"options\">\n\n        <h2>Retrieving a selected value</h2>\n        <input [ngxTribute]=\"options\" (onMentioned)=\"lastMention = $event\">\n        Value after mention: {{ lastMention }}\n\n        <h2>Usage with <code>ngModel</code></h2>\n        <input [(ngModel)]=\"ngModelValue\" [ngxTribute]=\"options\">\n        Value of <code>ngModel</code>: {{ ngModelValue }}\n\n        <h2>Usage with reactive forms and <code>FormControl</code></h2>\n        <div [formGroup]=\"form\">\n            <input formControlName=\"control\" [ngxTribute]=\"options\">\n            Value of form: {{ form.value | json }}\n        </div>\n\n        <h2>Passing <code>FormControl</code> manually</h2>\n        <input [implicitFormControl]=\"customControl\" [ngxTribute]=\"options\">\n        Value of control: {{ customControl.value }}\n    "
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_tribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-tribute */ "./dist/ngx-tribute/fesm5/ladder-ngx-tribute.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_tribute__WEBPACK_IMPORTED_MODULE_3__["NgxTributeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adrian/develop/ngx-tribute/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map