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
  isNewList;
  editForm: FormGroup;
  title = 'List Edit';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.listId = this.route.snapshot.params['id'];
    this.isNewList = this.listId === 'new';
    this.editForm = this.fb.group({
      listId: '-KvDyCilfjsfi95vfi02',
      userLinkId: 'daveharmswebdev@gmail.com',
      createDate: '10/3/2017',
      title: 'Honey Do',
      comment: 'Important',
      status: 'Active'
    });
  }

  edit() {
    console.log('edit', this.editForm.value);
  }
}
