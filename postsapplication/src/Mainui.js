import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';

const Mainui = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState('1');

  const fetchData = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=3`
      )
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      });
  };

  const handleChangePage = (e) => {
    const { value } = e.target;
    setPageNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>POSTS</h1>
      <form onSubmit={handleSubmit}>
        <div className="page-number">
          <label className="page-label" htmlFor="pageNumber">
            Page Number
          </label>
          <input
            className="page-input"
            type="text"
            name="pageNumber"
            value={pageNumber}
            onChange={handleChangePage}
          />
        </div>
      </form>
      <Posts posts={posts} />
    </div>
  );
};

export default Mainui;
