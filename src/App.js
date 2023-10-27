import { useEffect, useState } from 'react';
import './App.css';

function App() {
    let [lista, setLista] = useState([]);
    let [novoItem, setnovoItem] = useState([""]);

  useEffect(() => {
    setLista(["Tarefa 1","Tarefa 2","Tarefa 3","Tarefa 4"]);
  }, []);

  return (
    <div className='container'>
      <div className='new-item'>
    <input placeholder="Tarefa" value={novoItem} onChange={value => setnovoItem(value.target.value)}type='text'/>
    <button onClick={() => adicionarNovoItem()} >Adicionar</button>
    </div>
   <ul className="todo-list">
      {lista.map((item, index) => (
        <li key={index} className="todo-item">
          {item}
          <button onClick={() => deletarItem(index)}>
            Deletar
          </button>
        </li>
      ))}
   </ul>
   </div>
  );

  function adicionarNovoItem() {
    if (novoItem.length <= 0) {
      alert("Por favor, digite algo no campo 'Tarefa'.")
      return;
    }

    let itemIndex = lista.indexOf(novoItem);
    if (itemIndex >= 0) {
      alert("Você já adicionou essa tarefa.")
      return;
    }

    setLista([...lista, novoItem]);
    setnovoItem("");
  }

  function deletarItem(index) {
    let tempArray = [...lista];
    tempArray.splice(index, 1);

    setLista(tempArray);
  }
}

export default App;
