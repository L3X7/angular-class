import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {

  public form: FormGroup;
  public listData: any[];
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this._getData();
    this._initForm();
  }

  private _initForm(): void {
    this.form = this.fb.group({
      id: ['', Validators.compose([Validators.required])],
      text: ['', Validators.required],
      property: ['', Validators.required],
    });
  }

  private _getData(): void {
    this.listData = [];
    for (let index = 0; index < 4; index++) {
      this.listData.push({
        id: index,
        text: `Text ${index}`,
        property: `Property ${index}`
      });

    }
  }

  public _deleteItem(index): void {
    const newList = this.listData.filter(item => {
      return item.id != index;
    });
    this.listData = [];
    this.listData = newList;
    this.listData = [...this.listData];
  }

  public _submitForm(): void {
    const formData = this.form.getRawValue();
    debugger
    this.listData.push({
      id: formData.id,
      text: `${formData.text}`,
      property: `${formData.property}`
    });
    this.form.reset();
  }


}
