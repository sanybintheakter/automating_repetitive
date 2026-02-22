const employees = [
  { name: "Ayesha", 
    hourlyRate: 18.5, 
    hoursWorked: 38 },

  { name: "Saika", 
    hourlyRate: 22, 
    hoursWorked: 45 },

  { name: "Nadia", 
    hourlyRate: 16, 
    hoursWorked: 52 },

  { name: "Rafia", 
    hourlyRate: 20, 
    hoursWorked: 40 },
];

function round2(num) 
{
  return Number(num.toFixed(2));
}  //to round up amount to 2 decimals 

function calculateBasePay(rate, hours) 
{
  const baseHours = Math.min(hours, 40);
  return round2(baseHours * rate);
}

function calculateOvertimePay(rate, hours) 
{
  const overtimeHours = Math.max(hours - 40, 0);
  return round2(overtimeHours * rate * 1.5);
}

function calculateTaxes(grossPay) 
{
  const taxRate = 0.15;
  return round2(grossPay - grossPay * taxRate);
}

function processPayroll(employee) 
{
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(
    employee.hourlyRate,
    employee.hoursWorked
  );
  const grossPay = round2(basePay + overtimePay);
  const netPay = calculateTaxes(grossPay);
  return {
    name: employee.name,
    basePay,
    overtimePay,
    grossPay,
    netPay,
  };
}

function displayPayroll(payroll) 
{
  console.log(`Name: ${payroll.name}`);
  console.log(`Base Pay: $${payroll.basePay}`);
  console.log(`Overtime Pay: $${payroll.overtimePay}`);
  console.log(`Gross Pay: $${payroll.grossPay}`);
  console.log(`Net Pay: $${payroll.netPay}`);
}
for (const employee of employees) 
{
  const payroll = processPayroll(employee);
  console.log(payroll);          
}