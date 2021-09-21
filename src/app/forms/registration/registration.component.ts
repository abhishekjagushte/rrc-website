import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
} from '@angular/forms';
import { FormsService } from 'src/app/data/forms.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  success = "success"
  failure = "failure"
  notTried = "not tried"
  loading = "loading"
  status: string = "initial"
  invalid ='invalid'

  pageTitle!: string

  registrationForm!: FormGroup
  yearOfStudy!: {name: string, id: string}[]

  submitSuccess: boolean = false;
  submitClicked: boolean = false;
  isLoading: boolean = true;

  constructor(private http: HttpClient, private formsService: FormsService) {}

  ngOnInit(): void {
    this.registrationForm = this.formsService.registrationForm
    this.yearOfStudy = this.formsService.recruitmentInputs.yearOfStudy
    this.pageTitle = this.formsService.registrationPageTitle
  }


  
  onSubmit(){
if(this.registrationForm.valid){

  
  this.status=this.loading
  
  this.http.post(this.formsService.recruitmentMacroLink,
    JSON.stringify(this.registrationForm.value) ,{
      headers: {
        "Content-Type": "text/plain"
      }
    } 
    ).subscribe((response: any) => {
      if(response.result=="success")        
      this.status=this.success
      else
      this.status=this.failure
    })
  }else{
    this.status=this.invalid    
  }
}
}
