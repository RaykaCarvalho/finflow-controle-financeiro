import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import NewTransactionModal from "./components/NewTransactionModal/NewTransactionModal";

function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("finflow-transactions");
    return saved ? JSON.parse(saved) : [];
  });

 
  useEffect(() => {
    localStorage.setItem(
      "finflow-transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  
  function handleAddTransaction(newTransaction) {
    setTransactions((prev) => [newTransaction, ...prev]);
  }

  return (
    <>
      <Header />

      <main className="container">
        <Summary transactions={transactions} />

      
        <button
          className="new-transaction-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Nova Transação
        </button>

        <TransactionTable transactions={transactions} />
      </main>

      
      <NewTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTransaction}
      />
    </>
  );
}

export default App;
