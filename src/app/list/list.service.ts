import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import { IList } from './list';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ListService {
  list$: FirebaseListObservable<IList[]>;

  constructor(private db: AngularFireDatabase) {
    this.list$ = this.db.list(`list`);
  }

  // create
  createList(newList) {
    return this.list$.push(newList)
      .then(_ => console.log('success'))
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
      .then(_ => console.log('success'))
      .catch(error => console.log(error));
  }

  // delete
  removeList(list: IList) {
    return this.list$.remove(list.listId)
      .then(_ => console.log('success'))
      .catch(error => console.log(error));
  }

  private errorHandler(error) {
    return Observable.throw(error);
  }
}
