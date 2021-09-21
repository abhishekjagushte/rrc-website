import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomePageService } from '../data/home-page.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  success = "success"
  failure = "failure"
  notTried = "not tried"
  loading = "loading"


  status=this.notTried

  contact ={
    name: "",
    surname: "",
    email: "",
    message: ""
  }

  email!: string

  constructor(private http: HttpClient, private homePageService: HomePageService) { }

  ngOnInit(): void {
    this.email = `mailto:${this.homePageService.email}`
  }

  submitClicked(form: NgForm){

    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*")

    this.status=this.loading

    this.http.post("https://script.google.com/macros/s/AKfycby-AmBgD2FIeG2nzjAgiSxB6rqRO3OGLjrOBLzONghHR4noRrqNirCsRK39YRFkA_g/exec",
    JSON.stringify(this.contact) ,{
        headers: {
          "Content-Type": "application/json"
        }
    } 
    ).subscribe((response: any) => {
        if(response.result=="success")        
          this.status=this.success
        else
          this.status=this.failure
      })
  }
}