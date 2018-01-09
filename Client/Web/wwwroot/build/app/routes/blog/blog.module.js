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
var shared_module_1 = require("../../shared/shared.module");
var list_component_1 = require("./list/list.component");
var post_component_1 = require("./post/post.component");
var articles_component_1 = require("./articles/articles.component");
var articleview_component_1 = require("./articleview/articleview.component");
var routes = [
    { path: 'list', component: list_component_1.ListComponent },
    { path: 'post', component: post_component_1.PostComponent },
    { path: 'articles', component: articles_component_1.ArticlesComponent },
    { path: 'articleview', component: articleview_component_1.ArticleviewComponent }
];
var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                ng2_select_1.SelectModule
            ],
            declarations: [
                list_component_1.ListComponent,
                post_component_1.PostComponent,
                articles_component_1.ArticlesComponent,
                articleview_component_1.ArticleviewComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], BlogModule);
    return BlogModule;
}());
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map