import { sampleData } from "./sampleData";
import { useAtom } from "jotai";
import {Form,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const UserLocation = () => {

    const [userData, setUserData] = useAtom(sampleData);

    const handleChange = (e) =>  {
        setUserData({...userData, location : e.target.value})
    }

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/summary');
    }
    return(
        <div>
            <div className="container m-4 w-25">
                <h4>Location of the user</h4>
            <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Location :</Form.Label>
            <Form.Control type="Text" placeholder="Enter your location" onChange={handleChange}/>
            </Form.Group>
            </Form>

             <Button variant="primary" onClick={handleNext}>Next</Button>
        </div>
        </div>
    )
}