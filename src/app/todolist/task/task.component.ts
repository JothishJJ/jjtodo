import { Component, OnInit } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { TasklistService } from '../../services/tasklist.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  faTrash = faTrash;

  delete(index: number): void {
    // this.tasks?.splice(index, 1);
  }

  constructor(public tasklist: TasklistService) {}

  ngOnInit(): void {}
}
