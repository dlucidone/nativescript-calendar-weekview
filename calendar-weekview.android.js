"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common = require("./calendar-weekview.common");
var application = require("application");
var color_1 = require("color");
function eventTextColorPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setEventTextColor(new color_1.Color(data.newValue).android);
}
function textSizePropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setTextSize(new color_1.Color(data.newValue).android);
}
function hourHeightPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHourHeight(data.newValue);
}
function headerColumnPaddingPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHeaderColumnPadding(data.newValue);
}
function headerColumnTextColorPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHeaderColumnTextColor(new color_1.Color(data.newValue).android);
}
function headerRowPaddingPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHeaderRowPadding(data.newValue);
}
function columnGapPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setColumnGap(data.newValue);
}
function noOfVisibleDaysPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setNumberOfVisibleDays(data.newValue);
}
function headerRowBackgroundColorPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHeaderRowBackgroundColor(new color_1.Color(data.newValue).android);
}
function dayBackgroundColorPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setDayBackgroundColor(new color_1.Color(data.newValue).android);
}
function todayBackgroundColorPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setTodayBackgroundColor(new color_1.Color(data.newValue).android);
}
function headerColumnBackgroundPropertyChanged(data) {
    var wView = data.object;
    if (!wView.android) {
        return;
    }
    wView.android.setHeaderColumnBackgroundColor(new color_1.Color(data.newValue).android);
}
common.CalendarWeekView.eventTextColorProperty.metadata.onSetNativeValue = eventTextColorPropertyChanged;
common.CalendarWeekView.textSizeProperty.metadata.onSetNativeValue = textSizePropertyChanged;
common.CalendarWeekView.hourHeightProperty.metadata.onSetNativeValue = hourHeightPropertyChanged;
common.CalendarWeekView.headerColumnPaddingProperty.metadata.onSetNativeValue = headerColumnPaddingPropertyChanged;
common.CalendarWeekView.headerColumnTextColorProperty.metadata.onSetNativeValue = headerColumnTextColorPropertyChanged;
common.CalendarWeekView.headerRowPaddingProperty.metadata.onSetNativeValue = headerRowPaddingPropertyChanged;
common.CalendarWeekView.columnGapProperty.metadata.onSetNativeValue = columnGapPropertyChanged;
common.CalendarWeekView.noOfVisibleDaysProperty.metadata.onSetNativeValue = noOfVisibleDaysPropertyChanged;
common.CalendarWeekView.headerRowBackgroundColorProperty.metadata.onSetNativeValue = headerRowBackgroundColorPropertyChanged;
common.CalendarWeekView.dayBackgroundColorProperty.metadata.onSetNativeValue = dayBackgroundColorPropertyChanged;
common.CalendarWeekView.todayBackgroundColorProperty.metadata.onSetNativeValue = todayBackgroundColorPropertyChanged;
common.CalendarWeekView.headerColumnBackgroundProperty.metadata.onSetNativeValue = headerColumnBackgroundPropertyChanged;
global.moduleMerge(common, exports);
var WeekView = com.alamkanak.weekview.WeekView;
var CalendarWeekView = (function (_super) {
    __extends(CalendarWeekView, _super);
    function CalendarWeekView() {
        var _this = _super.call(this) || this;
        _this.eventsList = new java.util.ArrayList();
        var context = application.android.context;
        return _this;
    }
    Object.defineProperty(CalendarWeekView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    CalendarWeekView.prototype._createUI = function () {
        var that = this;
        this._android = new WeekView(this._context);
        this._android.setOnEventClickListener(new com.alamkanak.weekview.WeekView.EventClickListener({
            onEventClick: function (event, eventRect) {
                console.log("in set on EventClickListener");
            }
        }));
        this._android.setMonthChangeListener(new com.alamkanak.weekview.MonthLoader.MonthChangeListener({
            onMonthChange: function (newYear, newMonth) {
                return that.getEvents(newYear, newMonth);
            }
        }));
        this._android.setEventLongPressListener(new com.alamkanak.weekview.WeekView.EventLongPressListener({
            onEventLongPress: function (event, eventRect) {
                console.log("in set on EventLongPressListener");
            }
        }));
        this._android.setEmptyViewLongPressListener(new com.alamkanak.weekview.WeekView.EmptyViewLongPressListener({
            onEmptyViewLongPress: function (time) {
                console.log("in set on setEmptyViewLongPressListener");
            }
        }));
        if (this.eventTextColor) {
            this._android.setEventTextColor(new color_1.Color(this.eventTextColor).android);
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
            this._android.setHeaderColumnTextColor(new color_1.Color(this.headerColumnTextColor).android);
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
            this._android.setHeaderRowBackgroundColor(new color_1.Color(this.headerRowBackgroundColor).android);
        }
        if (this.dayBackgroundColor) {
            this._android.setDayBackgroundColor(new color_1.Color(this.dayBackgroundColor).android);
        }
        if (this.todayBackgroundColor) {
            this._android.setTodayBackgroundColor(new color_1.Color(this.todayBackgroundColor).android);
        }
        if (this.headerColumnBackground) {
            this._android.setHeaderColumnBackgroundColor(new color_1.Color(this.headerColumnBackground).android);
        }
    };
    CalendarWeekView.prototype.addEvent = function (id, name, startYear, startMonth, startDay, startHour, startMinute, endYear, endMonth, endDay, endHour, endMinute, eventColor) {
        var event1 = new com.alamkanak.weekview.WeekViewEvent(id, name, startYear, startMonth, startDay, startHour, startMinute, endYear, endMonth, endDay, endHour, endMinute);
        event1.setColor(new color_1.Color(eventColor).android);
        this.eventsList.add(event1);
        this._android.notifyDatasetChanged();
    };
    CalendarWeekView.prototype.getEvents = function (newYear, newMonth) {
        var date = new Date();
        this.events = new java.util.ArrayList();
        if (this.eventsList.size() > 0) {
            if (date.getFullYear() == newYear && date.getMonth() == newMonth) {
                for (var i = 0; i < this.eventsList.size(); i++) {
                    this.events.add(this.eventsList.get(i));
                }
            }
        }
        return this.events;
    };
    return CalendarWeekView;
}(common.CalendarWeekView));
CalendarWeekView = __decorate([
    Interfaces([com.alamkanak.weekview.MonthLoader.MonthChangeListener, com.alamkanak.weekview.WeekView.EventClickListener, com.alamkanak.weekview.WeekView.EventLongPressListener, com.alamkanak.weekview.WeekView.EmptyViewLongPressListener]),
    __metadata("design:paramtypes", [])
], CalendarWeekView);
exports.CalendarWeekView = CalendarWeekView;
//# sourceMappingURL=calendar-weekview.android.js.map