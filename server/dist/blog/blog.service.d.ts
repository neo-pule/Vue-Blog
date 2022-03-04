/// <reference types="multer" />
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class BlogService {
    private cloudinary;
    constructor(cloudinary: CloudinaryService);
    uploadImageToCloudinary(file: Express.Multer.File): Promise<void>;
    run(): string;
}
