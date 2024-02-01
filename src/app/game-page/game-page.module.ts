import {CommonModule} from '@angular/common';
import {GameDialogModule} from './dialogs/game-dialog/game-dialog.module';
import {GamePageComponent} from './game-page.component';
import {GamePageRoutingModule} from './game-page-routing.module';
import {MaterialModule} from '../material.module';
import {NgModule} from '@angular/core';
import {SnackbarService} from './services/snackbar.service';

@NgModule({
  declarations: [GamePageComponent],
  imports: [
    CommonModule,
    GameDialogModule,
    GamePageRoutingModule,
    MaterialModule
  ],
  providers: [SnackbarService]
})
export class GamePageModule {
}
