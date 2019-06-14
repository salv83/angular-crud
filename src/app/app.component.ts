import { FormComponent } from './form/form.component';
import { Element } from './model/element';
import { TableComponent } from './table/table.component';
import { OnInit, ViewChild, Component, ChangeDetectorRef } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    showForm = false;
    showDetails = false;
    element: Element;

    constructor(private changeDetector: ChangeDetectorRef) { }

    @ViewChild(TableComponent) table: TableComponent;
    @ViewChild(DetailsComponent) details: DetailsComponent;
    @ViewChild(FormComponent) form: FormComponent;

    displayForm(addButtonClicked: Object) {
        if (addButtonClicked) {
            this.showForm = true;
            this.showDetails = false;
        }
    }

    saveElement(saveButtonClicked: Object) {
        this.showDetails = false;
        let newelement = new Element();
        newelement.title = saveButtonClicked['title'];
        newelement.description = saveButtonClicked['description'];
        this.table.addElement(newelement);
    }

    displayDetails(selectedElement: Object) {
        this.showForm = false;
        this.showDetails = true;
        this.changeDetector.detectChanges();
        let newelement = new Element();
        newelement.title = selectedElement['title'];
        newelement.description = selectedElement['description'];
        this.details.showElementDetails(newelement);
    }

    editElement(editedElement: Object) {
        this.showForm = true;
        this.showDetails = false;
        this.changeDetector.detectChanges();
        this.form.editDetails(editedElement);
    }

    gotEditedElement(editedElementData: any) {
        this.table.updateElement(editedElementData);
    }

    deleteElement(toDeleteElement: Object){
        this.table.deleteElement(toDeleteElement);
        this.showForm = false;
        this.showDetails = false;
    }

    ngOnInit() {

    }
}
