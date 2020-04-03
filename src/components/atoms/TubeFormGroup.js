import Form from "react-bootstrap/Form";
import React from "react";

export default function TubeFormGroup({placeholder, label, value, setValue, mutedText}) {
    return (
        <Form.Group controlId={label}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Form.Text className="text-muted">
                {mutedText}
            </Form.Text>
        </Form.Group>
    )
}