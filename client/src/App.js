import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withStyles} from '@material-ui/core/styles';
import { Paper, Table, TableCell, TableHead, TableBody, TableRow } from '@material-ui/core';
import BoardList from './components/BoardList';

const styles = theme => ({
  root : {
    width : "100%",
    marginTop : theme.spacing(3),
    minWidth : 1080
  }
})

class App extends React.Component{

  state = {
    board : ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({board:res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/board/list');
    const body = await response.json();
    return body;
  }

  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>작성자</TableCell>
            <TableCell>조회수</TableCell>
            <TableCell>작성일</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {this.state.board ? this.state.board.map(c => {
              return <BoardList key={c.boardNo} boardNo={c.boardNo} title={c.title} id={c.id} hit={c.hit} writtenDate={c.writtenDate}/>
            }):''}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
