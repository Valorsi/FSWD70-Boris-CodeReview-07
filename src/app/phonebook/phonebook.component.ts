import { Component, OnInit } from '@angular/core';
import {PhonebookService} from "../shared/phonebook.service"
@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  constructor(public phonebookService: PhonebookService) { }
  submitted: boolean;
  formControls = this.phonebookService.form.controls;
  showSuccessMessage: boolean;

  ngOnInit() {
  }
  onSubmit(){
  	this.submitted = true;
  	if(this.phonebookService.form.valid){
  		if(this.phonebookService.form.get("$key").value == null){


  			this.phonebookService.insertPhonebook(this.phonebookService.form.value);
  			this.showSuccessMessage =true;
  			setTimeout(()=> this.showSuccessMessage=false,3000);
  			this.submitted = false;
  			this.phonebookService.form.reset();

  		} else {
  			this.phonebookService.updatePhonebook(this.phonebookService.form.value);
  			this.showSuccessMessage =true;
  			setTimeout(()=> this.showSuccessMessage=false,3000);
  			this.submitted = false;
  			this.phonebookService.form.reset();

  			
  		}
  	}
  }
}
