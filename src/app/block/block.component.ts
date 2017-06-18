import { Component, OnInit, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  title: string = 'Sky red';

  @ContentChild('btn')
  btn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.btn) {
      this.btn.nativeElement.innerHTML = '30';
    }
  }

}
