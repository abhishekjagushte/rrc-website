import { Injectable } from '@angular/core';
import { SimpleSection } from '../models/SimpleSection.model';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor() {}

  initials: string = 'RRC';

  name: string = "RGIT's";
  surname: string = 'Robotics Club';
  tagline: string =
    "The Official Robotics Club of MCT's Rajiv Gandhi Institute of Technology";

  email: string = 'mailto:rgitsroboticsclub@gmail.com';
  linkedIn: string = 'https://www.linkedin.com/company/rgitsroboticsclub/';
  instagram: string = 'https://www.instagram.com/roboticsclubrgit/';
  brochure: string =
    'https://drive.google.com/file/d/1ifZ1__nMWhbJyg-ZS53I_wKpCsLsPMAQ/view?usp=sharing';

  simpleSection: SimpleSection[] = [
    new SimpleSection(
      //title
      'What We Do ',

      //description
      [
        `We at RGlT's Robotics Club acquaints students of our institute with the current trends of Robotics and Automation in the Industry by providing sufficient practical exposure and opportunities in the form of workshops, internships, free training sessions and competitions which will enhance their knowledge along with developing technical as well as soft skills. 
       `,
        `Besides making an earnest endeavour to spread knowledge on Robotics and its diverse applications, the club also displays teamsmanship in high-pressure situations and inculcates in our member’s qualities necessary for working successfully as a team. 
       `,
        `The club provides numerous opportunities for personal growth including publishing technical papers, teaching in workshops and seminars and imparts leadership skills.`,
      ]
    ),
    // new SimpleSection(
    //   //title
    //   'Our Aim ',

    //   //description
    //   [
    //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas commodi excepturi ullam similique molestias repellat cum voluptatem laboriosam unde atque maxime, sapiente quia tempora officiis omnis expedita inventore assumenda modi?',
    //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas commodi excepturi ullam similique molestias repellat cum voluptatem laboriosam unde atque maxime, sapiente quia tempora officiis omnis expedita inventore assumenda modi?',
    //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas commodi excepturi ullam similique molestias repellat cum voluptatem laboriosam unde atque maxime, sapiente quia tempora officiis omnis expedita inventore assumenda modi?',
    //   ]

    // ),
  ];
}
