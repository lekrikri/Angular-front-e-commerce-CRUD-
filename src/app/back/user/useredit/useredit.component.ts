import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  private  url:string = "https://infinite-inlet-83361.herokuapp.com/utilisateurs"; //"http://localhost:3200/utilisateurs";
  private utilisateurs;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe( (response : Response) => {
     console.log(response)
      this.utilisateurs = response ;
    });
  }

  updateUser(f) {
    const user = f.value;
    if (confirm("Are you sure, you want to update?")) {
      this.http.put(this.url + `/${user._id}`,JSON.stringify(user))
      .subscribe((response : Response) => {
        // que article soit conforme ou pas  => toujours OK avec JSONPlaceholder
        // par contre pas si vous essayer de modifier un article créé par vous => erreur 500
        console.log(response);
        user.nom = user.nom + " Modifié!";
        user.prenom = user.prenom + " Modifié!";
        user.email = user.email + " Modifié!";
        user.password = user.password + " Modifié!";
        user.role = user.role + " Modifié!";
        user.estActif = user.estActif + " Modifié!";
      })
    }
  }

//============ sécurité formulaire ===================
erreur = false;
success = false;

error = {
  nom: false,
  prenom: false,
  email: false,
  password: false,
  role : false,
  estActif:false
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
