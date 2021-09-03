const IncExpBalance = ({ list }) => {
  const amounts = list.map((item) => +item.price);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, cur) => (acc += cur), 0);
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, cur) => (acc += cur), 0);

  return (
    <div className="inc-exp-container">
      <div className="income-box">
        <h3>Income</h3>
        <p>${income}</p>
      </div>
      <div className="expense-box">
        <h3>Expense</h3>
        <p>-${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncExpBalance;
