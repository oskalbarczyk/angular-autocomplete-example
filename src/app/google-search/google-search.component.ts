import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Router } from '@angular/router';



@Component({
  selector: 'app-google-search',
  templateUrl: './google-search.component.html',
  styleUrls: ['./google-search.component.css']
})
export class GoogleSearchComponent implements OnInit {

  constructor(private dataService : DataService, private router: Router ) { }


  myControl = new FormControl();
  options: string[] = [];
  selectedOption: string='';
  info: string='';

  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.dataService.getJSON().subscribe(data => {

    this.options = data;

    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getSelectedOption(selectedOption:string){
    this.selectedOption=selectedOption;
    this.info='';
  }

  openGooglePage(){
    if(this.selectedOption){
      window.open(`https://www.google.com/search?q=${this.selectedOption}`, '_blank');
    }
    else{
      this.info="Please enter the name of the mountain";
    }

  }

}

