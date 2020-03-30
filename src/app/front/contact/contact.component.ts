import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor() {}

  erreur = false;
  success = false;

  error = {
    name: false,
    email: false,
    message: false
  };
  ngOnInit(): void {
    window.scroll(0, 0);
  }
  onFrmSubmit(f) {
    console.log(f.form.controls);

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
