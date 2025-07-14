import {Modal, Form, Button } from 'react-bootstrap';
import { userDetailAtom } from './userDetailAtom';
import { useNavigate } from 'react-router-dom';
import {useAtom} from 'jotai';

export const UserLoginPage = () => {


  const [userDetail, setUserDetail] = useAtom(userDetailAtom);

const handleChange = (key,value) => {
  setUserDetail({...userDetail, [key] : value
  })
}

const navigate = useNavigate();

const handleNext = () => {
  navigate('/userwelcomepage');
}
    return(
        <div>
             <div
      className="modal show"
      style={{ display: 'block', position: 'initial', backgroundColor:"#000000", height: "100vh"}}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" onChange={(e)=>handleChange("firstname", e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" onChange={(e)=>handleChange("lastname", e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Email ID</Form.Label>
        <Form.Control type="email" placeholder="Enter Email ID" onChange={(e)=>handleChange("email" , e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" onChange={(e)=>handleChange("password", e.target.value)}/>
      </Form.Group>
    </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleNext}>Login</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
        </div>
    )
}



