import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.color') color:string = '';

  constructor() {
  }
    ngOnInit() {
    //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow') ;
    }

    @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
      this.color = 'yellow';
    }

    @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
      this.color = 'blueviolet';
    }
   

}
