import "./CardR.css";

interface CardRProps {
  title: string;
  paragraphs: string[];
  borderTop: string;
  borderRight: string;
  borderBottom: string;
  borderLeft: string;
  cardBgColor: string;
}
export default function CardR({
  title,
  paragraphs = [],
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  cardBgColor,
}: CardRProps) {
  return (
    <div className="cardR">
      <div className={`cardRBody ${cardBgColor}`}></div>
      {/* <div className="cardRInner"></div> */}
      <div className="cardRInnerBorder"></div>
      <div className="cardRInner"></div>

      <div
        className={`cardRTop border-[1px] ${borderTop} ${borderRight} ${borderBottom} ${borderLeft}`}
      >
        {title}
      </div>

      <div className="cardRContent">
        {paragraphs.map((text, idx) => (
          <p key={idx} className="text-base">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
