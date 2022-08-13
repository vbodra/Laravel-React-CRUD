import React from 'react';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';

export default function TableActionButtons(props) {
    return (
      <div className="btn-group-sm" role="group" aria-label="updateModal">
        <button
          type="button"
          className="btn btn-outline-primary"
          data-toggle="modal"
          data-target={"#updateModal"+ props.data.id}>
            Update
        </button>
        <UpdateModal modalId={props.data.id} />

        <button
          type="button"
          className="btn btn-outline-danger"
          data-toggle="modal"
          data-target={"#deleteModal"+props.data.id}>
            Delete
        </button>
        <DeleteModal modalId={props.data.id} />
      </div>
    );
}
