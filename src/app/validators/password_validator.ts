import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export class PasswordValidator {

    static isMatched(control: AbstractControl): ValidationErrors | null {
        
        // get form group 
        const formGroup = control.parent as FormGroup;
        
        // check form group exist 
        if (!formGroup) {
          return null;
        }
    
        // get form group field 
        const password = formGroup.get('newPassword');
        const confirmPassword = formGroup.get('retypePassword');
    
        // return null when either one no val 
        if (!password || !confirmPassword) {
          return null;
        }
    
        // check both pass are matched 
        if (password.value !== confirmPassword.value) {
            // return validation err objs
          return {isPasswordMatched: true };
        }
    
        return null;
      }
}