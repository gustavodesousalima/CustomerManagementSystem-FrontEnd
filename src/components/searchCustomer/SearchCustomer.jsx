import { useState } from 'react';
import VisitOrderModal from '../modalOrderVisit/ModalOrderVisit';
import ModalFilter from '../modalFilter/ModalFilter';
import ModalAdd from '../modalAdd/ModalAdd';
import axios from 'axios';
import './searchCustomer.css';

function SearchBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerData, setCustomerData] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isOrderVisitModalOpen, setIsOrderVisitModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleOrderVisitClick = () => {
    setIsOrderVisitModalOpen(true);
  };

  const handleCloseOrderVisitModal = () => {
    setIsOrderVisitModalOpen(false);
  };

  const handleCloseModal = () => {
    console.log('Fechando o modal');
    setIsModalOpen(false);
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get('http://localhost:5001/clients/getcustomers/');

      const clienteEncontrado = response.data.filter(cliente =>
        cliente.name.trim().toLowerCase() === customerName.trim().toLowerCase()
      )[0];

      if (clienteEncontrado) {
        setCustomerData(clienteEncontrado);
        setIsModalOpen(true);
      } else {
        window.alert('Cliente não encontrado.');
      }
    } catch (error) {
      window.alert('Erro ao buscar dados do cliente.');
      console.error('Erro ao buscar dados do cliente:', error);
    }
  };

  const handleInputChange = (event) => {
    setCustomerName(event.target.value);
  };

  return (
    <div id='containerSearch'>
      <input
        id='inputSearch'
        type="text"
        placeholder=" Digite o nome para filtrar..."
        value={customerName}
        onChange={handleInputChange}
      />
      <button id='buttonSearch' onClick={handleSearchClick}>
        Buscar
      </button>
      <button id='orderVisit' onClick={handleOrderVisitClick}>
        Ordem de visitação
      </button>
      <button id='buttonAdd' onClick={handleAddClick}>Adicionar</button>

      <VisitOrderModal isOpen={isOrderVisitModalOpen} onClose={handleCloseOrderVisitModal} />
      <ModalFilter isOpen={isModalOpen} onClose={handleCloseModal} customerData={customerData} />
      <ModalAdd isOpen={isAddModalOpen} onClose={handleCloseAddModal} />
    </div>
  );
}

export default SearchBar;
