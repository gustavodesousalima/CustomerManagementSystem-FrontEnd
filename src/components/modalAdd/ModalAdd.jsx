import './modalAdd.css';

import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

// Certifique-se de ligar isso ao início do seu aplicativo
Modal.setAppElement('#root');

import PropTypes from 'prop-types';

function ModalAdd({ isOpen, onClose }) {  // Adicione as props aqui
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setPhone] = useState('');
    const [coord_x, setCoordX] = useState('');
    const [coord_y, setCoordY] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        // Crie um objeto com os dados do formulário
        const newClient = { name, email, telephone, coord_x, coord_y };

        // Faça uma requisição POST para a API
        axios.post('http://localhost:5001/clientes/post', newClient)
            .then(response => {
                console.log(response.data);
                // Feche o modal e limpe os campos do formulário
                onClose();  // Use a prop onClose aqui
                setName('');
                setEmail('');
                setPhone('');
                setCoordX('');
                setCoordY('');
            })
            .catch(error => {
                console.error('Erro ao adicionar cliente:', error);
            });
    }

    return (
        <div id='containerAdd'>
            <Modal isOpen={isOpen} onRequestClose={onClose}>  
                <h2>Adicionar Cliente</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" required />
                    <input type="tel" value={telephone} onChange={e => setPhone(e.target.value)} placeholder="Telefone" required />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="text" value={coord_x} onChange={e => setCoordX(e.target.value.slice(0, 1))} placeholder="Coordenada X" required />
                    <input type="text" value={coord_y} onChange={e => setCoordY(e.target.value.slice(0, 1))} placeholder="Coordenada Y" required />
                    <button id='buttonAdd' type="submit">Salvar</button>
                </form>
                <button id='buttonClose' onClick={onClose}>Fechar</button>  
            </Modal>
        </div>
    );
}

ModalAdd.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModalAdd;