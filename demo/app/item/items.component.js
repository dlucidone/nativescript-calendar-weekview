"use strict";
var core_1 = require("@angular/core");
var nativescript_calendar_weekview_1 = require("nativescript-calendar-weekview");
var view_1 = require("ui/core/view");
var ItemsComponent = (function (_super) {
    __extends(ItemsComponent, _super);
    function ItemsComponent() {
        var _this = _super.call(this) || this;
        _this.CalendarWeekview = new nativescript_calendar_weekview_1.CalendarWeekView;
        return _this;
    }
    ItemsComponent.prototype.addEvent = function () {
        var event = this.CalendarWeekView.nativeElement;
        // provide params in this order
        // addEvent(id,name,startYear, startMonth, startDay,startHour,startMinute,endYear,endMonth, endDay, endHour,endMinute,eventColor)
        event.addEvent(1, "first Event", 2017, 3, 14, 3, 3, 2017, 3, 14, 7, 5, "#87d288");
        event.addEvent(2, "Second Event", 2017, 3, 15, 5, 3, 2017, 3, 15, 7, 5, "#59DBE0");
        event.addEvent(3, "Third Event", 2017, 3, 14, 8, 3, 2017, 3, 14, 10, 5, "#F66C4E");
    };
    return ItemsComponent;
}(view_1.View));
__decorate([
    core_1.ViewChild("CalendarWeekView"),
    __metadata("design:type", core_1.ElementRef)
], ItemsComponent.prototype, "CalendarWeekView", void 0);
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    }),
    __metadata("design:paramtypes", [])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBK0Q7QUFDL0QsaUZBQWdFO0FBRWhFLHFDQUFvQztBQU1wQyxJQUFhLGNBQWM7SUFBUyxrQ0FBSTtJQUdwQztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQUpNLHNCQUFnQixHQUFHLElBQUksaURBQWdCLENBQUM7O0lBSS9DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNoRCwrQkFBK0I7UUFDL0IsaUlBQWlJO1FBQ2pJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEYsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNuRixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRXZGLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFsQkQsQ0FBb0MsV0FBSSxHQWtCdkM7QUFqQmtDO0lBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7OEJBQW1CLGlCQUFVO3dEQUFDO0FBRG5ELGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsd0JBQXdCO0tBQ3hDLENBQUM7O0dBQ1csY0FBYyxDQWtCMUI7QUFsQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FsZW5kYXJXZWVrVmlld30gZnJvbSAnbmF0aXZlc2NyaXB0LWNhbGVuZGFyLXdlZWt2aWV3JztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGV4dGVuZHMgVmlldyB7XG4gICAgQFZpZXdDaGlsZChcIkNhbGVuZGFyV2Vla1ZpZXdcIikgQ2FsZW5kYXJXZWVrVmlldzogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgQ2FsZW5kYXJXZWVrdmlldyA9IG5ldyBDYWxlbmRhcldlZWtWaWV3O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gdGhpcy5DYWxlbmRhcldlZWtWaWV3Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIC8vIHByb3ZpZGUgcGFyYW1zIGluIHRoaXMgb3JkZXJcbiAgICAgICAgLy8gYWRkRXZlbnQoaWQsbmFtZSxzdGFydFllYXIsIHN0YXJ0TW9udGgsIHN0YXJ0RGF5LHN0YXJ0SG91cixzdGFydE1pbnV0ZSxlbmRZZWFyLGVuZE1vbnRoLCBlbmREYXksIGVuZEhvdXIsZW5kTWludXRlLGV2ZW50Q29sb3IpXG4gICAgICAgIGV2ZW50LmFkZEV2ZW50KDEsIFwiZmlyc3QgRXZlbnRcIiwgMjAxNywgMywgMTQsIDMsIDMsIDIwMTcsIDMsIDE0LCA3LCA1LCBcIiM4N2QyODhcIik7XG4gICAgICAgIGV2ZW50LmFkZEV2ZW50KDIsIFwiU2Vjb25kIEV2ZW50XCIsIDIwMTcsIDMsIDE1LCA1LCAzLCAyMDE3LCAzLCAxNSwgNywgNSwgXCIjNTlEQkUwXCIpO1xuICAgICAgICBldmVudC5hZGRFdmVudCgzLCBcIlRoaXJkIEV2ZW50XCIsIDIwMTcsIDMsIDE0LCA4LCAzLCAyMDE3LCAzLCAxNCwgMTAsIDUsIFwiI0Y2NkM0RVwiKTtcblxuICAgIH1cblxufVxuIl19