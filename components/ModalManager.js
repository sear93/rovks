import Modal from "./Modal";

const ModalManager = ({closeModal, modal}) => {

    return (
        <>
            <Modal closeModal={closeModal} open={modal === 'earlyAccess'}>
                <p>Early Access</p>
            </Modal>
            <Modal closeModal={closeModal} open={modal === 'video'}>
                <p>Video</p>
            </Modal>
            <Modal closeModal={closeModal} open={modal === 'test'}>
                <p>Test Modal Window</p>
            </Modal>
        </>
    );
};

export default ModalManager;
