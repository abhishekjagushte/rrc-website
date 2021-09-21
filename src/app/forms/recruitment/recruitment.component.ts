import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormsService } from '../../data/forms.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css'],
})
export class RecruitmentComponent implements OnInit {
  constructor(private formsService: FormsService, private http: HttpClient) {}

  success = 'success';
  failure = 'failure';
  notTried = 'not tried';
  loading = 'loading';
  invalid ='invalid'

  recruitmentInputs: any;
  recruitmentForm!: FormGroup;
  streams!: { name: string; id: string }[];
  yearOfStudy!: { name: string; id: string }[];
  domains!: { name: string }[];

  status: string = 'initial';

  ngOnInit(): void {
    this.recruitmentInputs = this.formsService.recruitmentInputs;
    this.recruitmentForm = this.formsService.recruitmentForm;

    this.streams = this.recruitmentInputs.streams;
    this.yearOfStudy = this.recruitmentInputs.yearOfStudy;
    this.domains = this.recruitmentInputs.domains;
  }

  onSubmit() {    
    if (this.recruitmentForm.valid) {
      
      this.status = this.loading;
      this.http
        .post(
          this.formsService.recruitmentMacroLink,
          JSON.stringify(this.recruitmentForm.value),
          {
            headers: {
              'Content-Type': 'text/plain',
            },
          }
        )
        .subscribe((response: any) => {
          if (response.result == 'success') this.status = this.success;
          else this.status = this.failure;
        });
    }
    else{
      this.status = this.invalid
    }
  }
}
