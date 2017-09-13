import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textbox-component',
  templateUrl: './textbox-component.component.html',
  styleUrls: ['./textbox-component.component.css']
})
export class TextboxComponentComponent implements OnInit {
  @Input()
  form: FormGroup;
  constructor() {

   }

  ngOnInit() {
    console.log(this.form);
  }

}
