import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { IList } from './list';

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

}
