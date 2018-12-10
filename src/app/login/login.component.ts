import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup : FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      usernameCntrl : ['',Validators.required],
      passwordCntrl : ['',Validators.required]
    });

    
  }



}
