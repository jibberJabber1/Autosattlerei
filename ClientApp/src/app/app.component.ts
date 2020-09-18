import { Component } from '@angular/core';
import { AppService } from "../../../ClientApp/app-backend/src/app/app.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: AppService) {
  }

  //function to resolve the reCaptcha and retrieve a token
  async resolved(captchaResponse: string, res) {
    console.log(`Resolved response token: ${captchaResponse}`);
    await this.sendTokenToBackend(captchaResponse); //declaring the token send function with a token parameter
  }

  //function to send the token to the node server
  sendTokenToBackend(tok) {
    //calling the service and passing the token to the service
    this.service.sendToken(tok).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      },
      () => { }
    );
  }

}
