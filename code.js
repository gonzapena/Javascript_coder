

 // Agregamos un event listener al botón para que llame a la función "calculateTip" cuando se haga click en él
 document.getElementById('calculate-btn').addEventListener('click', calculateTip);

 function calculateTip() {
   const amount = parseInt(document.getElementById('amount').value);
   const n_people_pay = parseInt(document.getElementById('people').value);
   const tip = parseInt(document.getElementById('tip').value);
   const bill_details= new Table(amount ,n_people_pay , tip);
   table_tips.push(bill_details);
   localStorage.setItem('table_tips', JSON.stringify(table_tips)); // Guardamos la tabla de propinas en localStorage

   function DivideBill (amount,n_people_pay,tip){
     let amount_tip = (amount * tip) / 100;
     let bill_tip = amount + amount_tip ;
     let total_per_person = bill_tip / n_people_pay;
     return total_per_person
   }

   if( amount > 0){
     const totalAmount = (((amount * tip) / 100 + amount));
     const totalPerPerson = DivideBill(amount, n_people_pay,tip);
     const bill = table_tips.find(table => table.amount === amount);
     let billDetails = '';
     if (bill) {
       billDetails = `Dato total de la cuenta: Monto ${bill.amount}`;
     } else {
       billDetails = "No se encontró la cuenta.";
     }
     document.getElementById('total').innerHTML = `El total a pagar incluyendo propina es de: ${totalAmount}`;
     document.getElementById('perPerson').innerHTML = `El total a pagar por persona es de: ${totalPerPerson}`;
     document.getElementById('billDetails').innerHTML = billDetails;
     // Workshop - agregar resultados
     let workshopResults = document.getElementById('workshop-results');
     let p = document.createElement('p');
     let text = document.createTextNode(`Monto total: ${amount}, Número de personas: ${n_people_pay}, Porcentaje de propina: ${tip}`);
     p.appendChild(text);
     workshopResults.appendChild(p);
    }
    else if( amount <= 0){
      alert("No valido");
    }
 }

 class Table {
   constructor(amount,people,tip){
     this.amount = amount;
     this.n_people_pay = people;
     this.tip = tip
   }
 }

 let table_tips = JSON.parse(localStorage.getItem('table_tips')) || []; // Obtenemos la tabla de propinas de localStorage o la inicializamos como un array vacío si no existe
