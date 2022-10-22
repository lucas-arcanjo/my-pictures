import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../service/photos.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Object[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private photosService: PhotosService
    ) { }

  ngOnInit() {
    const userName = this.activatedRoute.snapshot.params.userName
    this.photosService.listFromUser(userName).subscribe(response => {
      this.photos = response;
    })
  }

}