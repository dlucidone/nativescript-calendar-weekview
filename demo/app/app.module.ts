import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import {registerElement} from "nativescript-angular/element-registry";
registerElement("CalendarWeekView", () => require("nativescript-calendar-weekview").CalendarWeekView);
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
