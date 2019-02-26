import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";

export class AddPupil extends React.Component {
    render() {
        return (
            <form className="create-pupil-form" noValidate autoComplete="off">
                <TextField
                    id="standard-dense"
                    label="Title"
                    className="name"
                    margin="dense"
                />
                <TextField
                    id="standard-dense"
                    label="Text"
                    className="name"
                    margin="dense"
                />
                <TextField
                    id="standard-dense"
                    label="Color"
                    className="name"
                    margin="dense"
                />
            </form>
        );
    }
}