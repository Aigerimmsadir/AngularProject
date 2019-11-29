import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {
  formPhone: FormGroup;
  formSecretCode: FormGroup;
  isSecretCode=false;
  constructor() { }

  ngOnInit() {

    this.formPhone = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    });
    this.formSecretCode = new FormGroup({
      secretСode: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    });
  }
  onSubmitPhone(){
    this.isSecretCode=true
  }
  onSubmitSecretCode(){

  }
}
