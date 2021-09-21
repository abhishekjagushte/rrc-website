import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';
import { RegistrationComponent } from './forms/registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { RecruitmentComponent } from './forms/recruitment/recruitment.component';
import { appConfigHelper } from './AppConfigurationHelper';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'projects', component: ProjectsComponent },
  { path: 'activities', component: EventsComponent },
  { path: 'contact', component: ContactUsComponent }
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
