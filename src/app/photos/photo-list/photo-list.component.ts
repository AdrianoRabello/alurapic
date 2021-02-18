import { PhotoService } from './../photo/photo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Photo } from '../photo/photo';


@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {


  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  username: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private photoService: PhotoService) {


  }


  ngOnInit(): void {

    this.username = this.activatedRoute.snapshot.params.userName;

    //this properties set values in resolver. this configuration is on app-router-module like resolver 
    this.photos = this.activatedRoute.snapshot.data.photos;

  }

  getFilter($event: any) {

    //this.filter = $event.target.value;
    this.debounce.next($event.target.value)
    this.debounce
      .pipe(debounceTime(400)) // debounce time make delay with parametter passed
      .subscribe((filter) => {
        this.filter = filter
      })
  }

  ngOnDestroy(): void {

    this.debounce.subscribe();
  }

  load() {
    this.photoService.listFromUsernamePaginated(this.username, ++this.currentPage).subscribe((photos: Photo[]) => {

      this.photos = this.photos.concat(photos);

      if (photos.length)
        this.hasMore = false;
    })
  }
}
