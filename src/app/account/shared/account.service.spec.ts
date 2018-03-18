import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('Test AccountService', () => {
  let service: AccountService;

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
      service.sendAccountRegister({}, false).subscribe(data => {
        expect(data).toBe(service.accountRegisterCompleted);
        done();
      });
  });

  it('should send account register with user logged',
    (done: DoneFn) => {
      service.sendAccountRegister({}, true).subscribe(data => {
        expect(data).toBe(service.accountRegisterCompletedForLogin);
        done();
      });
  });
});
