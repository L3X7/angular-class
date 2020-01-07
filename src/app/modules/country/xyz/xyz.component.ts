import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {

  public form: FormGroup;
  public listData: any[];
  public boton: string = 'Agregar';
    constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this._getData();
    this._iniForm();
  }

  private _iniForm (): void {
    this.form = this.fb.group({
      id: ['', Validators.compose([ Validators.required, Validators.min(1)])],
      codigo: ['', Validators.compose([ Validators.required, Validators.min(1)])],
      pais: ['', Validators.compose([ Validators.required, Validators.minLength(5)])]
    })
  }

  private _getData (): void {
    this.listData = [];
    for (let index = 0; index < 5; index++) {
      this.listData.push({
        id: index,
        codigo: `Codigo ${index}`,
        pais: `Pais ${index}`
      })
      
    }
  }

  private _deleteItem (index): void {
    const newList = this.listData.filter(item => {
      return item.id != index;
    })
    this.listData = [];
    this.listData = newList;
    this.listData = [...this.listData];
  }

  private _updateItem (index, codigoU, paisU): void {
    const upList = this.listData.filter(item => {
      return item.id != index;
    })
    this.form = this.fb.group({
      id: [index, Validators.compose([ Validators.required, Validators.min(1)])],
      codigo: [codigoU, Validators.compose([ Validators.required, Validators.min(1)])],
      pais: [paisU, Validators.compose([ Validators.required, Validators.minLength(5)])]
    })
    this._deleteItem(index);
    this.boton = 'Actualizar';


    this.listData = [];
    this.listData = upList;
    this.listData = [...this.listData];
  }

  private _submitForm (): void {
    const formData = this.form.getRawValue();
    this.listData.push({
      id: formData.id,
      codigo: formData.codigo,
      pais: formData.pais
    }); 
    this.form.reset();
    this.boton = 'Agregar';
  }
}
