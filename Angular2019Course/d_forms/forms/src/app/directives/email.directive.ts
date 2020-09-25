import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { CustomValidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appEmail]',
  providers: [
    { 
      provide: NG_VALIDATORS,
      useClass: EmailDirective,
      multi: true
    }
  ]
})
export class EmailDirective implements Validator {

  constructor(private customValidator: CustomValidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.emailValidator()(control);
  }
}
