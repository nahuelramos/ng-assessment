import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css'],
  providers: [AccountService]
})
export class AccountRegisterComponent implements OnInit, OnDestroy {
  accountType: string;
  formData: any;
  registerSuccess: boolean = null;
  serviceObservableGet: Subscription;
  serviceObservableSend: Subscription;
  user: any = {};

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.accountType = this.route.snapshot.params['accountType'];
    this.serviceObservableGet = this.accountService.getAccountRegisterForm(this.accountType).subscribe(
      (serverResponse: any) => { this.formData = serverResponse.form; },
      (error: any) => { alert(error); }
    );
  }

  ngOnDestroy() {
    this.serviceObservableGet.unsubscribe();
    this.serviceObservableSend.unsubscribe();
  }

  register(form: NgForm) {
    const isUserLoggedIn = this.loginService.isUserLoggedIn();

    this.serviceObservableSend = this.accountService.sendAccountRegister(
      this.extractValuesOfForm(form), isUserLoggedIn).subscribe(
      (serverResponse: any) => {
        this.formData = serverResponse.form;
        if (isUserLoggedIn) {
          this.user = this.loginService.getUser();
          console.log(this.user);
        }
        this.registerSuccess = serverResponse.registerSuccess;
      },
      (error: any) => { this.registerSuccess = false; alert(error); }
    );
  }

  extractValuesOfForm(form: NgForm) {
    const request = {
      inputs: [form.value],
      accountType: this.accountType
    };

    return request;
  }

}
