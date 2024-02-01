import {CommonModule} from '@angular/common';
import {GameDialogComponent} from './game-dialog.component';
import {MaterialModule} from '../../../material.module';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormService} from '../../services/form.service';

@NgModule({
  declarations: [GameDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [FormService]
})
export class GameDialogModule {
}
