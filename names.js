const XLSX = require('xlsx');
const workbook = XLSX.readFile('sales.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const names = [];

for (const cellAddress in worksheet) {
  if (cellAddress.startsWith('C') && cellAddress !== 'C1') {
    const cell = worksheet[cellAddress];
    if (cell && cell.v) {
      names.push(cell.v);
    }
  }
}

console.log(names);