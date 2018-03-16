import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css'],
  providers: [AccountService]
})
export class AccountRegisterComponent implements OnInit {
  formData: any;
  accountType: string;

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.accountType = this.route.snapshot.params['accountType'];
    this.accountService.getAccountRegisterForm(this.accountType).subscribe(
      (serverResponse: any) => { this.formData = serverResponse.form; },
      (error: any[]) => { alert(error); }
    );
  }

}
