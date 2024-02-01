import {CommonModule} from '@angular/common';
import {CsvService} from './services/csv.service';
import {GameDialogModule} from './dialogs/game-dialog/game-dialog.module';
import {GamePageComponent} from './game-page.component';
import {GamePageRoutingModule} from './game-page-routing.module';
import {MaterialModule} from '../material.module';
import {NgModule} from '@angular/core';
import {SnackbarService} from './services/snackbar.service';
import {TeamService} from './services/team.service';

@NgModule({
  declarations: [GamePageComponent],
  imports: [
    CommonModule,
    GameDialogModule,
    GamePageRoutingModule,
    MaterialModule
  ],
  providers: [
    CsvService,
    SnackbarService,
    TeamService
  ]
})
export class GamePageModule {
}
