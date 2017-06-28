# Blogstack

## Intro
Blogstack is a decentralized blog site powered by Blockstack. The goal is to be the destination to share and discover innovative ideas, stories, news/entertainment articles in the new, decentralized internet.


## Who's it for?
- Anyone and everyone: Medium, Reddit, Quora are delightful sources of information & entertainment for anyone and everyone since blog sites don't have to be confined to an individual industry or topic
- Bloggers: People that enjoy sharing ideas, stories & experiences online
- Readers: People that enjoy discovering & reading about new ideas, stories & experiences online


## Why build it?
- To create a community for people to make connections and share ideas + experiences with others
- Blog sites can be extremely popular since it offers content relatable to a wide audience
- There is no decentralized blog app as of today.
- Potential monetization opportunities via advertising/subscriptions


## Minimum Viable Product (MVP)
At minimum, this app will satisfy the following criteria with bug-free, smooth navigation & sufficient CSS styling.
- [ ] Users: User Auth provided by blockstack
- [ ] Blogs: Users can post/edit/delete blogs
- [ ] Tags: Topic(s) of a blog
- [ ] Search: Search & filter blogs
- [ ] Comments: Users can comment on blog
- [ ] Index View: Homepage page of Blogstack
- [ ] Blog View: Individual blog show page

### Bonus features
- [ ] Replies: Users can reply to comments
- [ ] Profile View: User profile page
- [ ] Likes: Likes on a blog
- [ ] Follow: Follow users to receive notifications when they post
- [ ] Search: Advanced search filter features (date/author)


## Design Docs
* [View Wireframes][wireframes]
* [React Component Hierarchy][component_hierarchy]
* [React/Redux Sample State][sample_state]
* [Model Skeleton/Schema][model_skeletons]
* [API endpoints][api_endpoints]


[wireframes]: ./wireframes
[component_hierarchy]: ./component_hierarchy.md
[sample_state]: ./sample_state.md
[model_skeletons]: ./model_skeletons.md
[api_endpoints]: ./api_endpoints.md


## MVP Timeline

### Phase 1: Landing page & Navbar Component (1 day)
  * Build fully functional Blockstack app with sufficient styling

### Phase 2: Users (1 day)
  * Add User Auth with blockstack.js
  * Make AboutUser component with sufficient CSS styling

### Phase 3: Blogs (3 days)
  * Allow users to create, edit, & delete blogs
  * Create blogs index page & blog show page

### Phase 4: Tags (4 days)
  * Users can create tags for blogs
  * Blog forms have a section to add tags to the blog
  * Create related blogs section in blog show component

### Phase 5: Search (4 days)
  * Users can search by blog title
  * Filter blogs by tags

### Phase 6: Comments (2 days)
  * Add ability for users to comment on blogs

### Phase 7: Bonus features
  * Make User profile page
  * Users can reply to comments
  * Users can 'like' a blog
  * Users can follow other users
  * Filter blogs author/date
