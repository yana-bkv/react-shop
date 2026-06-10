import Offcanvas from 'react-bootstrap/Offcanvas';

interface ProductCartDrawerProps {
    open: boolean,
    handleClose: () => void
}

function ProductCartDrawer({ open, handleClose }: ProductCartDrawerProps) {
    return (
        <>
            <Offcanvas show={open} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Chosen products</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ProductCartDrawer;