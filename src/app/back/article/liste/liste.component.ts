import { Component, OnInit } from '@angular/core';
import { ArticleService} from "../../../services/article.service";
import { HttpClient } from '@angular/common/http' ;

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  private  url:string = "https://infinite-inlet-83361.herokuapp.com/articles"; //"http://localhost:3200/articles";
  articles ;

  constructor(private service : ArticleService, private http:HttpClient) { }

  ngOnInit(): void {
    this.service.getAllArticles()
    .subscribe( (response : Response) => {
      this.articles = response;
    })
  }

  delete(article) {
    if(window.confirm('Êtes vous sûrs?')) {
      this.http.delete(this.url + `/${article._id}`)
      .subscribe((response : Response) => {
        // que article soit conforme ou pas  => toujours OK avec JSONPlaceholder

        console.log(response);
        let index = this.articles.indexOf(article);
        this.articles.splice(index,1) ;
      })
    }
  }

}
