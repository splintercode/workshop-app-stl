import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  searchForm: FormGroup;
  activeType = 'human';

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.getSearchChanges().subscribe(searchValue => console.log(searchValue));
  }

  getSearchChanges() {
    return this.searchForm.valueChanges
      .map(values => values.search)
      .map(v => '1' + v);
  }

  submit() {
    console.log(this.searchForm.value);
  }

  ngOnInit() {
  }

  setFilter(type: string) {
    if (type === 'human') {
      this.activeType = 'human';
    }

    if (type === 'droid') {
      this.activeType = 'droid';
    }

    if (type === 'all') {
      this.activeType = 'all';
    }
  }
}

// https://github.com/splintercode/workshop-app-stl



// ng build --prod --aot --no-sourcemap