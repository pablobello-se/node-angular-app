import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserFormRoutingModule } from './user-form-routing.module';

@NgModule({
    declarations: [UserFormComponent],
    imports: [CommonModule, UserFormRoutingModule],
})
export class UserFormModule {}
