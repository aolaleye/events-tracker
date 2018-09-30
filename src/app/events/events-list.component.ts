import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <event-thumbnail #thumbnail [event]="eventInfo"></event-thumbnail>
    </div>
    `
})

export class EventsListComponent {
    eventInfo = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}