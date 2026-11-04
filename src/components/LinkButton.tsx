import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  to: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

function LinkButton({ to, variant = "primary", children }: Props) {
  return (
    <Link to={to} className={`btn btn-${variant}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
