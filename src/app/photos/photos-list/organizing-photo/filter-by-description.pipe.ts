import { Pipe, PipeTransform } from "@angular/core";
import { Photos } from "../../model/photos";

@Pipe({ name: 'filterByDescription' })

export class filterByDescription implements PipeTransform {

    transform(photos: Photos[], description: string) {
        description = description.trim().toLowerCase();

        if (description) {
            return photos.filter(photo =>
                photo.description.toLowerCase().includes(description)
            );
        } else {
            return photos;
        }
    }
}