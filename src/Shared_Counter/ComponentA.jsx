import { counterAtom } from "./counterAtom";
import { useAtom } from 'jotai';
import Container from 'react-bootstrap/Container';
import {Button} from 'react-bootstrap';

import { ComponentB } from "./ComponentB";


export const ComponentA = () => {

    const [count, setCount] = useAtom(counterAtom);

    const incrementCount = () => {
        setCount(count+1);
    }

   

    return(
        <div>
            <Container className="my-5">
               
                <Button variant="primary" onClick={incrementCount}>Increment</Button>
                <ComponentB/>
            </Container>
        </div>
    )
}