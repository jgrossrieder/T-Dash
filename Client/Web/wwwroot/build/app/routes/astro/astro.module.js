"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_select_1 = require("ng2-select");
var http_1 = require("@angular/http");
var shared_module_1 = require("../../shared/shared.module");
var astro_service_1 = require("./astro.service");
var display_component_1 = require("./display/display.component");
//import { ListComponent } from './list/list.component';
//import { PostComponent } from './post/post.component';
//import { ArticlesComponent } from './articles/articles.component';
//import { ArticleviewComponent } from './articleview/articleview.component';
var routes = [
    { path: '', redirectTo: 'display' },
    { path: 'display', component: display_component_1.DisplayComponent },
];
var AstroModule = /** @class */ (function () {
    function AstroModule() {
    }
    AstroModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                http_1.HttpModule,
                ng2_select_1.SelectModule
            ],
            declarations: [
                display_component_1.DisplayComponent,
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [astro_service_1.AstroService]
        })
    ], AstroModule);
    return AstroModule;
}());
exports.AstroModule = AstroModule;
//# sourceMappingURL=astro.module.js.map