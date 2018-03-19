import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class AccountService {
    // This variables form should be in a new file.
    accountTypeForm = {
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

    accountRegisterGuestForm = {
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
                    type: 'text',
                    validationMessage: 'please enter a name!'
                },
                {
                    id: 'lastName',
                    label: 'Last name',
                    maxLength: 20,
                    required: true,
                    type: 'text',
                    validationMessage: 'please a last name!'
                },
                {
                    id: 'email',
                    label: 'Email',
                    maxLength: 40,
                    required: true,
                    type: 'email',
                    validationMessage: 'please enter a valid email!'
                },
                {
                    id: 'phone',
                    label: 'Phone',
                    maxLength: 15,
                    required: false,
                    type: 'text',
                    validationMessage: 'please enter a phone! e.g. 54 351 3920406'
                },
            ],
            legend: '* required fields',
            title: 'Hotel guest'
        }
    };

    accountRegisterAgencyForm = {
        form: {
            button: {
                text: 'send',
                type: 'submit'
            },
            inputs: [
                {
                    id: 'name',
                    label: 'Agency name',
                    maxLength: 40,
                    required: true,
                    type: 'text',
                    validationMessage: 'please enter a agency name!'
                },
                {
                    id: 'name',
                    label: 'Contact name',
                    maxLength: 30,
                    required: true,
                    type: 'text',
                    validationMessage: 'please enter a contact name!'
                },
                {
                    id: 'name',
                    label: 'Contact email',
                    maxLength: 40,
                    required: true,
                    type: 'email',
                    validationMessage: 'please enter a valid email!'
                },
                {
                    id: 'name',
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

    accountRegisterCompanyForm = {
        form: {
            button: {
                text: 'send',
                type: 'submit'
            },
            inputs: [
                {
                    id: 'name',
                    label: 'Company name',
                    maxLength: 40,
                    required: true,
                    type: 'text',
                    validationMessage: 'please enter a company name!'
                },
                {
                    id: 'email',
                    label: 'Contact email',
                    maxLength: 40,
                    required: true,
                    type: 'email',
                    validationMessage: 'please enter a valid email!'
                },
                {
                    id: 'phone',
                    label: 'Phone',
                    required: true,
                    maxLength: 15,
                    type: 'text',
                    validationMessage: 'please enter a phone! e.g. 54 351 3920406'
                },
                {
                    id: 'comments',
                    label: 'Comments', // this sould be a text-area
                    maxLength: 200,
                    required: false,
                    type: 'text'
                }
            ],
            legend: '* required fields',
            title: 'Traveler agency'
        }
    };

    accountRegisterCompletedForLogin = {
        registerSuccess: true,
        form: {
            button: {
                text: 'Continue'
            },
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

    accountRegisterCompleted = {
        registerSuccess: true,
        form: {
            button: {
                text: 'Continue'
            },
            list: [],
            subTitle: 'Thank you!',
            text: 'Shortly we will be in contact',
            title: 'Welcome',
            name: '',
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
                // this logic 'this.accountRegisterCompleted.name = formData.name' should be in the "API"
                this.accountRegisterCompleted.form.name = formData.inputs[0].name;
                observer.next(this.accountRegisterCompleted);
            }
        });
    }
}
