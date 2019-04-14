import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const Customer = ({id,image,name,birth,gender,job}) => {
    return(
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell><img src={image} alt="profile"/></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{birth}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{job}</TableCell>
        </TableRow>
    )
}

export default Customer;
