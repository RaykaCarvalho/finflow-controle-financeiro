import './Summary.css';

function Summary({ transactions }) {
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "entrada") {
        acc.entradas += transaction.value;
        acc.total += transaction.value;
      } else if (transaction.type === "saida") {
        acc.saidas += transaction.value;
        acc.total -= transaction.value;
      }
      return acc;
    },
    { entradas: 0, saidas: 0, total: 0 }
  );

  // formatar valores em R$ com vírgula
  const formatCurrency = (value) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div className="summary-container">
      <div className="card entrada">
        <h3>Entradas</h3>
        <p className="value">{formatCurrency(summary.entradas)}</p>
      </div>

      <div className="card saida">
        <h3>Saídas</h3>
        <p className="value">{formatCurrency(summary.saidas)}</p>
      </div>

      <div className="card total">
        <h3>Total</h3>
        <p className="value">{formatCurrency(summary.total)}</p>
      </div>
    </div>
  );
}

export default Summary;