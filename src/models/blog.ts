import Tagging from './tagging';
import Comment from './comment';

class Blog {
    public title: string;
    public body: string;
    public imageUrl: string;
    public authorId: number;
    public taggings: Tagging[] = [];
    public comments: Comment[] = [];

    constructor(
        title: string,
        body: string,
        imageUrl: string,
        authorId: number
    ) {
        this.title = title;
        this.body = body;
        this.imageUrl = imageUrl;
        this.authorId = authorId;
    }

    public setTaggings(taggings: Tagging[]) {
        this.taggings = taggings;
    }

    public getTaggings(): Tagging[] {
        return this.taggings;
    }

    public addComment(comment: Comment) {
        this.comments.push(comment)
    }

    public getComments(): Comment[] {
        return this.comments;
    }
}

export default Blog;
