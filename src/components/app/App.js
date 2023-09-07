import { Route, Routes } from "react-router-dom";
import Bank from "../bank/Bank";
import Home from "../home/Home";
import ModalVideos from "../modalVideo/ModalVideo";
import UseCallBack from "../useCallback/UseCallBack";
import ScrollToTopButton from "../scroll/ScrollToTopButton";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Bank />} />
        <Route path="/modalvideo" element={<ModalVideos />} />
        <Route path="/use/call/back" element={<UseCallBack/>}/>
        <Route path="/scroll" element={<ScrollToTopButton />}/>
    </Routes >
    </>
  );
}

export default App;
