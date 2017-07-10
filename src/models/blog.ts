// import Tagging from './tagging';
import Comment from './comment';

class Blog {
    public title: string;
    public body: string;
    public imageUrl: string;
    public authorId: number;
    public comments: Comment[] = [];

    constructor(
        title: string,
        imageUrl: string,
        body: string,
        authorId: number
    ) {
        this.title = title;
        this.body = body;
        this.imageUrl = imageUrl;
        this.authorId = authorId;
    }

    public addComment(comment: Comment) {
        this.comments.push(comment)
    }

    public getComments(): Comment[] {
        return this.comments;
    }
}

export default Blog;
