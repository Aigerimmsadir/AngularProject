import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRightSideHeaders]'
})
export class RightSideHeadersDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#48c5d4';
    el.nativeElement.style.color = '#fff';
    el.nativeElement.style.margin = '20px 10px 0 10px';
    el.nativeElement.style.padding = '12px 5px 15px 10px';
    el.nativeElement.style.fontSize = '12px';
    el.nativeElement.style.fontFamily='"OpenSans-Bold",Helvetica,Arial,sans-serif';
    el.nativeElement.style.textTransform='uppercase';
    el.nativeElement.style.fontWight='630';


  }
}
