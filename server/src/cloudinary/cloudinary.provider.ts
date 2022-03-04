import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: 'dwigc7xjl',
      api_key: '925767913788942',
      api_secret: 'wDxzG4y-xn0_q7dFZiIhhezkDcY',
    });
  },
};