import React, {useState} from 'react';
import UpdateUserForm from './UpdateUserForm';

export default function UpdateModal(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [birth_date, setBirthDate] = useState();

    async function updateUser() {
      await axios.put(`/User/${props.modalId}`, {name, age, birth_date});
      
      location.reload();
    }

    return (
      <div className="modal fade" id={"updateModal"+props.modalId} tabIndex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateModalLabel">Atualizar usuário</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <UpdateUserForm setAge={setAge} setName={setName} setBirthDate={setBirthDate}
                data={{name, age, birth_date}} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-outline-primary"
                onClick={() => updateUser()}
              >Salvar mudanças</button>
            </div>
          </div>
        </div>
      </div>
    );
}