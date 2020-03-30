import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';// Ce composant permet de recuperer l'ID dans l'url
import { ArticleService } from "./../services/article.service";



@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})

export class CarouselComponent implements OnInit {

  article ; //1 seul article
  url = "https://infinite-inlet-83361.herokuapp.com/articles";


  constructor(private router : ActivatedRoute,
              private service : ArticleService ) {}

   ngOnInit(): void {
    // Maintenant nous souhaitons recuperer l'ID qui est dans l'url params l'ensemble des infos qui sont dans l'url
      this.router.paramMap.subscribe( (params) =>{
      console.log(params);
      const _id = params.get("id");
      console.log(_id)
      this.service.getArticleById(_id) //"https://jsonplaceholder.typicode.com/posts";
      .subscribe( (response : Response) =>{
      this.article = response;
      console.log(this.article);
       })
    })
   }


}
