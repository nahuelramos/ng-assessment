import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css'],
  providers: [AccountService]
})
export class AccountTypeComponent implements OnInit {
  arrayFormType: any[];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAccountForm().subscribe(
      (serverResponse: any[]) => { this.arrayFormType = serverResponse; },
      (error: any[]) => { alert(error); }
    );
  }

}
