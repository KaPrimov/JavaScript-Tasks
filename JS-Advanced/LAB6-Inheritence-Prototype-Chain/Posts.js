// function solved() {
    class Post {
        constructor(title, content) {
            this._title = title;
            this._content = content;
        }

        get title() {
            return this._title
        }

        get content() {
            return this._content
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends  Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.array = [];
        }

        addComment(comment) {
            this.array.push(comment);
        }

        toString(){
            let answer = '';
            answer += `Post: ${this.title}\n`;
            answer += `Content: ${this.content}\n`;
            let rating = this.likes - this.dislikes;
            answer += `Rating: ${rating}`;
            if (this.array.length > 0){
                answer += '\nComments:\n';
                for (let i = 0; i < this.array.length; i++) {
                    if (i !=this.array.length -1 ) {
                        answer += ` * ${this.array[i]}\n`
                    } else {
                        answer += ` * ${this.array[i]}`
                    }

                }
            }
            return answer;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }

//     return {Post, SocialMediaPost, BlogPost}
// }

let post = new Post("Post", "Content");
console.log(post.toString());

let scm = new SocialMediaPost("TestTitle", "TestContent", 30, 30);

scm.addComment("sda");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());


let blogPost = new BlogPost('', 'stuggg', 12);
blogPost.view();
blogPost.view();
blogPost.view();
console.log(blogPost.toString());
