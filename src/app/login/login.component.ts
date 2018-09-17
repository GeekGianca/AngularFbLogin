import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from 'angular-6-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public user: any = SocialUser;
  constructor(private socialAuthService: AuthService, private router: Router) {}
  facebookLogin(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData)=>{
      this.user = userData;
    });
    this.router.navigate(['/home']);
  }
  googleLogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
      this.user = userData;
    });
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }
  
}
