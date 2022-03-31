import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  addwork:boolean;
  form: FormGroup;
  formSubmitAttempt: boolean;
  constructor(private fb: FormBuilder, private userService: UserService) {


  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      
    });

  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  onSubmit() {
    const user: User = { nom: this.form.get('name').value, prenom: this.form.get('lastName').value, email:this.form.get('email').value, username: this.form.get('userName').value, password: this.form.get('password').value, role: this.form.get('role').value ,active: true};
  
    if (this.form.valid) {
      
      this.userService.addUser(user); 
      this.addwork=true;
      this.form.clearValidators   }
      else
      {
        this.addwork=true;
         }
        
    console.log("lorem", this.form.value);
    this.formSubmitAttempt = true; 
  }


}
