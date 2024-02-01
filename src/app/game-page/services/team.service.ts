import {Injectable} from '@angular/core';
import {Team} from '../models/team';

@Injectable()
export class TeamService {
  private readonly teams: Team[];

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
