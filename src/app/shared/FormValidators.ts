import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidators{

    checkIfNotSelected(control: AbstractControl): ValidationErrors | null {
        const isNotEntered = control.value == -1

        if(isNotEntered)
          console.log("retyurning null")  

        return isNotEntered ? {error: {message: "Please select a value"}} : null 
    }
}

export const formValidators = new FormValidators()