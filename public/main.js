(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\abhis\Node Projects\rrc\src\main.ts */"zUnb");


/***/ }),

/***/ "1UYb":
/*!******************************************!*\
  !*** ./src/app/shared/FormValidators.ts ***!
  \******************************************/
/*! exports provided: FormValidators, formValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidators", function() { return FormValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formValidators", function() { return formValidators; });
class FormValidators {
    checkIfNotSelected(control) {
        const isNotEntered = control.value == -1;
        if (isNotEntered)
            console.log("retyurning null");
        return isNotEntered ? { error: { message: "Please select a value" } } : null;
    }
}
const formValidators = new FormValidators();


/***/ }),

/***/ "2XPB":
/*!****************************************!*\
  !*** ./src/app/data/events.service.ts ***!
  \****************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _models_event_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/event.model */ "Z2SW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EventsService {
    constructor() {
        this.pageTitle = "Activities";
        this.events = [
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"](
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
            '../../assets/events/AllAboutRobotics.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]('DD Robocon 2021', 'ABU Robocon', 'November 2020 - July 2021', [
                'In stage 1, we have secured AIR 7 with marks 94/100 which qualified us for stage 2.',
                'One robot is for picking and passing arrows to another robot which shoots the arrows into pots.',
                'Due to the pandemic situation, the competition was shifted online.',
            ], [
            // { title: 'Certificate', link: 'https://drive.google.com/file/d/1yagmXnV3pTYF_se5BKzQZ46r_SWDU_Gs/view?usp=sharing' }
            ], '../../assets/events/Robocon2021.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("Cozmo-Clench 2020", "IIT Bombay", 'November 2020', [
                'Our club participated by sending two teams (8 members) for this competition.',
                'Accommodating Covid norms, we had to send a video of our robots completing the tasks.',
            ], [
            // {title: "RRC Website", link: "https://rgitsroboticsclub.com/"},
            // {title: "DD Robocon 2021", link: "http://www.ddrobocon.in/"}
            ], '../../assets/events/CozmoClench2020.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("e-Yantra 2020-21", "IIT Bombay", 'September 2020 -January 2021', [
                'Simulating the theme of Vargi bots in ROS environment.',
                'We had one team of four members representing our club.',
                'The task was to pick and place various packages. The process was tracked with IoT controls.',
            ], [
            // {title: "RRC Website", link: "https://rgitsroboticsclub.com/"},            
            // {title: "RRC Instagram handle", link: "https://www.instagram.com/roboticsclubrgit/"}
            ], '../../assets/events/e-Yantra2020.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]('E-workshop on "Introduction to Computer Vision', 'RRC', 'October 2020', [
                'It was a three-day workshop having 2 hours’ session on each day from 2nd to 4th October.',
                'We had 44 participants who were taught the basics of OpenCV by club members.',
                'Application of computer vision, object recognition and face recognition on Google Colab.',
            ], [
            // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
            ], '../../assets/events/ComputerVision.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("Talk on Deep Learning", "RRC & IETE-RGIT", 'September 2021', [
                'Conducted in collaboration with IETE on 12th September, for a duration of two hours.',
                'A total figure of 85 participants was achieved for this seminar.',
                'They were taught Types of Neural Networks and Basics of Natural Language Processing',
            ], [
            // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
            ], '../../assets/events/Deeplearning.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("DD Robocon 2020", "ABU Robocon", 'November 2019 - March 2020', [
                'Two robots have to be designed as per the given problem statement for a Rugby 7’s game.',
                'The robots should be able to pick, throw, catch and kick the ball all while navigating through obstacles.',
                'Our designs cleared the first stage securing an AIR 6 and successfully qualified for stage 2.',
            ], [
            // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
            ], '../../assets/events/Robocon2020.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("Robomaze by Spectra The Fest", "VJTI", 'January 2020', [
                'The event was hosted by Sardar Patel college of Engineering on 31st January and 1St February.',
                'We built a robot capable of completing the maze while avoiding obstacles in shortest time.',
                'Our team participated in the event and secured overall 7th rank from around 30 teams.',
            ], [
            // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
            ], '../../assets/events/Robomaze.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("CANINE– An Autonomous Quadruped Walking Robot", "RRC, RoboRise Technologies and ASME-RGIT", 'December 2019', [
                'The internship is conducted in collaboration with RoboRise Technologies and ASME RGIT.',
                'There were 35+ participants from various colleges in groups of 5 for this internship.',
                'They were taught SOLIDWORKS, MATLAB, PCB design and coding (Python).',
            ], [
            // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
            ], '../../assets/events/CANINE.webp'),
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
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("Self-balancing robot Internship", "RRC, RoboRise Technologies and MESA-RGIT", 'August- 2019', [
                'It was conducted in collaboration with MESA in August,2019.',
                'We had 75+ participants from various other colleges.',
                'They were taught designing, simulation and coding for building the bot.',
            ], [
            // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
            ], '../../assets/events/SelfBalancingRobot.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("Icarus Events", "Technical Fest of MCT's Rajiv Gandhi Institute of Technology", 'Feburary 2021', [
                'There were 5 events conducted by our club in RGITs Techfest.',
                'They were RoboSoccer, RoboRace, RoboMaze, RoboWars and Chase the ace.',
            ], [
            // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
            ], '../../assets/events/ICARUSevents2018.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("Robotech Workshop", 'RRC', 'March 2018', [
                'The workshop conducted was on “Bluetooth controlled manual Robot”.',
                'There were 35+ students from the college who participated in this event.',
                'The participants were taught basics of robots and coding to build the robot',
            ], [
            // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
            ], '../../assets/events/robotech2019.webp'),
            new _models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("DD Robocon 2019", 'ABU Robocon', 'November 2019 - March 2020', [
                'Two robots are to be designed and according to the problem statement.',
                'The club successfully designed the robots as per game specifications.',
            ], [
            // {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
            ], '../../assets/events/Robocon2019.webp'),
        ];
    }
}
EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(); };
EventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EventsService, factory: EventsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5aow":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/events.service */ "2XPB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/event.component */ "ZARJ");





function EventsComponent_app_event_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event", 5);
} if (rf & 2) {
    const exp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", exp_r1);
} }
const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/contact"]; };
class EventsComponent {
    constructor(eventsService) {
        this.eventsService = eventsService;
        this.experiences = [];
        this.experiences = this.eventsService.events;
        this.pageTitle = this.eventsService.pageTitle;
    }
    ngOnInit() {
    }
}
EventsComponent.ɵfac = function EventsComponent_Factory(t) { return new (t || EventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"])); };
EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsComponent, selectors: [["app-experiences"]], decls: 13, vars: 6, consts: [[1, "content-container"], [1, "heading-container"], [1, "content-heading"], [3, "experience", 4, "ngFor", "ngForOf"], [1, "nav-button", "transition-background", 3, "routerLink"], [3, "experience"]], template: function EventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventsComponent_app_event_4_Template, 1, 1, "app-event", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _event_event_component__WEBPACK_IMPORTED_MODULE_4__["EventComponent"]], styles: [".content-container[_ngcontent-%COMP%]{\r\n    padding: 0rem var(--content-padding)\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .content-container[_ngcontent-%COMP%]{\r\n        padding: 0em 1.5rem 5em 1.5em;        \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0oiLCJmaWxlIjoiZXZlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwcmVtIHZhcigtLWNvbnRlbnQtcGFkZGluZylcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5jb250ZW50LWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiAwZW0gMS41cmVtIDVlbSAxLjVlbTsgICAgICAgIFxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_home_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/home-page.service */ "axnY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function AboutComponent_section_24_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desc_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", desc_r3, " ");
} }
function AboutComponent_section_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AboutComponent_section_24_div_4_Template, 5, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const simpleSec_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](simpleSec_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", simpleSec_r1.description);
} }
const _c0 = function () { return ["/register"]; };
class AboutComponent {
    constructor(aboutdataService) {
        this.aboutdataService = aboutdataService;
    }
    ngOnInit() {
        this.name = this.aboutdataService.name;
        this.surname = this.aboutdataService.surname;
        this.tagline = this.aboutdataService.tagline;
        this.email = this.aboutdataService.email;
        this.instagram = this.aboutdataService.instagram;
        this.linkedIn = this.aboutdataService.linkedIn;
        this.brochure = this.aboutdataService.brochure;
        this.simpleSections = this.aboutdataService.simpleSection;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_home_page_service__WEBPACK_IMPORTED_MODULE_1__["HomePageService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 31, vars: 9, consts: [[1, "content-container"], [1, "profile-container", "content-padding", "center-responsive"], [1, "header"], [1, "profile-image-container", "center-responsive"], [1, "badge-art"], ["src", "../../assets/mypic1600.webp", "srcset", "../../assets/mypic375.webp 400w, ../../assets/mypic768.webp 768w, ../../assets/mypic1600.webp 1600w", "sizes", "(max-width:375px) 375px, (max-width:768px) 768px, (max-width:1440px) 1600px, 1600px", "alt", "Image of RGIT's Robotics Club", 1, "profile-image"], [1, "verticle-divider"], [1, "info-container"], [1, "name-container"], [1, "name-heading", "name"], [1, "name-heading", "surname"], [1, "tagline-container"], [1, "tagline"], [1, "horizontal-container", "center-responsive"], [1, "link-icon", 3, "href"], ["src", "../../assets/mail.svg", "alt", "Email us by clicking here", 1, "profile-icon"], ["target", "_blank", 1, "link-icon", 3, "href"], ["src", "../../assets/linkedin.svg", "alt", "Visit our linkedin page by clicking here", 1, "profile-icon"], ["src", "../../assets/instagram.svg", "alt", "Visit our instagram handle by clicking here", 1, "profile-icon"], ["class", "content-padding", 4, "ngFor", "ngForOf"], [1, "nav-button", "transition-background", 3, "routerLink"], [1, "content-padding"], [1, "subheading2"], ["class", "two-columns", 4, "ngFor", "ngForOf"], [1, "two-columns"], [1, "col-1"], [1, "content"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AboutComponent_section_24_Template, 5, 2, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Recruitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.surname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.linkedIn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.simpleSections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Source+Code+Pro:ital@1&display=swap\");\r\n.profile-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--background-color-secondary);\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-basis: 500px;\r\n  height: -webkit-max-content;\r\n  height: max-content;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10rem;\r\n  flex-wrap: wrap;\r\n}\r\n.verticle-divider[_ngcontent-%COMP%]{\r\n  border: 2px solid white;\r\n  margin: 3rem 0;\r\nheight: 300px;\r\n}\r\n.content-padding[_ngcontent-%COMP%] {\r\n   padding: 4em 10% 8em 10%;\r\n}\r\n.profile-image-container[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n}\r\n.info-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n}\r\n.badge-art[_ngcontent-%COMP%] {\r\n  height: 25rem;\r\n  width: 25rem;\r\n  padding: 1rem;\r\n  border-radius: 12.5rem 12.5rem 12.5rem 12.5rem;\r\n  background-color: var(--main-badge-color);\r\n}\r\n.profile-image[_ngcontent-%COMP%] {\r\n  height: 25rem;\r\n  width: 25rem;\r\n  opacity: 0;\r\n  animation: profile-image-anim 1s ease-out 0s 1 forwards;\r\n}\r\n.all-projects-img[_ngcontent-%COMP%]{\r\n  height: 200px;\r\n  margin-left: 3rem;\r\n  margin-right: 3rem;\r\n}\r\n@keyframes profile-image-anim {\r\n  100%{\r\n    opacity: 1;\r\n  }\r\n}\r\n.name-heading[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: \"Raleway\", sans-serif;\r\n  text-shadow: 4px 4px var(--primary-color), 5px 5px var(--secondary-color);\r\n  display: block;\r\n}\r\n.name[_ngcontent-%COMP%] {\r\n  font-size: 4.5rem;\r\n  line-height: 1.2;\r\n  display: block;\r\n}\r\n.surname[_ngcontent-%COMP%]{\r\n  font-size: 8rem;\r\n  line-height: 1.5;\r\n}\r\n.tagline-container[_ngcontent-%COMP%]{\r\n  margin-top: 1rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n.tagline[_ngcontent-%COMP%] {\r\n  color: var(--primary-color);\r\n  font-family: \"Source Code Pro\", monospace;\r\n  font-size: 1.3rem;\r\n\r\n  max-width: 100%;\r\n}\r\n.name[_ngcontent-%COMP%]:hover {\r\n  text-shadow: 5px 5px var(--primary-color), 6px 6px var(--secondary-color);\r\n}\r\n.name-responsive[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n@media screen and (max-width: 1450px) {\r\n  \r\n\r\n  .verticle-divider[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .header[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    gap: 3.5rem;\r\n  }\r\n\r\n  .name[_ngcontent-%COMP%], .surname[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  .name[_ngcontent-%COMP%]{\r\n    font-size: 4rem;\r\n  }\r\n\r\n  .surname[_ngcontent-%COMP%]{\r\n    font-size: 6rem;\r\n  }\r\n\r\n  .center-responsive[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .tagline[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n}\r\n@media screen and (max-width: 900px) {\r\n\r\n  .content-padding[_ngcontent-%COMP%]{\r\n    padding: 4em 1.5em 8em 1.5em;\r\n  }\r\n}\r\n@media screen and (max-width: 700px) {\r\n  .name[_ngcontent-%COMP%]{\r\n    font-size: 3.5rem;\r\n  }\r\n\r\n  .surname[_ngcontent-%COMP%]{\r\n    font-size: 5.3rem;\r\n  }\r\n}\r\n@media screen and (max-width: 600px) {\r\n  .name[_ngcontent-%COMP%]{\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .surname[_ngcontent-%COMP%]{\r\n    font-size: 4.7rem;\r\n  }\r\n}\r\n@media screen and (max-width: 550px) {\r\n \r\n  .center-responsive[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n@media screen and (max-width: 375px) {\r\n  .name[_ngcontent-%COMP%]{\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .surname[_ngcontent-%COMP%]{\r\n    font-size: 4.3rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGO0FBQ3JGLG1IQUFtSDtBQUVuSDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbURBQW1EO0FBQ3JEO0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDJCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEIsYUFBYTtBQUNiO0FBRUE7R0FDRyx3QkFBd0I7QUFDM0I7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0FBRXhCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMseUNBQXlDO0FBQzNDO0FBR0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7RUFDVix1REFBdUQ7QUFDekQ7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLHlFQUF5RTtFQUN6RSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix5Q0FBeUM7RUFDekMsaUJBQWlCOztFQUVqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5RUFBeUU7QUFDM0U7QUFHQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0U7OztLQUdHOztFQUVIO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFRjtBQUVBOztFQUVFO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUE7O0VBRUU7SUFDRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANzAwJmZhbWlseT1Tb3VyY2UrQ29kZStQcm86aXRhbEAxJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDUwMHB4O1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEwcmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnZlcnRpY2xlLWRpdmlkZXJ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbmhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXBhZGRpbmcge1xyXG4gICBwYWRkaW5nOiA0ZW0gMTAlIDhlbSAxMCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgLyogbWFyZ2luLWJvdHRvbTogNGVtOyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pbmZvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIFxyXG59XHJcbi5iYWRnZS1hcnQge1xyXG4gIGhlaWdodDogMjVyZW07XHJcbiAgd2lkdGg6IDI1cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTIuNXJlbSAxMi41cmVtIDEyLjVyZW0gMTIuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhZGdlLWNvbG9yKTtcclxufVxyXG5cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICBoZWlnaHQ6IDI1cmVtO1xyXG4gIHdpZHRoOiAyNXJlbTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogcHJvZmlsZS1pbWFnZS1hbmltIDFzIGVhc2Utb3V0IDBzIDEgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5hbGwtcHJvamVjdHMtaW1ne1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHByb2ZpbGUtaW1hZ2UtYW5pbSB7XHJcbiAgMTAwJXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ubmFtZS1oZWFkaW5ne1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggdmFyKC0tcHJpbWFyeS1jb2xvciksIDVweCA1cHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdXJuYW1le1xyXG4gIGZvbnQtc2l6ZTogOHJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4udGFnbGluZS1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi50YWdsaW5lIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsIG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmFtZTpob3ZlciB7XHJcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggdmFyKC0tcHJpbWFyeS1jb2xvciksIDZweCA2cHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuXHJcbi5uYW1lLXJlc3BvbnNpdmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ1MHB4KSB7XHJcbiAgLyogLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxMC4zcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9ICovXHJcblxyXG4gIC52ZXJ0aWNsZS1kaXZpZGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICAubmFtZSwgLnN1cm5hbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubmFtZXtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICB9XHJcblxyXG4gIC5zdXJuYW1le1xyXG4gICAgZm9udC1zaXplOiA2cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1yZXNwb25zaXZle1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRhZ2xpbmV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuXHJcbiAgLmNvbnRlbnQtcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDRlbSAxLjVlbSA4ZW0gMS41ZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5uYW1le1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICAuc3VybmFtZXtcclxuICAgIGZvbnQtc2l6ZTogNS4zcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubmFtZXtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIC5zdXJuYW1le1xyXG4gICAgZm9udC1zaXplOiA0LjdyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gXHJcbiAgLmNlbnRlci1yZXNwb25zaXZle1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAubmFtZXtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIC5zdXJuYW1le1xyXG4gICAgZm9udC1zaXplOiA0LjNyZW07XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HEvl":
/*!**************************************************************!*\
  !*** ./src/app/forms/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_data_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/forms.service */ "r4lr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function RegistrationComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const yos_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", yos_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](yos_r5.name);
} }
function RegistrationComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Thanks for you message, I will reach you out soon! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There was an error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please fill all the fields properly ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/"]; };
class RegistrationComponent {
    constructor(http, formsService) {
        this.http = http;
        this.formsService = formsService;
        this.success = "success";
        this.failure = "failure";
        this.notTried = "not tried";
        this.loading = "loading";
        this.status = "initial";
        this.invalid = 'invalid';
        this.submitSuccess = false;
        this.submitClicked = false;
        this.isLoading = true;
    }
    ngOnInit() {
        this.registrationForm = this.formsService.registrationForm;
        this.yearOfStudy = this.formsService.recruitmentInputs.yearOfStudy;
        this.pageTitle = this.formsService.registrationPageTitle;
    }
    onSubmit() {
        if (this.registrationForm.valid) {
            this.status = this.loading;
            this.http.post(this.formsService.recruitmentMacroLink, JSON.stringify(this.registrationForm.value), {
                headers: {
                    "Content-Type": "text/plain"
                }
            }).subscribe((response) => {
                if (response.result == "success")
                    this.status = this.success;
                else
                    this.status = this.failure;
            });
        }
        else {
            this.status = this.invalid;
        }
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_data_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 29, vars: 10, consts: [[1, "content-container"], [1, "heading-container"], [1, "content-heading"], [1, "form-box"], [3, "formGroup"], ["id", "name", "type", "text", "formControlName", "firstName", "placeholder", "First Name", 1, "input", "col", 2, "margin-right", "2%"], ["id", "surname", "formControlName", "lastName", "type", "text", "placeholder", "Last Name", 1, "input", "col"], ["id", "phoneNumber", "type", "text", "formControlName", "phoneNumber", "placeholder", "Phone Number", 1, "input"], ["id", "emailId", "formControlName", "emailID", "type", "email", "placeholder", "Email Id", 1, "input"], ["id", "college", "formControlName", "college", "type", "text", "placeholder", "College Name", 1, "input"], ["for", "yos-inp"], ["id", "yos-inp", "formControlName", "yearOfStudy", 1, "input"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "submit", "type", "submit", 1, "button", 3, "click"], ["class", "content", "class", "content status-message", "id", "success-msg", 4, "ngIf"], ["class", "content", "class", "content status-message", "id", "failure-msg", 4, "ngIf"], ["class", "content", "class", "content status-message", "id", "loading-msg", 4, "ngIf"], [1, "nav-button", "transition-background", 3, "routerLink"], [3, "value"], ["id", "success-msg", 1, "content", "status-message"], ["id", "failure-msg", 1, "content", "status-message"], ["id", "loading-msg", 1, "content", "status-message"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Year of Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Year of Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegistrationComponent_option_18_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_21_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegistrationComponent_p_23_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegistrationComponent_p_24_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegistrationComponent_p_25_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegistrationComponent_p_26_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yearOfStudy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.failure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".content-container[_ngcontent-%COMP%]{\r\n  padding: 0rem var(--content-padding);\r\n  box-sizing: border-box;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n  padding: 1rem;\r\n  background-color: var(--background-color-primary);\r\n  color: var(--font-color);\r\n  font-family: var(--font-style);\r\n  font-size: 1.5rem;\r\n  outline: none;\r\n  width: 8rem;\r\n  margin-right:auto;\r\n  display: block;\r\n  border: 2px solid var(--primary-color);\r\n  transition: border 300ms ease-out;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:disabled{\r\n  border: 1px solid gray;\r\n  background-color: gray;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.status-message[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-top: 3rem;\r\n  text-align: left;\r\n  color: white;\r\n  border-radius: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n#success-msg[_ngcontent-%COMP%]{\r\n  background-color: green;\r\n}\r\n\r\n#failure-msg[_ngcontent-%COMP%]{\r\n  background-color: red;\r\n}\r\n\r\n#loading-msg[_ngcontent-%COMP%]{\r\n  background-color: rgba(128, 128, 128, 0.808);\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  flex: 1;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  margin: 1rem 0rem;\r\n  padding: 1rem;\r\n  font-size: 1.5rem;\r\n  background-color: var(--background-secondary);\r\n  color: var(--font-color);\r\n  font-family: var(--font-style);\r\n  outline: none;\r\n  border: 1px solid var(--border-color);\r\n  transition: border 300ms ease-out;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\r\n\r\nselect[_ngcontent-%COMP%]    > option[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  background-color: #252525;\r\n  color: var(--font-color);\r\n  font-family: var(--font-style);\r\n  white-space: nowrap;\r\n  min-height: 1.2em;\r\n  padding: 10px 2px 20px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n  color: var(--secondary-color);\r\n  font-size: 1.2rem;\r\n}\r\n\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n  border: 1px solid red;\r\n}\r\n\r\ntextarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n  border: 1px solid red;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n  width: 49%;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n  color: var(--primary-color);\r\n  text-decoration: none;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n  border: 1px solid var(--secondary-color);\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]:focus{\r\n  border: 1px solid var(--secondary-color);\r\n\r\n}\r\n\r\n.form-box[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  position: relative;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n  .form-box[_ngcontent-%COMP%]{\r\n      width: 75%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .form-box[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%]{\r\n      margin-left: auto;\r\n      margin-right: 0;\r\n  }\r\n\r\n  .status-message[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n\r\n  .content-container[_ngcontent-%COMP%]{\r\n      padding: 0em 1.5rem 5em 1.5em;        \r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpREFBaUQ7RUFDakQsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHNDQUFzQztFQUN0QyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLE9BQU87RUFDUCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZDQUE2QztFQUM3Qyx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx3Q0FBd0M7O0FBRTFDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtNQUNJLFVBQVU7RUFDZDtBQUNGOztBQUVBO0VBQ0U7TUFDSSxXQUFXO0VBQ2Y7O0VBRUE7TUFDSSxpQkFBaUI7TUFDakIsZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFFQTtNQUNJLDZCQUE2QjtFQUNqQztBQUNGIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDByZW0gdmFyKC0tY29udGVudC1wYWRkaW5nKTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDhyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDMwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uYnV0dG9uOmRpc2FibGVke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG5cclxuLnN0YXR1cy1tZXNzYWdle1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4jc3VjY2Vzcy1tc2d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbiNmYWlsdXJlLW1zZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4jbG9hZGluZy1tc2d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgwOCk7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMXJlbSAwcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdHlsZSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlciAzMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuc2VsZWN0ID4gb3B0aW9uIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdHlsZSk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBtaW4taGVpZ2h0OiAxLjJlbTtcclxuICBwYWRkaW5nOiAxMHB4IDJweCAyMHB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcblxyXG4uY29se1xyXG4gIHdpZHRoOiA0OSU7XHJcbn1cclxuXHJcbi5saW5re1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5pbnB1dDpmb2N1c3tcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1c3tcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG5cclxufVxyXG5cclxuLmZvcm0tYm94e1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5mb3JtLWJveHtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLmZvcm0tYm94e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5idXR0b257XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuc3RhdHVzLW1lc3NhZ2V7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWNvbnRhaW5lcntcclxuICAgICAgcGFkZGluZzogMGVtIDEuNXJlbSA1ZW0gMS41ZW07ICAgICAgICBcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "O3o7":
/*!*****************************************!*\
  !*** ./src/app/models/project.model.ts ***!
  \*****************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
class Project {
    constructor(title, description, image, techStack, projectLink) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.techStack = techStack;
        this.projectLink = projectLink;
    }
}


/***/ }),

/***/ "QwJw":
/*!*********************************************!*\
  !*** ./src/app/config/app-configuration.ts ***!
  \*********************************************/
/*! exports provided: AppConfiguration, appConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfiguration", function() { return AppConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfigs", function() { return appConfigs; });
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/constants */ "TKFM");

class AppConfiguration {
    constructor() {
        this.activeFormType = Object(_util_constants__WEBPACK_IMPORTED_MODULE_0__["formTypes"])().RECRUITMENT;
        this.navMenu = [
            Object(_util_constants__WEBPACK_IMPORTED_MODULE_0__["navMenuItemsTypes"])().HOME_PAGE,
            Object(_util_constants__WEBPACK_IMPORTED_MODULE_0__["navMenuItemsTypes"])().EVENTS,
            Object(_util_constants__WEBPACK_IMPORTED_MODULE_0__["navMenuItemsTypes"])().FORM_SECTION,
            Object(_util_constants__WEBPACK_IMPORTED_MODULE_0__["navMenuItemsTypes"])().CONTACT_US
        ];
    }
}
const appConfigs = new AppConfiguration();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app-container[_ngcontent-%COMP%]{\r\n    flex: 1;\r\n    background-color: var(--background-color-primary);\r\n    \r\n    padding-top: 10vh;\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n    .app-container[_ngcontent-%COMP%]{\r\n        padding-top: 0px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLGlEQUFpRDs7SUFFakQsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVye1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItcHJpbWFyeSk7XHJcbiAgICBcclxuICAgIHBhZGRpbmctdG9wOiAxMHZoO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC5hcHAtY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "TKFM":
/*!***********************************!*\
  !*** ./src/app/util/constants.ts ***!
  \***********************************/
/*! exports provided: formTypes, navMenuItemsTypes, paths, navMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formTypes", function() { return formTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navMenuItemsTypes", function() { return navMenuItemsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paths", function() { return paths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navMenuItems", function() { return navMenuItems; });
const formTypes = () => ({
    RECRUITMENT: "RECRUITMENT",
    EVENT: "EVENT"
});
const navMenuItemsTypes = () => ({
    HOME_PAGE: "HOMEPAGE",
    EVENTS: "EVENTS",
    FORM_SECTION: "FORM_SECTION",
    CONTACT_US: "CONTACT_US"
});
const paths = () => ({
    HOME_PAGE: "/",
    EVENTS: "/activities",
    FORM_SECTION: "/register",
    CONTACT_US: "/contact"
});
const navMenuItems = () => ({
    [navMenuItemsTypes().HOME_PAGE]: {
        path: paths().HOME_PAGE
    },
    [navMenuItemsTypes().EVENTS]: {
        path: paths().EVENTS
    },
    [navMenuItemsTypes().FORM_SECTION]: {
        path: paths().FORM_SECTION
    },
    [navMenuItemsTypes().CONTACT_US]: {
        path: paths().CONTACT_US
    },
});


/***/ }),

/***/ "XUNM":
/*!******************************************************************************!*\
  !*** ./src/app/skills-and-achievements/skills-and-achievements.component.ts ***!
  \******************************************************************************/
/*! exports provided: SkillsAndAchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsAndAchievementsComponent", function() { return SkillsAndAchievementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function SkillsAndAchievementsComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", icon_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", icon_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r1.name);
} }
const _c0 = function () { return ["/contact"]; };
const _c1 = function () { return ["/"]; };
class SkillsAndAchievementsComponent {
    constructor() {
        this.techIcons = [
            { path: "../../assets/MySQL.webp", name: "MySQL" },
            { path: "../../assets/mongodb.webp", name: "MongoDB" },
            { path: "../../assets/javascript.webp", name: "JavaScript" },
            { path: "../../assets/wordpress.webp", name: "Wordpress" },
            { path: "../../assets/Git.webp", name: "Git" },
            { path: "../../assets/expressjs.png", name: "Express" }
        ];
    }
    ngOnInit() {
    }
}
SkillsAndAchievementsComponent.ɵfac = function SkillsAndAchievementsComponent_Factory(t) { return new (t || SkillsAndAchievementsComponent)(); };
SkillsAndAchievementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsAndAchievementsComponent, selectors: [["app-skills-and-achievements"]], decls: 80, vars: 5, consts: [[1, "heading-container"], [1, "content-heading"], [1, "content-container"], [1, "subheading2"], [1, "chart"], [1, "chart-line", 2, "bottom", "0%"], [1, "chart-line", 2, "bottom", "25%"], [1, "chart-line", 2, "bottom", "50%"], [1, "chart-line", 2, "bottom", "75%"], [1, "chart-label", 2, "bottom", "25%"], [1, "chart-label", 2, "bottom", "50%"], [1, "chart-label", 2, "bottom", "75%"], [1, "skills"], [1, "skill"], ["src", "../../assets/android.webp", "alt", "", 1, "bar-col-icon", "icon-reveal"], [1, "chart-column-name"], [1, "skill-bar", 2, "height", "65%", "background-color", "#32de84"], ["src", "../../assets/nodejs.webp", "alt", "", 1, "bar-col-icon", "icon-reveal"], [1, "skill-bar", 2, "height", "50%", "background-color", "rgb(118, 187, 118)"], ["src", "../../assets/angular.png", "alt", "", 1, "bar-col-icon", "icon-reveal"], [1, "skill-bar", 2, "height", "56%", "background-color", "rgb(212, 80, 80)"], ["src", "../../assets/firebase.png", "alt", "", 1, "bar-col-icon", "icon-reveal"], [1, "skill-bar", 2, "height", "63%", "background-color", "orange"], ["src", "../../assets/kotlin.webp", "alt", "", 1, "bar-col-icon", "icon-reveal"], [1, "skill-bar", 2, "height", "68%", "background-color", "rgb(226, 121, 35)"], ["src", "../../assets/c.webp", "alt", "", 1, "bar-col-icon", "icon-reveal"], [1, "skill-bar", 2, "height", "52%", "background-color", "rgb(82, 72, 212)"], ["src", "../../assets/python.png", "alt", "", 1, "bar-col-icon", "icon-reveal"], [1, "skill-bar", 2, "height", "62%", "background-color", "rgb(230, 211, 38)"], ["src", "../../assets/typescript.webp", "alt", "", 1, "bar-col-icon", "icon-reveal"], [1, "skill-bar", 2, "height", "59%", "background-color", "rgb(54, 121, 197)"], [1, "technologies-grid"], ["class", "icon-container icon-reveal", 4, "ngFor", "ngForOf"], [1, "nav-button", "transition-background", 3, "routerLink"], [1, "icon-container", "icon-reveal"], [1, "technology-icon", 3, "src", "alt"], [1, "content", 2, "text-align", "center"]], template: function SkillsAndAchievementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skills...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Beg.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Int.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Exp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "NodeJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Firebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Beg.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Int.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Exp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Kotlin/Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "C/C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Other Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, SkillsAndAchievementsComponent_div_75_Template, 4, 3, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techIcons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".content-container[_ngcontent-%COMP%] {\r\n  padding: 0em 2.5em 8em 2.5em;\r\n}\r\n\r\n.skills[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 95%;\r\n  height: 100%;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.icon-reveal[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n@keyframes icon-reveal {\r\n  0% {\r\n    opacity: 0;\r\n    transform: perspective(20px);\r\n  }\r\n\r\n  40% {\r\n    opacity: 0.4;\r\n    transform: perspective(20px);\r\n  }\r\n  60% {\r\n    opacity: 0.6;\r\n    transform: perspective(20px);\r\n  }\r\n  75% {\r\n    opacity: 0.75;\r\n  }\r\n  90% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    \r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.chart[_ngcontent-%COMP%] {\r\n  margin-top: 8rem;\r\n  margin-bottom: 10rem;\r\n  width: 75%;\r\n  height: 42rem;\r\n  position: relative;\r\n}\r\n\r\n.bar-col-icon[_ngcontent-%COMP%] {\r\n  height: 5rem;\r\n  width: 5rem;\r\n  display: block;\r\n  margin: auto;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.chart-column-name[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1.7rem;\r\n  text-align: center;\r\n  color: var(--font-color);\r\n}\r\n\r\n.skill-bar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: -100%;\r\n  width: 100%;\r\n  animation: 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) 0s 1 normal forwards running graph-bar;\r\n}\r\n\r\n.skill[_ngcontent-%COMP%]:hover   .chart-column-name[_ngcontent-%COMP%]{\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.skill[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 0 8px 0px black;\r\n}\r\n\r\n@keyframes graph-bar {\r\n  100% {\r\n    bottom: 0;\r\n  }\r\n}\r\n\r\n.skill[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 17%;\r\n  display: inline-block;\r\n  margin: 0% 3%;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  padding-top: 2rem;\r\n  position: relative;\r\n}\r\n\r\n.chart-line[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: absolute;\r\n  z-index: 1;\r\n  height: 1px;\r\n  margin: 0;\r\n  border: 0;\r\n  background-color: var(--border-color);\r\n}\r\n\r\n.chart-label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 0;\r\n  color: orange;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.technologies-grid[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  gap: 4rem;\r\n  width: 75%;\r\n  margin-top: 6rem;\r\n  margin-bottom: 10rem;\r\n}\r\n\r\n.technology-icon[_ngcontent-%COMP%] {\r\n  height: 10rem;\r\n}\r\n\r\n.icon-container[_ngcontent-%COMP%] {\r\n  height: 10rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .chart[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n  }\r\n\r\n  .chart-label[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .technologies-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 4;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .chart[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .skill[_ngcontent-%COMP%] {\r\n    margin: 0% 4%;\r\n  }\r\n\r\n  .chart-label[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  .chart-column-name[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .chart-label[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .technologies-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 3;\r\n    width: 100%;\r\n  }\r\n\r\n  .bar-col-icon[_ngcontent-%COMP%] {\r\n    height: 4rem;\r\n    width: 4rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy1hbmQtYWNoaWV2ZW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBOztJQUVFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCx3RkFBd0Y7QUFDMUY7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztFQUNULHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic2tpbGxzLWFuZC1hY2hpZXZlbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMGVtIDIuNWVtIDhlbSAyLjVlbTtcclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5pY29uLXJldmVhbCB7XHJcbiAgLyogYW5pbWF0aW9uOiBpY29uLXJldmVhbCAwLjJzIGVhc2UgMC4xcyAxIGZvcndhcmRzOyAqL1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGljb24tcmV2ZWFsIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyMHB4KTtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDIwcHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyMHB4KTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIFxyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGFydCB7XHJcbiAgbWFyZ2luLXRvcDogOHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxuICB3aWR0aDogNzUlO1xyXG4gIGhlaWdodDogNDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFyLWNvbC1pY29uIHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jaGFydC1jb2x1bW4tbmFtZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5cclxuLnNraWxsLWJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYW5pbWF0aW9uOiAwLjRzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKSAwcyAxIG5vcm1hbCBmb3J3YXJkcyBydW5uaW5nIGdyYXBoLWJhcjtcclxufVxyXG5cclxuLnNraWxsOmhvdmVyIC5jaGFydC1jb2x1bW4tbmFtZXtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLnNraWxsOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgOHB4IDBweCBibGFjaztcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFwaC1iYXIge1xyXG4gIDEwMCUge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnNraWxsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDE3JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwJSAzJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2hhcnQtbGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uY2hhcnQtbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBjb2xvcjogb3JhbmdlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4udGVjaG5vbG9naWVzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBnYXA6IDRyZW07XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xyXG59XHJcblxyXG4udGVjaG5vbG9neS1pY29uIHtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG59XHJcblxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTByZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY2hhcnQge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcblxyXG4gIC5jaGFydC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAudGVjaG5vbG9naWVzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAuY2hhcnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2tpbGwge1xyXG4gICAgbWFyZ2luOiAwJSA0JTtcclxuICB9XHJcblxyXG4gIC5jaGFydC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcblxyXG4gIC5jaGFydC1jb2x1bW4tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY2hhcnQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnRlY2hub2xvZ2llcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmJhci1jb2wtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB3aWR0aDogNHJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Z2SW":
/*!***************************************!*\
  !*** ./src/app/models/event.model.ts ***!
  \***************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
class Event {
    constructor(title, organization, time, highlights, links, imagePath) {
        this.title = title;
        this.organization = organization;
        this.time = time;
        this.highlights = highlights;
        this.links = links;
        this.imagePath = imagePath;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _events_event_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/event/event.component */ "ZARJ");
/* harmony import */ var _skills_and_achievements_skills_and_achievements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills-and-achievements/skills-and-achievements.component */ "XUNM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _projects_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/project/project.component */ "u4ch");
/* harmony import */ var _projects_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/project-detail/project-detail.component */ "mn9K");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/events.component */ "5aow");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "nZZ6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_simple_section_simple_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/simple-section/simple-section.component */ "gvGx");
/* harmony import */ var _forms_registration_registration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forms/registration/registration.component */ "HEvl");
/* harmony import */ var _forms_recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forms/recruitment/recruitment.component */ "cTwl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
        _events_event_event_component__WEBPACK_IMPORTED_MODULE_6__["EventComponent"],
        _skills_and_achievements_skills_and_achievements_component__WEBPACK_IMPORTED_MODULE_7__["SkillsAndAchievementsComponent"],
        _projects_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
        _projects_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDetailComponent"],
        _events_events_component__WEBPACK_IMPORTED_MODULE_11__["EventsComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
        _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_13__["ContactMeComponent"],
        _shared_simple_section_simple_section_component__WEBPACK_IMPORTED_MODULE_16__["SimpleSectionComponent"],
        _forms_registration_registration_component__WEBPACK_IMPORTED_MODULE_17__["RegistrationComponent"],
        _forms_recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_18__["RecruitmentComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "ZARJ":
/*!*************************************************!*\
  !*** ./src/app/events/event/event.component.ts ***!
  \*************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var src_app_models_event_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/event.model */ "Z2SW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function EventComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const highlight_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](highlight_r2);
} }
function EventComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", link_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r3.title);
} }
class EventComponent {
    constructor() {
        this.event = new src_app_models_event_model__WEBPACK_IMPORTED_MODULE_0__["Event"]("", "", "", [], [], '');
    }
    ngOnInit() {
    }
}
EventComponent.ɵfac = function EventComponent_Factory(t) { return new (t || EventComponent)(); };
EventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EventComponent, selectors: [["app-event"]], inputs: { event: ["experience", "event"] }, decls: 13, vars: 6, consts: [[1, "event-container"], ["alt", "", 3, "src"], [1, "event-detail-container"], [1, "subheading2"], [1, "subheading3"], [1, "content"], [1, "list"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "horizontal-container", "links-container"], ["class", "btn transition-background", 3, "href", 4, "ngFor", "ngForOf"], [1, "btn", "transition-background", 3, "href"]], template: function EventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EventComponent_li_10_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EventComponent_a_12_Template, 2, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.event.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.event.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.event.organization);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.event.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.event.highlights);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.event.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".event-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 5rem;\r\n}\r\n\r\n.event-detail-container[_ngcontent-%COMP%]{\r\n    padding-left: 2rem;\r\n    padding-top: 2rem;\r\n    flex: 1;\r\n    flex-basis: 500px;\r\n    padding-right: 0.5rem;\r\n    padding-bottom: 2rem;\r\n    border-left: 5px solid var(--primary-color);\r\n    margin-bottom: 5rem;\r\n    border-top: 1px solid var(--border-color);\r\n    border-right: 1px solid var(--border-color);\r\n    border-bottom: 1px solid var(--border-color);\r\n    min-height: 300px;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    max-height: 300px ;\r\n    max-width: min(100%, 400px);\r\n    margin-bottom: 2rem;\r\n    border-radius: 15px;\r\n}\r\n\r\n@keyframes border-anim{\r\n    0%{\r\n        border-top: 0px solid var(--border-color);\r\n        border-right: 0px solid var(--border-color);\r\n        border-bottom: 0px solid var(--border-color);\r\n    }\r\n    \r\n    33%{\r\n        border-top: 1px solid var(--border-color);\r\n        border-right: 0px solid var(--border-color);\r\n        border-bottom: 0px solid var(--border-color);\r\n    }\r\n\r\n    66%{\r\n        border-top: 1px solid var(--border-color);\r\n        border-right: 1px solid var(--border-color);\r\n        border-bottom: 0px solid var(--border-color);\r\n    }\r\n    \r\n    100%{\r\n        border-top: 1px solid var(--border-color);\r\n        border-right: 1px solid var(--border-color);\r\n        border-bottom: 1px solid var(--border-color);    \r\n    }\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n    padding: 1rem 0.5rem;\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n    border: 1px solid var(--secondary-color);\r\n    color: var(--font-color);\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover{\r\n    background-color: var(--hover-level-1);\r\n    border: 1px solid var(--primary-color);\r\n}\r\n\r\n.links-container[_ngcontent-%COMP%]{\r\n    margin-top: 3rem;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .experience-container[_ngcontent-%COMP%]{\r\n        padding-left: 1.2rem;\r\n    }    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0MsNENBQTRDO0lBQzVDLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSx5Q0FBeUM7UUFDekMsMkNBQTJDO1FBQzNDLDRDQUE0QztJQUNoRDs7SUFFQTtRQUNJLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0MsNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0kseUNBQXlDO1FBQ3pDLDJDQUEyQztRQUMzQyw0Q0FBNEM7SUFDaEQ7O0lBRUE7UUFDSSx5Q0FBeUM7UUFDekMsMkNBQTJDO1FBQzNDLDRDQUE0QztJQUNoRDtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSiIsImZpbGUiOiJldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogNXJlbTtcclxufVxyXG5cclxuLmV2ZW50LWRldGFpbC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiA1MDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIGFuaW1hdGlvbjogYm9yZGVyLWFuaW0gMC45cyBlYXNlIDBzIDEgZm9yd2FyZHM7ICovXHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4IDtcclxuICAgIG1heC13aWR0aDogbWluKDEwMCUsIDQwMHB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvcmRlci1hbmlte1xyXG4gICAgMCV7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgMzMle1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgNjYle1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDEwMCV7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGV2ZWwtMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmxpbmtzLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuZXhwZXJpZW5jZS1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjJyZW07XHJcbiAgICB9ICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "aQTc":
/*!*******************************************!*\
  !*** ./src/app/AppConfigurationHelper.ts ***!
  \*******************************************/
/*! exports provided: AppConfigurationHelper, appConfigHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigurationHelper", function() { return AppConfigurationHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfigHelper", function() { return appConfigHelper; });
/* harmony import */ var _config_app_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/app-configuration */ "QwJw");
/* harmony import */ var _forms_recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/recruitment/recruitment.component */ "cTwl");
/* harmony import */ var _forms_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/registration/registration.component */ "HEvl");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/constants */ "TKFM");




class AppConfigurationHelper {
    //methods
    getFormRoute() {
        if (_config_app_configuration__WEBPACK_IMPORTED_MODULE_0__["appConfigs"].activeFormType == Object(_util_constants__WEBPACK_IMPORTED_MODULE_3__["formTypes"])().RECRUITMENT)
            return { path: 'register', component: _forms_recruitment_recruitment_component__WEBPACK_IMPORTED_MODULE_1__["RecruitmentComponent"] };
        else
            return { path: 'register', component: _forms_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] };
    }
    getMenuItem(menuItemType) {
        if (menuItemType === Object(_util_constants__WEBPACK_IMPORTED_MODULE_3__["navMenuItemsTypes"])().HOME_PAGE) {
        }
    }
}
const appConfigHelper = new AppConfigurationHelper();


/***/ }),

/***/ "axnY":
/*!*******************************************!*\
  !*** ./src/app/data/home-page.service.ts ***!
  \*******************************************/
/*! exports provided: HomePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageService", function() { return HomePageService; });
/* harmony import */ var _models_SimpleSection_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/SimpleSection.model */ "oFZI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomePageService {
    constructor() {
        this.initials = 'RRC';
        this.name = "RGIT's";
        this.surname = 'Robotics Club';
        this.tagline = "The Official Robotics Club of MCT's Rajiv Gandhi Institute of Technology";
        this.email = 'mailto:rgitsroboticsclub@gmail.com';
        this.linkedIn = 'https://www.linkedin.com/company/rgitsroboticsclub/';
        this.instagram = 'https://www.instagram.com/roboticsclubrgit/';
        this.brochure = 'https://drive.google.com/file/d/1ifZ1__nMWhbJyg-ZS53I_wKpCsLsPMAQ/view?usp=sharing';
        this.simpleSection = [
            new _models_SimpleSection_model__WEBPACK_IMPORTED_MODULE_0__["SimpleSection"](
            //title
            'What We Do ', 
            //description
            [
                `We at RGlT's Robotics Club acquaints students of our institute with the current trends of Robotics and Automation in the Industry by providing sufficient practical exposure and opportunities in the form of workshops, internships, free training sessions and competitions which will enhance their knowledge along with developing technical as well as soft skills. 
       `,
                `Besides making an earnest endeavour to spread knowledge on Robotics and its diverse applications, the club also displays teamsmanship in high-pressure situations and inculcates in our member’s qualities necessary for working successfully as a team. 
       `,
                `The club provides numerous opportunities for personal growth including publishing technical papers, teaching in workshops and seminars and imparts leadership skills.`,
            ]),
        ];
    }
}
HomePageService.ɵfac = function HomePageService_Factory(t) { return new (t || HomePageService)(); };
HomePageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HomePageService, factory: HomePageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cTwl":
/*!************************************************************!*\
  !*** ./src/app/forms/recruitment/recruitment.component.ts ***!
  \************************************************************/
/*! exports provided: RecruitmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitmentComponent", function() { return RecruitmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_forms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/forms.service */ "r4lr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function RecruitmentComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stream_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", stream_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stream_r9.name);
} }
function RecruitmentComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const yos_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", yos_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](yos_r10.name);
} }
function RecruitmentComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const domain_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", domain_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](domain_r11.name);
} }
function RecruitmentComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const domain_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", domain_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](domain_r12.name);
} }
function RecruitmentComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const domain_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", domain_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](domain_r13.name);
} }
function RecruitmentComponent_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Thanks for registering, you'll be notified about your interview timings! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecruitmentComponent_p_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There was an error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecruitmentComponent_p_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecruitmentComponent_p_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please fill all the fields properly ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/activities"]; };
class RecruitmentComponent {
    constructor(formsService, http) {
        this.formsService = formsService;
        this.http = http;
        this.success = 'success';
        this.failure = 'failure';
        this.notTried = 'not tried';
        this.loading = 'loading';
        this.invalid = 'invalid';
        this.status = 'initial';
    }
    ngOnInit() {
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
                .post(this.formsService.recruitmentMacroLink, JSON.stringify(this.recruitmentForm.value), {
                headers: {
                    'Content-Type': 'text/plain',
                },
            })
                .subscribe((response) => {
                if (response.result == 'success')
                    this.status = this.success;
                else
                    this.status = this.failure;
            });
        }
        else {
            this.status = this.invalid;
        }
    }
}
RecruitmentComponent.ɵfac = function RecruitmentComponent_Factory(t) { return new (t || RecruitmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_forms_service__WEBPACK_IMPORTED_MODULE_1__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RecruitmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecruitmentComponent, selectors: [["app-form-section"]], decls: 79, vars: 17, consts: [[1, "content-container"], [1, "heading-container"], [1, "content-heading"], [1, "form-box"], [1, "content"], [3, "formGroup", "ngSubmit"], ["id", "name", "type", "text", "formControlName", "firstName", "placeholder", "First Name", 1, "input", "col", 2, "margin-right", "2%"], ["id", "surname", "formControlName", "lastName", "type", "text", "placeholder", "Last Name", 1, "input", "col"], ["id", "phoneNumber", "type", "text", "formControlName", "phoneNumber", "placeholder", "Phone Number", 1, "input"], ["id", "emailId", "formControlName", "emailID", "type", "email", "placeholder", "Email Id", 1, "input"], ["for", "stream-inp"], ["id", "stream-inp", "formControlName", "stream", 1, "input"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "yos-inp"], ["id", "yos-inp", "formControlName", "yearOfStudy", 1, "input"], ["for", "fp-inp"], ["id", "fp-inp", "formControlName", "firstPreference", 1, "input"], ["for", "sp-inp"], ["id", "sp-inp", "formControlName", "secondPreference", 1, "input"], ["for", "tp-inp"], ["id", "tp-inp", "formControlName", "thirdPreference", 1, "input"], ["id", "submit", "type", "submit", 1, "button"], ["class", "content", "class", "content status-message", "id", "success-msg", 4, "ngIf"], ["class", "content", "class", "content status-message", "id", "failure-msg", 4, "ngIf"], ["class", "content", "class", "content status-message", "id", "loading-msg", 4, "ngIf"], ["href", "https://chat.whatsapp.com/ILH15myABtKGv8SWEcRd8E", 1, "content", "link"], [1, "nav-button", "transition-background", 3, "routerLink"], [3, "value"], ["id", "success-msg", 1, "content", "status-message"], ["id", "failure-msg", 1, "content", "status-message"], ["id", "loading-msg", 1, "content", "status-message"]], template: function RecruitmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recruitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We are recruiting, grab yourself an opportunity to practically explore engineering! Join our team now! Fill out the below details to participate in our recruitment drive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RecruitmentComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RecruitmentComponent_option_20_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Year of Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Year of Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RecruitmentComponent_option_28_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "First Preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "First Preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RecruitmentComponent_option_36_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Second Preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Second Preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RecruitmentComponent_option_44_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Third Preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Third Preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, RecruitmentComponent_option_52_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, RecruitmentComponent_p_55_Template, 2, 0, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, RecruitmentComponent_p_56_Template, 2, 0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RecruitmentComponent_p_57_Template, 2, 0, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, RecruitmentComponent_p_58_Template, 2, 0, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "To further stay updated, join our whatsapp group specific for recruitment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Contact us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Vaishnavi Wagh: 8104772043");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Swagat Das: 7718861983");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.recruitmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.streams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yearOfStudy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.domains);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.domains);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.domains);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.failure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".content-container[_ngcontent-%COMP%]{\r\n    padding: 0rem var(--content-padding);\r\n    box-sizing: border-box;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n    background-color: var(--background-color-primary);\r\n    color: var(--font-color);\r\n    font-family: var(--font-style);\r\n    font-size: 1.5rem;\r\n    outline: none;\r\n    width: 8rem;\r\n    margin-right:auto;\r\n    display: block;\r\n    border: 2px solid var(--primary-color);\r\n    transition: border 300ms ease-out;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:disabled{\r\n    border: 1px solid gray;\r\n    background-color: gray;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.status-message[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin-top: 3rem;\r\n    text-align: left;\r\n    color: white;\r\n    border-radius: 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n#success-msg[_ngcontent-%COMP%]{\r\n    background-color: green;\r\n}\r\n\r\n#failure-msg[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n}\r\n\r\n#invalid-msg[_ngcontent-%COMP%]{\r\n    background-color: rgb(231, 131, 131);\r\n}\r\n\r\n#loading-msg[_ngcontent-%COMP%]{\r\n    background-color: rgba(128, 128, 128, 0.808);\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    flex: 1;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    margin: 1rem 0rem;\r\n    padding: 1rem;\r\n    font-size: 1.5rem;\r\n    background-color: var(--background-secondary);\r\n    color: var(--font-color);\r\n    font-family: var(--font-style);\r\n    outline: none;\r\n    border: 1px solid var(--border-color);\r\n    transition: border 300ms ease-out;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n  }\r\n\r\nselect[_ngcontent-%COMP%]    > option[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n    background-color: #252525;\r\n    color: var(--font-color);\r\n    font-family: var(--font-style);\r\n    white-space: nowrap;\r\n    min-height: 1.2em;\r\n    padding: 10px 2px 20px;\r\n  }\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    color: var(--secondary-color);\r\n    font-size: 1.2rem;\r\n}\r\n\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n    border: 1px solid red;\r\n}\r\n\r\ntextarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n    border: 1px solid red;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n    width: 49%;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n    color: var(--primary-color);\r\n    text-decoration: none;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n    border: 1px solid var(--secondary-color);\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]:focus{\r\n    border: 1px solid var(--secondary-color);\r\n\r\n}\r\n\r\n.form-box[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    position: relative;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n    .form-box[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .form-box[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n\r\n    .button[_ngcontent-%COMP%]{\r\n        margin-left: auto;\r\n        margin-right: 0;\r\n    }\r\n\r\n    .status-message[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n\r\n    .content-container[_ngcontent-%COMP%]{\r\n        padding: 0em 1.5rem 5em 1.5em;        \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3J1aXRtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlEQUFpRDtJQUNqRCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsc0NBQXNDO0lBQ3RDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLE9BQU87SUFDUCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDZDQUE2QztJQUM3Qyx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNkJBQTZCO0VBQy9COztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsc0JBQXNCO0VBQ3hCOztBQUVGO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3Q0FBd0M7O0FBRTVDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKIiwiZmlsZSI6InJlY3J1aXRtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwcmVtIHZhcigtLWNvbnRlbnQtcGFkZGluZyk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdHlsZSk7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlciAzMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmJ1dHRvbjpkaXNhYmxlZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuXHJcbi5zdGF0dXMtbWVzc2FnZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuI3N1Y2Nlc3MtbXNne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbiNmYWlsdXJlLW1zZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuI2ludmFsaWQtbXNne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMTMxLCAxMzEpO1xyXG59XHJcblxyXG4jbG9hZGluZy1tc2d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuODA4KTtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMzAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0ID4gb3B0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0eWxlKTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiAxLjJlbTtcclxuICAgIHBhZGRpbmc6IDEwcHggMnB4IDIwcHg7XHJcbiAgfVxyXG5cclxubGFiZWx7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcblxyXG4uY29se1xyXG4gICAgd2lkdGg6IDQ5JTtcclxufVxyXG5cclxuLmxpbmt7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5pbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3Vze1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbn1cclxuXHJcbi5mb3JtLWJveHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC5mb3JtLWJveHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmZvcm0tYm94e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0dXMtbWVzc2FnZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDBlbSAxLjVyZW0gNWVtIDEuNWVtOyAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "gvGx":
/*!*******************************************************************!*\
  !*** ./src/app/shared/simple-section/simple-section.component.ts ***!
  \*******************************************************************/
/*! exports provided: SimpleSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSectionComponent", function() { return SimpleSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/projects"]; };
class SimpleSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
SimpleSectionComponent.ɵfac = function SimpleSectionComponent_Factory(t) { return new (t || SimpleSectionComponent)(); };
SimpleSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleSectionComponent, selectors: [["app-simple-section"]], decls: 19, vars: 2, consts: [[1, "content-padding"], [1, "subheading2"], [1, "two-columns"], [1, "col-1"], [1, "content"], [1, "nav-button", "transition-background", 3, "routerLink"]], template: function SimpleSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "What do I do?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I like developing new projects and exploring new technologies. I have a passion for good UI experience. I have explored and developed projects on Android Platform as well as web frameworks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " I am fluent in various object oriented programming languages like Java, Python, Kotlin yet constantly exploring them more. Apart from that I've been exploring competitive programming with the help of Data Structures and Algorithms, solving more and more problems with C/C++. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " I have released an Android Application on Google Play Store and have developed several applications as learning challenges in Java, Python and Kotlin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "j53p":
/*!******************************************!*\
  !*** ./src/app/data/projects.service.ts ***!
  \******************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project.model */ "O3o7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjectsService {
    constructor() {
        this.pageName = "Achievements";
        this.projects = [
            new _models_project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]("Attendance Organizer", "An intuitive attendance manager Android application for university students which gives insightful tips to 'organize' attendance.", { path: "../../assets/ao.png", desc: "Attendance Organizer logo" }, [{ path: "../../assets/java.webp", desc: "Java Programming Language" }], "https://play.google.com/store/apps/details?id=com.abhishekjagushte.attendanceorganizer&hl=en&gl=US"),
            new _models_project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]("Engage Chat Application", "A chat application built for Android employing the latest MVVM architechture and all the new Android Jetpack libraries.", { path: "../../assets/chat.png", desc: "Engage Chat Application Logo" }, [{ path: "../../assets/kotlin.webp", desc: "Kotlin Programming Language" },
                { path: "../../assets/firebase.png", desc: "Google Firebase" }], "https://github.com/abhishekjagushte/Engage"),
            new _models_project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]("Piction Photo Editor", "A lightweight python image editor application that allows most of the common image editing options with minimal complexity.", { path: "../../assets/taylor.jpg", desc: "Screenshot of Piction Photo Editor" }, [{ path: "../../assets/python.png", desc: "Python Programming Language" },
                { path: "../../assets/opencv.png", desc: "OpenCV Image Processing on Python" }], "https://github.com/abhishekjagushte/Piction-Photo-Editor"),
            new _models_project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]("Website for RGIT's Robotics Club", "The official website of RGIT's Robotics Club. This website is used to notify & register students for the events conducted by RRC.", { path: "../../assets/robotics.png", desc: "RGIT's Robotics Club Logo" }, [{ path: "../../assets/wordpress.webp", desc: "Wordpress" }], "https://www.rgitsroboticsclub.com/")
        ];
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_home_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/home-page.service */ "axnY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function () { return ["/"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return ["/register"]; };
const _c3 = function () { return ["/activities"]; };
const _c4 = function () { return ["/contact"]; };
function NavigationComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_0_Template_li_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.destinationChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_0_Template_li_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.destinationChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recruitment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_0_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.destinationChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Activities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_0_Template_li_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.destinationChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.initials);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.linkedIn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavigationComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function NavigationComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.hamburgerMenuClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.hamburgerMenuClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationComponent {
    constructor(aboutData, homePageService) {
        this.aboutData = aboutData;
        this.homePageService = homePageService;
        this.menuExpanded = false;
        this.email = "mailto:rgitsroboticsclub@gmail.com";
        this.linkedIn = "https://www.linkedin.com/in/abhishekjagushte/";
        this.instagram = "https://www.instagram.com/abhishekjagushte/";
        this.brochure = "https://drive.google.com/file/d/1ifZ1__nMWhbJyg-ZS53I_wKpCsLsPMAQ/view?usp=sharing";
        this.email = this.homePageService.email;
        this.instagram = this.homePageService.instagram;
        this.linkedIn = this.homePageService.linkedIn;
        this.brochure = this.homePageService.brochure;
    }
    ngOnInit() {
        this.initials = this.aboutData.initials;
        this.name = this.aboutData.name;
        this.surname = this.aboutData.surname;
    }
    hamburgerMenuClicked() {
        this.menuExpanded = !this.menuExpanded;
    }
    destinationChanged() {
        this.menuExpanded = false;
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_home_page_service__WEBPACK_IMPORTED_MODULE_1__["HomePageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_home_page_service__WEBPACK_IMPORTED_MODULE_1__["HomePageService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 18, vars: 17, consts: [["navContainer", ""], [1, "desktop-nav-container"], [1, "logo-container-desktop", 2, "text-decoration", "none", 3, "routerLink"], [1, "nav-logo"], [1, "nav-menu-desktop"], ["routerLinkActive", "active", 1, "nav-menu-item-desktop", "transition-background", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "nav-menu-item-desktop", "transition-background", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-menu-item-desktop", "transition-background", 3, "routerLink", "click"], [4, "ngIf", "ngIfElse"], ["class", "hamburger-menu", 3, "click", 4, "ngIf"], [1, "nav-container"], [2, "text-decoration", "none", 3, "routerLink"], [1, "logo-container"], [1, "nav-logo-tagline", 2, "color", "var(--primary-color)"], [1, "nav-logo-tagline", 2, "color", "var(--secondary-color)"], [1, "nav-menu"], ["routerLinkActive", "active", 1, "nav-menu-item", 3, "routerLink", "routerLinkActiveOptions", "click"], ["routerLinkActive", "active", 1, "nav-menu-item", 3, "routerLink", "click"], [1, "social-icons-container"], [1, "link-icon", 3, "href"], ["src", "../../assets/mail.svg", "alt", "Click here to email me", 1, "profile-icon"], ["target", "_blank", 1, "link-icon", 3, "href"], ["src", "../../assets/linkedin.svg", "alt", "Click here to visit my LinkedIn page", 1, "profile-icon"], ["src", "../../assets/instagram.svg", "alt", "Click here to visit my Instagram handle", 1, "profile-icon"], [1, "hamburger-menu", 3, "click"], ["src", "../../assets/menu.svg", "alt", ""], ["src", "../../assets/close.svg", "alt", ""]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavigationComponent_ng_template_0_Template, 25, 18, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recruitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_li_click_13_listener() { return ctx.destinationChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavigationComponent_div_15_Template, 1, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavigationComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavigationComponent_div_17_Template, 2, 0, "div", 9);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.initials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.menuExpanded)("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.menuExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuExpanded);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".desktop-nav-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  position: fixed;\r\n  top: 0;\r\n  padding: 0rem var(--content-padding);\r\n  width: 100%;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-style: var(--font-style);\r\n  height: 10vh;\r\n  z-index: 3;\r\n  box-shadow: 0 0 15px 0px #000;\r\n  background-color: var(--background-color-dark);\r\n}\r\n\r\n.logo-container-desktop[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo-container-desktop[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%] {\r\n  height: 12rem;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.nav-logo[_ngcontent-%COMP%] {\r\n  font-size: 5rem;\r\n  text-align: center;\r\n  color: var(--font-color);\r\n  text-shadow: 6px 6px var(--primary-color), 8px 8px var(--secondary-color);\r\n}\r\n\r\n.nav-logo-tagline[_ngcontent-%COMP%] {\r\n  color: var(--font-color);\r\n  text-align: center;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.social-icons-container[_ngcontent-%COMP%] {\r\n  margin-top: 5rem;\r\n  margin-bottom: 3rem;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1.5rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.nav-menu[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 30px;\r\n  margin-bottom: 4rem;\r\n  align-items: center;\r\n}\r\n\r\n.nav-menu-desktop[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.nav-menu-item-desktop[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: auto;\r\n  color: var(--primary-color);\r\n  padding: 0rem 3rem;\r\n  font-size: 1.6rem;\r\n  opacity: 1;\r\n  vertical-align: middle;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-menu-item[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  display: block;\r\n  text-align: center;\r\n  color: var(--primary-color);\r\n  padding: 6px 0px 6px 0px;\r\n  font-size: 1.6rem;\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  background-color: var(--hover-level-1);\r\n}\r\n\r\n.nav-menu-item[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--hover-level-2);\r\n}\r\n\r\n.hamburger-menu[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  right: 2.5em;\r\n  top: 2.5em;\r\n  filter: invert(90%) sepia(69%) saturate(5880%) hue-rotate(90deg)\r\n    brightness(96%) contrast(108%);\r\n  display: none;\r\n  z-index: 10;\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n  .nav-container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: fixed;\r\n    top: -100%;\r\n    width: 100vw;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: -webkit-max-content;\r\n    height: max-content;\r\n    z-index: 2;\r\n    padding-top: 6em;\r\n    box-shadow: 0 0 15px 0px #000;\r\n    background-color: var(--background-color-tertiary);\r\n    opacity: 1;\r\n    animation: nav-menu 0.4s ease-out 0s 1 forwards;\r\n  }\r\n\r\n  @keyframes nav-menu {\r\n    100% {\r\n      top: 0;\r\n    }\r\n  }\r\n\r\n  .nav-menu-item[_ngcontent-%COMP%] {\r\n    font-size: 2.4em;\r\n    line-height: 1.5;\r\n  }\r\n\r\n  .nav-menu[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n  }\r\n\r\n  .hamburger-menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  .desktop-nav-container[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLE1BQU07RUFDTixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osVUFBVTtFQUNWLDZCQUE2QjtFQUM3Qiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVjtrQ0FDZ0M7RUFDaEMsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isa0RBQWtEO0lBQ2xELFVBQVU7SUFDViwrQ0FBK0M7RUFDakQ7O0VBRUE7SUFDRTtNQUNFLE1BQU07SUFDUjtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVza3RvcC1uYXYtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiAwcmVtIHZhcigtLWNvbnRlbnQtcGFkZGluZyk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiB2YXIoLS1mb250LXN0eWxlKTtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgei1pbmRleDogMztcclxuICBib3gtc2hhZG93OiAwIDAgMTVweCAwcHggIzAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4ubG9nby1jb250YWluZXItZGVza3RvcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVyLWRlc2t0b3AgaDEge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4ubmF2LWxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHRleHQtc2hhZG93OiA2cHggNnB4IHZhcigtLXByaW1hcnktY29sb3IpLCA4cHggOHB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi5uYXYtbG9nby10YWdsaW5lIHtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcblxyXG4uc29jaWFsLWljb25zLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXYtbWVudSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtbWVudS1kZXNrdG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2LW1lbnUtaXRlbS1kZXNrdG9wIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgcGFkZGluZzogMHJlbSAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdi1tZW51LWl0ZW0ge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBwYWRkaW5nOiA2cHggMHB4IDZweCAwcHg7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgb3BhY2l0eTogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxldmVsLTEpO1xyXG59XHJcbi5uYXYtbWVudS1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1sZXZlbC0yKTtcclxufVxyXG5cclxuLmhhbWJ1cmdlci1tZW51IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDIuNWVtO1xyXG4gIHRvcDogMi41ZW07XHJcbiAgZmlsdGVyOiBpbnZlcnQoOTAlKSBzZXBpYSg2OSUpIHNhdHVyYXRlKDU4ODAlKSBodWUtcm90YXRlKDkwZGVnKVxyXG4gICAgYnJpZ2h0bmVzcyg5NiUpIGNvbnRyYXN0KDEwOCUpO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5uYXYtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAtMTAwJTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBhZGRpbmctdG9wOiA2ZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAwcHggIzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdGVydGlhcnkpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbjogbmF2LW1lbnUgMC40cyBlYXNlLW91dCAwcyAxIGZvcndhcmRzO1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBuYXYtbWVudSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdi1tZW51LWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAyLjRlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG5cclxuICAubmF2LW1lbnUge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhhbWJ1cmdlci1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmRlc2t0b3AtbmF2LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "mn9K":
/*!*********************************************************************!*\
  !*** ./src/app/projects/project-detail/project-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProjectDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectDetailComponent.ɵfac = function ProjectDetailComponent_Factory(t) { return new (t || ProjectDetailComponent)(); };
ProjectDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDetailComponent, selectors: [["app-project-detail"]], decls: 2, vars: 0, template: function ProjectDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "project-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "nZZ6":
/*!****************************************************!*\
  !*** ./src/app/contact-me/contact-me.component.ts ***!
  \****************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _data_home_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/home-page.service */ "axnY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function ContactMeComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thanks for your message, We will reach you out soon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactMeComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There was an error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactMeComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/"]; };
class ContactMeComponent {
    constructor(http, homePageService) {
        this.http = http;
        this.homePageService = homePageService;
        this.success = "success";
        this.failure = "failure";
        this.notTried = "not tried";
        this.loading = "loading";
        this.status = this.notTried;
        this.contact = {
            name: "",
            surname: "",
            email: "",
            message: ""
        };
    }
    ngOnInit() {
        this.email = `mailto:${this.homePageService.email}`;
    }
    submitClicked(form) {
        var headers = new Headers();
        headers.append("Access-Control-Allow-Origin", "*");
        this.status = this.loading;
        this.http.post("https://script.google.com/macros/s/AKfycby-AmBgD2FIeG2nzjAgiSxB6rqRO3OGLjrOBLzONghHR4noRrqNirCsRK39YRFkA_g/exec", JSON.stringify(this.contact), {
            headers: {
                "Content-Type": "application/json"
            }
        }).subscribe((response) => {
            if (response.result == "success")
                this.status = this.success;
            else
                this.status = this.failure;
        });
    }
}
ContactMeComponent.ɵfac = function ContactMeComponent_Factory(t) { return new (t || ContactMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_home_page_service__WEBPACK_IMPORTED_MODULE_2__["HomePageService"])); };
ContactMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactMeComponent, selectors: [["app-contact-me"]], decls: 28, vars: 11, consts: [[1, "content-container"], [1, "heading-container"], [1, "content-heading"], [1, "form-box"], [1, "content"], [3, "ngSubmit"], ["f", "ngForm"], ["type", "hidden", "name", "form-name", "value", "contact-form"], ["id", "name", "name", "name", "type", "text", "placeholder", "First Name", "required", "", 1, "input", "col", 2, "margin-right", "2%", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["id", "surname", "name", "surname", "type", "text", "placeholder", "Last Name", "required", "", 1, "input", "col", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email", "required", "", "email", "", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "message", "id", "message", "cols", "30", "rows", "10", "placeholder", "Message", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["id", "submit", "type", "submit", 1, "button", 3, "disabled"], ["class", "content", "class", "content status-message", "id", "success-msg", 4, "ngIf"], ["class", "content", "class", "content status-message", "id", "failure-msg", 4, "ngIf"], ["class", "content", "class", "content status-message", "id", "loading-msg", 4, "ngIf"], [1, "content", "link", 3, "href"], [1, "nav-button", "transition-background", 3, "routerLink"], ["id", "success-msg", 1, "content", "status-message"], ["id", "failure-msg", 1, "content", "status-message"], ["id", "loading-msg", 1, "content", "status-message"]], template: function ContactMeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Like our work? Well you can reach us out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactMeComponent_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.submitClicked(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactMeComponent_Template_input_ngModelChange_11_listener($event) { return ctx.contact.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactMeComponent_Template_input_ngModelChange_13_listener($event) { return ctx.contact.surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactMeComponent_Template_input_ngModelChange_14_listener($event) { return ctx.contact.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactMeComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.contact.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactMeComponent_p_18_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactMeComponent_p_19_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactMeComponent_p_20_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Not a fan of forms? You can also ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " us or reach us out on any of our social media handles!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Home\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.failure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".content-container[_ngcontent-%COMP%]{\r\n    padding: 0rem var(--content-padding);    \r\n    box-sizing: border-box;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n    background-color: var(--background-color-primary);\r\n    color: var(--font-color);\r\n    font-family: var(--font-style);\r\n    font-size: 1.5rem;\r\n    outline: none;\r\n    width: 8rem;\r\n    margin-right:auto;\r\n    display: block;\r\n    border: 2px solid var(--primary-color);\r\n    transition: border 300ms ease-out;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:disabled{\r\n    border: 1px solid gray;\r\n    background-color: gray;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.status-message[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin-top: 3rem;\r\n    text-align: left;\r\n    color: white;\r\n    border-radius: 1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n#success-msg[_ngcontent-%COMP%]{\r\n    background-color: green;\r\n}\r\n\r\n#failure-msg[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n}\r\n\r\n#loading-msg[_ngcontent-%COMP%]{\r\n    background-color: rgba(128, 128, 128, 0.808);\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    flex: 1;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    margin: 1rem 0rem;\r\n    padding: 1rem;\r\n    font-size: 1.5rem;\r\n    background-color: var(--background-secondary);\r\n    color: var(--font-color);\r\n    font-family: var(--font-style);\r\n    outline: none;\r\n    border: 1px solid var(--border-color);\r\n    transition: border 300ms ease-out;\r\n}\r\n\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n    border: 1px solid red;\r\n}\r\n\r\ntextarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n    border: 1px solid red;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n    width: 49%;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n    color: var(--primary-color);\r\n    text-decoration: none;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n    border: 1px solid var(--secondary-color);\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]:focus{\r\n    border: 1px solid var(--secondary-color);\r\n\r\n}\r\n\r\n.form-box[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    position: relative;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n@media screen and (max-width: 1300px) {\r\n    .form-box[_ngcontent-%COMP%]{\r\n        width: 75%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .form-box[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n\r\n    .button[_ngcontent-%COMP%]{\r\n        margin-left: auto;\r\n        margin-right: 0;\r\n    }\r\n\r\n    .status-message[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n\r\n    .content-container[_ngcontent-%COMP%]{\r\n        padding: 0em 1.5rem 5em 1.5em;        \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaURBQWlEO0lBQ2pELHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsT0FBTztJQUNQLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNkNBQTZDO0lBQzdDLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksd0NBQXdDOztBQUU1Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7QUFDSiIsImZpbGUiOiJjb250YWN0LW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwcmVtIHZhcigtLWNvbnRlbnQtcGFkZGluZyk7ICAgIFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMzAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5idXR0b246ZGlzYWJsZWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcblxyXG4uc3RhdHVzLW1lc3NhZ2V7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbiNzdWNjZXNzLW1zZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4jZmFpbHVyZS1tc2d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4jbG9hZGluZy1tc2d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuODA4KTtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3R5bGUpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMzAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG5cclxuLmNvbHtcclxuICAgIHdpZHRoOiA0OSU7XHJcbn1cclxuXHJcbi5saW5re1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1c3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG59XHJcblxyXG4uZm9ybS1ib3h7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuZm9ybS1ib3h7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5mb3JtLWJveHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdHVzLW1lc3NhZ2V7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiAwZW0gMS41cmVtIDVlbSAxLjVlbTsgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "oFZI":
/*!***********************************************!*\
  !*** ./src/app/models/SimpleSection.model.ts ***!
  \***********************************************/
/*! exports provided: SimpleSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSection", function() { return SimpleSection; });
class SimpleSection {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}


/***/ }),

/***/ "r4lr":
/*!***************************************!*\
  !*** ./src/app/data/forms.service.ts ***!
  \***************************************/
/*! exports provided: FormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return FormsService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_FormValidators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/FormValidators */ "1UYb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class FormsService {
    constructor() {
        this.recruitmentMacroLink = "https://script.google.com/macros/s/AKfycbwziX8APMiiQWSsToxhwZdOdS-J5ACntnHPk-vc3N7gkhinCpWA5gckvGR-uTpCFRfZvQ/exec";
        this.recruitmentInputs = {
            streams: [
                { name: 'Mechanical Engineering', id: 'MECH' },
                { name: 'EXTC Engineering', id: 'EXTC' },
                { name: 'Computer Engineering', id: 'COMPS' },
                { name: 'Machine Learning', id: 'ML' },
                { name: 'Information Technology', id: 'IT' },
                { name: 'Instrumentation', id: 'INST' },
            ],
            yearOfStudy: [
                { name: 'First Year', id: 'FE' },
                { name: 'Second Year', id: 'SE' },
                { name: 'Third Year', id: 'TE' },
                { name: 'Fourth Year', id: 'BE' }
            ],
            domains: [
                { name: "Simulation & Analysis" },
                { name: "Design & Manufacturing" },
                { name: "Programming" },
                { name: "Electronics" },
                { name: "Marketing" },
                { name: "Web Design" }
            ]
        };
        this.recruitmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'emailID': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'phoneNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'yearOfStudy': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](-1, _shared_FormValidators__WEBPACK_IMPORTED_MODULE_1__["formValidators"].checkIfNotSelected),
            'stream': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](-1, _shared_FormValidators__WEBPACK_IMPORTED_MODULE_1__["formValidators"].checkIfNotSelected),
            'firstPreference': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](-1, _shared_FormValidators__WEBPACK_IMPORTED_MODULE_1__["formValidators"].checkIfNotSelected),
            'secondPreference': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](-1, _shared_FormValidators__WEBPACK_IMPORTED_MODULE_1__["formValidators"].checkIfNotSelected),
            'thirdPreference': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](-1, _shared_FormValidators__WEBPACK_IMPORTED_MODULE_1__["formValidators"].checkIfNotSelected),
        });
        this.registrationMacroLink = "https://script.google.com/macros/s/AKfycbx3fnVfogUVbx4gKn2uddJeeH5lflweEaY7ACEtOxSj2ceoasbYOXgVQIZ35PxhuU0/exec";
        this.registrationPageTitle = "Register";
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            'emailID': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            'phoneNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            'yearOfStudy': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](-1, _shared_FormValidators__WEBPACK_IMPORTED_MODULE_1__["formValidators"].checkIfNotSelected),
            'college': new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
}
FormsService.ɵfac = function FormsService_Factory(t) { return new (t || FormsService)(); };
FormsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FormsService, factory: FormsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/"]; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 8, vars: 2, consts: [[1, "heading-container"], [1, "content-heading"], [1, "content-container"], [1, "content"], [1, "nav-button", 2, "display", "inline", 3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Doesn't look like anything to me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".content-container[_ngcontent-%COMP%]{\r\n    padding: 0em 3em 5em 3em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDBlbSAzZW0gNWVtIDNlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "u4ch":
/*!*******************************************************!*\
  !*** ./src/app/projects/project/project.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var src_app_models_project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/project.model */ "O3o7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProjectComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", icon_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", icon_r1.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](icon_r1.desc);
} }
class ProjectComponent {
    constructor() {
        this.project = new src_app_models_project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]('', '', { path: "", desc: "" }, [], "");
    }
    ngOnInit() {
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], inputs: { project: "project" }, decls: 12, vars: 4, consts: [[1, "rounded-box", "transition-background"], ["target", "_blank", 3, "href"], [1, "two-columns"], [1, "project-card-col-1"], [1, "subheading2", "rounded-box-title"], [1, "col-1", "content"], [1, "subheading3", "rounded-box-heading"], [1, "horizontal-container"], ["class", "tooltip", 4, "ngFor", "ngForOf"], [1, "tooltip"], [1, "tech-stack-icon", 3, "src", "alt"], [1, "tooltiptext"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Tech Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectComponent_div_11_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.project.projectLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.project.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.project.techStack);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".rounded-box[_ngcontent-%COMP%]{\r\n    border-radius: 1rem;\r\n    background-color: var(--background-color-secondary);\r\n    padding: 3rem 1.7rem;\r\n    padding-right: 1.2rem;\r\n    min-height: 13rem;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 0 60px 0px #0d0d0d;\r\n}\r\n\r\n.rounded-box[_ngcontent-%COMP%]:hover{\r\n    background-color: var(--hover-level-0);\r\n    \r\n    cursor: pointer;\r\n}\r\n\r\n.rounded-box-title[_ngcontent-%COMP%]{\r\n    padding-bottom: 1rem;\r\n    color: var(--secondary-color)\r\n}\r\n\r\n.rounded-box-heading[_ngcontent-%COMP%]{\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    color: var(--primary-color)\r\n}\r\n\r\n.project-display-img[_ngcontent-%COMP%]{\r\n    height: 17rem;\r\n    border-radius: 2em;\r\n}\r\n\r\n.project-card-col-2[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex:1;\r\n}\r\n\r\n.project-card-col-1[_ngcontent-%COMP%]{\r\n    flex:2;\r\n    min-width: 25em;\r\n}\r\n\r\n.tech-stack-icon[_ngcontent-%COMP%]{\r\n    color: var(--font-color);\r\n    height: 4rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n@media (max-width: 1900px) {\r\n    .project-card-col-2[_ngcontent-%COMP%]{\r\n        display:none;\r\n    }\r\n}\r\n\r\n.rounded-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRzs7QUFFSDtJQUNJLG1CQUFtQjtJQUNuQixtREFBbUQ7SUFDbkQsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0Qyw0Q0FBNEM7SUFDNUMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUdBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsTUFBTTtBQUNWOztBQUVBO0lBQ0ksTUFBTTtJQUNOLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5yb3VuZGVkLWJveHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDEuN3JlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEuMnJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDEzcmVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn0gKi9cclxuXHJcbi5yb3VuZGVkLWJveHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDEuN3JlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEuMnJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDEzcmVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IDBweCAjMGQwZDBkO1xyXG59XHJcblxyXG4ucm91bmRlZC1ib3g6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1sZXZlbC0wKTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpOyAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucm91bmRlZC1ib3gtdGl0bGV7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpXHJcbn1cclxuXHJcbi5yb3VuZGVkLWJveC1oZWFkaW5ne1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcilcclxufVxyXG5cclxuXHJcbi5wcm9qZWN0LWRpc3BsYXktaW1ne1xyXG4gICAgaGVpZ2h0OiAxN3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxufVxyXG5cclxuXHJcbi5wcm9qZWN0LWNhcmQtY29sLTJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4OjE7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQtY29sLTF7XHJcbiAgICBmbGV4OjI7XHJcbiAgICBtaW4td2lkdGg6IDI1ZW07XHJcbn1cclxuXHJcbi50ZWNoLXN0YWNrLWljb257XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxOTAwcHgpIHtcclxuICAgIC5wcm9qZWN0LWNhcmQtY29sLTJ7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucm91bmRlZC1ib3ggYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "nZZ6");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/events.component */ "5aow");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _skills_and_achievements_skills_and_achievements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills-and-achievements/skills-and-achievements.component */ "XUNM");
/* harmony import */ var _AppConfigurationHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppConfigurationHelper */ "aQTc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: '', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    // { path: 'projects', component: ProjectsComponent },
    { path: 'activities', component: _events_events_component__WEBPACK_IMPORTED_MODULE_3__["EventsComponent"] },
    { path: 'skills', component: _skills_and_achievements_skills_and_achievements_component__WEBPACK_IMPORTED_MODULE_5__["SkillsAndAchievementsComponent"] },
    { path: 'contact', component: _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_2__["ContactMeComponent"] }
];
routes.push(_AppConfigurationHelper__WEBPACK_IMPORTED_MODULE_6__["appConfigHelper"].getFormRoute());
routes.push({ path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] });
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/projects.service */ "j53p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.component */ "u4ch");





function ProjectsComponent_app_project_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project", 6);
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r1);
} }
const _c0 = function () { return ["/experiences"]; };
class ProjectsComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.projects = [];
    }
    ngOnInit() {
        this.projects = this.projectsService.projects;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 8, vars: 3, consts: [[1, "heading-container"], [1, "content-heading"], [1, "content-container"], [1, "grid-container"], [3, "project", 4, "ngFor", "ngForOf"], [1, "nav-button", "transition-background", 3, "routerLink"], [3, "project"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_app_project_5_Template, 1, 1, "app-project", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"]], styles: [".content-container[_ngcontent-%COMP%]{\r\n    padding: 0em 2.5em 8em 2.2em;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .content-container[_ngcontent-%COMP%]{\r\n        padding: 0em 1.5rem 5em 1.5em;        \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwZW0gMi41ZW0gOGVtIDIuMmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDBlbSAxLjVyZW0gNWVtIDEuNWVtOyAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map