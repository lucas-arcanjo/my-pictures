import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PhotoComponent } from "./photos/photo.component";
import { PhotosListComponent } from './photos-list/photos-list.component';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotosListComponent
    ],
    imports: [ 
        HttpClientModule,
        CommonModule
    ],
})

export class PhotoModule { }