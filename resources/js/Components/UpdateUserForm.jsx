import React, { useState } from 'react';

export default function UpdateUserForm(props) {
    return (
      <div className="container-sm">
        <form>
          <div className="mb-3">
            <label htmlFor="inputNome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="inputNome" value={props.data.name}
              onChange={(e) => props.setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="inputIdade" className="form-label">Idade</label>
            <input type="number" className="form-control" id="inputIdade" value={props.data.age}
              onChange={(e) => props.setAge(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputNascimento" className="form-label">Nascimento</label>
            <input type="date" className="form-control" id="inputNascimento" value={props.data.birth_date}
              onChange={(e) => props.setBirthDate(e.target.value)} />
          </div>
        </form>
      </div>
    );
}
