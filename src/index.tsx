import { NativeModules } from 'react-native';

type MediaPickerType = {
  showImageLibrary: (
    options: { [key: string]: any },
    callback: (data: { [key: string]: any }) => any
  ) => any;
  showCamera: (
    options: { [key: string]: any },
    callback: (data: { [key: string]: any }) => any
  ) => any;
};

const { MediaPicker } = NativeModules;

export default MediaPicker as MediaPickerType;
