import React, { Fragment } from 'react';
import { Tooltip, Popover, Fab, Icon, Checkbox, Button, Paper, Grid, TableRow, TableHead, TableCell, TableBody, Table } from '@material-ui/core';
import API from '../../../services/api/API';
// Interfaces
import { IPupil } from '../../../interfaces/pupil.interface';
import '../pupils.scss';

import { AddEditPupil } from '../add-edit-pupil/add-edit-pupil';
import { SERVER_BASE_URL } from '../../../constants';


export class PupilList extends React.Component {
  private api: API;
  state = {
    pupilList: [],
    anchorEl: null,
    popoverTemplate: ''
  };

  constructor(props: {}) {
    super(props);
    this.api = new API({ url: SERVER_BASE_URL });
    this.api.createEntity({ name: 'pupils' });
  }

  onSelectAllClick = (event: any) => {
    console.log(event)
  };

  handleEditPupilClick = (event: any, action: string, rowId?: string) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
    if (action === 'add-pupil') {
      this.setState({
        popoverTemplate: action
      })
    }
  };

  handleCloseEditPupil = () => {
    this.setState({
      anchorEl: null,
    });
  };

  handleAddEditPupilCallback = (newPupilCreated: IPupil) => {
    this.setState({pupilList: [...this.state.pupilList, newPupilCreated]});
    this.handleCloseEditPupil();
  };

  async deletePupil(pupilId: string) {
    const res = await this.api.endpoints.pupils.delete(pupilId);
    const {data} = await this.api.endpoints.pupils.getAll();
    this.setState({pupilList: data});
    console.log(res, 'pupil deleted');
  }

  componentDidMount() {
    this.api.endpoints.pupils.getAll()
      .then(({data}: {data: IPupil[]} ) => {
        this.setState({pupilList: data});
        console.log(data);
      });
  }

  render() {
    const {pupilList, popoverTemplate}: {pupilList: IPupil[],
      popoverTemplate: string} = this.state;
    console.log(pupilList, 'pupils');

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Fragment>
        <Grid container
              spacing={ 24 }
        >
          <Grid item
                xs={ 12 }
          >
            <Paper className="paper">
              <Table className="table">
                <TableHead>
                  <TableRow>
                    {/*<TableCell align="center">#</TableCell>*/}
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Sur Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Mentor</TableCell>
                    <TableCell align="center">Edit</TableCell>
                    <TableCell align="center">Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { pupilList.map(row => (
                    <TableRow key={ row._id }>
                      {/*<TableCell>*/}
                        {/*<Checkbox*/}
                          {/*onChange={this.onSelectAllClick}*/}
                        {/*/>*/}
                      {/*</TableCell>*/}
                      <TableCell component="th" scope="row">{ row.name }</TableCell>
                      <TableCell align="center">{ row.surName || '-' }</TableCell>
                      <TableCell align="center">{ row.email || '-' }</TableCell>
                      <TableCell align="center">{ row.mentor || '-' }</TableCell>
                      <TableCell align="center">
                        <Fab
                          aria-owns={open ? 'simple-popper' : undefined}
                          aria-haspopup="true"
                          onClick={(event) => this.handleEditPupilClick(event, 'edit-pupil', row._id)}
                          color="primary" size="small" aria-label="Edit">
                          <Icon>edit_icon</Icon>
                        </Fab>
                      </TableCell>
                      <TableCell align="center">
                        <Fab color="secondary" size="small" onClick={() => this.deletePupil(row._id)}>
                          <Icon>delete</Icon>
                        </Fab>
                      </TableCell>
                    </TableRow>
                  )) }
                </TableBody>
              </Table>
            </Paper>
            <Popover
              className="add-pupil-popover"
              open={open}
              anchorEl={anchorEl}
              onClose={this.handleCloseEditPupil}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <AddEditPupil onSubmit={this.handleAddEditPupilCallback} popoverTemplate={popoverTemplate} />
            </Popover>
          </Grid>
        </Grid>
        <Grid justify="flex-end" container>
          <Button variant="contained" color="primary" size="medium" className="add-entity"
                  onClick={(event) => this.handleEditPupilClick(event, 'add-pupil')}>
            Add new pupil
          </Button>
        </Grid>
      </Fragment>
    );
  }

}
