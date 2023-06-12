import profilePageReducer, { addPost, deletePost } from "./profilePage-reducer";
test('length of posts should be incremented', () => {
   // 1. test data
   let action = addPost("bang bang");
   let state = {
      postsData: [
         { id: 1, message: 'Hi!', likesCount: 14 },
         { id: 2, message: "Helooooo! It's my first post", likesCount: 23 },
         { id: 3, message: 'FowFowFow', likesCount: 13 },
         { id: 4, message: 'How are you?', likesCount: 233 },
         { id: 5, message: 'Purple season', likesCount: 27 },
         { id: 6, message: 'bless', likesCount: 22 },
         { id: 7, message: 'SadBoy99', likesCount: 90 },
      ]
   };
   // 2. action
   let newState = profilePageReducer(state, action);
   // 3. expecting
   expect(newState.postsData.length).toBe(8);
});
test('message of new post is "bang bang" ', () => {
   // 1. test data
   let action = addPost("bang bang");
   let state = {
      postsData: [
         { id: 1, message: 'Hi!', likesCount: 14 },
         { id: 2, message: "Helooooo! It's my first post", likesCount: 23 },
         { id: 3, message: 'FowFowFow', likesCount: 13 },
         { id: 4, message: 'How are you?', likesCount: 233 },
         { id: 5, message: 'Purple season', likesCount: 27 },
         { id: 6, message: 'bless', likesCount: 22 },
         { id: 7, message: 'SadBoy99', likesCount: 90 },
      ]
   };
   // 2. action
   let newState = profilePageReducer(state, action);
   // 3. expecting
   expect(newState.postsData[7].message).toBe('bang bang');
});

test('after deletion, the length of the messages should decrease" ', () => {
   // 1. test data
   let action = deletePost(1);
   let state = {
      postsData: [
         { id: 1, message: 'Hi!', likesCount: 14 },
         { id: 2, message: "Helooooo! It's my first post", likesCount: 23 },
         { id: 3, message: 'FowFowFow', likesCount: 13 },
         { id: 4, message: 'How are you?', likesCount: 233 },
         { id: 5, message: 'Purple season', likesCount: 27 },
         { id: 6, message: 'bless', likesCount: 22 },
         { id: 7, message: 'SadBoy99', likesCount: 90 },
      ]
   };
   // 2. action
   let newState = profilePageReducer(state, action);
   // 3. expecting
   expect(newState.postsData.length).toBe(6);
});