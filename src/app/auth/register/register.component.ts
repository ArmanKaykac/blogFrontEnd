import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterPayload } from '../register-payload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  registerForm!: FormGroup ;
  registerPayload: RegisterPayload ;
  
  constructor(private formbuilder:FormBuilder, private authService:AuthService) {
    this.formbuilder.group({
      username:'',
      email:'',
      password:'',
      confirmPassword:''
    });

    this.registerPayload={
      username:'',
      email:'',
      password:'',
      confirmPassword:'',
    };

   }

  ngOnInit(): void {
  }

onSubmit(){
  this.registerPayload.username = this.registerForm.get('username')!.value;
  this.registerPayload.email = this.registerForm.get('email')!.value;
  this.registerPayload.password =this.registerForm.get('password')!.value;
  this.registerPayload.confirmPassword =this.registerForm.get('confirmPassword ')!.value;

  this.authService.register(this.registerPayload).subscribe(data=> {
    console.log("register succes");
  }, error=>{console.log("register failed")
});
  
}

}
