const XLSX = require('xlsx');

// Read the workbook
const workbook = XLSX.readFile('sales.xlsx');

// Get the first sheet (assuming it's the one you want to work with)
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Initialize sum
let sum = 0;

// Loop through the cells from C2 to C17
for(let i = 2; i <= 17; i++) {
    const cellAddress = 'C' + i;

    // Check if the cell exists in the worksheet
    if(worksheet[cellAddress]) {
        // Add the cell value to the sum
        sum += Number(worksheet[cellAddress].v);
    }
}

console.log('Sum of sales from C2 to C17:', sum);