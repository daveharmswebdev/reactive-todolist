import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { Router } from '@angular/router';

import { IList } from './list';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ListService {
  list$: FirebaseListObservable<IList[]>;

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.list$ = this.db.list(`list`);
  }

  // create
  createList(newList) {
    return this.list$.push(newList)
      .then(_ => this.router.navigate(['/list']))
      .catch(error => console.log(error));
  }

  // read
  getList(listKey) {
    console.log(listKey);
    return this.db.object(`list/${listKey}`)
      .catch(this.errorHandler);
  }

  // update
  editList(updatedList: IList) {
    return this.list$.update(updatedList.listId, updatedList)
      .then(_ => this.router.navigate(['/list']))
      .catch(error => console.log(error));
  }

  // delete
  removeList(listId) {
    return this.list$.remove(listId)
      .then(_ => this.router.navigate(['/list']))
      .catch(error => console.log(error));
  }

  private errorHandler(error) {
    return Observable.throw(error);
  }
}
