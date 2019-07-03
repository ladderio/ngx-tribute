(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-tribute/fesm5/ngx-tribute.js":
/*!***********************************************!*\
  !*** ./dist/ngx-tribute/fesm5/ngx-tribute.js ***!
  \***********************************************/
/*! exports provided: NgxTributeModule, NgxTributeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTributeModule", function() { return NgxTributeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTributeDirective", function() { return NgxTributeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tributejs */ "./node_modules/tributejs/dist/tribute.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tributejs__WEBPACK_IMPORTED_MODULE_3__);





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
        this.onMentioned = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mentionItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
        /** @type {?} */
        var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options);
        if (this.menuContainer) {
            (/** @type {?} */ (options)).menuContainer = this.menuContainer;
        }
        this.tribute = new tributejs__WEBPACK_IMPORTED_MODULE_3___default.a(options);
        this.tribute.attach(this.element.nativeElement);
        this.element.nativeElement.addEventListener('tribute-replaced', function (event) {
            /** @type {?} */
            var value = ['INPUT', 'TEXTAREA'].includes(_this.element.nativeElement.tagName)
                ? _this.element.nativeElement.value
                : _this.element.nativeElement.innerHTML;
            _this.onMentioned.emit(value);
            _this.mentionItemSelected.emit(event.detail.item.original);
            if (_this.control) {
                _this.control.setValue(value);
            }
        });
    };
    /**
     * @return {?}
     */
    NgxTributeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.tribute) {
            this.tribute.detach(this.element.nativeElement);
        }
    };
    NgxTributeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[ngxTribute]',
                    exportAs: 'ngx-tribute'
                },] },
    ];
    /** @nocollapse */
    NgxTributeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    NgxTributeDirective.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngxTribute',] }],
        menuContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        implicitFormControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onMentioned: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        mentionItemSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyaWJ1dGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC10cmlidXRlL2xpYi9uZ3gtdHJpYnV0ZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC10cmlidXRlL2xpYi9uZ3gtdHJpYnV0ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIE5nTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBUcmlidXRlLCB7VHJpYnV0ZUNvbGxlY3Rpb24sIFRyaWJ1dGVPcHRpb25zfSBmcm9tICd0cmlidXRlanMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hUcmlidXRlXScsXG4gICAgZXhwb3J0QXM6ICduZ3gtdHJpYnV0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHJpYnV0ZURpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoJ25neFRyaWJ1dGUnKVxuICAgIG9wdGlvbnM6IFRyaWJ1dGVPcHRpb25zPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBtZW51Q29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICAgIEBJbnB1dCgpXG4gICAgaW1wbGljaXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvbk1lbnRpb25lZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgbWVudGlvbkl0ZW1TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgdHJpYnV0ZTogVHJpYnV0ZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWUsXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZm9ybUNvbnRyb2xEaXJlY3RpdmU6IEZvcm1Db250cm9sRGlyZWN0aXZlLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nTW9kZWxEaXJlY3RpdmU6IE5nTW9kZWxcbiAgICApIHt9XG5cbiAgICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxpY2l0Rm9ybUNvbnRyb2wgfHxcbiAgICAgICAgICAgICh0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sKSB8fFxuICAgICAgICAgICAgKHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUgJiYgdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sKSB8fFxuICAgICAgICAgICAgKHRoaXMubmdNb2RlbERpcmVjdGl2ZSAmJiB0aGlzLm5nTW9kZWxEaXJlY3RpdmUuY29udHJvbCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IFRyaWJ1dGVPcHRpb25zPFQ+ID0geyAuLi50aGlzLm9wdGlvbnMgfTtcblxuICAgICAgICBpZiAodGhpcy5tZW51Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAob3B0aW9ucyBhcyBUcmlidXRlQ29sbGVjdGlvbjxUPikubWVudUNvbnRhaW5lciA9IHRoaXMubWVudUNvbnRhaW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpYnV0ZSA9IG5ldyBUcmlidXRlKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnRyaWJ1dGUuYXR0YWNoKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmlidXRlLXJlcGxhY2VkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IFsnSU5QVVQnLCAnVEVYVEFSRUEnXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC50YWdOYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgPyB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgIDogdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICB0aGlzLm9uTWVudGlvbmVkLmVtaXQodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5tZW50aW9uSXRlbVNlbGVjdGVkLmVtaXQoZXZlbnQuZGV0YWlsLml0ZW0ub3JpZ2luYWwpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRoaXMudHJpYnV0ZS5kZXRhY2godGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tmd4VHJpYnV0ZURpcmVjdGl2ZX0gZnJvbSAnLi9uZ3gtdHJpYnV0ZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neFRyaWJ1dGVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmd4VHJpYnV0ZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VHJpYnV0ZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBMEJJLDZCQUNZLFNBQ1ksZUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLGdCQUF5QjtRQUhyQyxZQUFPLEdBQVAsT0FBTztRQUNLLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUzsyQkFYbkMsSUFBSSxZQUFZLEVBQVU7bUNBR2xCLElBQUksWUFBWSxFQUFPO0tBU3pDO0lBRUosc0JBQUksd0NBQU87Ozs7UUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjtpQkFDMUIsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztpQkFDckQsSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7aUJBQy9ELElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEU7OztPQUFBOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBd0JDOztRQXZCRyxJQUFNLE9BQU8sZ0JBQTJCLElBQUksQ0FBQyxPQUFPLEVBQUc7UUFFdkQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLG1CQUFDLE9BQStCLEdBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDeEU7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxLQUFLOztZQUNsRSxJQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQ3hDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDckM7a0JBQ0ssS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSztrQkFDaEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1lBRTNDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFMUQsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDO1NBQ0osQ0FBQyxDQUFDO0tBQ047Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EO0tBQ0o7O2dCQWxFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2lCQUMxQjs7OztnQkFQa0IsVUFBVTtnQkFDYyxlQUFlLHVCQTJCakQsUUFBUTtnQkEzQkksb0JBQW9CLHVCQTRCaEMsUUFBUTtnQkE1QjJDLE9BQU8sdUJBNkIxRCxRQUFROzs7MEJBckJaLEtBQUssU0FBQyxZQUFZO2dDQUdsQixLQUFLO3NDQUdMLEtBQUs7OEJBR0wsTUFBTTtzQ0FHTixNQUFNOzs4QkFyQlg7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQjs7MkJBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./projects/ngx-tribute/src/lib/ngx-tribute.directive.ts":
/*!***************************************************************!*\
  !*** ./projects/ngx-tribute/src/lib/ngx-tribute.directive.ts ***!
  \***************************************************************/
/*! exports provided: NgxTributeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTributeDirective", function() { return NgxTributeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tributejs */ "./node_modules/tributejs/dist/tribute.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tributejs__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NgxTributeDirective = /** @class */ (function () {
    function NgxTributeDirective(element, formControlName, formControlDirective, ngModelDirective) {
        this.element = element;
        this.formControlName = formControlName;
        this.formControlDirective = formControlDirective;
        this.ngModelDirective = ngModelDirective;
        this.onMentioned = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mentionItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(NgxTributeDirective.prototype, "control", {
        get: function () {
            return this.implicitFormControl ||
                (this.formControlName && this.formControlName.control) ||
                (this.formControlDirective && this.formControlDirective.control) ||
                (this.ngModelDirective && this.ngModelDirective.control);
        },
        enumerable: true,
        configurable: true
    });
    NgxTributeDirective.prototype.ngOnInit = function () {
        var _this = this;
        var options = __assign({}, this.options);
        if (this.menuContainer) {
            options.menuContainer = this.menuContainer;
        }
        this.tribute = new tributejs__WEBPACK_IMPORTED_MODULE_2___default.a(options);
        this.tribute.attach(this.element.nativeElement);
        this.element.nativeElement.addEventListener('tribute-replaced', function (event) {
            var value = ['INPUT', 'TEXTAREA'].includes(_this.element.nativeElement.tagName)
                ? _this.element.nativeElement.value
                : _this.element.nativeElement.innerHTML;
            _this.onMentioned.emit(value);
            _this.mentionItemSelected.emit(event.detail.item.original);
            if (_this.control) {
                _this.control.setValue(value);
            }
        });
    };
    NgxTributeDirective.prototype.ngOnDestroy = function () {
        if (this.tribute) {
            this.tribute.detach(this.element.nativeElement);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('ngxTribute'),
        __metadata("design:type", Object)
    ], NgxTributeDirective.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", HTMLElement)
    ], NgxTributeDirective.prototype, "menuContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], NgxTributeDirective.prototype, "implicitFormControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NgxTributeDirective.prototype, "onMentioned", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NgxTributeDirective.prototype, "mentionItemSelected", void 0);
    NgxTributeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ngxTribute]',
            exportAs: 'ngx-tribute'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]])
    ], NgxTributeDirective);
    return NgxTributeDirective;
}());



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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container ::ng-deep .tribute-container {\n    position: static;\n}"

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
/* harmony import */ var _projects_ngx_tribute_src_lib_ngx_tribute_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/ngx-tribute/src/lib/ngx-tribute.directive */ "./projects/ngx-tribute/src/lib/ngx-tribute.directive.ts");
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
        this.options2 = {
            values: [
                { key: 'foo', value: 'Foo' },
                { key: 'bar', value: 'Bar' },
                { key: 'baz', value: 'Baz' }
            ],
            positionMenu: false
        };
        this.advancedOptions = {
            values: [
                { key: 'foo', value: 'Foo', id: '1' },
                { key: 'bar', value: 'Bar', id: '2' },
                { key: 'baz', value: 'Baz', id: '3' }
            ]
        };
        this.showInput = true; // On showInput = false, the tribute container gets cleaned up.
        this.form = this.fb.group({
            control: ['']
        });
        this.customControl = this.fb.control('Initial state');
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tributeDirective'),
        __metadata("design:type", _projects_ngx_tribute_src_lib_ngx_tribute_directive__WEBPACK_IMPORTED_MODULE_2__["NgxTributeDirective"])
    ], AppComponent.prototype, "tributeDirectiveInComponent", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n        <h1>ngx-tribute demo</h1>\n        <p>\n            This demo intends to demonstrate just <a href=\"https://github.com/ladderio/ngx-tribute\">ngx-tribute</a>\n            which is an Angular wrapper for <a href=\"https://github.com/zurb/tribute\">Zurb's Tribute</a>.\n            For complete reference of available configuration please refer to the original library docs.\n        </p>\n\n        <h2>Simple usage on text input</h2>\n        <input [ngxTribute]=\"options\">\n\n        <h2>Retrieving a selected value</h2>\n        <input [ngxTribute]=\"options\" (onMentioned)=\"lastMention = $event\">\n        Value after mention: {{ lastMention }}\n\n        <h2>Retrieving the original item</h2>\n        <input [ngxTribute]=\"advancedOptions\" (mentionItemSelected)=\"advancedMention = $event\">\n        Original Item recieved from mention:\n        <p *ngIf=\"advancedMention\">\n            Key: {{ advancedMention.key }} <br>\n            Value: {{ advancedMention.value }} <br>\n            Id: {{ advancedMention.id }}\n        </p>\n\n        <h2>Usage with <code>ngModel</code></h2>\n        <input [(ngModel)]=\"ngModelValue\" [ngxTribute]=\"options\">\n        Value of <code>ngModel</code>: {{ ngModelValue }}\n\n        <h2>Usage with reactive forms and <code>FormControl</code></h2>\n        <div [formGroup]=\"form\">\n            <input formControlName=\"control\" [ngxTribute]=\"options\">\n            Value of form: {{ form.value | json }}\n        </div>\n\n        <h2>Passing <code>FormControl</code> manually</h2>\n        <input [implicitFormControl]=\"customControl\" [ngxTribute]=\"options\">\n        Value of control: {{ customControl.value }}\n\n        <h2>Referencing <code>Tribute</code> instance</h2>\n        <input [ngxTribute]=\"options\" #tributeDirective=\"ngx-tribute\">\n        <p>Usage via view: is active - {{ tributeDirective.tribute.isActive }}</p>\n        <p>Usage via component: is active - {{ tributeDirectiveInComponent.tribute.isActive }}</p>\n\n        <h2>Dynamically adding/removing tribute Directive</h2>\n        <button (click)=\"showInput = !showInput\">toggle</button>\n        <input *ngIf=\"showInput\" [ngxTribute]=\"options\">\n\n        <h2>Using <code>menuContainer</code></h2>\n        <input [ngxTribute]=\"options2\" [menuContainer]=\"container\">\n        <div #container class=\"menu-container\"></div>\n    ",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var ngx_tribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-tribute */ "./dist/ngx-tribute/fesm5/ngx-tribute.js");
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