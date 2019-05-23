$video = document.getElementById('video')

var constraints = {
        audio: true
        video: {
                width: {ideal: 1920},
                height: {ideal: 1080},
                facingMode: "environment"
        }
};
navigator.mediaDevices.enumerateDevices().then(function(devices) {
    for (var i = 0; i !== devices.length; ++i) {
        if (devices[i].kind === 'videoinput') {
            console.log('Camera found: ', devices[i].label || 'label not found', devices[i].deviceId || 'id no found');
            videoConstraints.deviceId = { exact: devices[i].deviceId }
        }
    }
});

//first up the stream
navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    $video.srcObject = stream;
    // log the real size
    console.log($video.videoWidth, $video.videoHeight);
}).catch(function(err) {
    console.log(err.name + ': ' + err.message);
});