import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { SignUpFullscreenComponent } from 'app/modules/admin/pages/authentication/sign-up/fullscreen/sign-up.component';

const routes: Routes = [
    {
        path    : 'sign-up',
        children: [
            {
                path     : 'fullscreen',
                component: SignUpFullscreenComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        SignUpFullscreenComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class SignUpModule
{
}
