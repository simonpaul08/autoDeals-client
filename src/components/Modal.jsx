import check from '../assets/check-icon.png';

const Modal = ({ handleCloseModal }) => {
    return (
        <div className='modal'>
            <div className="modal-content">
                <img src={check} alt="check" className="modal-image"/>
                <h3 className='modal-title'>Submitted Successfully</h3>
                <button className='modal-close-button' onClick={handleCloseModal}>Close</button>
            </div>
        </div>
    )
}

export default Modal