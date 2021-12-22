import { lazy, Suspense } from "react";
import { Routes, BrowserRouter, Navigate, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { LinearProgress } from "@material-ui/core";
import RouterWrapper from "./core/components/RouterWrapper";

const queryClient = new QueryClient();
const Launches = lazy(() => import("./pages/Launches"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouterWrapper>
          <Suspense fallback={<LinearProgress />}>
            <Routes>
              <Route path="/" element={<Navigate replace to="/launches" />} />
              <Route path="launches" element={<Launches />} />
            </Routes>
          </Suspense>
        </RouterWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
