import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidator {

    static validUsername (nameFC: AbstractControl): ValidationErrors | null {

        // validate username has been taken
        const valid = (nameFC.value.toLowerCase() === 'abc123') || (nameFC.value.toLowerCase() === '123abc');
        
        // return result 
        return valid ? {validUserName: true} : null ;
    }

}