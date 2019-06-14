import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    elements = [];
    selectedElement: Element;
    el: Element[];

    @Output() addButtonClicked = new EventEmitter<boolean>();
    @Output() tableElementSelected = new EventEmitter<any>();

    constructor() {
    }

    addClick() {
        this.addButtonClicked.emit(true);
    }

    getElement(element: Element): void {
        this.selectedElement = element;
        this.tableElementSelected.emit(this.selectedElement);
    }

    addElement(element) {
        return of(this.elements.push(element));
    }

    updateElement(element) {
        let oldelement = element.oldelement;
        let newelement = element.newelemnt;
        for (var i = 0; i < this.elements.length; i++) {
            if((this.elements[i].title===oldelement.title)&&(this.elements[i].description===oldelement.description)){
                this.elements[i] = newelement;
            }
        }
    }

    deleteElement(element) {
        const index = this.elements.findIndex(tmpelement => (tmpelement.title === element.title) && (tmpelement.description === element.description));
        this.elements.splice(index, 1);

    }

    ngOnInit() {

    }
}
