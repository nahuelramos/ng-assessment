import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css'],
  providers: [AccountService]
})
export class AccountRegisterComponent implements OnInit, OnDestroy {
  accountType: string;
  formData: any;
  serviceObservableGet: Subscription;
  serviceObservableSend: Subscription;

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

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
    this.serviceObservableSend = this.accountService.sendAccountRegister(this.extractValuesOfForm(form)).subscribe(
      (serverResponse: any) => { this.formData = serverResponse; },
      (error: any) => { alert(error); }
    );
  }

  extractValuesOfForm(form: NgForm) {
    const dataForServer = {
      inputs: [form.value],
      accountType: this.accountType
    };

    return dataForServer;
  }

}
