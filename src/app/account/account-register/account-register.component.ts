import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css'],
  providers: [AccountService]
})
export class AccountRegisterComponent implements OnInit {
  formData: any;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccountRegisterForm('guest').subscribe(
      (serverResponse: any) => { this.formData = serverResponse.form; },
      (error: any[]) => { alert(error); }
    );
  }

}
