import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PhotoComponent } from "./photos/photo.component";
import { PhotosListComponent } from './photos-list/photos-list.component';
import { OrganizingPhotoComponent } from './photos-list/organizing-photo/organizing-photo.component';
import { filterByDescription } from "./photos-list/organizing-photo/filter-by-description.pipe";

@NgModule({
    declarations: [
        PhotoComponent,
        PhotosListComponent,
        OrganizingPhotoComponent,
        filterByDescription
    ],
    imports: [ 
        HttpClientModule,
        CommonModule
    ],
})

export class PhotoModule { }