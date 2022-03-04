import { BlogService } from './blog.service';
export declare class BlogController {
    private blog;
    constructor(blog: BlogService);
    test(): string;
    file(image: any): Promise<void>;
}
