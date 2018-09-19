import { Component } from '@angular/core';
import {TributeOptions} from 'tributejs';
import {FormBuilder} from '@angular/forms';

interface TributeValue {
    key: string;
    value: string;
}

@Component({
    selector: 'app-root',
    template: `
        <h1>ngx-tribute demo</h1>
        <p>
            This demo intends to demonstrate just <a href="https://github.com/ladderio/ngx-tribute">ngx-tribute</a>
            which is an Angular wrapper for <a href="https://github.com/zurb/tribute">Zurb's Tribute</a>.
            For complete reference of available configuration please refer to the original library docs.
        </p>

        <h2>Simple usage on text input</h2>
        <input [ngxTribute]="options">

        <h2>Retrieving a selected value</h2>
        <input [ngxTribute]="options" (onMentioned)="lastMention = $event">
        Value after mention: {{ lastMention }}

        <h2>Usage with <code>ngModel</code></h2>
        <input [(ngModel)]="ngModelValue" [ngxTribute]="options">
        Value of <code>ngModel</code>: {{ ngModelValue }}

        <h2>Usage with reactive forms and <code>FormControl</code></h2>
        <div [formGroup]="form">
            <input formControlName="control" [ngxTribute]="options">
            Value of form: {{ form.value | json }}
        </div>

        <h2>Passing <code>FormControl</code> manually</h2>
        <input [implicitFormControl]="customControl" [ngxTribute]="options">
        Value of control: {{ customControl.value }}
    `
})
export class AppComponent {
    options: TributeOptions<TributeValue> = {
        values: [
            { key: 'foo', value: 'Foo' },
            { key: 'bar', value: 'Bar' },
            { key: 'baz', value: 'Baz' }
        ]
    };

    lastMention;
    ngModelValue;
    form = this.fb.group({
        control: ['']
    });
    customControl = this.fb.control('Initial state');

    constructor(private fb: FormBuilder) {}
}
