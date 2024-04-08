import { v2 } from 'cloudinary';
import { CLOUDINARY } from '../constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: "dnengu0ue",
      api_key: "371133688114536",
      api_secret: "JuSHh0UgXotYWhiMRzSaHhBoa6k",
    });
  },
};
