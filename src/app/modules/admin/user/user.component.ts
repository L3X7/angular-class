import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None

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
      countries: this.fb.array([])
    });
  }

  get _getCountries(): FormArray {
    return this.form.get('countries') as FormArray;
  }

  public _newCountry(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  public _addCountry(): void {
    this._getCountries.push(this._newCountry());
    console.log(this._getCountries.getRawValue());
  }


  public _removeCountry(index): void {
    this._getCountries.removeAt(index);
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
    this.listData.push({
      id: formData.id,
      text: `${formData.text}`,
      property: `${formData.property}`
    });
    this.form.reset();
  }


}
