import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../services/form.service';
import {MatDialogRef} from '@angular/material/dialog';
import {SnackbarService} from '../../services/snackbar.service';
import {TeamService} from '../../services/team.service';

@Component({
  templateUrl: './game-dialog.component.html'
})
export class GameDialogComponent {
  public formGroup: FormGroup;
  public teams: any[];

  constructor(public formService: FormService,
              private matDialogRef: MatDialogRef<GameDialogComponent>,
              private snackbarService: SnackbarService,
              private teamService: TeamService) {
    this.formGroup = new FormGroup({
      awayTeam: new FormControl('', Validators.required),
      homeTeam: new FormControl('', Validators.required)
    });
    this.teams = this.teamService.getTeams();
  }

  public closeDialog(): void {
    this.matDialogRef.close();
  }

  public isFormInvalid(): boolean {
    return this.formGroup.invalid;
  }

  public async submitBooking(): Promise<any> {
    let booking = this.formGroup.value;
    this.snackbarService.showSnackbar('Η κράτηση ολοκληρώθηκε με επιτυχία!');
    this.matDialogRef.close('success');
  }
}
