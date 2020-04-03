import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import TubeFormGroup from "../components/atoms/TubeFormGroup";

function AddPlaylistForm({fields}) {
    return (
        <Form>
            {fields.map(field => {
                return (
                    <TubeFormGroup
                        key={field.label}
                        label={field.label}
                        value={field.value}
                        setValue={field.setValue}
                        mutedText={field.mutedText}
                    />
                )
            })}
        </Form>
    )
}

export default AddPlaylistForm