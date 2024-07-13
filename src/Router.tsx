import { Routes, Route, Navigate } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";
import { HasOrdersPlacedSuccessfully } from "./middlewares/hasOrdersPlacedSuccessfully";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/success"
          element={
            <HasOrdersPlacedSuccessfully>
              <Success />
            </HasOrdersPlacedSuccessfully>
          }
        />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Route>
    </Routes>
  );
}
