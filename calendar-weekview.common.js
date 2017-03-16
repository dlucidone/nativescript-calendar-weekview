"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var proxy_1 = require("ui/core/proxy");
var dependency_observable_1 = require("ui/core/dependency-observable");
var eventTextColorProperty = new dependency_observable_1.Property("eventTextColor", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var textSizeProperty = new dependency_observable_1.Property("textSize", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var hourHeightProperty = new dependency_observable_1.Property("hourHeight", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var headerColumnPaddingProperty = new dependency_observable_1.Property("headerColumnPadding", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var headerColumnTextColorProperty = new dependency_observable_1.Property("headerColumnTextColor", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var headerRowPaddingProperty = new dependency_observable_1.Property("headerRowPadding", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var columnGapProperty = new dependency_observable_1.Property("columnGap", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var noOfVisibleDaysProperty = new dependency_observable_1.Property("noOfVisibleDays", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var headerRowBackgroundColorProperty = new dependency_observable_1.Property("headerRowBackgroundColor", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var dayBackgroundColorProperty = new dependency_observable_1.Property("dayBackgroundColor", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var todayBackgroundColorProperty = new dependency_observable_1.Property("todayBackgroundColor", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var headerColumnBackgroundProperty = new dependency_observable_1.Property("headerColumnBackground", "CalendarWeekView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var CalendarWeekView = (function (_super) {
    __extends(CalendarWeekView, _super);
    function CalendarWeekView() {
        return _super.call(this) || this;
    }
    Object.defineProperty(CalendarWeekView.prototype, "eventTextColor", {
        get: function () {
            return this._getValue(CalendarWeekView.eventTextColorProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.eventTextColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "textSize", {
        get: function () {
            return this._getValue(CalendarWeekView.textSizeProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.textSizeProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "hourHeight", {
        get: function () {
            return this._getValue(CalendarWeekView.hourHeightProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.hourHeightProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "headerColumnPadding", {
        get: function () {
            return this._getValue(CalendarWeekView.headerColumnPaddingProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.headerColumnPaddingProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "headerColumnTextColor", {
        get: function () {
            return this._getValue(CalendarWeekView.headerColumnTextColorProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.headerColumnTextColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "headerRowPadding", {
        get: function () {
            return this._getValue(CalendarWeekView.headerRowPaddingProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.headerRowPaddingProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "columnGap", {
        get: function () {
            return this._getValue(CalendarWeekView.columnGapProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.columnGapProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "noOfVisibleDays", {
        get: function () {
            return this._getValue(CalendarWeekView.noOfVisibleDaysProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.noOfVisibleDaysProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "headerRowBackgroundColor", {
        get: function () {
            return this._getValue(CalendarWeekView.headerRowBackgroundColorProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.headerRowBackgroundColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "dayBackgroundColor", {
        get: function () {
            return this._getValue(CalendarWeekView.dayBackgroundColorProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.dayBackgroundColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "todayBackgroundColor", {
        get: function () {
            return this._getValue(CalendarWeekView.todayBackgroundColorProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.todayBackgroundColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarWeekView.prototype, "headerColumnBackground", {
        get: function () {
            return this._getValue(CalendarWeekView.headerColumnBackgroundProperty);
        },
        set: function (value) {
            this._setValue(CalendarWeekView.headerColumnBackgroundProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    CalendarWeekView.prototype.addEvent = function (id, name, startYear, startMonth, startDay, startHour, startMinute, endYear, endMonth, endDay, endHour, endMinute, eventColor) { };
    return CalendarWeekView;
}(view_1.View));
CalendarWeekView.eventTextColorProperty = eventTextColorProperty;
CalendarWeekView.textSizeProperty = textSizeProperty;
CalendarWeekView.hourHeightProperty = hourHeightProperty;
CalendarWeekView.headerColumnPaddingProperty = headerColumnPaddingProperty;
CalendarWeekView.headerColumnTextColorProperty = headerColumnTextColorProperty;
CalendarWeekView.headerRowPaddingProperty = headerRowPaddingProperty;
CalendarWeekView.columnGapProperty = columnGapProperty;
CalendarWeekView.noOfVisibleDaysProperty = noOfVisibleDaysProperty;
CalendarWeekView.headerRowBackgroundColorProperty = headerRowBackgroundColorProperty;
CalendarWeekView.dayBackgroundColorProperty = dayBackgroundColorProperty;
CalendarWeekView.todayBackgroundColorProperty = todayBackgroundColorProperty;
CalendarWeekView.headerColumnBackgroundProperty = headerColumnBackgroundProperty;
exports.CalendarWeekView = CalendarWeekView;
//# sourceMappingURL=calendar-weekview.common.js.map