import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootComponent } from './foot/foot.component';
import { HeroComponent } from './hero/hero.component';
import { ContentComponent } from './content/content.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { ImportantComponent } from './important/important.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {environment} from "../environments/environment";
import { PhoneListComponent } from './phone-list/phone-list.component';
import {ReactiveFormsModule , FormsModule} from "@angular/forms";
import { PhonebookService } from "./shared/phonebook.service";
@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    NavbarComponent,
    FootComponent,
    HeroComponent,
    ContentComponent,
    PhonebookComponent,
    ImportantComponent,
    PhoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [PhonebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
