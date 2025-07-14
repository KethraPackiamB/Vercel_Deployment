import {useAtom} from "jotai";
import { Button,Form } from "react-bootstrap";
import { sampleData } from "./sampleData";
import { useNavigate } from "react-router-dom";

export const UserName = () => {

    const [userData, setUserData] = useAtom(sampleData);


    const handleChange = (e) => {
        setUserData({...userData,name:e.target.value});
    }

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/userdepartment');
    }

    return(
        <div>
            <div className="container m-4 w-25">
            <h4 className="my-3">Name of the User</h4>
            <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name :</Form.Label>
            <Form.Control type="Text" placeholder="Enter your name" onChange={handleChange}/>
            </Form.Group>
            </Form>

             <Button variant="primary" onClick={handleNext}>Next</Button>
        </div>
        </div>
    )
}