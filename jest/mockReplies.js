jest.mock('NativeModules', () => {
    return {
        IBGReplies: {
            setEnabled: jest.fn(),
            hasChats: jest.fn(cb => cb(true)),
            show: jest.fn(),
            setOnNewReplyReceivedHandler: jest.fn(),
            getUnreadRepliesCount: jest.fn(cb => cb(2)),
            setInAppNotificationEnabled: jest.fn(),
            setInAppNotificationSound: jest.fn(),
            addListener: jest.fn()
        },
    };
});