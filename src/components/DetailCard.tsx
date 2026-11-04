import type { CSSProperties, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  style?: CSSProperties;
}

function DetailCard({ title, children, style }: Props) {
  return (
    <div className="detail-card" style={style}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default DetailCard;
