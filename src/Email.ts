export class Email {
    emailBody: string;
    email: string;
    subject: string;

    constructor(emailBody: string, subject: string, email: string) {
        this.emailBody = emailBody;
        this.subject = subject;
        this.email = email;
    }

}