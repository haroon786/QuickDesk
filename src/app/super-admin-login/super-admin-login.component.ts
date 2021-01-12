import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { faTicketAlt  } from '@fortawesome/free-solid-svg-icons';
import  {Router} from '@angular/router';

@Component({
  selector: 'app-super-admin-login',
  templateUrl: './super-admin-login.component.html',
  styleUrls: ['./super-admin-login.component.css']
})
export class SuperAdminLoginComponent implements OnInit {

  ticket=faTicketAlt
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';

  constructor(private fb: FormBuilder,private route:Router) {}

  loginForm = this.fb.group({
    username: [null],
    password: [null],
    recaptcha: ['', Validators.required]
  });


  ngOnInit(): void {
  }
  onSubmit() {


    // if (this.loginForm.valid) {

    // }
    this.route.navigateByUrl('quickdesk/userdashboard')
  }
  handleSuccess(data) {
    console.log(data);
  }
}
