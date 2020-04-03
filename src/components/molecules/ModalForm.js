import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

export default function modalForm({title, show, actions, renderForm}) {
    return (
        <Modal show={show} onHide={actions.cancel}>
            <Modal.Header closeButton={actions.cancel}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {renderForm()}
            </Modal.Body>

            <Modal.Footer>
                {actions.map(action => {
                    return (
                        <Button
                            key={action.title}
                            variant={action.isPrimary ? "primary" : "secondary"}
                            onClick={action.handle}
                        >
                            {action.title}
                        </Button>
                    )
                })}
            </Modal.Footer>
        </Modal>
    )
}