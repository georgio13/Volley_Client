import {FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';

@Injectable()
export class FormService {
  constructor() {
  }

  public isFormFieldValid(formField: string, formGroup: FormGroup): boolean {
    return formGroup.get(formField).touched && formGroup.get(formField).invalid;
  }

  public setErrorMessage(formField: string, formGroup: FormGroup, type?: string, value?: any): string {
    const errors = formGroup.get(formField).errors;
    switch (type) {
      default:
        if (errors.required) {
          return 'Υποχρεωτικό πεδίο.';
        }
        break;
    }
  }
}
