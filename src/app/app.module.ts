import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuComponent } from './commun/menu/menu.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { UserlisteComponent } from './back/user/userliste/userliste.component';
import { ArticleComponent } from './front/article/article.component';
import { BannerComponent } from './commun/banner/banner.component';
import { FooterComponent } from './commun/footer/footer.component';
import { RetourComponent } from './commun/retour/retour.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListeComponent } from './back/article/liste/liste.component';
import { AjouterComponent } from './back/article/ajouter/ajouter.component';
import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';
import { ContactComponent } from './front/contact/contact.component';
import { ArticlesComponent } from './front/articles/articles.component';
import { UserajouterComponent } from './back/user/userajouter/userajouter.component';
import { ParametresComponent } from './back/parametres/parametres/parametres.component';
import { UsereditComponent } from './back/user/useredit/useredit.component';



import {RouterModule} from "@angular/router";
// Récupérer les informations qui sont saisies dans le formulaire de connexion
// Importing the pagination module for the application.
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

// Les services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UtilisateurService } from "./services/utilisateur.service";
import { ArticleService } from "./services/article.service";
import { StatsService } from './services/stats.service';
import { ParametresService } from './services/parametres.service';







@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticleComponent,
    NotFoundComponent,
    BannerComponent,
    FooterComponent,
    RetourComponent,
    CarouselComponent,
    MenuDashboardComponent,
    DashboardComponent,
    UserlisteComponent,
    ConnexionComponent,
    ListeComponent,
    AjouterComponent,
    ContactComponent,
    ArticlesComponent,
    UserajouterComponent,
    ParametresComponent,
    UsereditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      // Front
      { path: "" , component: AccueilComponent} ,
      { path: 'connexion', component: ConnexionComponent },
      { path: "article/:id" , component : ArticleComponent},
      { path: "articles", component: ArticlesComponent },
      { path: "contact", component: ContactComponent },

      // Back
      { path: "admin/user/userliste" , component : UserlisteComponent},
      { path: "admin/article/liste" , component : ListeComponent},
      { path: "admin/parametres" , component : ParametresComponent},
      { path: "admin" , component : DashboardComponent},// admin apres admin/article/liste
      { path: "admin/article/ajouter" , component : AjouterComponent},
      { path: "admin/user/userajouter" , component : UserajouterComponent},
      { path: "admin/user/useredit" , component : UsereditComponent},
      { path: "**" , component : NotFoundComponent}
    ]),
    HttpClientModule,
  ],
  providers: [AuthService,AuthGuardService,UtilisateurService, ArticleService, StatsService, ParametresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
