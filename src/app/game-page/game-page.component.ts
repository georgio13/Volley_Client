import {Component} from '@angular/core';
import {GameDialogComponent} from './dialogs/game-dialog/game-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Set} from './models/set';
import {SnackbarService} from './services/snackbar.service';
import {TeamService} from './services/team.service';
import {Team} from './models/team';

@Component({
  styleUrls: ['./game-page.component.scss'],
  templateUrl: './game-page.component.html'
})
export class GamePageComponent {
  public awaySets: number;
  public awayTeam: Team;
  public gameEnded: boolean;
  public hasTimeout: boolean;
  public homeSets: number;
  public homeTeam: Team;
  private setLimit: number;
  public sets: Set[];

  constructor(private matDialog: MatDialog,
              private snackbarService: SnackbarService,
              private teamService: TeamService) {
    this.awaySets = 0;
    this.awayTeam = this.teamService.getTeam('bra');
    this.gameEnded = false;
    this.hasTimeout = false;
    this.homeSets = 0;
    this.homeTeam = this.teamService.getTeam('iri');
    this.sets = [];
    this.addSet();
  }

  public addAwayPoint(): void {
    let latestSet = this.sets[this.sets.length - 1];
    latestSet.awayTeam += 1;
    if (latestSet.awayTeam >= this.setLimit && latestSet.awayTeam - latestSet.homeTeam >= 2) {
      this.awaySets += 1;
      if (this.awaySets === 3) {
        this.gameEnded = true;
      } else {
        this.addSet();
      }
    }
  }

  public addHomePoint(): void {
    let latestSet = this.sets[this.sets.length - 1];
    latestSet.homeTeam += 1;
    if (latestSet.homeTeam >= this.setLimit && latestSet.homeTeam - latestSet.awayTeam >= 2) {
      this.homeSets += 1;
      if (this.homeSets === 3) {
        this.gameEnded = true;
      } else {
        this.addSet();
      }
    }
  }

  private addSet(): void {
    this.setLimit = this.homeSets === 2 && this.awaySets === 2 ? 15 : 25;
    this.sets.push({awayTeam: 0, homeTeam: 0});
  }

  public disableAddPointButton(): boolean {
    return this.hasTimeout || this.gameEnded;
  }

  public openGameDialog(): void {
    const dialogReference = this.matDialog.open(GameDialogComponent);
    dialogReference.afterClosed().subscribe(async (result) => {
      if (result) {
        this.awayTeam = this.teamService.getTeam(result.awayTeam);
        this.homeTeam = this.teamService.getTeam(result.homeTeam);
        this.snackbarService.showSnackbar('Το παιχνίδι αρχικοποιήθηκε με επιτυχία!');
      }
    });
  }
}
