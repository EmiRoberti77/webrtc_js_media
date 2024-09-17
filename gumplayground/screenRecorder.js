let mediaRecorder = null;
let recordedBlobs = null;

const startRecording = async () => {
  if (!stream) {
    alert('stream not ready');
    return;
  }
  console.log('started recording');
  recordedBlobs = []; // array to hold blobs for playback
  mediaRecorder = new MediaRecorder(stream); // NOTE:i could pass mediaStream (screenShare) to record too
  mediaRecorder.ondataavailable = (e) => {
    console.log('Data available for media recorder');
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
  changeButtons([
    'green',
    'green',
    'blue',
    'blue',
    'green',
    'blue',
    'grey',
    'blue',
  ]);
};

const stopRecording = async () => {
  if (!mediaRecorder) {
    alert('no media recorder started');
    return;
  }
  console.log('stop recording');
  mediaRecorder.stop();
  changeButtons([
    'green',
    'green',
    'blue',
    'blue',
    'green',
    'green',
    'blue',
    'blue',
  ]);
};

const playRecording = async () => {
  if (!recordedBlobs) {
    alert('no recordedBlobs');
    return;
  }
  console.log('play recording');
  const superBuffer = new Blob(recordedBlobs);
  const recordedVideoEl = document.querySelector('#other-video');
  recordedVideoEl.src = window.URL.createObjectURL(superBuffer);
  recordedVideoEl.controls = true;
  recordedVideoEl.play();
  changeButtons([
    'green',
    'green',
    'blue',
    'blue',
    'green',
    'green',
    'green',
    'blue',
  ]);
};
