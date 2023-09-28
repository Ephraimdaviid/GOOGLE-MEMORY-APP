import { useEffect } from 'react';
import bgImage from '../assets/bandmember.jpg';
import { useDispatch} from 'react-redux';
import { create_data} from '../features/posts/postSlice'
import axios from 'axios';

const dummy_array = [1,2,3,4]


const Addpost = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetch_data = () => {
            axios.get('http://localhost:5000/get_data')
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        }
    },[])

  return (
    <div className='add_posts' style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '30px'
    }}>
        {dummy_array.map(function (value) {
           return  <div key={value} className="post" style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.4)',
            borderRadius: '15px'
        }}>
            <div className="post_image"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px'
                }}
            >
                <div className="creator">
                    <h4 style={{ marginBottom: '10px' }}>Mark</h4>
                    <p>2 months ago</p>
                </div>
                <div className="edit">
                    <p>...</p>
                </div>
            </div>
            <div className='desc' style={{ padding: '20px' }}>
                <p>#china #australia</p>
                <h3 style={{ marginTop: '15px' }}>Visisted the escape room</h3>
                <p style={{ margin: '15px 0' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio repellat quia eveniet similique molestias obcaecati assumenda, architecto quasi commodi soluta.</p>
                <div className='action' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button>like</button>
                    <button>delete</button>
                </div>
            </div>
        </div>
        })}
    </div>
    )
}

export default Addpost

