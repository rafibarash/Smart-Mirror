import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const AudioWidget: React.FC = () => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();

  const toggleRecording = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      if (mediaRecorder) {
        // stop recording
        console.log('stop recording');
        mediaRecorder.stop();
        setMediaRecorder(undefined);
      } else {
        // start recording
        navigator.mediaDevices
          .getUserMedia(
            // constraints - only audio needed for this app
            {
              audio: true,
            }
          )

          // Success callback
          .then(function(stream) {
            const recorder = new MediaRecorder(stream);
            recorder.start();
            console.log('recorder started');
            setMediaRecorder(recorder);
          })

          // Error callback
          .catch(function(err) {
            console.log('The following getUserMedia error occured: ' + err);
          });
      }
    } else {
      console.log('getUserMedia not supported on your browser!');
    }
  };

  return (
    <>
      <Button variant="contained" onClick={() => toggleRecording()}>
        {mediaRecorder ? 'Stop' : 'Record'}
      </Button>
    </>
  );
};

export default AudioWidget;
