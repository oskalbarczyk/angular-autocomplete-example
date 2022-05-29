import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleSearchComponent } from './google-search.component';

const routes: Routes = [{ path: '', component: GoogleSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleSearchRoutingModule { }
