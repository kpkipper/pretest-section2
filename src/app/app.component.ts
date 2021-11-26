import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pretest-section2';
  constructor(private router: Router) { }

  gotoCategories() {
    this.router.navigate(['/categories']);
  }

  gotoCalculate() {
    this.router.navigate(['/calculate']);
  }
}
