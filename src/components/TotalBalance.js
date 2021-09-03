export default function TotalBalance({ list }) {
  const amounts = list.map((item) => +item.price);
  const total = amounts.reduce((acc, cur) => (acc += cur), 0);
  const sign = total >= 0 ? '+' : '-';
  const color = total >= 0 ? 'income-box' : 'expense-box';
  return (
    <div className="total-balance">
      <h3>
        Balance:{' '}
        <span className={color}>
          {sign}${Math.abs(total)}
          {total < 0 ? '😭 ' : '😀'}
        </span>
      </h3>
    </div>
  );
}
