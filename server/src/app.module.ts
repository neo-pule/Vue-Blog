import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CloudinaryProvider } from './cloudinary/cloudinary.provider';

@Module({
  imports: [BlogModule, CloudinaryModule],
  controllers: [AppController],
  providers: [AppService, CloudinaryProvider],
})
export class AppModule {}
