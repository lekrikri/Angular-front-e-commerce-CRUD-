import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { HttpClient } from '@angular/common/http' ;
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-userliste',
  templateUrl: './userliste.component.html',
  styleUrls: ['./userliste.component.css']
})
export class UserlisteComponent implements OnInit {

  private  url:string = "https://infinite-inlet-83361.herokuapp.com/utilisateurs"; //"http://localhost:3200/utilisateurs";
  utilisateurs;


  constructor(private service : UtilisateurService, private http:HttpClient) { }

  ngOnInit(): void {
    this.service.getAllUtilisateurs()
    .subscribe( (response : Response) => {
      this.utilisateurs = response;
    })
  }

  delete(user) {
    if(window.confirm('Êtes vous sûrs?')) {
      this.http.delete(this.url + `/${user._id}`)
      .subscribe((response : Response) => {
        // que article soit conforme ou pas  => toujours OK avec JSONPlaceholder

        console.log(response);
        let index = this.utilisateurs.indexOf(user);
        this.utilisateurs.splice(index,1) ;
      })
    }
  }

}
