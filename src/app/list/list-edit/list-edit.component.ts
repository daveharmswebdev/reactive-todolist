import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  FormGroup,
  FormBuilder
} from '@angular/forms';

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

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      params['id'] === 'new'
      ? this.isNewList = true
      : this.listId = params['id'];

      this.buttonText = this.isNewList ? 'Create' : 'Edit';
      this.title = this.isNewList ? 'New List' : 'Edit List';
    });

    this.isNewList ? this.showCleanForm() : this.showEditForm()
  }

  showEditForm() {
    this.editForm = this.fb.group({
      listId: [{ value: '', disabled: this.isNewList}],
      userLinkId: [{ value: '', disabled: this.isNewList}],
      createDate: [{ value: '', disabled: this.isNewList}],
      title: '',
      comment: '',
      status: [{ value: '', disabled: this.isNewList}],
    });
  }

  showCleanForm(): void {
    this.editForm = this.fb.group({
      listId: [{ value: '', disabled: this.isNewList}],
      userLinkId: [{ value: '', disabled: this.isNewList}],
      createDate: [{ value: '', disabled: this.isNewList}],
      title: '',
      comment: '',
      status: [{ value: '', disabled: this.isNewList}],
    });
  }

  buttonHandler() {
    this.isNewList ? this.createList() : this.editList();
  }

  createList() {
    console.log('createList()', this.buttonText, this.editForm.value);
  }

  editList() {
    console.log('editList()', this.buttonText, this.editForm.value);
  }
}
