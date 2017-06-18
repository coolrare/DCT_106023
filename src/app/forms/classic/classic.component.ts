import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  data: any = {};

  addresses: any[] = [
    '',
    ''
  ];

  @ViewChild(NgForm)
  form: NgForm;

  constructor() { }

  ngOnInit() {
    this.data = {
      'title': 'This is title',
      'subtitle': 'Hello World',
      'addresses': [
        'Address 1',
        'Address 2'
      ]
    };
  }

  doSubmit(form: NgForm, $event) {
    console.log(form);
    console.log($event);
    if (form.invalid) {
      alert('表單無效，請檢查欄位!')
    }
  }

  checkValid(field) {
    return (this.form['submitted'] || field['touched']) && field['invalid']
  }

}
