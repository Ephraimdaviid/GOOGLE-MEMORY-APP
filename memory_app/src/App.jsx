
import Addpost from './Component/Addpost';
import Header from './Component/Header';
import Post from './Component/Post';
import './App.css';
const App = () => {
  return (
       <div className="app">
          <div className="container" style={{
            width:'70%',
            margin: '0 auto'
          }}>
            <Header />
            <div style={{ display: 'flex', columnGap: "30px" }}>
              <Addpost />
              <Post />
            </div>
          </div>
       </div>
    
  )
}

export default App