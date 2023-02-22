# live-flv-265直播

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>video</title>
    <!-- Video.js -->
    <link
      href="https://unpkg.com/video.js/dist/video-js.css"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/video.js/dist/video.min.js"></script>
    <script src="./node_modules/videojs-flvh265/dist/videojs-flvh265.min.js"></script>
  </head>

  <body>
    <video
      id="player"
      height="300"
      width="600"
      class="video-js vjs-big-play-centered"
      controls
      autoplay
      loop
      ish265
      islive
      hasvideo
      hasaudio
    >
      <source src="http://35.74.26.231/live/F184903.live.flv" type="video/x-flv" />
    </video>
  </body>
</html>
<script>
  var player = videojs('player', {
    techOrder: ['html5', 'flvh265'],
    controlBar: {
      pictureInPictureToggle: false, //sorry,we don't support pictureInPicture now
    },
  })
</script>
````
## video.js 结合 flv.js 播放flv视频

```
<!DOCTYPE html>
<html lang="en">
 
<head>
    <title>video</title>
    <!-- Video.js -->
    <link href="https://unpkg.com/video.js/dist/video-js.css" rel="stylesheet">
    <script src="https://unpkg.com/video.js/dist/video.min.js"></script>
    <script src="https://unpkg.com/flv.js/dist/flv.min.js"></script>
    <script src="https://unpkg.com/videojs-flvjs/dist/videojs-flvjs.min.js"></script>
</head>
 
<body>
    <div>
        <video id="videojs-flvjs-player" class="video-js vjs-default-skin vjs-big-play-centered"  width="1024" height="768"> </video>
    </div>
</body>
 
</html>
<script>
var flvUrl = "https://mister-ben.github.io/videojs-flvjs/bbb.flv";
 
var player = videojs('videojs-flvjs-player', {
    techOrder: ['html5', 'flvjs'],
    flvjs: {
        mediaDataSource: {
            isLive: false,
            cors: true,
            withCredentials: false,
        },
    },
    sources: [{
        src: flvUrl,
        type: 'video/mp4'
    }],
    controls: true,
    preload: "none"
}, function onPlayerReady() {
    console.log('player ready')
 
    player.on('error', (err) => {
        console.log('first source load fail')
 
        player.src({
            src: flvUrl,
            type: 'video/x-flv'
        });
 
        player.ready(function() {
            console.log('player ready')
            player.load();
            player.play();
        });
    })
});
</script>
```

- [参考文章1](https://www.jianshu.com/p/2b09fbfbeda5/)
- [参考文章2](https://blog.csdn.net/boyit0/article/details/84395347)