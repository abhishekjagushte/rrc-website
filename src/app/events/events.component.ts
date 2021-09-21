import { Component, OnInit } from '@angular/core';
import { EventsService } from '../data/events.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  experiences: Event[] = []
  pageTitle: string

  constructor(private eventsService: EventsService) { 
    this.experiences = this.eventsService.events
    this.pageTitle = this.eventsService.pageTitle
  }

  ngOnInit(): void {
  }

}
