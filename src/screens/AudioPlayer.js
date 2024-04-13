import React from 'react';

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = React.createRef();

  const playAudio = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} controls />
      <button onClick={playAudio}>Play Audio</button>
    </div>
  );
};

export default AudioPlayer;
