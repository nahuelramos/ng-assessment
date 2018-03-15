import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class AccountService {
    accountTypeForm: any[] = [{
        title: 'A hotel guest',
        active: false
      },
      {
        title: 'A travel agency',
        active: false
      },
      {
        title: 'A company',
        active: false
    }];

    accountRegisterGuestForm: {} = {
        Form: {
            button: {
                type: 'submit',
                text: 'send'
            },
            inputs: [
                {
                    label: 'Name',
                    type: 'text',
                    required: true
                },
                {
                    label: 'Last name',
                    type: 'text',
                    required: true
                },
                {
                    label: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    label: 'Email',
                    type: 'email',
                    required: true
                },
                {
                    label: 'Phone',
                    type: 'text',
                    required: false
                },
            ],
            legend: '* required fields',
            title: 'Hotel guest'
        }
    };

    accountRegisterAgencyForm: {} = {
        Form: {
            button: {
                type: 'submit',
                text: 'send'
            },
            inputs: [
                {
                    label: 'Agency name',
                    type: 'text',
                    required: true
                },
                {
                    label: 'Contact name',
                    type: 'text',
                    required: true
                },
                {
                    label: 'Contact email',
                    type: 'email',
                    required: true
                },
                {
                    label: 'Agency id code',
                    type: 'text',
                    required: false
                }
            ],
            legend: '* required fields',
            title: 'Traveler agency'
        }
    };

    accountRegisterCompanyForm: {} = {
        Form: {
            button: {
                type: 'submit',
                text: 'send'
            },
            inputs: [
                {
                    label: 'Company name',
                    type: 'text',
                    required: true
                },
                {
                    label: 'Contact email',
                    type: 'email',
                    required: true
                },
                {
                    label: 'Phone',
                    type: 'text',
                    required: true
                },
                {
                    label: 'Comments', // text-area
                    type: 'text',
                    required: false
                }
            ],
            legend: '* required fields',
            title: 'Traveler agency'
        }
    };

    getAccountForm() {
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
}
