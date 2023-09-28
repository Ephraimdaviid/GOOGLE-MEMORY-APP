import {useEffect, useState} from "react";
import axios from "axios";
    
const dummy_array = [1, 2, 3, 4];

const Post = () => {
    const [title, setTitle ] =useState('');
    const[message, setMessage] = useState('');
    const [tags, setTags] = useState('');
    const [creator, setCreator] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(' Form Submitted');
    
      if (title === '' || message === '' || tags === '' || creator === '') {
        console.log('Input field cannot be empty');
        return;
    }
        const formdata = {
            form_title: title,
            form_message: message,
            form_tags: tags,
            form_creator: creator
        }

        axios.post('http://localhost:5000/posts/create', formdata)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
 }
    
 

    return (
        <div className="add_post">
            <form onSubmit={handleSubmit}>
                <div className="creator">
                    <input type="text" placeholder="Creator" value={creator} onChange={(e) =>setCreator(e.target.value)} />
                </div>

                <div className="title">
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="message">
                    <textarea placeholder="Message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <div className="tag">
                    <input type="text" placeholder="Tag" value={tags} onChange={(e) => setTags(e.target.value)} />
                </div>

                <div className="file">
                    <input type="file" value={file} onChange={(e) => FileSystem(e.target.value)} />
                </div>
                <div className="buttons">
                    <button type="submit" className="submit">submit</button>
                    <button type="button" className="clear">clear</button>
                </div>
            </form>       
        </div>
    )
}

  

export default Post