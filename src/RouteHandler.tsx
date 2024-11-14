import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./app/home";
import SubscriptionPage from "./app/subscription";

export const RouteHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
};
