import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from './../photo/photo';


@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform{


    transform(photos: Photo[], descriptionQuery:string):Photo[] {
       

        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery){

            // verify if photos contains photo descrotion wih lowercase qhet ins written in descriptionQuery
            return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
        }

        return photos;
    }

}