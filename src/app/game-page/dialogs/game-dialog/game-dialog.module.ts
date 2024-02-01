import {CommonModule} from '@angular/common';
import {FormService} from '../../services/form.service';
import {GameDialogComponent} from './game-dialog.component';
import {MaterialModule} from '../../../material.module';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TeamService} from '../../services/team.service';

@NgModule({
  declarations: [GameDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    FormService,
    TeamService
  ]
})
export class GameDialogModule {
}
