import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class AccountService {
    accountTypeForm: {} = {
        form: {
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
        }
    };

    accountRegisterGuestForm: {} = {
        form: {
            button: {
                text: 'send',
                type: 'submit'
            },
            inputs: [
                {
                    id: 'name',
                    label: 'Name',
                    maxLength: 30,
                    required: true,
                    type: 'text'
                },
                {
                    id: 'lastName',
                    label: 'Last name',
                    maxLength: 20,
                    required: true,
                    type: 'text'
                },
                {
                    id: 'email',
                    label: 'Email',
                    maxLength: 40,
                    required: true,
                    type: 'email'
                },
                {
                    id: 'phone',
                    label: 'Phone',
                    pattern: '^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$',
                    required: false,
                    type: 'text'
                },
            ],
            legend: '* required fields',
            title: 'Hotel guest'
        }
    };

    accountRegisterAgencyForm: {} = {
        form: {
            button: {
                text: 'send',
                type: 'submit'
            },
            inputs: [
                {
                    id: 'agencyName',
                    label: 'Agency name',
                    maxLength: 40,
                    required: true,
                    type: 'text'
                },
                {
                    id: 'agencyContactName',
                    label: 'Contact name',
                    maxLength: 30,
                    required: true,
                    type: 'text'
                },
                {
                    id: 'agencyContactName',
                    label: 'Contact email',
                    maxLength: 40,
                    required: true,
                    type: 'email'
                },
                {
                    id: 'agencyCode',
                    label: 'Agency id code',
                    maxLength: 40,
                    required: false,
                    type: 'text'
                }
            ],
            legend: '* required fields',
            title: 'Traveler agency'
        }
    };

    accountRegisterCompanyForm: {} = {
        form: {
            button: {
                text: 'send',
                type: 'submit'
            },
            inputs: [
                {
                    id: 'companyName',
                    label: 'Company name',
                    maxLength: 40,
                    required: true,
                    type: 'text'
                },
                {
                    id: 'companyEmail',
                    label: 'Contact email',
                    maxLength: 40,
                    required: true,
                    type: 'email'
                },
                {
                    id: 'companyPhone',
                    label: 'Phone',
                    pattern: '^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$',
                    required: true,
                    type: 'text'
                },
                {
                    id: 'companyComments',
                    label: 'Comments', // text-area
                    maxLength: 200,
                    required: false,
                    type: 'text'
                }
            ],
            legend: '* required fields',
            title: 'Traveler agency'
        }
    };

    accountRegisterCompletedForLogin: {} = {
        registerSuccess: true,
        form: {
            list: [
                {
                    id: 'discount',
                    text: 'Enjoy a 10% discount on your reservation'
                },
                {
                    id: 'time',
                    text: '24hs / 365 days phone 900 - 000 - 0000'
                }
            ],
            subTitle: 'Advantages',
            title: 'Welcome'
        }
    };

    accountRegisterCompleted: {} = {
        registerSuccess: true,
        form: {
            list: [],
            subTitle: 'Thank you!',
            title: 'Welcome'
        }
    };

    getAccountTypeForm() {
        return Observable.create((observer: Observer<any>) => {
            observer.next(this.accountTypeForm);
        });
    }

    getAccountRegisterForm(accountType: string) {
        return Observable.create((observer: Observer<any>) => {
            switch (accountType) {
                case 'guest': observer.next(this.accountRegisterGuestForm);
                    break;
                case 'agency': observer.next(this.accountRegisterAgencyForm);
                    break;
                case 'company': observer.next(this.accountRegisterCompanyForm);
                    break;
            }
        });
    }

    sendAccountRegister(formData, userLogged) {
        return Observable.create((observer: Observer<any>) => {
            if (userLogged) {
                observer.next(this.accountRegisterCompletedForLogin);
            } else {
                observer.next(this.accountRegisterCompleted);
            }
        });
    }
}
