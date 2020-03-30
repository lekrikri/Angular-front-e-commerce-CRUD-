import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  showMenu($event, menu) {
    $event.preventDefault();
    menu.classList.toggle("show");
  }

  hideMenu($event, menu) {
    $event.preventDefault();
    menu.classList.toggle("show");
  }
}
