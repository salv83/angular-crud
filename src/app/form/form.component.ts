import { Element } from './../model/element';
import { Component, OnInit, Output, EventEmitter, ɵConsole, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    crudForm: FormGroup;
    element: Element;
    oldelement: Element;

    @Output() saveButtonClicked = new EventEmitter<any>();
    @Output() saveEditedDetails = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        this.crudForm = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required)
        });
    }

    editDetails(element) {
        this.oldelement = element;
        this.crudForm.setValue({
            title: this.oldelement.title,
            description: this.oldelement.description
        });
    }

    onSubmit(): void {
        if (this.oldelement) {
            var editEventData = {
                "oldelement": this.oldelement,
                "newelemnt": this.crudForm.value
            };
            this.saveEditedDetails.emit(editEventData);
            this.oldelement = null;
            this.crudForm.reset();
        } else {
            if (this.crudForm.valid) {
                this.saveButtonClicked.emit(this.crudForm.value);
                this.crudForm.reset();
            }
        }

    }


}
