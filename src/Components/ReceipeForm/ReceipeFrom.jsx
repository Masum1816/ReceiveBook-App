
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { PostData } from '../../Services/Actions/ReceipeAction';

const ReceipeFrom = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        id: '',
        title: '',
        author: '',
        genere: '',
        publicationYear: ''
    });

    const handleInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(PostData(data));

        console.log("Data : ", data);

        setData({
            id: '',
            title: '',
            author: '',
            genere: '',
            publicationYear: ''
        })
    
    }



  return (

   <>

   <div className="container">
    <div className="row">
        <div className="col-3"></div>
            <div className="col-4">
                <Form className='mt-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Book Title" name='title' value={data.title} onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Author" name='author' value={data.author} onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" placeholder="Genre" name='genere' value={data.genere} onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Publication Year</Form.Label>
                    <Form.Control type="number" placeholder="Publication Year" name='publicationYear' value={data.publicationYear} onChange={handleInput} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
    </div>
   </div>
   </>

  )

}

export default ReceipeFrom;








