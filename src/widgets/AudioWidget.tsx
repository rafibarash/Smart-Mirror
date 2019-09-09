import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const AudioWidget: React.FC = () => {
  const [recording, setRecording] = useState(false);

  const record = (mediaRecorder: MediaRecorder) => {
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log('recorder started');
  };

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');
    navigator.mediaDevices
      .getUserMedia(
        // constraints - only audio needed for this app
        {
          audio: true,
        }
      )

      // Success callback
      .then(function(stream) {
        const mediaRecorder = new MediaRecorder(stream);
        record(mediaRecorder);
      })

      // Error callback
      .catch(function(err) {
        console.log('The following getUserMedia error occured: ' + err);
      });
  } else {
    console.log('getUserMedia not supported on your browser!');
  }

  return (
    <>
      <Button variant="contained" onClick={() => setRecording(!recording)}>
        {recording ? 'Stop' : 'Record'}
      </Button>
    </>
  );
};

export default AudioWidget;
