import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Button } from "reactstrap";

function ModalVideos() {

    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <ModalVideo channel="youtube"
                isOpen={isOpen}
                videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)} />

            <Button className="btn-primary" onClick={() => setOpen(true)}>
                VIEW DEMO
            </Button>
        </div>
    )
}
export default ModalVideos;