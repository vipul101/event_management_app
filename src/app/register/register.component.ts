import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['',Validators.required],
      password:['',Validators.required]
    })
  }

  postData(formData:any){
    this.authService.register(formData.value.username, formData.value.password, formData.value.name).then(value=>{
      console.log(value);
    }).catch(e=>{
      console.log(e);
    })
  }
}
