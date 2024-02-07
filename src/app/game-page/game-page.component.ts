import {Component} from '@angular/core';
import {CsvService} from './services/csv.service';
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
  public ballTeam: Team;
  public gameEnded: boolean;
  public hasTimeout: boolean;
  private intervalID: any;
  public homeSets: number;
  public homeTeam: Team;
  private setBallTeam: Team;
  private setLimit: number;
  public sets: Set[];
  public timeoutLimit: number;
  public timeoutTime: number;
  public winnerTeam: Team;

  constructor(private csvService: CsvService,
              private matDialog: MatDialog,
              private snackbarService: SnackbarService,
              private teamService: TeamService) {
    this.awaySets = 0;
    this.gameEnded = false;
    this.hasTimeout = false;
    this.homeSets = 0;
    this.sets = [];
    this.timeoutLimit = 60;
  }

  public addAwayPoint(): void {
    let latestSet = this.sets[this.sets.length - 1];
    latestSet.awayTeam += 1;
    this.ballTeam = this.awayTeam;
    if (latestSet.awayTeam >= this.setLimit && latestSet.awayTeam - latestSet.homeTeam >= 2) {
      this.awaySets += 1;
      if (this.awaySets === 3) {
        this.gameEnded = true;
        this.winnerTeam = this.awayTeam;
      } else {
        this.addSet();
      }
    } else if ((latestSet.awayTeam === 8 && latestSet.timeouts === 0) ||
      (latestSet.awayTeam === 16 && latestSet.timeouts === 1)) {
      latestSet.timeouts += 1;
      this.callTimeout();
    }
  }

  public addHomePoint(): void {
    let latestSet = this.sets[this.sets.length - 1];
    latestSet.homeTeam += 1;
    this.ballTeam = this.homeTeam;
    if (latestSet.homeTeam >= this.setLimit && latestSet.homeTeam - latestSet.awayTeam >= 2) {
      this.homeSets += 1;
      if (this.homeSets === 3) {
        this.gameEnded = true;
        this.winnerTeam = this.homeTeam;
      } else {
        this.addSet();
      }
    } else if ((latestSet.homeTeam === 8 && latestSet.timeouts === 0) ||
      (latestSet.homeTeam === 16 && latestSet.timeouts === 1)) {
      latestSet.timeouts += 1;
      this.callTimeout();
    }
  }

  private addSet(): void {
    if (this.sets.length === 0 || this.sets.length === 4) {
      this.setBallTeam = Math.round(Math.random()) === 0 ? this.homeTeam : this.awayTeam;
    } else {
      this.setBallTeam = this.setBallTeam.value === this.homeTeam.value ? this.awayTeam : this.homeTeam;
    }
    this.ballTeam = Object.assign({}, this.setBallTeam);
    this.setLimit = this.homeSets === 2 && this.awaySets === 2 ? 15 : 25;
    this.sets.push({awayTeam: 0, homeTeam: 0, timeouts: 0});
  }

  public callTimeout(): void {
    this.hasTimeout = true;
    this.timeoutTime = 0;
    this.intervalID = setInterval((): void => {
      this.timeoutTime++;
      if (this.timeoutTime >= this.timeoutLimit) {
        this.hasTimeout = false;
        clearInterval(this.intervalID);
      }
    }, 1000);
  }

  public disableButtons(): boolean {
    return this.hasTimeout || this.gameEnded;
  }

  public exportCSV(): void {
    const data = [{
      'HomeTeam': this.homeTeam.name.toUpperCase(),
      'AwayTeam': this.awayTeam.name.toUpperCase(),
      'HomeSets': this.homeSets,
      'AwaySets': this.awaySets,
      'HomePoints': this.sets.reduce((acc: number, set: Set) => acc + set.homeTeam, 0),
      'AwayPoints': this.sets.reduce((acc: number, set: Set) => acc + set.awayTeam, 0)
    }];
    const headers = ['HomeTeam', 'AwayTeam', 'HomeSets', 'AwaySets', 'HomePoints', 'AwayPoints'];
    this.csvService.generateCsv(data, 'export', headers);
  }

  public openGameDialog(): void {
    const dialogReference = this.matDialog.open(GameDialogComponent);
    dialogReference.afterClosed().subscribe(async (result) => {
      if (result) {
        this.awayTeam = this.teamService.getTeam(result.awayTeam);
        this.homeTeam = this.teamService.getTeam(result.homeTeam);
        this.addSet();
        this.snackbarService.showSnackbar('Το παιχνίδι αρχικοποιήθηκε με επιτυχία!');
      }
    });
  }

  public showBallDot(team: Team): boolean {
    return team.value === this.ballTeam.value && !this.gameEnded;
  }
}
