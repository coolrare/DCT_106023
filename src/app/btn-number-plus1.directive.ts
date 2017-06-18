import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[btn-plus1]'
})
export class BtnNumberPlus1Directive {

  @Input()
  myTitle: string = '';

  constructor() { }


  // (click)="plus1($event.target)"
  @HostListener('click', ['$event.target'])
  plus1(btn: HTMLButtonElement) {
    let num = parseInt(btn.innerText, 10);
    num++;
    btn.innerText = num.toString() + this.myTitle;
  }
}
