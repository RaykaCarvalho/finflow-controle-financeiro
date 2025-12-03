import { useState } from "react";
import "./NewTransactionModal.css";

function NewTransactionModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  // Estados do formulário
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !value || !category || !date) {
      alert("Preencha todos os campos!");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      value: Number(value),
      type,
      category,
      date,
    };

    onSubmit(newTransaction);

    // Limpar formulário
    setTitle("");
    setValue("");
    setType("entrada");
    setCategory("");
    setDate("");

    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Nova Transação</h2>

        <button className="close-btn" onClick={onClose}>X</button>

        <form onSubmit={handleSubmit} className="form">
          <label>
            Descrição
            <input
              type="text"
              placeholder="Ex: Salário, Mercado..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            Valor (R$)
            <input
              type="number"
              placeholder="0.00"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </label>

          <div className="type-container">
            <label>
              <input
                type="radio"
                name="type"
                value="entrada"
                checked={type === "entrada"}
                onChange={() => setType("entrada")}
              />
              Entrada
            </label>

            <label>
              <input
                type="radio"
                name="type"
                value="saida"
                checked={type === "saida"}
                onChange={() => setType("saida")}
              />
              Saída
            </label>
          </div>

          <label>
            Categoria
            <input
              type="text"
              placeholder="Ex: Alimentação, Casa, Lazer..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>

          <label>
            Data
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <button type="submit" className="submit-btn">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTransactionModal;
