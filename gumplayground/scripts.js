const videoEL = document.querySelector('#my-video');
let tracks = null;
let stream = null;
let mediaStream = null; // screenShare stream

const constraints = {
  audio: true,
  video: true,
};
const getMikeAndCamera = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    tracks = stream.getTracks();
    console.log(stream);
    console.log(tracks);
    changeButtons([
      'green',
      'blue',
      'blue',
      'grey',
      'grey',
      'grey',
      'grey',
      'grey',
    ]);
  } catch (err) {
    console.log('user denied access to media devices');
    console.error(err);
  }
};

const showMyFeed = async (e) => {
  if (!stream) {
    alert('stream not ready');
    return;
  }
  videoEL.srcObject = stream; // set the media stream here to the video tag
  console.log(tracks);
  changeButtons([
    'green',
    'green',
    'blue',
    'blue',
    'blue',
    'grey',
    'grey',
    'blue',
  ]);
};

const stopMyFeed = async (e) => {
  if (!stream) {
    alert('stream not ready');
    return;
  }
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    track.stop(); // removes tracks to the source
  });
  changeButtons([
    'blue',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
  ]);
};

document
  .querySelector('#share')
  .addEventListener('click', (e) => getMikeAndCamera(e));

document
  .querySelector('#show-video')
  .addEventListener('click', (e) => showMyFeed(e));

document
  .querySelector('#stop-video')
  .addEventListener('click', (e) => stopMyFeed(e));

document
  .querySelector('#change-size')
  .addEventListener('click', (e) => changeVideoSize(e));

document
  .querySelector('#start-record')
  .addEventListener('click', (e) => startRecording(e));

document
  .querySelector('#stop-record')
  .addEventListener('click', (e) => stopRecording(e));

document
  .querySelector('#play-record')
  .addEventListener('click', (e) => playRecording(e));

document
  .querySelector('#share-screen')
  .addEventListener('click', (e) => shareScreen());
