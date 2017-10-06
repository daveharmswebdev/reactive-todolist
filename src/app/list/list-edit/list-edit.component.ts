import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import {
  FormGroup,
  FormBuilder
} from '@angular/forms';

import { ListService } from './../list.service';
import { IList } from '../list';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
  listId;
  isNewList = false;
  editForm: FormGroup;
  title;
  buttonText;
  list$: FirebaseObjectObservable<IList> | any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] === 'new') {
        this.isNewList = true;
        this.title = 'New List';
        this.buttonText = 'Create';
        this.list$ = Observable.of({}) as FirebaseObjectObservable<IList>;
        this.showCleanForm();
      } else {
        this.listId = params['id'];
        this.isNewList = false;
        this.title = 'Edit List';
        this.buttonText = 'Edit';
        this.listService.getList(this.listId).subscribe(list => {
          this.list$ = list;
          this.editForm = this.showEditForm();
        });
      }
    });
  }

  showEditForm() {
    return this.fb.group({
      listId: [{value: this.listId, disabled: true}],
      userLinkId: [{value: this.list$.userLinkId, disabled: true}],
      createDate: [{value: this.list$.createDate, disabled: true}],
      title: this.list$.title,
      comment: this.list$.comment,
      status: this.list$.status,
    });
  }

  showCleanForm(): void {
    this.editForm = this.fb.group({
      listId: [{ value: '', disabled: this.isNewList}],
      userLinkId: [{ value: 'wdave.harms@gmail.com', disabled: this.isNewList}],
      createDate: [{ value: '', disabled: this.isNewList}],
      title: '',
      comment: '',
      status: [{ value: 'active', disabled: this.isNewList}],
    });
  }

  buttonHandler() {
    this.isNewList ? this.createList() : this.editList();
  }

  createList() {
    const createDate = new Date();
    const newList = Object.assign(
      {},
      this.editForm.getRawValue(),
      { createDate: createDate.toString()}
    );
    this.listService.createList(newList);
  }

  editList() {
    console.log('editList()', this.buttonText, this.editForm.getRawValue());
    this.listService.editList(this.editForm.getRawValue());
  }

  removeList() {
    this.listService.removeList(this.listId);
  }
}
