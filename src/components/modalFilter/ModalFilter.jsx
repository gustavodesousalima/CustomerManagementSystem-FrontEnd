import PropTypes from 'prop-types';
import './modalFilter.css';

function ModalFilter({ isOpen, onClose, customerData }) {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {customerData && (
          <div>
            <h2>Dados do Cliente</h2>
            <p>Nome: {customerData.name}</p>
            <p>Email: {customerData.email}</p>
            <p>Telefone: {customerData.telephone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

ModalFilter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  customerData: PropTypes.object,
};

export default ModalFilter;