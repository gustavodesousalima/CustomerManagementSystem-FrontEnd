import { useState, useEffect } from 'react';
import './modalOrderVisit.css';
import PropTypes from 'prop-types';

const VisitOrderModal = ({ isOpen, onClose }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (isOpen) {
            fetch('http://localhost:5001/clients/calculaterouter') // Substitua com a URL da sua API
                .then(response => response.json())
                .then(data => setData(data));
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
            <h1>Rotas de visitação</h1>
                <button onClick={onClose}>Fechar</button>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Distância</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.distance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

VisitOrderModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default VisitOrderModal;
