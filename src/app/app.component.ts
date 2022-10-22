import { Component } from '@angular/core';
import { PhotosService } from './photos/service/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Object[] = [];

  constructor(photosService: PhotosService) {
    photosService.listFromUser().subscribe(response => {
      console.log(response[0].description)
      this.photos = response;
    })
  }

}
