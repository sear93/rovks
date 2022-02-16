import Modal from "./Modal";

export const modalNames = {
    earlyAccess: 'earlyAccess', video: 'video', test: 'test'
};

const ModalManager = ({closeModal, modal}) => {

    return (<>
        <Modal closeModal={closeModal} open={modal === modalNames.earlyAccess}>
            <p>Early Access</p>
        </Modal>
        <Modal closeModal={closeModal} open={modal === modalNames.video}>
            <p>Video</p>
        </Modal>
        <Modal closeModal={closeModal} open={modal === modalNames.test}>
            <p>Test Modal Window</p>
        </Modal>
    </>);
};

export default ModalManager;
