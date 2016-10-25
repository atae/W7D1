import React from "react";
import {NOTE_NAMES, TONES} from "../../util/tones";
import Note from "../../util/note";
import $ from "jquery";
import {NoteKey} from "./note_key";

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map( letter => {
      return new Note(TONES[letter]);
    });
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    NOTE_NAMES.forEach( (letter, index) => {
      if (this.props.notes.includes(letter)) {
        this.notes[index].start();
      } else {
        this.notes[index].stop();
      }
    });
  }

  render() {
    this.playNotes();
    return (
    <div>
      <ul>
        {NOTE_NAMES.map((note, i) => (
          <NoteKey key={i} note={note} pressed={this.props.notes.includes(note)}/>
          // <li key={i}>{NOTE_NAMES[i]}</li>
        ))}
      </ul>
    </div>
  );}
}




export default Synth;
