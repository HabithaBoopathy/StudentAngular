import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Student } from './models/student';
import { RankComponent } from './rank/rank.component';

import { SectionComponent } from './section/section.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  // { path: '', component: AppComponent},
  { path: 'student', component: StudentComponent },
  { path: 'class', component: RankComponent },
  { path: 'section', component: SectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

