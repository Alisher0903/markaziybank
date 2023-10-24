import { Route, Routes } from "react-router-dom";
import Bank from "../bank/Bank";
import Home from "../home/Home";
import ModalVideos from "../modalVideo/ModalVideo";
import UseCallBack from "../useCallback/UseCallBack";
import ScrollToTopButton from "../scroll/ScrollToTopButton";
import Diagramma from "../diagramma/Diagramma";
import Cards from "../cards/Cards";
import Test from "../test/Chat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Bank />} />
        <Route path="/modalvideo" element={<ModalVideos />} />
        <Route path="/use/call/back" element={<UseCallBack/>}/>
        <Route path="/scroll" element={<ScrollToTopButton />}/>
        <Route path="/diagramma" element={<Diagramma />}/>
        <Route path="/cards" element={<Cards />}/>
        <Route path="/test" element={<Test />}/>
    </Routes >
    </>
  );
}

export default App;
