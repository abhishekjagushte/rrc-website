import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input("experience") event!: Event

  constructor() { }

  ngOnInit(): void {
    
  }

}
