import { Component, OnInit } from '@angular/core';
import { ParametresService } from 'src/app/services/parametres.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {

  private  url:string = "https://infinite-inlet-83361.herokuapp.com/parametres";
  parametres;


  constructor(private service : ParametresService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.service.getAllParam()
    .subscribe( (response : Response) =>{
      this.parametres = response;
      console.log(this.parametres)
    })
  }

}
