import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.subscriptions = new Subscription();
    }
    ngOnInit() {
        this.subscriptions.add(this.authService.user.subscribe(user => {
            this.user = user;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map