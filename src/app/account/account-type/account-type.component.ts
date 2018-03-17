import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css'],
  providers: [AccountService]
})
export class AccountTypeComponent implements OnInit, OnDestroy {
  arrayFormType: {};
  accountServiceObservableGet: Subscription;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    this.accountServiceObservableGet = this.accountService.getAccountTypeForm().subscribe(
      (serverResponse: any) => { this.arrayFormType = serverResponse.form; },
      (error: any) => { alert(error); }
    );
  }

  ngOnDestroy() {
    this.accountServiceObservableGet.unsubscribe();
  }

  accountTypeSelected(accountType) {
    this.router.navigate(['account-register', accountType]);
  }
}
