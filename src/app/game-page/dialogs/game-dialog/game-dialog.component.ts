import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../services/form.service';
import {MatDialogRef} from '@angular/material/dialog';
import {TeamService} from '../../services/team.service';

@Component({
  styleUrls: ['./game-dialog.component.scss'],
  templateUrl: './game-dialog.component.html'
})
export class GameDialogComponent {
  public formGroup: FormGroup;
  public teams: any[];

  constructor(public formService: FormService,
              private matDialogRef: MatDialogRef<GameDialogComponent>,
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

  public async submitGame(): Promise<any> {
    this.matDialogRef.close(this.formGroup.value);
  }
}
