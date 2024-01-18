import './modalOrderVisit.css';
import PropTypes from 'prop-types';

const VisitOrderModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            {/* Conteúdo do seu modal aqui */}
            <div className="modal-content">
                <p>Conteúdo do modal</p>
                <button onClick={onClose}>X</button>
            </div>
        </div>
    );
};

VisitOrderModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default VisitOrderModal;
