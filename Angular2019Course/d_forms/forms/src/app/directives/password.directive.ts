import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { CustomValidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appPassword]',
  providers: [
    { 
      provide: NG_VALIDATORS,
      useClass: PasswordDirective,
      multi: true
    }
  ]
})
export class PasswordDirective implements Validator {

  constructor(private customValidator: CustomValidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.passwordValidator()(control);
  }
}