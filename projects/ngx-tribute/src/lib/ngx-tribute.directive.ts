import {Directive, ElementRef, EventEmitter, Input, OnInit, Optional, Output, OnDestroy} from '@angular/core';
import {FormControl, FormControlDirective, FormControlName, NgModel} from '@angular/forms';
import Tribute, {TributeCollection, TributeOptions} from 'tributejs';

@Directive({
    selector: '[ngxTribute]',
    exportAs: 'ngx-tribute'
})
export class NgxTributeDirective<T> implements OnInit, OnDestroy {
    @Input('ngxTribute')
    options: TributeOptions<T>;

    @Input()
    menuContainer: HTMLElement;

    @Input()
    implicitFormControl: FormControl;

    @Output()
    onMentioned = new EventEmitter<string>();

    @Output()
    mentionItemSelected = new EventEmitter<any>();

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
        const options: TributeOptions<T> = { ...this.options };

        if (this.menuContainer) {
            (options as TributeCollection<T>).menuContainer = this.menuContainer;
        }

        this.tribute = new Tribute(options);
        this.tribute.attach(this.element.nativeElement);

        this.element.nativeElement.addEventListener('tribute-replaced', (event) => {
            const value = ['INPUT', 'TEXTAREA'].includes(
                this.element.nativeElement.tagName
            )
                ? this.element.nativeElement.value
                : this.element.nativeElement.innerHTML;

            this.onMentioned.emit(value);
            this.mentionItemSelected.emit(event.detail.item.original);

            if (this.control) {
                this.control.setValue(value);
            }
        });
    }

    ngOnDestroy() {
        if (this.tribute) {
            this.tribute.detach(this.element.nativeElement);
        }
    }
}
