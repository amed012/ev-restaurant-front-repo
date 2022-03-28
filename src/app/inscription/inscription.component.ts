import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
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
    const user: User = { nom: this.form.get('name').value, prenom: this.form.get('lastName').value, email:this.form.get('email').value, userName: this.form.get('userName').value, password: this.form.get('password').value, role: this.form.get('role').value ,active: true};
  
    if (this.form.valid) {
      console.log("lorem", user);
      this.userService.addUser(user); 
    }
    console.log("lorem", this.form.value);
    this.formSubmitAttempt = true; 
  }


}
