import { userDetailAtom } from "./userDetailAtom"
import { useAtom } from 'jotai';
import Container from 'react-bootstrap/Container';

export const UserWelcomePage = () => {

    const [userDetail] = useAtom(userDetailAtom);

    const style= {
        backgroundColor : "#000000",
        height : "100vh",
        color : "#ffffff",
    }
    return(
        <div style={style}>
            <Container className="d-flex justify-content-center py-5">
            <h1>Welcome {userDetail.firstname} {userDetail.lastname}</h1>
            </Container>
           
        </div>
    )
}
