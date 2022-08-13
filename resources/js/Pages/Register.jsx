import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import axios from 'axios';

export default function Register() {
  async function createUser() {
      const createdUser = await axios.post('/User', {name, age, birth_date});
      return createdUser;
  }

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [birth_date, setBirthDate] = useState();

  return (
        <>
        <Head title='Register'/>
        <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h2 className="font-semibold text-center text-xl text-gray-800 leading-tight">Registrar usuário</h2>
              </div>
        </header>
        <div className="container-sm" style={{paddingTop: "30px"}}>  
        <form>
          <div className="mb-3">
            <label htmlFor="inputNome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="inputNome" value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="inputIdade" className="form-label">Idade</label>
            <input type="number" className="form-control" id="inputIdade" value={age}
              onChange={(e) => setAge(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputNascimento" className="form-label">Nascimento</label>
            <input type="date" className="form-control" id="inputNascimento" value={birth_date}
              onChange={(e) => setBirthDate(e.target.value)} />
          </div>
          <button type="button" className="btn btn-outline-primary" 
            onClick={() => createUser()}>Criar</button>
        </form>
        </div>
        </>
  )
}
