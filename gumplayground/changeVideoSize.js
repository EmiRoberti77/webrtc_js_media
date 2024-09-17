const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstraints);

const changeVideoSize = (e) => {
  if (!stream) {
    alert('stream not ready');
    return;
  }

  stream.getVideoTracks().forEach((truck) => {
    const capabilities = truck.getCapabilities();
    const height = document.querySelector('#vid-height').value;
    const width = document.querySelector('#vid-width').value;
    const frameRate = document.querySelector('#vid-fr').value;
    const vConstraints = {
      height: {
        ideal:
          height < capabilities.height.max ? height : capabilities.height.max,
      },
      width: {
        ideal: width < capabilities.width.max ? width : capabilities.width.max,
      },
      frameRate,
    };
    truck.applyConstraints(vConstraints);
  });

  // stream.getTracks().forEach((track) => {
  //   const capabilities = track.getCapabilities();
  //   console.log(capabilities);
  // });
};
