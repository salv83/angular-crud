import { Element } from './../model/element';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    element: Element;
    @Output() editButtonClicked = new EventEmitter<Element>();
    @Output() deleteButtonClicked = new EventEmitter<Element>();

    constructor() {
    }

    showElementDetails(element) {
        this.element = element;
    }

    editClick(){
        this.editButtonClicked.emit(this.element);
    }

    deleteClick(){
        if(confirm('Do you want really delete the element with title: ' + this.element.title + '?')){
            this.deleteButtonClicked.emit(this.element);
        }
    }
    
    ngOnInit() {
    }

}
