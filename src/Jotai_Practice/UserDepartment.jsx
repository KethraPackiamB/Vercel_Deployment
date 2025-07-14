import { sampleData } from "./sampleData";
import { useAtom } from "jotai";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const UserDepartment = () => {

    const [userData,setUserData] = useAtom(sampleData);

    const handleChange = (e) => {
        setUserData({...userData, department: e.target.value});
    }

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/userage');
    }
    return(
        <div>
            <div className="container m-4 w-25">
                <h4 className="my-3">Department of the User</h4>
           <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Department :</Form.Label>
            <Form.Control type="Text" placeholder="Enter department" onChange={handleChange}/>
            </Form.Group>
            </Form>

             <Button variant="primary" onClick={handleNext}>Next</Button> 
        </div>
        </div>
    )
}