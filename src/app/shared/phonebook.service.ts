import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {AngularFireDatabase, AngularFireList} from  "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(public firebase: AngularFireDatabase) { }
  phoneList: AngularFireList<any>;
  form = new FormGroup({
  	$key: new FormControl(null),
  	firstName: new FormControl('', Validators.required),
  	lastName: new FormControl('', Validators.required),
  	number: new FormControl('',[Validators.required , Validators.minLength(8)])
  });

  getPhonebook(){
  	this.phoneList = this.firebase.list('phonebook');
  	return this.phoneList.snapshotChanges();
  }

  insertPhonebook(phonebook){
  	this.phoneList.push({
  		firstName: phonebook.firstName,
  		lastName: phonebook.lastName,
  		number: phonebook.number
  	});
  }
  populateForm(phonebook){
  	this.form.setValue(phonebook);
  }

  updatePhonebook(phonebook){
  	this.phoneList.update(phonebook.$key,{
  		firstName: phonebook.firstName,
  		lastName: phonebook.lastName,
  		number: phonebook.number
  	});
  }
  deletePhonebook($key: string){
  	this.phoneList.remove($key);
  }
}
