import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/observable/of';

import { AccountService } from '../shared/account.service';
import { AccountTypeComponent } from './account-type.component';

describe('AccountTypeComponent', () => {
  let component: AccountTypeComponent;
  let fixture: ComponentFixture<AccountTypeComponent>;
  let accountService: AccountService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTypeComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypeComponent);
    accountService = fixture.debugElement.injector.get(AccountService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get account typeForm', fakeAsync(() => {
    const form = {
      buttons: [
          {
              text: 'A hotel guest',
              id: 'guest'
          },
          {
              text: 'A travel agency',
              id: 'agency'
          },
          {
              text: 'A company',
              id: 'company'
          }
      ],
      legend: 'Enjoy a 10% discount on your reservation just for signup',
      title: 'What kind of user are you?'
    };
    const spy = spyOn(accountService, 'getAccountTypeForm').and.returnValue(
      Observable.of(accountService.accountTypeForm)
    );
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.arrayFormType).toEqual(form);
    expect(accountService.getAccountTypeForm).toHaveBeenCalled();
  }));
});
