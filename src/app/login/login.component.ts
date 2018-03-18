import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  formData: any;
  isUserLoggedIn = false;
  loginServiceFormObservable: Subscription;
  loginServiceLoginObservable: Subscription;
  loginServiceLogutObservable: Subscription;
  user: any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginServiceFormObservable = this.loginService.getFormLogin().subscribe(
      (formData: any) => { this.formData = formData.form; console.log(this.formData); },
      (error: any) => { alert(error); }
    );
  }

  ngOnDestroy() {
    this.loginServiceFormObservable.unsubscribe();
    this.loginServiceLoginObservable.unsubscribe();
    this.loginServiceLogutObservable.unsubscribe();
  }

  login(form: NgForm) {
    this.user = form.value;

    this.loginServiceLoginObservable = this.loginService.login(this.user).subscribe(
      (isUserLoggedIn: boolean) => { this.isUserLoggedIn = isUserLoggedIn; },
      (error: any) => { alert(error); }
    );
  }

  logout() {
    this.isUserLoggedIn = this.loginService.logout(this.user);
    this.user = {};
  }

}
