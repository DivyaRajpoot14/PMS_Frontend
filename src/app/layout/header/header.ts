import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {


  constructor(private router: Router) {}

  goLogin() {
    this.router.navigate(['/login']);
  }

  goSignup() {
    this.router.navigate(['/signup']);
  }
}
