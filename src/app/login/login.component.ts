import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup; // {1}
  private formSubmitAttempt: boolean;

  constructor(private translate: TranslateService, private fb: FormBuilder, private authService: AuthService) {


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
      this.authService.login(this.form.value); // {7}
    }
    console.log("lorem",this.form.value);
            this.formSubmitAttempt = true; // {8}
  }


}
