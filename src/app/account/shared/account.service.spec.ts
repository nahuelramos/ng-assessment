import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('Test AccountService', () => {
  let service: AccountService;
  const request = {
    inputs: [{name:'test'}, {email: 'email@test.com'}],
    accountType: 'guest'
  };

  beforeEach(() => {
    service = new AccountService;
  });

  it('should get type form',
    (done: DoneFn) => {
      service.getAccountTypeForm().subscribe(formData => {
        expect(formData).toBe(service.accountTypeForm);
        done();
      });
  });

  it('should get account register form',
    (done: DoneFn) => {
      service.getAccountRegisterForm('guest').subscribe(formData => {
        expect(formData).toBe(service.accountRegisterGuestForm);
        done();
      });
  });

  it('should send account register without user logged',
    (done: DoneFn) => {
      service.sendAccountRegister(request, false).subscribe(data => {
        expect(data).toBe(service.accountRegisterCompleted);
        done();
      });
  });

  it('should send account register with user logged',
    (done: DoneFn) => {
      service.sendAccountRegister(request, true).subscribe(data => {
        expect(data).toBe(service.accountRegisterCompletedForLogin);
        done();
      });
  });
});
