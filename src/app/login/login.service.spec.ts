import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('Test AccountService', () => {
  let service: LoginService;

  beforeEach(() => {
    service = new LoginService;
  });

  it('should get login form form',
    (done: DoneFn) => {
        service.getFormLogin().subscribe(formData => {
            expect(formData).toBe(service.loginForm);
            done();
        });
  });

  it('should login correctly',
    (done: DoneFn) => {
        let user = { user: 'usertest', password: 'passwordtest' }
        service.login(user).subscribe(isLoggedIn => {
            expect(isLoggedIn).toBe(true);
            done();
        });
  });
});
