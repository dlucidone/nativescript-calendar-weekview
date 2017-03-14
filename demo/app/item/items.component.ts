import {Component, ElementRef, ViewChild} from '@angular/core';
import {CalendarWeekView} from 'nativescript-calendar-weekview';
import { RouterExtensions } from 'nativescript-angular/router';
import { View } from "ui/core/view";
@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent extends View {
    @ViewChild("CalendarWeekView") CalendarWeekView: ElementRef;
    public CalendarWeekview = new CalendarWeekView;
    constructor() {
        super();
        
    }

    addEvent() {
        let event = this.CalendarWeekView.nativeElement;
        // provide params in this order
        // addEvent(id,name,startYear, startMonth, startDay,startHour,startMinute,endYear,endMonth, endDay, endHour,endMinute,eventColor)
        event.addEvent(1, "first Event", 2017, 3, 14, 3, 3, 2017, 3, 14, 7, 5, "#87d288");
        event.addEvent(2, "Second Event", 2017, 3, 15, 5, 3, 2017, 3, 15, 7, 5, "#59DBE0");
        event.addEvent(3, "Third Event", 2017, 3, 14, 8, 3, 2017, 3, 14, 10, 5, "#F66C4E");

    }

}
