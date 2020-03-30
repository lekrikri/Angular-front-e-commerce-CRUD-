import { Component, OnInit } from '@angular/core';
import { ArticleService } from "./../../services/article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles;

  constructor(private service: ArticleService) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.service.getAllArticles()
    .subscribe( (response : Response) =>{
      this.articles = response;
      console.log(this.articles)
    })
  }
}

