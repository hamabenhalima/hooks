import React,{useState} from 'react'
import {Modal,Button,Form,Col} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

  const Add = ({show,handleClose,addMovie}) => {
    const[newMovie,setNewMovie] = useState({
      title:"",
      rate:1,
      duration:"",
      genre:"",
      description:"",
      main_img:"",
    })

    
  const onStarClick=(nextValue, prevValue, name)=> {
    setNewMovie({...newMovie,rate:nextValue})
   // setRate( nextValue );
  }

   const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value.value})
   }
  return (
    <div>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" onChange={handleChange} name="title" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>image url</Form.Label>
          <Form.Control type="password" placeholder="img url" onChange={handleChange}  name="main_img" />
        </Form.Group>
      </Form>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newMovie.rate}
          onStarClick={onStarClick}
        />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>description</Form.Label>
        <Form.Control as="textarea" rows={3}  onChange={handleChange} name="description" />
      </Form.Group>

      <Form className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>duration</Form.Label>
          <Form.Control  onChange={handleChange} name="duration" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Genre</Form.Label>
          <Form.Select defaultValue="Choose genre" onChange={handleChange} name="genre" >
            <option>trailler</option>
            <option>action</option>
            <option>romance</option>

          </Form.Select>
        </Form.Group>

      
      </Form>

    
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> { addMovie(newMovie);handleClose()}}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
