import {
	Component,
	OnInit,
	AfterViewInit,
	Input } from '@angular/core';

@Component({
  selector: 'beart-video',
  templateUrl: './beart-video.component.html',
  styleUrls: ['./beart-video.component.scss']
})
export class BeartVideoComponent implements OnInit {

  @Input() videoId: string;
  @Input() videoItems: Array<string>;
  @Input() isMuted: boolean;

  constructor() { }

  ngOnInit() {  
  }

  ngAfterViewInit() {
    const vid = <HTMLVideoElement> document.getElementById(this.videoId);
    const vidSeamless = <HTMLVideoElement> document.getElementById(this.videoId + '-seamless');

    let videoIndex = 0;

    let videoList = this.videoItems;

    // SHOW 1st video-container, HIDE 2nd video-container on start 
    vid.hidden = false;
    vidSeamless.hidden = true;

    // MUTED both video-container
    vid.muted = this.isMuted;
    vidSeamless.muted = this.isMuted;

    // AUTOSTART 1st video-container
    vid.setAttribute("src", videoList[videoIndex]);
    vid.play();

    // TOGGLE video-container and start 2nd video-container
    vid.onended = function() {
      console.log('happy happy end');
      // console.log(vid.currentTime + '______vid.currentTime');

      vid.hidden = !vid.hidden;
      vidSeamless.hidden = !vidSeamless.hidden;
      vidSeamless.play();
    };

    // TOGGLE video-container and start 1st video-container
    vidSeamless.onended = function() {
      // console.log('happy end');
      // console.log(vid.currentTime + '______vid.currentTime');

      vidSeamless.hidden = !vidSeamless.hidden;
      vid.hidden = !vid.hidden;
      vid.play();  
    };

    // ADD new src to 2nd video-container
    vid.onplay = function() {
      if(videoList.length - 1 === 0) {
        vid.loop = true;
      } else {
        if(videoIndex < videoList.length - 1){
          videoIndex++;    
          vidSeamless.setAttribute("src", videoList[videoIndex]);
        }
        else{
          videoIndex = 0;
          vidSeamless.setAttribute("src", videoList[videoIndex]);
        }
      }
    };

    // ADD new src to 1st video-container
    vidSeamless.onplay = function() {
      if(videoIndex < videoList.length - 1){
        videoIndex++;       
        vid.setAttribute("src", videoList[videoIndex]);
      }
      else{
        videoIndex = 0;
        vid.setAttribute("src", videoList[videoIndex]);
      } 
    };

    // vid.onpause = function() { 
    //   console.log('paused');
    //   console.log(vid.currentTime + '______vid.currentTime');
    // };
  }
}
