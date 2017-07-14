import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { List } from './../list';
import { ListService } from './../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List;
  lists: List[];
  
  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {

  }

}
