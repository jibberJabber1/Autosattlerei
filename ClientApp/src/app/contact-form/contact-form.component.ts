import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MapComponent } from '../map/map.component';
import { Email } from '../shared/models/Email';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  refForm: FormGroup;
  public status: String;
  submitted: boolean = false;
  public captchaValidated: boolean = false;

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.refForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      TelNo: [],
      Message: ['', [Validators.required]],
      recaptchaReactive: []
    });
  }

  onSubmit({ value, valid }: { value: Email, valid: boolean }) {
    return this.http.post('api/Email/Index', value).subscribe(
      success => this.handleSuccess(),
      error => this.handleFailure(error)
    );
  }

  handleSuccess() {
    this.status = "Danke. Die Nachricht wurde erfolgreich gesendet.";
    this.submitted = true;
  }

  handleFailure(error) {
    this.status = "Es tut uns Leid, es gab einen Fehler. Versuchen Sie uns anstatt dessen anzurufen.";
    this.submitted = true;
    console.log('oops', error)
  }

  resolved(captchaResponse: string, res) {
    this.captchaValidated = true;
    console.log(`Resolved response token: ${captchaResponse}`);

  }



}
