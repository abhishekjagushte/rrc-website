import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventComponent } from './events/event/event.component';
import { SkillsAndAchievementsComponent } from './skills-and-achievements/skills-and-achievements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleSectionComponent } from './shared/simple-section/simple-section.component';
import { RegistrationComponent } from './forms/registration/registration.component';
import { RecruitmentComponent } from './forms/recruitment/recruitment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    ProjectsComponent,
    EventComponent,
    SkillsAndAchievementsComponent,
    ProjectComponent,
    ProjectDetailComponent,
    EventsComponent,
    PageNotFoundComponent,
    ContactMeComponent,
    SimpleSectionComponent,
    RegistrationComponent,
    RecruitmentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
