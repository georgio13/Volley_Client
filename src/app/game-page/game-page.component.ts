import {Component} from '@angular/core';

@Component({
  styleUrls: ['./game-page.component.scss'],
  templateUrl: './game-page.component.html'
})
export class GamePageComponent {
  public teams: any[];

  constructor() {
    this.teams = [
      {
        name: 'Αργεντινή',
        value: 'arg'
      },
      {
        name: 'Βραζιλία',
        value: 'bra'
      },
      {
        name: 'Βουλγαρία',
        value: 'bul'
      },
      {
        name: 'Καναδάς',
        value: 'can'
      },
      {
        name: 'Κούβα',
        value: 'cub'
      },
      {
        name: 'Γαλλία',
        value: 'fra'
      },
      {
        name: 'Γερμανία',
        value: 'ger'
      },
      {
        name: 'Ιράν',
        value: 'iri'
      },
      {
        name: 'Ιταλία',
        value: 'ita'
      },
      {
        name: 'Ιαπωνία',
        value: 'jpn'
      },
      {
        name: 'Ολλανδία',
        value: 'ned'
      },
      {
        name: 'Πολωνία',
        value: 'pol'
      },
      {
        name: 'Σερβία',
        value: 'srb'
      },
      {
        name: 'Σλοβενία',
        value: 'slo'
      },
      {
        name: 'Τουρκία',
        value: 'tur'
      },
      {
        name: 'ΗΠΑ',
        value: 'usa'
      }
    ];
  }
}
