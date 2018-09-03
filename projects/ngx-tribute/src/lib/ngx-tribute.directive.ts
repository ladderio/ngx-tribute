import {Directive, ElementRef, EventEmitter, Input, OnInit, Optional, Output} from '@angular/core';
import {FormControl, FormControlDirective, FormControlName} from '@angular/forms';

declare const Tribute;

@Directive({
    selector: '[ngxTribute]'
})
export class NgxTributeDirective implements OnInit {
    @Input('ngxTribute')
    options: any;

    @Input()
    implicitFormControl: FormControl;

    @Output()
    onMentioned = new EventEmitter<string>();

    tribute;

    constructor(
        private element: ElementRef,
        @Optional() private formControlName: FormControlName,
        @Optional() private formControlDirective: FormControlDirective
    ) {}

    get control(): FormControl {
        return this.implicitFormControl ||
            (this.formControlName && this.formControlName.control) ||
            (this.formControlDirective && this.formControlDirective.control);
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
