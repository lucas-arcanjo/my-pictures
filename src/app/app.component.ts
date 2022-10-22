import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://images.pexels.com/photos/13366951/pexels-photo-13366951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'horizonte'
    },
    {
      url: 'https://images.pexels.com/photos/2700567/pexels-photo-2700567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'lago'
    },
    {
      url: 'https://images.pexels.com/photos/13366951/pexels-photo-13366951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'horizonte'
    }
  ]
}
