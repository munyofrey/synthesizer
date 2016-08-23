import React from 'react';
import {NOTE_NAMES, TONES, NOTE_MAPS} from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

const MAP_FREQUENCY = {
  523.25: 'a',
  587.33: 's',
  659.25: 'd',
  698.46: 'f',
  783.99: 'g'
};

class Synth extends React.Component {
  constructor(props){
    super(props);
    this.notes = this.noteMapping();
    this.playNotes = this.playNotes.bind(this);
  }

  componentDidMount(){
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes(){
    const synth = this;
    this.notes.forEach( note => {
      if (synth.props.notes.includes(MAP_FREQUENCY[note.freq])) {
        note.start();
      }else{ note.stop();}
    });

  }

  onKeyDown(e) {
    e.preventDefault();
    this.props.keyPressed(NOTE_MAPS[e.which]);
  }

  onKeyUp(e) {
    e.preventDefault();
    this.props.keyReleased(NOTE_MAPS[e.which]);
  }

  noteMapping () {
    let result = [];
    NOTE_NAMES.forEach(noteName => {
      result.push(new Note(TONES[noteName]));
    });

    return result;
  }

  createNoteNames() {
    let noteArray = [];
    let ul = $("<ul>");
    this.notes.forEach(note => {
    noteArray.push(<NoteKey name={note}/>);
    });
    return noteArray;
  }

  render () {
    this.playNotes();
    let noteName = this.createNoteNames();
    return(
      <div>
        <ul>{noteName}</ul>
      </div>
    );
  }
}

export default Synth;
