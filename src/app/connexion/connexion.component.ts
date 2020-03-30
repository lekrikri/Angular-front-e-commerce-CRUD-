import { Component, OnInit } from "@angular/core";
import { AuthService } from ".././services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-connexion",
  templateUrl: "./connexion.component.html",
  styleUrls: ["./connexion.component.css"]
})
export class ConnexionComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  invalidLogin = false;
    errorMessage = "";
    onConnexion($event, form) {
      $event.preventDefault();
      const credentials = form.value;

      // envoyer à un service qui va appeler notre projet node
      this.authService.login(credentials).subscribe(
        result => {
          if (result) {
            let returnUrl = this.route.snapshot.queryParamMap.get(
              "return_url"
            );
            this.router.navigate([
              returnUrl || "/admin"
            ]);
          } else this.invalidLogin = true;
        },
        error => {
          this.invalidLogin = true;
          this.errorMessage = error.error.msg;
        }
      );
  }
}
