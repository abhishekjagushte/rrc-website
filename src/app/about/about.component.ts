import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../data/home-page.service';
import { SimpleSection } from '../models/SimpleSection.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name!: string 
  surname!: string
  tagline!: string
  email!: string
  linkedIn!: string
  instagram!: string  
  brochure!: string 
  simpleSections!:SimpleSection[];

  constructor(private aboutdataService: HomePageService) { }

  ngOnInit(): void {
    this.name = this.aboutdataService.name
    this.surname = this.aboutdataService.surname
    this.tagline = this.aboutdataService.tagline
    this.email = this.aboutdataService.email
    this.instagram = this.aboutdataService.instagram
    this.linkedIn = this.aboutdataService.linkedIn
    this.brochure = this.aboutdataService.brochure
    this.simpleSections=this.aboutdataService.simpleSection
  }

}
