        // Replace this URL with the M3U8 file URL you want to play
        const m3u8URL = 'https://nes03.quest123.top:8088/live/webcrice09/playlist.m3u8?id=116730&pk=92460e3c0d24751e8290efe659bb6d005c35ab2791ebe593c0e2fe9a271759f89d475a7d431dd9d0d6e77b5342ab2105648f8ee7af681ea33b6a05d1b9aa9bba';

        const videoPlayer = document.getElementById('m3u8Player');

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(m3u8URL);
            hls.attachMedia(videoPlayer);
        } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            videoPlayer.src = m3u8URL;
        } else {
            console.error('HLS is not supported on your browser.');
        }
