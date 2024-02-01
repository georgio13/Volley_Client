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
  public awayTeam: Team;
  public homeTeam: Team;
  public sets: Set[];

  constructor(private matDialog: MatDialog,
              private snackbarService: SnackbarService,
              private teamService: TeamService) {
    this.awayTeam = this.teamService.getTeam('bra');
    this.homeTeam = this.teamService.getTeam('iri');
    this.sets = [];
    this.sets.push({awayTeam: 0, homeTeam: 0});
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
