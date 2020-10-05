interface Window {
    JitsiMeetExternalAPI: JitsiMeetExternalApiProps;
}


interface JitsiMeetExternalApiUserInfo {
    email: string;
    displayName: string;
}

/**  TODO Add proper types */
interface JitsiMeetExternalApiConfigOverwrite {
    hosts?: {
        domain?: string;
        anonymousdomain?: string;
        authdomain?: string;
        call_control?: string;
        focus?: string;
        muc?: string;
    };
    bosh?: string;
    websocket?: string;
    clientNode?: string;
    focusUserJid?: string;
    testing?: {
        disableE2EE?: boolean;
        p2pTestMode?: boolean;
        testMode?: boolean;
        noAutoPlayVideo?: boolean;
        capScreenshareBitrate?: 1 | 0;
        callStatsThreshold?: number; //0-100
    };
    webrtcIceUdpDisable?: boolean;
    webrtcIceTcpDisable?: boolean;
    disableAudioLevels?: boolean;
    audioLevelsInterval?: number;
    enableNoAudioDetection?: boolean;
    enableNoisyMicDetection?: boolean;
    startAudioOnly?: boolean;
    startAudioMuted?: number;
    startWithAudioMuted?: boolean;
    startSilent?: boolean;
    opusMaxAverageBitrate?: number;
    enableOpusRed?: boolean;
    resolution?: number;
    maxFullResolutionParticipants?: number;
    constraints?: {
        video?: {
            height?: {
                ideal?: number;
                max?: number;
                min?: number;
            };
        };
    };
    disableSimulcast?: boolean;
    enableLayerSuspension?: boolean;
    startVideoMuted?: number;
    startWithVideoMuted?: boolean;
    preferH264?: boolean;
    disableH264?: boolean;
    desktopSharingFrameRate?: {
        min?: number;
        max?: number;
    };
    startScreenSharing?: boolean;
    fileRecordingsEnabled?: boolean;
    dropbox?: {
        appKey?: string;
        redirectURI?: string;
    };
    fileRecordingsServiceEnabled?: boolean;
    fileRecordingsServiceSharingEnabled?: boolean;
    liveStreamingEnabled?: boolean;
    transcribingEnabled?: boolean;
    autoCaptionOnRecord?: boolean;
    channelLastN?: number;
    lastNLimits?: Map<number, number>;
    videoQuality?: {
        disabledCodec?: string;
        preferredCodec?: string;
        maxBitratesVideo?: {
            low?: number;
            standard?: number;
            high?: number;
        };
        minHeightForQualityLvl?: Map<number, string>;
    };
    recordingLimit?: {
        limit?: number;
        appName?: string;
        appURL?: string;
    };
    disableRtx?: boolean;
    enableTcc?: boolean;
    enableRemb?: boolean;
    enableIceRestart?: boolean;
    minParticipants?: number;
    useStunTurn?: boolean;
    useTurnUdp?: boolean;
    openBridgeChannel?: "datachannel" | "websocket" | boolean;
    hideLobbyButton?: boolean;
    requireDisplayName?: boolean;
    enableWelcomePage?: boolean;
    enableClosePage?: boolean;
    disable1On1Mode?: boolean;
    defaultLanguage?: string;
    enableUserRolesBasedOnToken?: boolean;
    enableFeaturesBasedOnToken?: boolean;
    lockRoomGuestEnabled?: boolean;
    roomPasswordNumberOfDigits?: number;
    noticeMessage?: string;
    enableCalendarIntegration?: boolean;
    prejoinPageEnabled?: boolean;
    enableInsecureRoomNameWarning?: boolean;
    enableAutomaticUrlCopy?: boolean;
    gatherStats?: boolean;
    pcStatsInterval?: number;
    callStatsID?: string;
    callStatsSecret?: string;
    enableDisplayNameInStats?: boolean;
    enableEmailInStats?: boolean;
    disableThirdPartyRequests?: boolean;
    p2p?: {
        enabled?: boolean;
        useStunTurn?: boolean;
        stunServers?: Array<Record<string, any>>;
        iceTransportPolicy?: "all" | "relay";
        preferH264?: boolean;
        preferredCodec?: "VP8" | "VP9" | "H264";
        disableH264?: boolean;
        disabledCodec?: string;
        backToP2PDelay?: number;
    };
    analytics?: {
        googleAnalyticsTrackingId?: string;
        matomoEndpoint?: string;
        matomoSiteID?: string;
        amplitudeAPPKey?: string;
        rtcstatsEnabled?: string;
        rtcstatsEndpoint?: string;
        rtcstatsPolIInterval?: number;
        scriptURLs?: Array<string>;
    };
    apiLogLevels?: "warn" | "log" | "error" | "info" | "debug";
    deploymentInfo?: {
        shard?: string;
        region?: string;
        userRegion?: string;
    };
    disableRecordAudioNotification?: boolean;
    chromeExtensionBanner?: {
        url?: string;
        chromeExtensionsInfo?: Array<{ id: string; path: string }>;
    };
    localRecording?: {
        enabled?: boolean;
        format?: "ogg" | "flac" | "wav";
    };
    e2eping?: {
        pingInterval?: number;
        analyticsInterval?: number;
    };
    _desktopSharingSourceDevice?: string;
    disableDeepLinking?: boolean;
    disableLocalVideoFlip?: boolean;
    disableInviteFunctions?: boolean;
    doNotStoreRoom?: boolean;
    deploymentUrls?: {
        userDocumentationURL?: string;
        downloadAppsUrl?: string;
    };
    remoteVideoMenu?: {
        disableKick?: boolean;
    };
    disableRemoteMute?: boolean;
    brandingDataUrl?: string;
    moderatedRoomServiceUrl?: string;
    brandingRoomAlias?: any;
}

/**  TODO Add proper types */
interface JitsiMeetExternalApiInterfaceConfigOverwrite {
    APP_NAME?: string,
    AUDIO_LEVEL_PRIMARY_COLOR?: string,
    AUDIO_LEVEL_SECONDARY_COLOR?: string,
    AUTO_PIN_LATEST_SCREEN_SHARE?: string,
    BRAND_WATERMARK_LINK?: string,
    CLOSE_PAGE_GUEST_HINT?: boolean,
    CONNECTION_INDICATOR_AUTO_HIDE_ENABLED?: true,
    CONNECTION_INDICATOR_AUTO_HIDE_TIMEOUT?: number,
    CONNECTION_INDICATOR_DISABLED?: boolean,

    DEFAULT_BACKGROUND?: string,
    DEFAULT_LOCAL_DISPLAY_NAME?: string,
    DEFAULT_LOGO_URL?: string,
    DEFAULT_REMOTE_DISPLAY_NAME?: string,
    DEFAULT_WELCOME_PAGE_LOGO_URL?: string,
    DISABLE_DOMINANT_SPEAKER_INDICATOR?: boolean,
    DISABLE_FOCUS_INDICATOR?: boolean,
    DISABLE_JOIN_LEAVE_NOTIFICATIONS?: boolean,
    DISABLE_PRESENCE_STATUS?: boolean,
    DISABLE_RINGING?: boolean,
    DISABLE_TRANSCRIPTION_SUBTITLES?: boolean,
    DISABLE_VIDEO_BACKGROUND?: boolean,
    DISPLAY_WELCOME_PAGE_CONTENT?: boolean,
    DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT?: boolean,

    ENABLE_DIAL_OUT?: boolean,
    ENABLE_FEEDBACK_ANIMATION?: boolean,
    FILM_STRIP_MAX_HEIGHT?: number,
    filmStripOnly?: boolean,
    GENERATE_ROOMNAMES_ON_WELCOME_PAGE?: boolean,
    HIDE_DEEP_LINKING_LOGO?: boolean,
    HIDE_INVITE_MORE_HEADER?: boolean,

    INITIAL_TOOLBAR_TIMEOUT?: number,
    JITSI_WATERMARK_LINK?: string,
    LANG_DETECTION?: boolean,
    LIVE_STREAMING_HELP_LINK?: string,
    LOCAL_THUMBNAIL_RATIO?: number,
    MAXIMUM_ZOOMING_COEFFICIENT?: number,
    MOBILE_APP_PROMO?: boolean,
    NATIVE_APP_NAME?: string,
    OPTIMAL_BROWSERS?: Array<'chrome' | 'chromium' | 'edge' | 'electron' | 'firefox' | 'nwjs' | 'opera' | 'safari'>,
    POLICY_LOGO?: any,
    PROVIDER_NAME?: string,
    RECENT_LIST_ENABLED?: boolean,
    REMOTE_THUMBNAIL_RATIO?: number,
    SETTINGS_SECTIONS?: Array<'devices' | 'language' | 'moderator' | 'profile' | 'calendar'>,
    SHOW_BRAND_WATERMARK?: boolean,
    SHOW_CHROME_EXTENSION_BANNER?: boolean,

    SHOW_DEEP_LINKING_IMAGE?: boolean,
    SHOW_JITSI_WATERMARK?: boolean,
    SHOW_POWERED_BY?: boolean,
    SHOW_PROMOTIONAL_CLOSE_PAGE?: boolean,
    SHOW_WATERMARK_FOR_GUESTS?: boolean,
    SUPPORT_URL?: string,
    TOOLBAR_ALWAYS_VISIBLE?: boolean,

    TOOLBAR_BUTTONS?: Array<'microphone' | 'camera' | 'closedcaptions' | 'desktop' | 'embedmeeting' |
        'fullscreen' | 'fodeviceselection' | 'hangup' | 'profile' | 'chat' | 'recording' |
        'livestreaming' | 'etherpad' | 'sharedvideo' | 'settings' | 'raisehand' |
        'videoquality' | 'filmstrip' | 'invite' | 'feedback' | 'stats' | 'shortcuts' |
        'tileview' | 'videobackgroundblur' | 'download' | 'help' | 'mute-everyone' | 'security'>,

    TOOLBAR_TIMEOUT?: number,
    UNSUPPORTED_BROWSERS?: Array<string>,
    VERTICAL_FILMSTRIP?: boolean,
    VIDEO_LAYOUT_FIT?: string,
    VIDEO_QUALITY_LABEL_DISABLED?: boolean,

    /**
     * When enabled, the kick participant button will not be presented for users without a JWT
     */
    HIDE_KICK_BUTTON_FOR_GUESTS?: boolean,

    /**
     * How many columns the tile view can expand to. The respected range is
     * between 1 and 5.
     */
    TILE_VIEW_MAX_COLUMNS?: 1 | 2 | 3 | 4 | 5,

    /**
     * Specify custom URL for downloading android mobile app.
     */
    MOBILE_DOWNLOAD_LINK_ANDROID?: string,

    /**
     * Specify URL for downloading ios mobile app.
     */
    MOBILE_DOWNLOAD_LINK_IOS?: string,

    /**
     * Specify Firebase dynamic link properties for the mobile apps.
     */
    MOBILE_DYNAMIC_LINK?: {
        APN?: string,
        APP_CODE?: string,
        CUSTOM_DOMAIN?: string,
        IBI?: string,
        ISI?: string
    },

    /**
     * Specify mobile app scheme for opening the app from the mobile browser.
     */
    APP_SCHEME?: string,

    /**
     * Specify the Android app package name.
     */
    ANDROID_APP_PACKAGE?: string,

    /**
     * Override the behavior of some notifications to remain displayed until
     * explicitly dismissed through a user action. The value is how long, in
     * milliseconds, those notifications should remain displayed.
     */
    ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT?: number,

    INDICATOR_FONT_SIZES?: any
    PHONE_NUMBER_REGEX?: any
}

/**  TODO Add proper types */
interface JitsiMeetExternalApiInvitee {
}

/**  TODO Add proper types */
interface JitsiMeetExternalApiDevice {
}

interface JitsiMeetExternalApiOptions {
    /** Name of the room to join. */
    roomName?: string;
    /**
     * Width for the iframe which will be created. If a number is specified it's treated as pixel units.
     * If a string is specified the format is number followed by 'px', 'em', 'pt' or '%'.
     */
    width?: number | string;
    /**
     * Height for the iframe which will be created. If a number is specified it's treated as pixel units.
     * If a string is specified the format is number followed by 'px', 'em', 'pt' or '%'.
     */
    height?: number | string;
    /** HTML DOM Element where the iframe will be added as a child. */
    parentNode?: HTMLElement;
    /** JS object with overrides for options defined in config.js. */
    configOverwrite?: JitsiMeetExternalApiConfigOverwrite;
    /** JS object with overrides for options defined in interface_config.js. */
    interfaceConfigOverwrite?: JitsiMeetExternalApiInterfaceConfigOverwrite;
    /** Boolean indicating if the server should be contacted using HTTP or HTTPS. Defaults to false */
    noSSL?: boolean;
    /** JWT token. */
    jwt?: string;
    /** Handler for the iframe onload event. */
    onload?: () => Promise<any>;
    /** Array of objects containing information about new participants that will be invited in the call. */
    invitees?: Array<JitsiMeetExternalApiInvitee>;
    /** A map containing information about the initial devices that will be used in the call. */
    devices?: Map<string, JitsiMeetExternalApiDevice>;
    /** JS object containing information about the participant opening the meeting, such as email. */
    userInfo?: JitsiMeetExternalApiUserInfo;
}

interface JitsiMeetExternalApiProps {
    new(domain: string, options: JitsiMeetExternalApiOptions): any;
}
