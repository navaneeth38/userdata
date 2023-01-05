
import './App.css';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from "./redux/feature/postSlice"

// const users = [
//   { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
//   { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
//   { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
//   { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" }
// ]

function App() {
  const dispatch = useDispatch()
  const { posts, loading } = useSelector((state) => state.post) //post is keyname of postreducer in store
  const [profile, setProfile] = useState(0)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className="App">
      <div className='container' >
        {(profile === 0) ? (<div className="single">
          <div><img src='https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527__340.png' height="128" alt='avatar' /></div>
          <div style={{ fontWeight: "bold" }}>Name</div>
          <div><span style={{ fontWeight: "bold" }}>Mail </span></div>
          <div>Click on any button below</div>
        </div>) :
          (<div className="single">
            <div><img src={posts[profile - 1].avatar} alt="avatar" /></div>
            <div><span style={{ fontWeight: "bold" }}>Name: </span>{posts[profile - 1].first_name} {posts[profile - 1].last_name}</div>
            <div> <span style={{ fontWeight: "bold" }}>Mail: </span>{posts[profile - 1].email}</div>
          </div>)}
      </div>


      <div className="buttons">
        {posts.map((item) => {
          return (
            <div key={item.id} className="singleButton">
              <button style={{ width: "180%", height: "150%" }} onClick={() => setProfile(item.id)}>{item.id}</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
