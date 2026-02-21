import { BrowserRouter } from "react-router-dom"

const App =() =>{
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

export default App