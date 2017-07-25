import { Observable } from 'data/observable';
import * as app from 'application';
import * as dialogs from 'ui/dialogs';
import { View } from "ui/core/view";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyMetadataSettings } from "ui/core/dependency-observable";

var eventTextColorProperty = new Property(
    "eventTextColor",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var textSizeProperty = new Property(
    "textSize",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var hourHeightProperty = new Property(
    "hourHeight",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var headerColumnPaddingProperty = new Property(
    "headerColumnPadding",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var headerColumnTextColorProperty = new Property(
    "headerColumnTextColor",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var headerRowPaddingProperty = new Property(
    "headerRowPadding",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var columnGapProperty = new Property(
    "columnGap",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var noOfVisibleDaysProperty = new Property(
    "noOfVisibleDays",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var headerRowBackgroundColorProperty = new Property(
    "headerRowBackgroundColor",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var dayBackgroundColorProperty = new Property(
    "dayBackgroundColor",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var todayBackgroundColorProperty = new Property(
    "todayBackgroundColor",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var headerColumnBackgroundProperty = new Property(
    "headerColumnBackground",
    "CalendarWeekView",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);



export class CalendarWeekView extends View {

    public static eventTextColorProperty = eventTextColorProperty;
    public static textSizeProperty = textSizeProperty;
    public static hourHeightProperty = hourHeightProperty;
    public static headerColumnPaddingProperty = headerColumnPaddingProperty;
    public static headerColumnTextColorProperty = headerColumnTextColorProperty;
    public static headerRowPaddingProperty = headerRowPaddingProperty;
    public static columnGapProperty = columnGapProperty;
    public static noOfVisibleDaysProperty = noOfVisibleDaysProperty;
    public static headerRowBackgroundColorProperty = headerRowBackgroundColorProperty;
    public static dayBackgroundColorProperty = dayBackgroundColorProperty;
    public static todayBackgroundColorProperty = todayBackgroundColorProperty;
    public static headerColumnBackgroundProperty = headerColumnBackgroundProperty;

    constructor() {
        super();
    }

    get eventTextColor(): string {
        return this._getValue(CalendarWeekView.eventTextColorProperty);
    }
    set eventTextColor(value: string) {
        this._setValue(CalendarWeekView.eventTextColorProperty, value);
    }

    get textSize(): any {
        return this._getValue(CalendarWeekView.textSizeProperty);
    }
    set textSize(value: any) {
        this._setValue(CalendarWeekView.textSizeProperty, value);
    }

    get hourHeight(): any {
        return this._getValue(CalendarWeekView.hourHeightProperty);
    }
    set hourHeight(value: any) {
        this._setValue(CalendarWeekView.hourHeightProperty, value);
    }

    get headerColumnPadding(): any {
        return this._getValue(CalendarWeekView.headerColumnPaddingProperty);
    }
    set headerColumnPadding(value: any) {
        this._setValue(CalendarWeekView.headerColumnPaddingProperty, value);
    }

    get headerColumnTextColor(): string {
        return this._getValue(CalendarWeekView.headerColumnTextColorProperty);
    }
    set headerColumnTextColor(value: string) {
        this._setValue(CalendarWeekView.headerColumnTextColorProperty, value);
    }
     get headerRowPadding(): any {
        return this._getValue(CalendarWeekView.headerRowPaddingProperty);
    }
    set headerRowPadding(value: any) {
        this._setValue(CalendarWeekView.headerRowPaddingProperty, value);
    }
     get columnGap(): any {
        return this._getValue(CalendarWeekView.columnGapProperty);
    }
    set columnGap(value: any) {
        this._setValue(CalendarWeekView.columnGapProperty, value);
    }
    get noOfVisibleDays(): number {
        return this._getValue(CalendarWeekView.noOfVisibleDaysProperty);
    }
    set noOfVisibleDays(value: number) {
        this._setValue(CalendarWeekView.noOfVisibleDaysProperty, value);
    }
    get headerRowBackgroundColor(): string {
        return this._getValue(CalendarWeekView.headerRowBackgroundColorProperty);
    }
    set headerRowBackgroundColor(value: string) {
        this._setValue(CalendarWeekView.headerRowBackgroundColorProperty, value);
    }
    get dayBackgroundColor(): string {
        return this._getValue(CalendarWeekView.dayBackgroundColorProperty);
    }
    set dayBackgroundColor(value: string) {
        this._setValue(CalendarWeekView.dayBackgroundColorProperty, value);
    }
    get todayBackgroundColor(): string {
        return this._getValue(CalendarWeekView.todayBackgroundColorProperty);
    }
    set todayBackgroundColor(value: string) {
        this._setValue(CalendarWeekView.todayBackgroundColorProperty, value);
    }
    get headerColumnBackground(): string {
        return this._getValue(CalendarWeekView.headerColumnBackgroundProperty);
    }
    set headerColumnBackground(value: string) {
        this._setValue(CalendarWeekView.headerColumnBackgroundProperty, value);
    }
    public addEvent(id:any,name:any,startYear:any, startMonth:any,startDay:any,startHour:any,startMinute:any,endYear:any,endMonth:any,endDay:any,endHour:any, endMinute:any,eventColor:any): any { }

}