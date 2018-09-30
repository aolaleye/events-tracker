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
