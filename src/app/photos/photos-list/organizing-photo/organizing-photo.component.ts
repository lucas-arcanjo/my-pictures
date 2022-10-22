import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Photos } from '../../model/photos';

@Component({
  selector: 'app-organizing-photo',
  templateUrl: './organizing-photo.component.html',
  styleUrls: ['./organizing-photo.component.css']
})
export class OrganizingPhotoComponent implements OnChanges {

  @Input() photos: Photos[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photos[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
