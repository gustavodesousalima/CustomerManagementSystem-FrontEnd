import { useState } from 'react';
import VisitOrderModal from '../modalOrderVisit/ModalOrderVisit';
import './searchCustomer.css';

function SearchBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderVisitClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id='containerSearch'>
      <input
        id='inputSearch'
        type="text"
        placeholder=" Digite o nome do cliente..."
      />
      <button id='buttonSearch'>Buscar</button>
      <button id='orderVisit' onClick={handleOrderVisitClick}>
        Ordem de visitação
      </button>

      {/* Renderiza o modal */}
      <VisitOrderModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default SearchBar;
