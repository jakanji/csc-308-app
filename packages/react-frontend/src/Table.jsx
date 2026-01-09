// src/Table.jsx
import React from "react";

function TableHeader(){
    return (
        <thead>
            <tr>
                <td>Name</td>
                <td>Job</td>
            </tr>
        </thead>
    );
}

function TableBody(props){ //prop is used to access data passed from parent component (MyApp)
    console.log(props.characterData);
  const rows = props.characterData.map((row, index) =>{
        return (
            <tr> 
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
      }
    );

    return(
        <tbody>
            {rows}
        </tbody>
    );
}

function Table(props){ //props let's us pass data through parent component (MyApp) to child component (Table)
    return (
        <table>
            <TableHeader />
            <TableBody characterData= {props.characterData} />
        </table>
    );
}

export default Table;