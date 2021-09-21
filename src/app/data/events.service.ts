import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventsService {

  pageTitle: string = "Activities"
  

  events = [
    new Event(
      //title
      'All About Robotics',

      //organizations
      'RRC',

      //time
      'August 2021- September 2021', 
      
      //highlights
      [
        'Club conducted a series of weekly online sessions to impart the necessary skills like designing and modelling, electronics and programming.',
        'These sessions furnished a brief insight into understanding the different domains of Robotics.',
      ],

      //button links
      [
        // {title: "Company Website", link: "https://zeuslearning.com"}
      ],

      //image path
      '../../assets/events/AllAboutRobotics.webp'
    ),

    new Event(
      'DD Robocon 2021',
      'ABU Robocon',
      'November 2020 - July 2021',
      [
        'In stage 1, we have secured AIR 7 with marks 94/100 which qualified us for stage 2.',
        'One robot is for picking and passing arrows to another robot which shoots the arrows into pots.',
        'Due to the pandemic situation, the competition was shifted online.',
      ],
      [
        // { title: 'Certificate', link: 'https://drive.google.com/file/d/1yagmXnV3pTYF_se5BKzQZ46r_SWDU_Gs/view?usp=sharing' }
      ],
      '../../assets/events/Robocon2021.webp'
    ),

    new Event(
        "Cozmo-Clench 2020",
        "IIT Bombay",
        'November 2020',
        [
            'Our club participated by sending two teams (8 members) for this competition.',
            'Accommodating Covid norms, we had to send a video of our robots completing the tasks.',
        ],
        [
          // {title: "RRC Website", link: "https://rgitsroboticsclub.com/"},
          // {title: "DD Robocon 2021", link: "http://www.ddrobocon.in/"}
        ],
        '../../assets/events/CozmoClench2020.webp'
    ),

    new Event(
        "e-Yantra 2020-21",
        "IIT Bombay",
        'September 2020 -January 2021',
        [
            'Simulating the theme of Vargi bots in ROS environment.',
            'We had one team of four members representing our club.',
            'The task was to pick and place various packages. The process was tracked with IoT controls.',
        ],
        [
            // {title: "RRC Website", link: "https://rgitsroboticsclub.com/"},            
            // {title: "RRC Instagram handle", link: "https://www.instagram.com/roboticsclubrgit/"}
        ],
        '../../assets/events/e-Yantra2020.webp'
    ),

    new Event(
      'E-workshop on "Introduction to Computer Vision',
      'RRC',
      'October 2020',
      [
        'It was a three-day workshop having 2 hours’ session on each day from 2nd to 4th October.',
        'We had 44 participants who were taught the basics of OpenCV by club members.',
        'Application of computer vision, object recognition and face recognition on Google Colab.',
      ],
      [
        // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
      ],
      '../../assets/events/ComputerVision.webp'
    ),

    new Event(
      "Talk on Deep Learning",
      "RRC & IETE-RGIT",
      'September 2021',
      [
       'Conducted in collaboration with IETE on 12th September, for a duration of two hours.',
       'A total figure of 85 participants was achieved for this seminar.',
       'They were taught Types of Neural Networks and Basics of Natural Language Processing',

      ],
      [
        // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
      ],
      '../../assets/events/Deeplearning.webp'
    ),

    new Event(
      "DD Robocon 2020",
      "ABU Robocon",
      'November 2019 - March 2020',
      [
        'Two robots have to be designed as per the given problem statement for a Rugby 7’s game.',
        'The robots should be able to pick, throw, catch and kick the ball all while navigating through obstacles.',
        'Our designs cleared the first stage securing an AIR 6 and successfully qualified for stage 2.',
      ],
      [
        // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
      ],
      '../../assets/events/Robocon2020.webp'
    ),

    new Event(
      "Robomaze by Spectra The Fest",
      "VJTI",
      'January 2020',
      [
        'The event was hosted by Sardar Patel college of Engineering on 31st January and 1St February.',
        'We built a robot capable of completing the maze while avoiding obstacles in shortest time.',
        'Our team participated in the event and secured overall 7th rank from around 30 teams.',
      ],
      [
        // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
      ],
      '../../assets/events/Robomaze.webp'
    ),

    new Event(
      "CANINE– An Autonomous Quadruped Walking Robot",
      "RRC, RoboRise Technologies and ASME-RGIT",
      'December 2019',
      [
        'The internship is conducted in collaboration with RoboRise Technologies and ASME RGIT.',
        'There were 35+ participants from various colleges in groups of 5 for this internship.',
        'They were taught SOLIDWORKS, MATLAB, PCB design and coding (Python).',
      ],
      [
        // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
      ],
      '../../assets/events/CANINE.webp'
    ),

    // new Event(
    //   "Technorian (2019-20)",
    //   "IIT-Bombay",
    //   'November 2021',
    //   [
    //     'Technorion is a zonal level robotics competition for students all over Asia.',
    //     'We participated in Cozmo Clench, Meshmerize and CoDecode competitions.',
          
    //   ],
    //   [
    //     // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
    //   ],
    //   '../../assets/events/Technorian2019.webp'
    // ),

    new Event(
      "Self-balancing robot Internship",
      "RRC, RoboRise Technologies and MESA-RGIT",
      'August- 2019',
      [
        'It was conducted in collaboration with MESA in August,2019.',
        'We had 75+ participants from various other colleges.',
        'They were taught designing, simulation and coding for building the bot.',
        
      ],
      [
        // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
      ],
      '../../assets/events/SelfBalancingRobot.webp'
    ),

    new Event(
      "Icarus Events",
      "Technical Fest of MCT's Rajiv Gandhi Institute of Technology",
      'Feburary 2021',
      [
        'There were 5 events conducted by our club in RGITs Techfest.', 
        'They were RoboSoccer, RoboRace, RoboMaze, RoboWars and Chase the ace.',
      ],
      [
        // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
      ],
      '../../assets/events/ICARUSevents2018.webp'
    ),

    new Event(
      "Robotech Workshop",
      'RRC',
      'March 2018',
      [
        'The workshop conducted was on “Bluetooth controlled manual Robot”.',
        'There were 35+ students from the college who participated in this event.',
        'The participants were taught basics of robots and coding to build the robot',
        
      ],
      [
        // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
      ],
      '../../assets/events/robotech2019.webp'
    ),

    new Event(
      "DD Robocon 2019",
      'ABU Robocon',
      'November 2019 - March 2020',
      [
        'Two robots are to be designed and according to the problem statement.',
        'The club successfully designed the robots as per game specifications.',
      ],
      [
        // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
      ],
      '../../assets/events/Robocon2019.webp'
    ),

    // new Event(
    //   "Tehnovanza",
    //   "VJIT",
    //   'December 2018',
    //   [
    //     'The club participated in 4 competitions in the techfest.', 
    //     'These were Robo-strike, Robo-Maze, Robo-soccer and Robo-sumo.',
    //   ],
    //   [
    //     // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
    //   ],
    //   '../../assets/events/techovanza2018.webp'
    // ),

    // new Event(
    //   "Techfest (2018-19)",
    //   "IIT- Bombay",
    //   'January 2019',
    //   [
    //     'The event we participated in was called Cosmo-Clench.',
    //     'Teams had to build a manually controlled pick-and-place robot.',
    //     'The task was completed successfully by the 2 teams from the club.',
    //   ],
    //   [
    //     // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
    //   ],
    //   '../../assets/events/techfest2018.webp'
    // ),

    // new Event(
    //   "Technorian (2018-19)",
    //   "IIT- Bombay",
    //   'November 2018',
    //   [
    //     'It was a competition held by IIT Bombay during September 2018.',
    //     'The club sent 6 teams of 4 students each to compete in this.',
    //     'Task was to complete an obstacle course in minimum time.',
    //   ],
    //   [
    //     // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
    //   ],
    //   '../../assets/events/technorian2018.webp'
    // ),

  ];
}
