import React from 'react';
import { Head } from '@inertiajs/inertia-react';

export default function UserTable(props) {
    return (
        <>
          <Head title="Table" />
          <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h2 className="font-semibold text-xl text-gray-800 leading-tight">Users Table</h2>
              </div>
          </header>

          <div class="container">
            <table class="table table-hover table-active table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Idade</th>
                  <th scope="col">Aniversário</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>

              </table>
            </div>
        </>
    );
}
