import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup; // {1}
   formSubmitAttempt: boolean;
  user: any;
  submitted:boolean;

  constructor(private translate: TranslateService, private fb: FormBuilder, private authService: AuthService, private userService: UserService) {


  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  useLanguage(language: string): void {
    console.log(language);
    this.translate.use(language);
  }
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  onSubmit() {
  
    
    if (this.form.valid) {
      this.formSubmitAttempt = true;
      this.userService.getUserByUserNameAndPassword(this.form.get('userName').value,this.form.get('password').value).subscribe(data => {
     
        this.user= data;
        this.authService.login( this.user); 
       
        
      })
  
    }
    

  }


}

