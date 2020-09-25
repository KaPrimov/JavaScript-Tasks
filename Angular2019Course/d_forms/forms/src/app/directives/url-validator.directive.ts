import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { CustomValidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appUrlValidator]',
  providers: [
    { 
      provide: NG_VALIDATORS,
      useClass: UrlValidatorDirective,
      multi: true
    }
  ]
})
export class UrlValidatorDirective implements Validator {

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    const isValid = control.value?.startsWith('http') && (control.value?.endsWith('jpg') || control.value?.endsWith('png'));
    const color = isValid ? "green" : "red";
    this.renderer.setStyle(this.elRef.nativeElement, 'border-left-color', color);
    return isValid ? null : {urlValidator: {valid: false}};
  }
}