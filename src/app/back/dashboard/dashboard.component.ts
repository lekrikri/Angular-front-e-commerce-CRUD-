import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles;
  utilisateurs;
  comment;
  parametres;
  length;

  constructor(private service: StatsService) {}

  ngOnInit(): void {
    this.service
      .getAllArticles() // récuperer tous les articles
      .subscribe((response: Response) => {
        this.articles = response;
      }),
      this.service
        .getAllComments() // récuperer tous les commentaires
        .subscribe((response: Response) => {
          this.comment = response;
        }),
      this.service
        .getAllUtilisateurs() // récuperer tous les utilisateurs
        .subscribe((response: Response) => {
          this.utilisateurs = response;
        });
    this.service
      .getAllParam() // récuperer tous les parametre
      .subscribe((response: Response) => {
        this.parametres = response;
      });
  }
}
