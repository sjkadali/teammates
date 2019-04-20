import * as tslib_1 from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
var routes = [
    {
        path: 'web',
        loadChildren: './pages.module#PagesModule',
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'web',
    },
];
/**
 * Root module.
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                MatSnackBarModule,
                HttpClientModule,
                NgbModule,
                RouterModule.forRoot(routes),
            ],
            providers: [],
            bootstrap: [AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map