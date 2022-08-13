import React from 'react';

export default function TableRow(props) {
    return (
      <tr>
        <th scope="row">{props.data.id}</th>
        <td> {props.data.name} </td>
        <td>{props.data.age}</td>
        <td>{props.data.birth_date}</td>
      </tr>
    );
}