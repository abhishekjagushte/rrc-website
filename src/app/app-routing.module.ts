import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { EventsComponent } from './events/events.component';
import { RegistrationComponent } from './forms/registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsAndAchievementsComponent } from './skills-and-achievements/skills-and-achievements.component';
import { RecruitmentComponent } from './forms/recruitment/recruitment.component';
import { appConfigHelper } from './AppConfigurationHelper';

const routes: Routes = [
  { path: '', component: AboutComponent },
  // { path: 'projects', component: ProjectsComponent },
  { path: 'activities', component: EventsComponent },
  { path: 'skills', component: SkillsAndAchievementsComponent },
  { path: 'contact', component: ContactMeComponent }
];

routes.push(appConfigHelper.getFormRoute())
routes.push({ path: '**', component: PageNotFoundComponent })

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
