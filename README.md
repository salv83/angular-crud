# Exam objectives

Create a CRUD with angular with the following code.
There are 3 main components which they should communicate with each other. 
The app should work like this:

+ When you click `Add Element` the form component should become visible [http://prntscr.com/nvycnn](#http://prntscr.com/nvycnn). 
The form has only title and description fields and when you type save it will add one more element to the elements variable in table.component.ts.
We recommend to use Reactive Forms for the form.component.ts.

+ When you click an element in the table the details form should become visible.
It will show the title and the description of the element and has an `Edit` and `Delete` button [http://prntscr.com/nvyeif](#http://prntscr.com/nvyeif).

    + When you click `Edit` it will hide the details component and show the forms component but this time the fields will be filled with the element title and description [http://prntscr.com/nvyfhr](#http://prntscr.com/nvyfhr).
    When you type save it will update the element and also the table
    + When you click `Delete` it will alert if you want to delete this element. 
    If true then the element is removed and table is updated.
    
Try to keep the code as clean as possible. 

## Bonus Points

+ Using Angular ViewChild [https://angular.io/api/core/ViewChild](#https://angular.io/api/core/ViewChild)
+ Improving the design. The css skills are not that important but if you make a smooth design that would give bonus points
