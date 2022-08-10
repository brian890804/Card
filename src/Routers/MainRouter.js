import { Route, Routes } from "react-router-dom";
import MainPage from '../Screens/MainPage'
import Drawer from '../Component/Drawer'
export default function MainRouter() {
    return (
        <Drawer>
            <Routes>
                <Route path="/inbox" element={<MainPage />} />
                <Route path="/" element={<MainPage />} />
                {/* <Route path="about" element={<About />} /> */}
            </Routes>
        </Drawer>
    )
}