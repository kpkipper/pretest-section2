import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: string[];
  filterCategories: string[];
  filter: string;
  form = this.formBuilder.group({
    filter: ''
  });

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    fetch('https://api.publicapis.org/categories').then((resp) => resp.json()).then((response) => {
      this.categories = response;
      this.filterCategories = this.categories
    });
    this.form.get('filter').valueChanges.pipe(debounceTime(500)).subscribe(value=>{
      this.filtered(value);
    });

  }

  filtered(input:string) {
    this.filterCategories = this.categories.filter((element)=>{
      return element.toUpperCase().indexOf(input.toUpperCase()) > -1
    })
  }

}
