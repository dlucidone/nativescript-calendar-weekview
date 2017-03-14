import common = require("./calendar-weekview.common");
export declare class CalendarWeekView extends common.CalendarWeekView {
    events: any;
    eventsList: java.util.ArrayList<{}>;
    constructor();
    private _android;
    readonly android: any;
    readonly _nativeView: any;
    _createUI(): void;
    addEvent(id: any, name: any, startYear: any, startMonth: any, startDay: any, startHour: any, startMinute: any, endYear: any, endMonth: any, endDay: any, endHour: any, endMinute: any, eventColor: any): any;
    getEvents(newYear: any, newMonth: any): any;
}
