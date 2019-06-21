import { Component, OnInit } from '@angular/core';
import {PhonebookService} from "../shared/phonebook.service"
@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
phonebookArray =[];
showDeletedMessage : boolean;
searchText:string = "";
  constructor(public phonebookService: PhonebookService ) { }

  ngOnInit() {
  	this.phonebookService.getPhonebook().subscribe(
  		(list) => {
  			this.phonebookArray = list.map( (item) =>{
  				return {
  					$key :item.key,
  					...item.payload.val()
  				}
  			})
  		});
  }
onDelete($key){
	if(confirm("Are you sure you want to delete this record?")){
		this.phonebookService.deletePhonebook($key);
		this.showDeletedMessage = true;
		setTimeout(()=> this.showDeletedMessage=false , 3000)
	}
}

filterCondition(phonebook){
	return phonebook.lastName.toLowerCase().indexOf(this.searchText.toLowerCase())
	!= -1 ;

}
}
