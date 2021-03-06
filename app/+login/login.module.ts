/**
 * Created by Shane Yao on 2016/9/18.
 */


import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {SharedModule} from "../shared";
import {LoginRouting} from "./login.route";
import {LoginPage} from "./login.page";
import {LoginForm} from "./login.form";

@NgModule({
  imports: [BrowserModule, FormsModule, LoginRouting, SharedModule],
  declarations: [LoginPage, LoginForm],
})

export class LoginModule {

}