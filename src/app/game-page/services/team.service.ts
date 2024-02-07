import {Injectable} from '@angular/core';
import {Team} from '../models/team';

@Injectable()
export class TeamService {
  private readonly teams: Team[];

  constructor() {
    this.teams = [
      {
        name: 'Jastrzębski Węgiel',
        value: '1'
      },
      {
        name: 'ZAKSA Kędzierzyn-Koźle',
        value: '10'
      },
      {
        name: 'Asseco Resovia',
        value: '4'
      },
      {
        name: 'Warta Zawiercie',
        value: '3'
      },
      {
        name: 'Projekt Warszawa',
        value: '2'
      },
      {
        name: 'Trefl Gdańsk',
        value: '5'
      },
      {
        name: 'Stal Nysa',
        value: '7'
      },
      {
        name: 'AZS Olsztyn',
        value: '8'
      },
      {
        name: 'Ślepsk Malow Suwałki',
        value: '12'
      },
      {
        name: 'LUK  Lublin',
        value: '6'
      },
      {
        name: 'GKS Katowice',
        value: '14'
      },
      {
        name: 'PGE Skra Bełchatów',
        value: '9'
      },
      {
        name: 'Barkom Każany Lwów',
        value: '11'
      },
      {
        name: 'Cuprum Lubin',
        value: '15'
      },
      {
        name: 'Czarni Radom',
        value: '16'
      },
      {
        name: 'BBTS Bielsko-Biała',
        value: '13'
      }
    ];
  }

  public getTeam(value: string): Team {
    const index = this.teams.findIndex((team) => {
      return team.value === value;
    });
    return this.teams[index];
  }

  public getTeams(): Team[] {
    return this.teams;
  }
}
