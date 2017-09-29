import { Component, OnInit } from '@angular/core';

import { IList } from './list';

const List: IList[] = [
  {
    listId: 'a',
    userLinkId: 'wdave.harms@gmail.com',
    createDate: '09/28/2017',
    title: 'honey do list 1',
    comment: 'important',
    status: 'active'
  },
  {
    listId: 'b',
    userLinkId: 'wdave.harms@gmail.com',
    createDate: '09/28/2017',
    title: 'honey do list 2',
    comment: 'not as important',
    status: 'active'
  },
  {
    listId: 'c',
    userLinkId: 'wdave.harms@gmail.com',
    createDate: '09/28/2017',
    title: 'honey do list 3',
    comment: 'really important',
    status: 'active'
  },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists: IList[];

  constructor() { }

  ngOnInit() {
    this.lists = List;
  }

}
