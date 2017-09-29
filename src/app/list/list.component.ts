import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

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
  testLists;

  constructor(
    private authService: AuthService,
    public db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.db.list('/list').subscribe(lists => {
      this.testLists = lists;
      console.log(this.testLists);
    });
  }

  createList() {
    const now = new Date();
    const newList: IList = {
      listId: '4',
      userLinkId: this.authService.currentUserName,
      createDate: now.toLocaleString(),
      title: 'test',
      comment: 'test important',
      status: 'active'
    };
    console.log('click', newList);
    this.db.list('/list').push(newList);
  }
}
