import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  data: any = {};

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'title': 'This is title',
      'metadata': this.fb.group({
        'subtitle': 'Hello'
      }),
      'addresses': this.fb.array([
        this.fb.control('Address 1'),
        this.fb.control('Address 2')
      ])
    });
  }

}
