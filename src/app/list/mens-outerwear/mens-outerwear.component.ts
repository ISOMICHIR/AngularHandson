import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { List } from "app/list";
import { ListService } from "app/list.service";

@Component({
  selector: 'app-mens-outerwear',
  templateUrl: './mens-outerwear.component.html',
  styleUrls: ['./mens-outerwear.component.css']
})
export class MensOuterwearComponent implements OnInit {

  lists: List[];

  constructor(private router: Router,
    private listService: ListService) { }

    getHeroes(): void {
    this.listService.getLists().then(lists => this.lists = lists);
  }

  ngOnInit():void {
    this.getHeroes();
  }

}
