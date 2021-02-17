import React, { useState } from 'react';
import './App.css';
import { APIResult, Endpoints } from './constants';
import generalAPIService from '../src/services/apiService';
const App: React.FC = () => {
  const [click, setClick] = useState(false);
  // wrapping fetch in a handleFetch to prevent it firing on page load
  //const handleFetch = (() => {

  const setMe = (event: React.MouseEvent): void => {
    event.preventDefault();
    setClick(!click);
  };

  const findCookie = (name: string) => {
    const cookies = document.cookie;
    if (cookies) {
      const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith(name));
      if (cookie) {
        return cookie.split('=')[1];
      }
      return `Cookie with name ${name} doesnt exists`;
    }
    return `Cookie with name ${name} doesnt exists`;
  };

  // WEATHER API

  generalAPIService
    //this service accepts path,query, customHeader
    .get(
      '/api/location/search/',
      { params: { query: 'london' } },
      { customRequestHeaders: { greg: 'greg', bushra: 'bushra' } }
    )
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });

  //USERS and POSTS API
  //get users
  generalAPIService
    .get('/api/users/')
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });

  //sign in user
  generalAPIService
    .post('/api/users/signin', {
      body: {
        username: 'test',
        password: 'test',
      },
    })
    .then((data) => {
      //comes back with token that needs
      // sign in cookie
      document.cookie = `bearer=${data.token}`;
    })
    .catch((e) => {
      console.log(e);
    });

  //call this one with dealy since you need token
  setTimeout(async () => {
    const authCookie = findCookie('bearer');
    const authorized = {
      customRequestHeaders: { Authorization: `Bearer ${authCookie}` },
    };

    //create a post needs token for this route
    //set in headers
    const createPost = await generalAPIService.post(
      '/api/posts/create',
      {
        body: {
          title: 'new Post1',
          text: 'new Post Text1',
        },
      },
      authorized
    );

    console.log(createPost);
    //update the post needs token for this route and post id from previous request
    const postID = createPost._id;
    const updatePost = await generalAPIService.put(
      `/api/posts/${postID}`,
      {
        body: {
          title: 'new Post1 update',
          text: 'this is new Post text1 update',
        },
      },
      authorized
    );
    console.log(updatePost);
  }, 2000);

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={setMe}>this is click event</p>
      </header>
    </div>
  );
};

export default App;
