import { Component, Injector, Input, OnInit } from "@angular/core";
import { DataService } from "./services/data/data.service";
import { ValdemortConfig } from "ngx-valdemort";
import { StorageService } from "./services/storage.service";
import { MenuItem, MenuMain } from "./ui-kit/models/models";
import { createCustomElement } from "@angular/elements";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  @Input() public isFrame: boolean = false;
  constructor(
    private config: ValdemortConfig,
    public data: DataService,
    private store: StorageService
  ) // injector: Injector
  {
    // const anketaEl = createCustomElement(AnketaMainComponent, {injector});
    // customElements.define('app-anketa-main', anketaEl);

    config.errorClasses = "input__error";
  }

  public menuList: MenuMain[] = [
    {
      name: "Главная",
      link: "./",
    },
    {
      name: "UI",
      subList: [
        {
          name: "Аккордион",
          link: "./accordion",
        },
        {
          name: "Поля",
          link: "./field",
        },
        {
          name: "Ползунок",
          link: "./slider",
        },
        {
          name: "Выпадающий список",
          link: "./dropdown-list",
        },
        {
          name: "Выдающие часы",
          link: "./dropdown-clock",
        },
        {
          name: "Выпадающий календарь",
          link: "./dropdown-date",
        },
        {
          name: "Автофокус полей",
          link: "./autofocus",
        },
        {
          name: "Пагинация",
          link: "./pagination",
        },
      ],
    },
  ];

  public form: FormGroup = new FormGroup({
    minutes: new FormControl("0"),
  });

  ngOnInit(): void {}
}
