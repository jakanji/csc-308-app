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

function TableBody(){
    return(
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
               <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>
    );
}

function Table(){
    return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
    );
}

export default Table;