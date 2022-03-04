import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BlogService } from './blog.service';
@Controller('blog')
export class BlogController {

    constructor(private blog : BlogService) {    }
@Get('/')
    test(){
      return  this.blog.run();
    }
    @Post('upload')
   async file(@Body() image: any){
     await   this.blog.uploadImageToCloudinary(image)
    }
// @UseInterceptors(FileInterceptor('file'))
// uploadFile(@UploadedFile() file: Express.Multer.File) {
//   console.log(file);
// }
}
