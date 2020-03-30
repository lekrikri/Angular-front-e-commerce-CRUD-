import { Component, OnInit } from '@angular/core';
import { ArticleService } from "./../../services/article.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  articles;
  // Pagination parameters.
  page: number = 1;
  count: number = 5;
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

