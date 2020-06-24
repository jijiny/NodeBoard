import React from 'react';
import { Table, TableRow, TableCell, TableHead, TableBody, Button } from '@material-ui/core';


class BoardList extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.boardNo}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.hit}</TableCell>
                <TableCell>{this.props.writtenDate}</TableCell>
            </TableRow>
        )
    }
}

export default BoardList;