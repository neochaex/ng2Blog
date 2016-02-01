//metadata: Component
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ArticlesComponent} from './article/articles.component';
import {ArticleDetailComponent} from './article/article-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ArticleService} from './article/article.service';
//Decorator: @Component, invoking the base component class for decorating it;extending the component class
@Component({
	selector: 'neo-app',
	template: '<h1>Neo Blog</h1>'
})
//ng2 can have many modules. Module name is AppComponent -> app.component
export class AppComponent { 
	public article: Article = {
		id: 1,
		title: 'test',
		content: 'test content'
	}
}