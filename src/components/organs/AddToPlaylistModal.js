import AddPlaylistForm from "../../forms/AddPlaylistForm";
import React from "react";
import ModalForm from "../molecules/ModalForm";

export default function addToPlaylistModal(props) {
    return (
        <ModalForm
            title={"Add to your playlist"}
            renderForm={() => <AddPlaylistForm fields={props.fields}/>}
            {...props}
        />
    )
}