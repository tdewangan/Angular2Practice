import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sample-form-component',
  templateUrl: './sample-form-component.component.html',
  styleUrls: ['./sample-form-component.component.css']
})
export class SampleFormComponentComponent implements OnInit {
  sampleForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {}
  createForm() {
    this.sampleForm = this.fb.group({
      address: this.fb.group({
        line1: ['']
      }),
      fname: [''],
      lname: ['']
    });
    console.log(this.sampleForm.controls);

  }
}
