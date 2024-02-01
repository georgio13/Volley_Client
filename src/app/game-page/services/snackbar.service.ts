import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
  constructor(private matSnackBar: MatSnackBar) {
  }

  public showSnackbar(message: string): void {
    this.matSnackBar.open(message, '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
