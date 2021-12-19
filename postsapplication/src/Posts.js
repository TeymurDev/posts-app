import React from 'react';

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h1>{`Title: ${post.title}`}</h1>
          <p className="body">{`Body: ${post.body}`}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
