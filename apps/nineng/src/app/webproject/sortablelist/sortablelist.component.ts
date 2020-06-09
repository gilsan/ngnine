import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ITODO } from './model';
import { completed, todos } from './model.data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-sortablelist',
  templateUrl: './sortablelist.component.html',
  styleUrls: ['./sortablelist.component.scss'],
})
export class SortablelistComponent implements OnInit {

  todos: ITODO[] = todos;
  completes: ITODO[] = completed;

  constructor() { }

  ngOnInit(): void {

  }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
