import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectModule } from 'ng2-select';
import { HttpModule } from '@angular/http';


import { SharedModule } from '../../shared/shared.module';
import { AstroService } from './astro.service';
import { DisplayComponent } from './display/display.component';

//import { ListComponent } from './list/list.component';
//import { PostComponent } from './post/post.component';
//import { ArticlesComponent } from './articles/articles.component';
//import { ArticleviewComponent } from './articleview/articleview.component';

const routes: Routes = [
    { path: '', redirectTo: 'display' },
    { path: 'display', component: DisplayComponent },
    //{ path: 'list', component: ListComponent },
    //{ path: 'post', component: PostComponent },
    //{ path: 'articles', component: ArticlesComponent },
    //{ path: 'articleview', component: ArticleviewComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        HttpModule,
        SelectModule
    ],
    declarations: [
        DisplayComponent,
        //PostComponent,
        //ArticlesComponent,
        //ArticleviewComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [AstroService]
})
export class AstroModule { }