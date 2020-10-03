import React from "react";

interface JitsiProps {
    roomName: string;
    roomPassword: string;
    userInfo: JitsiMeetExternalApiUserInfo;
    youtubeStreamKey: string
    youtubeBroadcastID: string
}

const Jitsi: React.FC<JitsiProps> = (props) => {
    const containerId = 'jitsi-meet-wrapper'

    const [jitsi, setJitsi] = React.useState<any>({});

    const loadJitsiScript = () => {
        let resolveLoadJitsiScriptPromise = null;

        const loadJitsiScriptPromise = new Promise(resolve => {
            resolveLoadJitsiScriptPromise = resolve;
        });

        const script = document.createElement("script");
        script.src = "https://meet.jit.si/external_api.js";
        script.async = true;
        script.onload = () => resolveLoadJitsiScriptPromise(true);
        document.body.appendChild(script);

        return loadJitsiScriptPromise;
    };

    const initialiseJitsi = async () => {
        if (!window.JitsiMeetExternalAPI) {
            await loadJitsiScript();
        }

        const jitsiOptions: JitsiMeetExternalApiOptions = {
            roomName: props.roomName,
            parentNode: document.getElementById(containerId),
            userInfo: props.userInfo,
            interfaceConfigOverwrite: {
                TOOLBAR_BUTTONS: [
                    'microphone',
                    'camera',
                    'closedcaptions',
                    'desktop',
                    'fullscreen',
                    'hangup',
                    'chat',
                    'livestreaming',
                    'videoquality',
                    'tileview',
                    'videobackgroundblur',
                    'mute-everyone',
                ]
            }
        }

        const _jitsi = new window.JitsiMeetExternalAPI(process.env.JITSI_URL, jitsiOptions);

        _jitsi.executeCommands({
            startRecording: {
                mode: 'stream',
                youtubeStreamKey: props.youtubeStreamKey,
                // youtubeBroadcastID: props.youtubeBroadcastID //the youtube broacast ID.
            },
            password: props.roomPassword
        });

        _jitsi.on('passwordRequired', () => {
            _jitsi.executeCommand('password', props.roomPassword);
        });

        setJitsi(_jitsi);
    };

    React.useEffect(() => {
        initialiseJitsi();

        return () => jitsi?.dispose?.();
    }, []);

    return <div id={containerId} style={{height: 500, width: "100%"}} />;
};

export default Jitsi;
