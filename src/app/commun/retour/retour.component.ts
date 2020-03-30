import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-retour",
  templateUrl: "./retour.component.html",
  styleUrls: ["./retour.component.css"]
})
export class RetourComponent implements OnInit {
  constructor() {}
  @Input() texte: string;
  @Input() path: string;
  ngOnInit(): void {}
}
