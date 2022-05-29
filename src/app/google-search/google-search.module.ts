import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleSearchRoutingModule } from './google-search-routing.module';
import { GoogleSearchComponent } from './google-search.component';


import {MatSelectModule} from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";





@NgModule({
  declarations: [
    GoogleSearchComponent
  ],
  imports: [
    CommonModule,
    GoogleSearchRoutingModule,
    MatSelectModule,
    MatSliderModule,
    MatAutocompleteModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class GoogleSearchModule { }
