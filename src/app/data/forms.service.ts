import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formValidators } from '../shared/FormValidators';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor() {}
  
  recruitmentMacroLink: string = "https://script.google.com/macros/s/AKfycbwziX8APMiiQWSsToxhwZdOdS-J5ACntnHPk-vc3N7gkhinCpWA5gckvGR-uTpCFRfZvQ/exec"
  
  
  recruitmentInputs = {
    streams: [
      {name : 'Mechanical Engineering', id: 'MECH'},
      {name: 'EXTC Engineering', id: 'EXTC'},
      {name: 'Computer Engineering', id: 'COMPS'},
      {name: 'Machine Learning', id: 'ML'},
      {name: 'Information Technology', id: 'IT'},
      {name :'Instrumentation', id:'INST'},
    ],

    yearOfStudy: [
      {name: 'First Year', id:'FE'},
      {name: 'Second Year', id:'SE'},
      {name: 'Third Year', id:'TE'},
      {name: 'Fourth Year', id:'BE'}
    ],

    domains: [
      {name: "Simulation & Analysis"}, 
      {name: "Design & Manufacturing"}, 
      {name: "Programming"}, 
      {name: "Electronics"}, 
      {name: "Marketing"},
      {name: "Web Design"}
    ]
  };

  recruitmentForm = new FormGroup({
    'firstName': new FormControl(null, Validators.required),
    'lastName': new FormControl(null, Validators.required),
    'emailID': new FormControl(null, Validators.required),
    'phoneNumber': new FormControl(null, Validators.required),
    'yearOfStudy': new FormControl(-1, formValidators.checkIfNotSelected),
    'stream': new FormControl(-1, formValidators.checkIfNotSelected),
    'firstPreference': new FormControl(-1, formValidators.checkIfNotSelected),
    'secondPreference': new FormControl(-1, formValidators.checkIfNotSelected),
    'thirdPreference': new FormControl(-1, formValidators.checkIfNotSelected),
  });



  registrationMacroLink: string = "https://script.google.com/macros/s/AKfycbx3fnVfogUVbx4gKn2uddJeeH5lflweEaY7ACEtOxSj2ceoasbYOXgVQIZ35PxhuU0/exec"

  registrationPageTitle: string = "Register"

  registrationForm = new FormGroup({
    'firstName': new FormControl(null, Validators.required),
    'lastName': new FormControl(null, Validators.required),
    'emailID': new FormControl(null, [Validators.required ,Validators.email]),
    'phoneNumber': new FormControl(null, [Validators.required]),
    'yearOfStudy': new FormControl(-1, formValidators.checkIfNotSelected),
    'college': new FormControl(null, Validators.required)
  });
}