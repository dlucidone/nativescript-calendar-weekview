import common = require( "./calendar-weekview.common");
import {android as AndroidApplication} from "application";
import * as application from 'application';
import { PropertyChangeData } from "ui/core/dependency-observable";
import { PropertyMetadata } from "ui/core/proxy";
import { Color } from "color";

function eventTextColorPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setEventTextColor(new Color(data.newValue).android);
}

function textSizePropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setTextSize(new Color(data.newValue).android);
}

function hourHeightPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHourHeight(data.newValue);
}

function headerColumnPaddingPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHeaderColumnPadding(data.newValue);
}

function headerColumnTextColorPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHeaderColumnTextColor(new Color(data.newValue).android);
}

function headerRowPaddingPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHeaderRowPadding(data.newValue);
}

function columnGapPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setColumnGap(data.newValue);
}



function noOfVisibleDaysPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setNumberOfVisibleDays(data.newValue);
}

function headerRowBackgroundColorPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHeaderRowBackgroundColor(new Color(data.newValue).android);
}


function dayBackgroundColorPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setDayBackgroundColor(new Color(data.newValue).android);
}


function todayBackgroundColorPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setTodayBackgroundColor(new Color(data.newValue).android);
}

function headerColumnBackgroundPropertyChanged(data: PropertyChangeData) {
    var wView = < CalendarWeekView > data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHeaderColumnBackgroundColor(new Color(data.newValue).android);
}


// register the setNativeValue callbacks
( < PropertyMetadata > common.CalendarWeekView.eventTextColorProperty.metadata).onSetNativeValue = eventTextColorPropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.textSizeProperty.metadata).onSetNativeValue = textSizePropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.hourHeightProperty.metadata).onSetNativeValue = hourHeightPropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.headerColumnPaddingProperty.metadata).onSetNativeValue = headerColumnPaddingPropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.headerColumnTextColorProperty.metadata).onSetNativeValue = headerColumnTextColorPropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.headerRowPaddingProperty.metadata).onSetNativeValue = headerRowPaddingPropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.columnGapProperty.metadata).onSetNativeValue = columnGapPropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.noOfVisibleDaysProperty.metadata).onSetNativeValue = noOfVisibleDaysPropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.headerRowBackgroundColorProperty.metadata).onSetNativeValue = headerRowBackgroundColorPropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.dayBackgroundColorProperty.metadata).onSetNativeValue = dayBackgroundColorPropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.todayBackgroundColorProperty.metadata).onSetNativeValue = todayBackgroundColorPropertyChanged;
( < PropertyMetadata > common.CalendarWeekView.headerColumnBackgroundProperty.metadata).onSetNativeValue = headerColumnBackgroundPropertyChanged;


global.moduleMerge(common, exports);

declare const com: any;
let WeekView: any = com.alamkanak.weekview.WeekView;

@Interfaces([com.alamkanak.weekview.MonthLoader.MonthChangeListener, com.alamkanak.weekview.WeekView.EventClickListener, com.alamkanak.weekview.WeekView.EventLongPressListener, com.alamkanak.weekview.WeekView.EmptyViewLongPressListener])
export class CalendarWeekView extends common.CalendarWeekView {
    public events;
    public eventsList = new java.util.ArrayList();
    constructor() {
        super();
        const context = application.android.context;
    }

    private _android: any;
    get android() {
        return this._android;
    }
    get _nativeView() {
        return this._android;
    }

    public _createUI() {

        var that = this;
        this._android = new WeekView(this._context);

        this._android.setOnEventClickListener(new com.alamkanak.weekview.WeekView.EventClickListener({
            onEventClick: function(event, eventRect) {
                console.log("in set on EventClickListener");
            }
        }));
        this._android.setMonthChangeListener(new com.alamkanak.weekview.MonthLoader.MonthChangeListener({
            onMonthChange: function(newYear, newMonth) {
                return that.getEvents(newYear, newMonth);
            }
        }));
        this._android.setEventLongPressListener(new com.alamkanak.weekview.WeekView.EventLongPressListener({
            onEventClick: function(event, eventRect) {
                console.log("in set on EventClickListener");
            }
        }));
        this._android.setEmptyViewLongPressListener(new com.alamkanak.weekview.WeekView.EmptyViewLongPressListener({
            onEventClick: function(event, eventRect) {
                console.log("in set on EventClickListener");
            }
        }));

        if (this.eventTextColor) {
            this._android.setEventTextColor(new Color(this.eventTextColor).android);
        }

        if (this.textSize) {
            this._android.setTextSize(this.textSize);
        }

        if (this.hourHeight) {
            this._android.setHourHeight(this.hourHeight);
        }

        if (this.headerColumnPadding) {
            this._android.setHeaderColumnPadding(this.headerColumnPadding);
        }

        if (this.headerColumnTextColor) {
            this._android.setHeaderColumnTextColor(new Color(this.headerColumnTextColor).android);
        }

        if (this.headerRowPadding) {
            this._android.setHeaderRowPadding(this.headerRowPadding);
        }



        if (this.columnGap) {
            this._android.setColumnGap(this.columnGap);
        }

        if (this.noOfVisibleDays) {
            this._android.setNumberOfVisibleDays(this.noOfVisibleDays);
        }

        if (this.headerRowBackgroundColor) {
            this._android.setHeaderRowBackgroundColor(new Color(this.headerRowBackgroundColor).android);
        }

        if (this.dayBackgroundColor) {
            this._android.setDayBackgroundColor(new Color(this.dayBackgroundColor).android);
        }

        if (this.todayBackgroundColor) {
            this._android.setTodayBackgroundColor(new Color(this.todayBackgroundColor).android);
        }

        if (this.headerColumnBackground) {
            this._android.setHeaderColumnBackgroundColor(new Color(this.headerColumnBackground).android);
        }


    }

    public addEvent(id, name, startYear, startMonth, startDay, startHour, startMinute, endYear, endMonth, endDay, endHour, endMinute, eventColor): any {
        let event1 = new com.alamkanak.weekview.WeekViewEvent(id, name, startYear, startMonth, startDay, startHour, startMinute, endYear, endMonth, endDay, endHour, endMinute);
        event1.setColor(new Color(eventColor).android);
        this.eventsList.add(event1);
        this._android.notifyDatasetChanged();

    }

    public getEvents(newYear, newMonth) {
        var date = new Date();
        this.events = new java.util.ArrayList();
        if (this.eventsList.size() > 0) {
            if (date.getFullYear() == newYear && date.getMonth() == newMonth) {
                for (var i = 0; i < this.eventsList.size(); i++) {
                    this.events.add(this.eventsList.get(i));
                }
            }
        }
        return this.events
    }


}