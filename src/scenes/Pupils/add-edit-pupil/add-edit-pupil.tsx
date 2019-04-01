import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import '../pupils.scss';
import API from '../../../services/api/API';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

// Interfaces
import { IPupil } from '../../../interfaces/pupil.interface';
import { SERVER_BASE_URL } from '../../../constants';
import { InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/es/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const initialState = {
  mentor: '',
  formData: {
    email: '',
    name: '',
    surName: '',
    password: ''
  },
  submitted: false
};

export class AddEditPupil extends React.Component<any> {
  private api: API;

  state: any;

  constructor(props: any) {
    super(props);

    this.state = initialState;

    this.api = new API({ url: SERVER_BASE_URL });
    this.api.createEntity({ name: 'pupils' });

    this.handleChange = this.handleChange.bind(this);
    this.createPupil = this.createPupil.bind(this);
  }

  componentDidMount(): void {
    const { popoverTemplate } = this.props;

    if (popoverTemplate === 'add-pupil') {
      this.clearFormState();
    }
  }

  handleChange(event: any): void {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSelectChange = (event: any) => {
    // this.setState({formData : {mentor: event.target.value}});
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state, 'state')
  };

  clearFormState() {
    this.setState({formData : {email: '', name: '', surName: '', mentor: '', password: ''}});
  }

  createPupil(): void {
    this.setState({submitted: true});
    const formData = this.state.formData;
    formData.mentor = this.state.mentor;
    this.api.endpoints.pupils.create(formData).then(({status, data} : {status: number, data: IPupil}) => {
      if (status == 200) {
        this.props.onSubmit(data);
      }
      this.setState({submitted: false});
      this.clearFormState();
    });
  };

  render() {
    const { formData, submitted } : {formData: IPupil, submitted: boolean} = this.state;
    const {mentor} : {mentor: string} = this.state;

    return (
      <ValidatorForm className="create-pupil-form"
                     ref="form"
                     onSubmit={ this.createPupil }
      >
        <Grid container
              spacing={ 24 }
        >
          <Grid item
                xs={ 6 }
          >
            <TextValidator
              onChange={ this.handleChange }
              name="email"
              placeholder="email"
              className="create-pupil-form__input"
              value={ formData.email }
              validators={ ['required', 'isEmail'] }
              errorMessages={ ['this field is required', 'email is not valid'] }
            />
          </Grid>
          <Grid item
                xs={ 6 }
          >
            <TextValidator
              placeholder="Password"
              type="password"
              onChange={ this.handleChange }
              name="password"
              className="create-pupil-form__input"
              value={ formData.password }
              validators={ ['required'] }
              errorMessages={ ['this field is required'] }
            />
          </Grid>
          <Grid item xs={ 6 }>
            <FormControl>
              <Select
                required
                value={mentor}
                onChange={this.handleSelectChange}
                inputProps={{
                  name: 'mentor',
                  id: 'mentor',
                }}
              >
                <MenuItem value="" disabled>
                  Placeholder
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={ 6 }>
            <TextValidator
              placeholder="Name"
              onChange={ this.handleChange }
              name="name"
              className="create-pupil-form__input"
              value={ formData.name }
              validators={ ['required'] }
              errorMessages={ ['this field is required'] }
            />
          </Grid>
          <Grid item xs={ 6 }>
            <TextValidator
              placeholder="Sur Name"
              onChange={ this.handleChange }
              name="surName"
              className="create-pupil-form__input"
              value={ formData.surName }
              validators={ ['required'] }
              errorMessages={ ['this field is required'] }
            />
          </Grid>
          <Grid item xs={ 12 }>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={ submitted }
          >
            {
              (submitted && 'Submitting')
              || (!submitted && 'Submit')
            }
          </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
    );
  }
}
