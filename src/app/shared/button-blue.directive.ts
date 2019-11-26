import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appButtonBlue]'
})
export class ButtonBlueDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#3bc8f5';
    el.nativeElement.style.height = '50px';
    el.nativeElement.style.margin = '20px';
    el.nativeElement.style.padding = '14px';
    el.nativeElement.style.fontSize = '12px';
    el.nativeElement.style.borderRadius = '2px';
    el.nativeElement.style.fontWeight = '630';


  }
}
