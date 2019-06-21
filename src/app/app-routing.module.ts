import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {PhonebookComponent} from "./phonebook/phonebook.component";
import {ImportantComponent} from "./important/important.component";
const routes: Routes = [
{
	path:"", component: HeroComponent
},{
	path:"phonebook", component: PhonebookComponent
},{
	path:"important", component: ImportantComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
