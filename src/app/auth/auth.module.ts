import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RegisterComponent} from './components/register/register.component'
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {AuthService} from './services/auth.service'
import {HttpClientModule} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module'
import {PersistanceService} from '../shared/services/persistance.service'
import {LoginEffect} from './store/effects/login.effect'
import {LoginComponent} from './components/login/login.component'
import {GetCurrentUserEffect} from './store/effects/getCurrentUser.effect'

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
