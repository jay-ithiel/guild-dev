// import Tagging from './tagging';
import Comment from './comment';

class Blog {
    public id: number;
    public title: string;
    public blogIntro: string;
    public body: string;
    public imageUrl: string;
    public authorId: number;
    public createdAt: string;
    public updatedAt: string;
    public comments: Comment[] = [];

    constructor(
        id: number,
        title: string,
        blogIntro: string,
        body: string,
        imageUrl: string,
        authorId: number,
        updatedAt: string,
    ) {
        this.id = id;
        this.title = title;
        this.blogIntro = blogIntro;
        this.body = body;
        this.imageUrl = (imageUrl.length > 0) ? imageUrl : 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1500153014/blog-default-img_d3ke0j.jpg' ;
        this.authorId = authorId;
        this.createdAt = `${new Date()}`;
        this.updatedAt = this.createdAt;
    }

    public addComment(comment: Comment) {
        this.comments.push(comment)
    }

    public getComments(): Comment[] {
        return this.comments;
    }
}

export default Blog;
