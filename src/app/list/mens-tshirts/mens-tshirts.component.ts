import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { List } from './../../list';
import { ListService } from './../../list.service';

@Component({
  selector: 'app-mens-tshirts',
  templateUrl: './mens-tshirts.component.html',
  styleUrls: ['./mens-tshirts.component.css']
})
export class MensTshirtsComponent implements OnInit {
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
