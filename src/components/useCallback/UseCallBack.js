import { useCallback, useState } from "react";
import NavBar from "../navbar/NavBar";
import { Button, Col, Row } from "reactstrap";

function UseCallBack() {

    const [count, setCount] = useState(0);
    const [countP, setCountP] = useState(0);


    // count minus
    const useCallBackM = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    // count plus
    const useCallBack = useCallback(() => {
        setCountP(countP + 1);
    }, [countP]);

    return (
        <div className="pt-5 mt-3" style={{overflow: "hidden"}}>
            <NavBar />

            <Row className="text-center">
                <Col className="col-6 bg-danger text-light py-5">
                    <div className="d-inline-block">
                        <p className="fw-medium fs-5">count: {count}</p>
                        <Button color="warning" className="text-light rounded-0 px-4 py-2 fs-5 fw-bolder" onClick={useCallBackM}>count--</Button>
                    </div>
                </Col>
                <Col className="col-6 bg-success text-light py-5">
                    <div className="d-inline-block">
                        <p className="fw-medium fs-5">count: {countP}</p>
                        <Button color="primary" className="rounded-0 px-4 py-2 fs-5 fw-bolder" onClick={useCallBack}>count++</Button>
                    </div>
                </Col>
            </Row>

        </div>
    );
}

export default UseCallBack;