import { BadRequestException, Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class BlogService {

    constructor(private cloudinary: CloudinaryService) {    }

    async uploadImageToCloudinary(file: Express.Multer.File) {
        return await this.cloudinary.uploadImage(file).then(res => {
            console.log(res);
            
        }).catch((err) => {
            console.log(err);
            
          throw new BadRequestException(err.message);
        });
      }


    run(): string {
        return 'API loading..!';
      }
}
