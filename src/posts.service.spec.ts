import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', async () => {
    // arrange

    // act
    const { id, date } = await postsService.create(post);

    //assert
    expect(postsService.find(id)).toEqual({ ...post, id, date });
  });

  it('should find a post', async () => {
    // arrange

    // act
    const newPost = await postsService.create(post);

    //assert
    expect(postsService.find(newPost.id)).toEqual(newPost);
  });
});
