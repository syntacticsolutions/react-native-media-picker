#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MediaPicker, NSObject)

RCT_EXTERN_METHOD(openPicker:(NSDictionary)options
                  withCallback:(RCTResponseSenderBlock)callback)

@end
