import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const VideoRoom = () => {
      const { roomID } = useParams();

      const myMeeting= async (element) => {
            const appID = 1624029235;
            const serverSecret = "f83cc0a55a6544759ca25e1111f9e375";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "EVO_MEET");
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                  container: element,
                  sharedLinks: [
                    {
                      name: 'Copy link',
                      url:
                       window.location.protocol + '//' + 
                       window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                    },
                  ],
                  scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall, 
                  },
            });
      }

  return (
    <div >
      <div ref={myMeeting}/>
    </div>
  )
}

export default VideoRoom
