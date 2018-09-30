- __@Input__: the input decorator tells javascript that the specified info will be passed in from another component

- Interpolation and Property Bindings are used to __bind data from the component to the template__

- __Interplation__: to display data (i.e. <h2>{{user.name}}</h2>)

- __Property Binding__: used to bind the data to the property of a DOM element (i.e. <img [src] = "user.imageUrl"/>)

- __Expression__: 
    - Interpolation: expressions are encased by double brackets (i.e. <h2>{{user.name}}</h2>)
    - Property Binding: the propery is encased in square braces and the expressions are encased by quotes - (i.e. <img [src] = "user.imageUrl"/>) 

- __Event Binding__: the event is encased by paranthesis and the statement is encased by quotes (i.e. <button (click)="doSomething()"></button>)

- __Structural Directive__: 
    - Characterized with an asterick (*) (i.e. *ngFor)
    - Different from other directives because structual directives actually change the shape of the DOM. They don't hide elements, they actually add or remove HTML elements from the HTML document
    - __*ngFor__: can create a DOM element for each item in an object (i.e. *ngFor="let event of events")
    - __*ngIf__: add or remove HTML elements dependent on if the directives returns true or false (i.e. <h2 *ngIf="user.name">{{user.name}}</h2> )

- __Safe Operator__: Protects against null values. Including a question mark (?) in case a data value is undefined (i.e. <h2>user?.name</h2>)

- __[hidden]__: Directive set to a boolean. It hides the DOM element if true (i.e. <div>[hidden]="!event.location"</div> - hides the element if the location is undefined)

- __[ngSwitch]__: Reveals DOM elements dependent on the condition (i.e. 
        <div [ngSwitch]="event?.time">
            <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchCase="'10:00 am'">Late Start</span>
            <span *ngSwitchDefault>Normal Start</span>
        </div>
    )

- __Class Binding__: Adds specified class if the condition returns true (i.e. 
    <div [class.green]="event?.time === '8:00 am'"> - adds the class "green" if the event.time equals the string '8:00 am'
)

- __[ngClass]__: 
    - Adds specified classes if the conditions within the object return true (i.e. 
        <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.format === 'Online'}"> - adds the class "green" if the event.time equals the string '8:00 am', adds the class "bold" if the event.format equals the string 'Online'
    ) 
    - Can be set to an object, string (space separated list of the classes you want), or an array of strings (i.e.

        <div [ngClass]="getStartTimeClass()">

        getStartTimeClass() {
            if (this.event && this.event.time === '8:00 am') {
                return 'green bold'
            } else {
                return ''
            }
        }

        OR

        <div [ngClass]="getClassArray()">

        getClassArray() {
            const classArray = [];
            if (this.event && this.event.time === '8:00 am') {
                classArray.push('green')
            } else if (this.event && this.event.format === 'Online') {
                classArray.push('bold')
            }
            return classArray;
        }
    )

    - __Style Binding__: Sets inline style based on ternary statement (i.e. 
        <div [style.color]="event?.time === '8:00 am' ? '#003300' : '#bbb'">
    )

    - __[ngStyle]__: Sets inline styles based on ternary statements within the object (i.e. 
        <div [ngStyle]="{'color': event?.time === '8:00 am' ? '#003300' : '#bbb', 'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'}">

        OR

        <div [ngStyle]="getStartTimeStyle()">

        getStartTimeStyle():any {
            if (this.event && this.event.time === '8:00 am') {
                return {color: '#003300', 'font-weight': 'bold'}
            } else {
                return {}
            }
        }
    ) 