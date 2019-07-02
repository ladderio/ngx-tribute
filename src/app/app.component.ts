import {Component, ViewChild} from '@angular/core';
import {TributeOptions} from 'tributejs';
import {FormBuilder} from '@angular/forms';
import {NgxTributeDirective} from '../../projects/ngx-tribute/src/lib/ngx-tribute.directive';

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

        <h2>Retrieving the original item</h2>
        <input [ngxTribut]="advancedOptions" (mentionItemSelected)="advancedMention = $event">
        Original Item recieved from mention:
        <p *ngIf="advancedMention">
            Key: {{ advancedMention.key }} <br>
            Value: {{ advancedMention.value }} <br>
            Id: {{ advancedMention.id }}
        </p>

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

        <h2>Referencing <code>Tribute</code> instance</h2>
        <input [ngxTribute]="options" #tributeDirective="ngx-tribute">
        <p>Usage via view: is active - {{ tributeDirective.tribute.isActive }}</p>
        <p>Usage via component: is active - {{ tributeDirectiveInComponent.tribute.isActive }}</p>

        <h2>Dynamically adding/removing tribute Directive</h2>
        <button (click)="showInput = !showInput">toggle</button>
        <input *ngIf="showInput" [ngxTribute]="options">

        <h2>Using <code>menuContainer</code></h2>
        <input [ngxTribute]="options2" [menuContainer]="container">
        <div #container class="menu-container"></div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('tributeDirective') tributeDirectiveInComponent: NgxTributeDirective<TributeValue>;

    options: TributeOptions<TributeValue> = {
        values: [
            { key: 'foo', value: 'Foo' },
            { key: 'bar', value: 'Bar' },
            { key: 'baz', value: 'Baz' }
        ]
    };
    options2 = {
        values: [
            { key: 'foo', value: 'Foo' },
            { key: 'bar', value: 'Bar' },
            { key: 'baz', value: 'Baz' }
        ],
        positionMenu: false
    };

    advancedOptions = {
        values: [
            { key: 'foo', value: 'Foo', id: '1'},
            { key: 'bar', value: 'Bar', id: '2' },
            { key: 'baz', value: 'Baz', id: '3' }
        ]
    };

    showInput = true; // On showInput = false, the tribute container gets cleaned up.
    lastMention;
    advancedMention;
    ngModelValue;
    form = this.fb.group({
        control: ['']
    });
    customControl = this.fb.control('Initial state');

    constructor(private fb: FormBuilder) {}
}
