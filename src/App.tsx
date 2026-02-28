import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient();

// =======================================================
// ✅ Wrapper that hides Header on specific routes
// =======================================================
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
// =======================================================

const App = () => (
    <div className="font-primarylw">
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/index" element={<Index />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </QueryClientProvider>
    </div >
);

export default App;
