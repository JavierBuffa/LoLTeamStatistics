import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestsErrorsComponent } from './errors/tests-errors/tests-errors.component';
import { HomeComponent } from './home/home.component';
import { NewTeamComponent } from './teams/new-team/new-team.component';
import { TeamsComponent } from './teams/teams.component';
import { AuthGuard } from './_guards/auth.guard';
import { teamRegisterResolver } from './_resolver/teamRegisterResolver';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      
      {path: 'teams', component: TeamsComponent},
      {path: 'newteam/edit/:id', component: NewTeamComponent, resolve: {team: teamRegisterResolver}},
      {path: 'newteam', component: NewTeamComponent},
    ]
  },
  {path: 'errors', component: TestsErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
