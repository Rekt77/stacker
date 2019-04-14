import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width:"100%",
    marginTop: theme.spacing.unit * 3,
    overflowX:"auto"
  },
  table:{
    minWidth:"20%"
  }
})
const customers = [
  {
    "id":1,
    "image":"https://placeimg.com/64/64/1",
    "name":"홍길동",
    "birth":"930528",
    "gender":"남자",
    "job":"학생"
  },
  {
    "id":2,
    "image":"https://placeimg.com/64/64/2",
    "name":"이태일",
    "birth":"930528",
    "gender":"남자",
    "job":"학생"
  },
  {
    "id":3,
    "image":"https://placeimg.com/64/64/3",
    "name":"양승현",
    "birth":"930528",
    "gender":"남자",
    "job":"학생"
  }
]
class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map( each => {
            return(
              <Customer
                id={each.id}
                image={each.image}
                name={each.name}
                birth={each.birth}
                gender={each.gender}
                job={each.job}
              />
            )
          })}
        </TableBody>
      </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);