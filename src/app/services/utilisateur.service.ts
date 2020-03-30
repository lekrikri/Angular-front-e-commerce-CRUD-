import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  url = "https://infinite-inlet-83361.herokuapp.com/utilisateurs";

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
      //,'Authorization': 'my-auth-token'
    })
  };
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor (private http : HttpClient){}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  getAllUtilisateurs()
  {
    return this.http.get(this.url);
  }

  getUtilisateurById(_id)
  {
    return this.http.get(this.url+"/"+_id);
  }

  // Creation user
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

  // Suppression user
  delete(_id): Observable<any> {
    let url = `${this.url}/delete/${_id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Update user
  updateUser(_id, user): Observable<User> {
    return this.http
      .put<User>(
        this.url +"/"+_id,
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
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

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
