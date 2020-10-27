import React, { Component } from 'react';
import NotesForm from './NotesForm';
import AllNotes from './AllNotes';

export default class Notes extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>ProGrad Notes</h1>

        <NotesForm />
        <hr />
        <AllNotes />
      </React.Fragment>
    );
  }
}
