import {CommonModule} from '@angular/common';
import {GamePageComponent} from './game-page.component';
import {GamePageRoutingModule} from './game-page-routing.module';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [GamePageComponent],
  imports: [
    CommonModule,
    GamePageRoutingModule
  ]
})
export class GamePageModule {
}
