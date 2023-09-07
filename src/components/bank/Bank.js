import { Button, Col, Container, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import NavBar from "../navbar/NavBar";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Bank() {

    const [cbu, setCbu] = useState([]);             // backend malumot olib kelish uchun
    const [modal, setModal] = useState(false);      //modal
    const [modalV, setVaModal] = useState(false);   // modal 2. uzs ga aylantrish
    const [modalBtn, setBtnModal] = useState(false);   // modal 2. uzs ga aylantrish
    const [itemId, setItemId] = useState("");       // id ni topish
    const [itemIdUsd, setItemIdUsd] = useState(""); // id ni topish 2
    const [uzsAmount, setUzsAmount] = useState(""); // uzs default qiymat va uni online qiy saqlash
    const [usdAmount, setUsdAmount] = useState(0);  // aylantrilgan valyutani saqlash
    const [usdAmountTwo, setUsdAmountTwo] = useState("");
    const [uzsAmountTwo, setUzsAmountTwo] = useState("")

    useEffect(() => {
        getCbu();
    }, []);

    const openModal = () => setModal(!modal);       // modal
    const openVaModal = () => setVaModal(!modalV);  // modal 2. uzs ga aylantrish
    const openBtnModal = () => setBtnModal(!modalBtn);  // modal btn

    // axios orqali backenddan malumot olib kelish
    function getCbu() {
        axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/").then(res => setCbu(res.data));
    }

    // sumdan boshqa valyutalarga utkazish
    function exportValue(min) {
        const amount = min.target.value;
        setUzsAmount(amount);
        setUsdAmount(amount / itemId.Rate);
    }

    // sumga aylantirish
    function exportValueTwo(min) {
        const amountTwo = min.target.value;
        setUsdAmountTwo(amountTwo);
        setUzsAmountTwo(amountTwo * itemIdUsd.Rate);
    }

    return (
        <div className="main">
            <NavBar />
            <Container className="mt-4">
                <div className="btn_value">
                    <div className="markaziy_bank">
                        {/* Markaziy bankning {cbu[0].Date} kungi valyutalar narxi */}
                    </div>
                    <Button color="primary" className="px-4 py-2 rounded-3 fw-semibold" onClick={openBtnModal}>Currencies</Button>
                    <span className="px-4"> (Bu to'liqligicha ishlamaydi! Buning uchun sizdan uzur suraymiz!!!) </span>
                </div>
                <Row className="main-row">
                    {cbu.map((item, i) =>
                        <Col sm="6" md="4" key={i}>
                            <div className="main-box">
                                <p className="h3 fw-bold text-primary shadow text-center rounded-3 py-2">Valyuta kurslari
                                    <span className="text-info h4"> ({item.Ccy}) </span>
                                </p>
                                <hr className="mt-0" />
                                <p className="mt-4 fw-semibold">
                                    <span className="fw-bolder fs-5 text-success"> Pul birligi: </span>
                                    <span className="fs-5 fw-semibold text-primary"> {item.CcyNm_UZ} </span>
                                    <span className="fw-medium fs-5 text-info"> ({item.Ccy}) </span>
                                </p>
                                <p className="fs-5 fw-semibold">
                                    <span className="text-success fw-bold">1 ({item.Ccy}): </span>
                                    <span className="text-primary fw-bold"> {item.Rate} <span className="text-info"> (UZS) </span> </span>
                                </p>
                                <p className="fs-5 fw-semibold">
                                    <span className="fw-bold text-success"> {item.Diff} (UZS): </span>
                                    {item.Diff > 0 ? <span className="text-primary fw-bolder mx-2">+Ko'tarildi</span> : <span className="text-danger mx-2 fw-bolder">-Pastladi</span>}
                                </p>
                                <p className="fs-5 fw-medium">
                                    <span className="text-danger fw-bold"> {item.Date} (Yil)</span>
                                </p>
                                <Row className="mt-4">
                                    <Col className="col-6">
                                        <Button color="primary" className="w-100 fw-semibold" outline onClick={() => {
                                            openModal();
                                            setItemId(item);
                                        }}>UZS</Button>
                                    </Col>
                                    <Col className="col-6">
                                        <Button color="primary" className="w-100 fw-semibold" outline onChange={() => {
                                            setItemId(item);
                                        }} onClick={() => {
                                            openVaModal();
                                            setItemIdUsd(item);
                                        }}>{item.Ccy}</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    )}
                </Row>

                {/* modal */}
                <Modal isOpen={modal}>
                    <ModalHeader toggle={openModal}><span className="fw-bold text-info">UZS</span> ni <span className="fw-bold text-info">{itemId.Ccy && itemId.CcyNm_UZ}</span> ga aylantirish</ModalHeader>
                    <ModalBody>
                        <FormGroup floating>
                            <Input type="number" id="title" value={uzsAmount} onChange={exportValue} placeholder="UZB (So'm)" />
                            <Label for="title">UZB (So'm)</Label>
                        </FormGroup>
                        <FormGroup>
                            <Input value={usdAmount.toFixed(3)} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={openModal} className="w-100 fw-bolder" color="dark" outline>Yopish</Button>
                    </ModalFooter>
                </Modal>

                {/* modal-2 */}
                <Modal isOpen={modalV}>
                    <ModalHeader toggle={openVaModal}><span className="fw-bold text-info">{itemIdUsd.CcyNm_UZ}</span> ni <span className="fw-bold text-info">UZS</span> ga aylantirish</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Input type="number" value={usdAmountTwo} onChange={exportValueTwo} placeholder="Miqdorni kiriting..." />
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" value={uzsAmountTwo} placeholder="UZB (So'm)" />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={openVaModal} className="w-100 fw-bolder" color="dark" outline>Yopish</Button>
                    </ModalFooter>
                </Modal>

                {/* btn modal */}
                <Modal isOpen={modalBtn} size="lg">
                    <ModalHeader toggle={openBtnModal}>
                        <span className="fs-5 fw-bold">Valyutalar turini tanlang</span>
                    </ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col className="mb-2 mb-md-0 col-md-5">
                                <select className="form-select">
                                    <option selected disabled>select value</option>
                                    {cbu.map((item, i) =>
                                        <option key={i}>
                                            {item.CcyNm_UZ}
                                        </option>
                                    )}
                                </select>
                            </Col>
                            <Col className="md-2 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                                </svg>
                            </Col>
                            <Col className="col-md-5">
                                <select className="form-select">
                                    <option selected disabled>select value</option>
                                    {cbu.map((item, i) =>
                                        <option key={i}>
                                            {item.CcyNm_UZ}
                                        </option>
                                    )}
                                </select>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col className="mb-2 mb-md-0 col-md-5">
                                <Input type="number" placeholder="Miqdorni tanlang" />
                            </Col>
                            <Col md="2"><p className="text-center">AS</p></Col>
                            <Col className="col-md-5">
                                <p className="ms-1">0</p>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="w-100 fw-bolder" color="dark" outline onClick={openBtnModal}>Yopish</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        </div>
    );
}
export default Bank;