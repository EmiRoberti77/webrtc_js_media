const shareScreen = async () => {
  console.log('share screen active');
  const options = {
    video: true,
    audio: false,
    surfaceSwitching: 'include', // 'include' || 'excludes'
  };
  try {
    mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
  } catch (err) {
    console.error(err);
  }
  changeButtons([
    'green',
    'green',
    'blue',
    'blue',
    'green',
    'green',
    'green',
    'green',
  ]);
};
