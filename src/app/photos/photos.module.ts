import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { PhotoComponent } from "./photos/photo.component";

@NgModule({
    declarations: [
        PhotoComponent
    ],
    imports: [
        HttpClientModule
    ],
    exports: [
        PhotoComponent
    ]
})

export class PhotoModule { }