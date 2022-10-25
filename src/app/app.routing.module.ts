import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photos-list/photo-list.resolver";

import { PhotosListComponent } from "./photos/photos-list/photos-list.component";

const routes: Routes = [
    {
        path: 'users/:userName',
        component: PhotosListComponent,
        resolve: { data: PhotoListResolver }
    },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }