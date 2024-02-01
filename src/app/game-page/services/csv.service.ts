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
    console.log('enter10')
    this.csv = '';
    console.log('enter11')
    this.data = data;
    console.log('enter12')
    this.fileName = fileName;
    console.log('enter13')
    this.headers = headers;
    console.log('enter14')
    this.csv += CsvService.BOM;
    console.log('enter15')
    this.getHeaders();
    console.log('enter16')
    this.getBody();
    console.log('enter1')
    const blob = new Blob([this.csv], {type: 'text/csv;charset=utf8;'});
    console.log('enter2')
    const link = document.createElement('a');
    console.log('enter3')
    link.href = URL.createObjectURL(blob);
    console.log('enter4')
    link.setAttribute('visibility', 'hidden');
    console.log('enter5')
    link.download = this.fileName.replace(/ /g, '_') + '.csv';
    console.log('enter6')
    document.body.appendChild(link);
    console.log('enter7')
    link.click();
    console.log('enter8')
    document.body.removeChild(link);
    console.log('enter9')
  }

  private getBody(): void {
    for (const rowData of this.data) {
      let row = '';
      for (const header of this.headers) {
        row += rowData[header] + CsvService.DEFAULT_FIELD_SEPARATOR;
      }
      row = row.slice(0, -1);
      this.csv += row + CsvService.EOL;
    }
  }

  private getHeaders(): void {
    let row = '';
    for (const header of this.headers) {
      row += header + CsvService.DEFAULT_FIELD_SEPARATOR;
    }
    row = row.slice(0, -1);
    this.csv += row + CsvService.EOL;
  }
}
