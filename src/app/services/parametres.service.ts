import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {

  urlParam = 'https://infinite-inlet-83361.herokuapp.com/parametres';

  constructor(private http: HttpClient) { }

  getAllParam() {
    return this.http.get(this.urlParam);
  }
}
