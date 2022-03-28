import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() loginPage: any;

  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService, private translate: TranslateService) 
  { }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }
  onLogout() {
    this.authService.logout(); // {3}
  }

  useLanguage(language: string): void {
    console.log(language);
    this.translate.use(language);
  }

}
