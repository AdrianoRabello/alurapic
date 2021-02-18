import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";


@Directive({
    selector: '[apDarkerOnHover]'
})
export class DarkOnHoverDirective{



    @Input() brightness:string = '70%';

    constructor(private el:ElementRef,
                    private render:Renderer2){

       // this.el.nativeElement.style.backgroundColor = 'black';
    }


    @HostListener('mouseover')
    darkenOn(){

        // i can pass values like propertis in directives like this 
      this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
      this.render.setStyle(this.el.nativeElement, 'filter', 'cursor-pointer');
    }


    @HostListener('mouseleave')
    darkenOf(){

        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}