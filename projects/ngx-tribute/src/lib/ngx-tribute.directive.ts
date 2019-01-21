import {Directive, ElementRef, EventEmitter, Input, OnInit, Optional, Output} from '@angular/core';
import {FormControl, FormControlDirective, FormControlName, NgModel} from '@angular/forms';
import Tribute, {TributeOptions} from 'tributejs';

@Directive({
    selector: '[ngxTribute]',
    exportAs: 'ngx-tribute'
})
export class NgxTributeDirective<T> implements OnInit {
    @Input('ngxTribute')
    options: TributeOptions<T>;

    @Input()
    implicitFormControl: FormControl;

    @Output()
    onMentioned = new EventEmitter<string>();

    tribute: Tribute<T>;

    constructor(
        private element: ElementRef,
        @Optional() private formControlName: FormControlName,
        @Optional() private formControlDirective: FormControlDirective,
        @Optional() private ngModelDirective: NgModel
    ) {}

    get control(): FormControl {
        return this.implicitFormControl ||
            (this.formControlName && this.formControlName.control) ||
            (this.formControlDirective && this.formControlDirective.control) ||
            (this.ngModelDirective && this.ngModelDirective.control);
    }

    ngOnInit() {
        this.tribute = new Tribute(this.options);
        this.tribute.attach(this.element.nativeElement);

        this.element.nativeElement.addEventListener('tribute-replaced', () => {
            const value = ['INPUT', 'TEXTAREA'].includes(
                this.element.nativeElement.tagName
            )
                ? this.element.nativeElement.value
                : this.element.nativeElement.innerHTML;

            this.onMentioned.emit(value);

            if (this.control) {
                this.control.setValue(value);
            }
        });
    }
}
