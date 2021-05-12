import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) { }

  loginForm: FormGroup = this.fb.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  showErrorMessage = false;

  ngOnInit(): void {
    console.log('kreira se login');
  }

  onSubmit(): void {
    console.log('loginForm', this.loginForm);
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.showErrorMessage = false;
      console.log('uspjesno proslo');
      // this.appService.login(this.loginForm.value)
      //   .pipe()
      //   .subscribe(res => {
      //     console.log('res', res);
      //   })
    } else {
      this.showErrorMessage = true;
    }
  }
}
