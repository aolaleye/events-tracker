import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        // evaluating as a boolean - if that route DOES exist, then eventExists === true and vice versa
        // the (!!) operator forces a boolean, so if it doesn't exist, it forces a value of false rather than null or undefined

        if(!eventExists) {
            // so if it does not return a valid event then it redirects to 404 page
            this.router.navigate(['/404'])
        }

        return eventExists;
        // it will return true - meaning the route can be activated if the event exists - otherwise it will return false 
    }
}