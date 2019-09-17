import React, { useState } from 'react';
import { Button, Box } from '@material-ui/core';

const AudioWidget: React.FC = () => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  const [mediaChunks, setMediaChunks] = useState<Array<Blob>>([]);
  const [audiosrc, setAudiosrc] = useState<string>();

  const toggleRecording = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      if (mediaRecorder) {
        // stop recording
        console.log('stop recording');
        mediaRecorder.stop();
        setMediaRecorder(undefined);
        setMediaChunks([]);
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

            recorder.onstop = e => {
              var blob = new Blob(mediaChunks, {
                type: 'audio/ogg; codecs=opus',
              });
              setAudiosrc(window.URL.createObjectURL(blob));
            };

            recorder.ondataavailable = function(e) {
              mediaChunks.push(e.data);
              console.log('media available: ', e.data);
              console.log('chunks: ', mediaChunks);
            };

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
      <Box pt={2}>{audiosrc && <audio src={audiosrc} controls />}</Box>
    </>
  );
};

export default AudioWidget;
