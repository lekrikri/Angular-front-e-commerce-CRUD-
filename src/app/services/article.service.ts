import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Article } from '../models/article';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = "https://infinite-inlet-83361.herokuapp.com/articles";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor (private http : HttpClient){}

  getAllArticles()
  {
    return this.http.get(this.url);
  }

  getArticleById(_id)
  {
    return this.http.get(this.url+"/"+_id);
  }

  create(data) {
    let token = localStorage.getItem("token");
    const requestOptions = {
      headers: new HttpHeaders({
        "x-auth": token
      })
    };
    return this.http.post(this.url, data, requestOptions);
  }

  getAll() {
    return this.http.get(this.url);
  }

  // Suppression article
  delete(_id): Observable<any> {
    let url = `${this.url}/delete/${_id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Traitement des erreurs
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
