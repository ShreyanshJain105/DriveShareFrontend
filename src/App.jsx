import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import DashBoard from "./pages/DashBoard"
import MyFiles from "./pages/MyFiles"
import PublicFileView from "./pages/PublicFileView"
import Subscription from "./pages/Subscription"
import Transactions from "./pages/Transactions"
import Upload from "./pages/Upload"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/my-files" element={<MyFiles />} />
        <Route path="/public-file-view" element={<PublicFileView />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;