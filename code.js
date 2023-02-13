
// calculadora de propinas
// object
class Table {
    constructor(nombre,apellido,edad){
        this.amount = nombre;
        this.n_people_pay = apellido;
        this.tip = edad
    }
}

// array
let table_tips = [];

for(let table_data of table_tips  ){
   
    amount = parseInt( prompt('Cuánto es el total que se debe pagar?: '));
    n_people_pay = parseInt( prompt ('¿Cuántas personas van a pagar?: '));
    tip = parseInt(prompt ('¿Cuál es el porcentaje de propina que se va a pagar?: '));
    bill_details= new Table(amount ,n_people_pay , tip);

    table_tips.push(new_customer)

    function DivideBill (amount,n_people_pay,tip){ 
        console.log(amount,n_people_pay)
        let amount_tip = (amount * tip) / 100;
        let bill_tip = amount + amount_tip ;
        let total_per_person = bill_tip / n_people_pay;

        return total_per_person
      }

    if( amount > 0){
        alert("El total a pagar incluyendo propina es de:" + (((amount * tip) / 100 + amount)));  
        alert("El total a pagar por persona es de: " + DivideBill(amount, n_people_pay,tip) ); 
        alert("Dato total de la cuenta: Monto " + table_tips.amount , "personas" + table_tips.amount , "tip a pagar" + table_tips.tip + "%"); 
    }

    else if( amount <= 0){
        alert("No valido");
        break;
    }

}
