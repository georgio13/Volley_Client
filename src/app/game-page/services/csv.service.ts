import {Injectable} from '@angular/core';

@Injectable()
export class CsvService {
  private static BOM = '\ufeff';
  private static DEFAULT_FIELD_SEPARATOR = ';';
  private static EOL = '\r\n';

  private csv: string;
  private data: any;
  private fileName: string;
  private headers: any[];

  constructor() {
    this.csv = '';
    this.fileName = '';
    this.headers = [];
  }

  public generateCsv(data: any, fileName: string, headers: any[]): void {
    this.csv = '';
    this.data = data;
    this.fileName = fileName;
    this.headers = headers;
    this.csv += CsvService.BOM;
    this.getHeaders();
    this.getBody();
    const blob = new Blob([this.csv], {type: 'text/csv;charset=utf8;'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('visibility', 'hidden');
    link.download = this.fileName.replace(/ /g, '_') + '.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private getBody(): void {
    for (const rowData of this.data) {
      let row = '';
      for (let y = 0; y < this.headers.length; y++) {
        const field = this.headers[y].name;
        row += rowData[field] + CsvService.DEFAULT_FIELD_SEPARATOR;
      }
      row = row.slice(0, -1);
      this.csv += row + CsvService.EOL;
    }
  }

  private getHeaders(): void {
    let row = '';
    for (const header of this.headers) {
      row += header.title + CsvService.DEFAULT_FIELD_SEPARATOR;
    }
    row = row.slice(0, -1);
    this.csv += row + CsvService.EOL;
  }
}
