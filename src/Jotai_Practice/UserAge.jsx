import { sampleData } from "./sampleData"
import { useAtom } from "jotai"
import {Form, Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export const UserAge = () => {


    const [userData,setUserData] = useAtom(sampleData);

    const handleChange = (e) => {
        setUserData({...userData, age : e.target.value});
    }

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/useremail');
    }
    return(
        <div>
            <div className="container m-4 w-25">
                <h4 className="my-3">Age of the User</h4>
             <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Age :</Form.Label>
            <Form.Control type="Text" placeholder="Enter your age" onChange={handleChange} />
            </Form.Group>
            </Form>

             <Button variant="primary" onClick={handleNext}>Next</Button>
        </div>
        </div>
    )
}