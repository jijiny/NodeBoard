import React from 'react';
import { Table, TableRow, TableCell, TableHead, TableBody, Button } from '@material-ui/core';

class Login extends React.Component {
    render() {
        return(
            <div>
                <h1>Node.js Board</h1>
                <Table>
                    <TableRow>
                        <TableCell>아이디 : </TableCell>
                        <TableCell>
                            <input type="text" name="id"/>
                        </TableCell>
                        <TableCell rowSpan='2'>
                            <Button>로그인</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>비밀번호 : </TableCell>
                        <TableCell>
                            <input type="password" name="password"/>
                        </TableCell>
                    </TableRow>
                </Table>
            </div>
        )
    }
}

export default Login;