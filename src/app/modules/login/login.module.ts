import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {LoginComponent} from '../../components/login/login.component';
import {LoginService} from '../../services/login.service';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    LoginComponent
  ],
  providers: [LoginService]
})
export class LoginModule {
}
