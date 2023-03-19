const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/api/calculateTip', (req, res) => {
  const amount = req.body.amount;
  const n_people_pay = req.body.n_people_pay;
  const tip = req.body.tip;

  const totalPerPerson = DivideBill(amount, n_people_pay, tip);

  res.json({ totalPerPerson });
});

function DivideBill(amount, n_people_pay, tip) {
  let amount_tip = (amount * tip) / 100;
  let bill_tip = amount + amount_tip;
  let total_per_person = bill_tip / n_people_pay;
  return total_per_person;
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});