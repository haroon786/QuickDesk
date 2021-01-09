import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  ticket=faTicketAlt
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';

  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    username: [null],
    password: [null],
    recaptcha: ['', Validators.required]
  });


  ngOnInit(): void {
  }
  onSubmit() {


    if (this.loginForm.valid) {

    }
  }
  handleSuccess(data) {
    console.log(data);
  }

}
