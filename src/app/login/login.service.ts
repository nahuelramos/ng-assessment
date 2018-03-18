import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class LoginService {
    isLoggedIn = false;

    loginForm: {} = {
        form: {
            buttons: [
                {
                    text: 'login'
                },
                {
                    text: 'log out'
                }
            ],
            inputs: [
                {
                    id: 'user',
                    maxLength: 30,
                    minLength: 5,
                    required: true,
                    text: 'User or email:',
                    type: 'text'
                },
                {
                    id: 'password',
                    maxLength: 30,
                    minLength: 6,
                    required: true,
                    text: 'Password:',
                    type: 'password',
                }
            ],
            title: 'Sign up'
        }
    };

    getFormLogin() {
        return Observable.create((observer: Observer<any>) => {
            observer.next(this.loginForm);
        });
    }

    login(user: any) {
        this.isLoggedIn = true;
        return Observable.create((observer: Observer<any>) => {
            observer.next(this.isLoggedIn);
        });
    }

    logout(user: any) {
        return this.isLoggedIn = false;
    }

    isUserLoggedIn() {
        return this.isLoggedIn;
    }
}
