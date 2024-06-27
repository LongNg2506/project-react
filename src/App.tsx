
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./project/Layout";
import HomePage from "./project/HomePage";
import Trending from "./project/Trending";
import Explore from "./project/Explore";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <div className="bg-[#1E1E2A] h-full">
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/explore" element={<Explore />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
      </div>
    </>
  );
}

export default App;