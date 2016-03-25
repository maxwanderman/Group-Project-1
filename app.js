
var atticus = {
  name: "Atticus",
  employeeNumber: "2405",
  salary: "47000",
  rating: 3,
}
var jem = {
  name: "Jem",
  employeeNumber: "62347",
  salary: "63500",
  rating: 4,
}
var boo = {
  name: "Boo",
  employeeNumber: "11435",
  salary: "54000",
  rating: 3,
}
var scout = {
  name: "Scout",
  employeeNumber: "6243",
  salary: "74750",
  rating: 5,
}

var employees = [atticus, jem, boo, scout];

for(i=0;i<employees.length;i++){
  console.log(totalComp(employees[i]));
}

function sti (robot){
  var bonus = 0;
  switch(robot.rating){
    case 3:
      bonus = 0.04;
      break;
    case 4:
      bonus = 0.06;
      break;
    case 5:
      bonus = 0.10;
      break;
    }
    if(robot.employeeNumber.length === 4){
      bonus += 0.05;
    }
    if(robot.salary > 65000){
      bonus -= 0.01;
    }
    if(bonus > 0.13){
      bonus = 0.13;
    }
    return(bonus);
}

function totalComp(worker){
  return {name: worker.name,
    bonusPercentage: (sti(worker) * 100).toString() + '%' ,
    totalSalary:'$' + (parseInt(worker.salary) + (worker.salary * sti(worker))).toLocaleString(),
    totalBonus: '$' + Math.round(worker.salary * sti(worker)) };
}
