import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {ArticleService} from './article.service';
import {ArticleDetailComponent} from './article-detail.component';
import {Article} from './article';

@Component({
  selector: 'neo-articles',
  templateUrl: 'app/components/articles.component.html',
  styleUrls: ['app/components/articles.component.css'],
  directives: [ArticleDetailComponent]
})
export class ArticlesComponent implements OnInit {
  public articles: Article[];
  public selectedArticle: Article;

  constructor(private _articleService: ArticleService, private _router: Router) { }

  getArticles() {
    this._articleService.getHeroes().then(articles => this.articles = articles);
  }

  gotoDetail() {
    this._router.navigate(['ArticleDetail', { id: this.selectedArticle.id }]);
  }

  ngOnInit() {
    this.getArticles();
  }

  onSelect(article: Article) { this.selectedArticle = article; }
}