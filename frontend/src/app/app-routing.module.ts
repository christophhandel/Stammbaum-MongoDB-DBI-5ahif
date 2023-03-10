import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllRelationsComponent} from "./components/all-relations/all-relations.component";
import {PersonListComponent} from "./components/person-list/person-list.component";
import {PersonDetailComponent} from "./components/person-detail/person-detail.component";
import {JobsComponent} from "./components/jobs/jobs.component";
import {CompaniesComponent} from "./components/companies/companies.component";
import {JobAddComponent} from "./components/job-add/job-add.component";
import {CompanyAddComponent} from "./components/company-add/company-add.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {StatsComponent} from "./components/stats/stats.component";

const routes: Routes = [
  {path: 'settings', component: SettingsComponent},
  {path: 'relations', component: AllRelationsComponent},
  {path: 'relations/edit/:id', component: PersonDetailComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'jobs/add', component: JobAddComponent},
  {path: 'company', component: CompaniesComponent},
  {path: 'company/add', component: CompanyAddComponent},
  {path: 'persons', component: PersonListComponent},
  {path: 'persons/add', component: PersonDetailComponent},
  {path: 'persons/:id', component: PersonDetailComponent},
  {path: '', redirectTo: 'relations', pathMatch: 'full'},
  {path: '**', component: AllRelationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
