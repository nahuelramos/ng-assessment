import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css'],
  providers: [AccountService]
})
export class AccountTypeComponent implements OnInit {
  arrayFormType: {};

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    this.accountService.getAccountTypeForm().subscribe(
      (serverResponse: any) => { this.arrayFormType = serverResponse.form; },
      (error: any) => { alert(error); }
    );
  }

  accountTypeSelected(accountType) {
    this.router.navigate(['account-register', accountType]);
  }
}
