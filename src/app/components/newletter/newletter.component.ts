import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newletter',
  templateUrl: './newletter.component.html',
  styleUrls: ['./newletter.component.scss']
})
export class NewletterComponent {


  sendEmail(form: NgForm): void {
    console.log(form.value.name, form.value.email)
  }

}
