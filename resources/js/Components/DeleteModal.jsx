import React from 'react';
import UpdateUserForm from './UpdateUserForm';

export default function DeleteModal(props) {
    async function deleteUser() {
      await axios.delete(`/User/${props.modalId}`);
      
      location.reload();
    }

    return (
      <div className="modal fade" id={"deleteModal"+props.modalId} tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Deletar usuário</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Esta ação não pode ser desfeita.<br/> Tem certeza?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-outline-danger"
                onClick={() => deleteUser()}
              >Deletar</button>
            </div>
          </div>
        </div>
      </div>
    );
}