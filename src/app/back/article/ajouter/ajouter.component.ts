import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  private  url:string ="https://infinite-inlet-83361.herokuapp.com/articles";
  private articles;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe( (response : Response) => {
      //console.log(response)
      this.articles = response ;
    });
  }
  onSubmitArticle(f:NgForm)
  {
   console.log(f.value);
    const article = f.value;

    this.http.post(this.url,(article))
      .subscribe((response : Response) => {
        // que f.value soit conforme ou pas  => toujours OK avec JSONPlaceholder
        console.log(response);
        article["_id"] = response['_id']
        console.log(article);
        this.articles.splice(0,0,article) ;
      })
      f.reset();
  }

  //============ sécurité formulaire ===================
erreur = false;
success = false;

error = {
  type_de_location : false,
  titre : false,
  prix : false,
  image1 : false,
  image2 : false,
  image3 : false,
  image4 : false,
  horaires : false,
  longueur_bateau : false,
  capacite_autorisee : false,
  annee_de_construction : false,
  marque_modele : false,
  publication : false
};

onFrmSubmit(f) {
  //console.log(f.form.controls);

  if (!f.valid) {
    this.erreur = true;
    this.success = false;
    for (let control in f.form.controls) {
      this.error[control] =
        f.form.controls[control].status === "INVALID" ? true : false;
    }
  } else {
    this.erreur = false;
    this.success = true;
    f.resetForm();
    // autre traitement sauvegarde
  }
}

onChange(f) {
  this.erreur = false;
  this.success = false;
  for (let control in f.form.controls) {
    this.error[control] = false;
  }
}

onFrmReset(f) {
  this.erreur = false;
  this.success = false;
  for (let control in f.form.controls) {
    this.error[control] = false;
  }
  f.resetForm();
}

}






