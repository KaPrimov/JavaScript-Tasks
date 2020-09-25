import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { CustomValidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appPhoneNumber]',
  providers: [
    { 
      provide: NG_VALIDATORS,
      useClass: PhoneNumberDirective,
      multi: true
    }
  ]
})
export class PhoneNumberDirective implements Validator {

  constructor(private customValidator: CustomValidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.phoneValidator()(control);
  }
}