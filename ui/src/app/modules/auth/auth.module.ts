import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './pages/auth-login/auth-routing.module';
import { AuthComponent } from './pages/auth-login/auth.component';

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
