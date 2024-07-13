import { ReactNode } from "react";

import { useCart } from "../hooks/useCart";
import { Navigate } from "react-router-dom";

interface HasOrdersPlacedSuccessfullyProps {
  children: ReactNode;
}

export function HasOrdersPlacedSuccessfully({
  children,
}: HasOrdersPlacedSuccessfullyProps) {
  const { paymentMethod } = useCart();

  if (!paymentMethod) {
    return <Navigate to={"/"} />;
  }

  return children;
}
