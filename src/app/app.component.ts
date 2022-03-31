import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restqurqntReviewsClient';
  currentRoute: any;
  loginPage=true;

  constructor(private translate: TranslateService,private router:Router) {
        translate.setDefaultLang('fr');
    }
   

    ngOnInit(): void {
      this.currentRoute=this.router.url;
      
      
    }
  
}
