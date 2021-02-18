import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit,OnDestroy {


    devounce:Subject<string> = new Subject<string>();

    @Output() onTyping = new EventEmitter<string>();

    @Input() value:string = '';

    

    ngOnInit(): void {

        this.debounce.pipe(debounceTime(400)).subscribe((filter)=> this.onTyping.emit(filter))
    }


    ngOnDestroy(): void {
       
        this.debounce.unsubscribe();
    }

    debounce: Subject<string> = new Subject<string>();
    filter: string = '';



    getFilter($event: any) {

        console.log($event.target.value)
        //this.filter = $event.target.value;
        this.debounce.next($event.target.value)
        this.debounce
            .pipe(debounceTime(400)) // debounce time make delay with parametter passed
            .subscribe((filter) => {
                this.filter = filter
            })
    }

}