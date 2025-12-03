import "./TransactionTable.css";

function TransactionTable({ transactions }) {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Tipo</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        {transactions.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center", padding: "16px" }}>
              Nenhuma transação cadastrada
            </td>
          </tr>
        ) : (
          transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>R$ {t.value.toFixed(2)}</td>
              <td>{t.type}</td>
              <td>{t.category}</td>
              <td>{t.date}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default TransactionTable;
