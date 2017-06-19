import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path : '', component: MainComponent },
    { path : 'subject', loadChildren : './components/subject/subject.module#SubjectModule' } // for lazy loading
  ],  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
