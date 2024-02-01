import {CommonModule} from '@angular/common';
import {GamePageComponent} from './game-page.component';
import {GamePageRoutingModule} from './game-page-routing.module';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [GamePageComponent],
  imports: [
    CommonModule,
    GamePageRoutingModule,
    MaterialModule
  ]
})
export class GamePageModule {
}
