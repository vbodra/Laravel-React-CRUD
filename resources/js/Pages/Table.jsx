import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import axios from 'axios';
import TableRow from '@/Components/TableRow';

export default function UserTable(props) {
    const [users, setUsers] = useState([])

    async function getUsers () {
      const { data } = await axios.get('/User');
      return data;
    }
  
    useEffect(async () => {
      const allUsers = await getUsers();

      setUsers(allUsers);
    }, [])

    return (
        <>
          <Head title="Table" />
          <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h2 className="font-semibold text-center text-xl text-gray-800 leading-tight">Users Table</h2>
              </div>
          </header>

          <div class="container" style={{paddingTop: "30px"}}>
            <table class="table table-hover table-success">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Idade</th>
                  <th scope="col">Aniversário</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user) => {
                    return <TableRow key={user.id} data={user} />
                  })
                }
              </tbody>

              </table>
            </div>
        </>
    );
}
