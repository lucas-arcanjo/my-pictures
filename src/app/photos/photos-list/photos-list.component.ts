import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

import { Photos } from '../model/photos';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, OnDestroy {

  photos: Photos[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['data']
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);
    }

    ngOnDestroy(): void {
      this.debounce.unsubscribe();
    }

}
