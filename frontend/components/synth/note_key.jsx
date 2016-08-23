import React from 'react';

const MAP_FREQUENCY = {
  523.25: 'a',
  587.33: 's',
  659.25: 'd',
  698.46: 'f',
  783.99: 'g'
};

class NoteKey extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li>{MAP_FREQUENCY[this.props.name.freq]}</li>
    );
  }
}
export default NoteKey;
