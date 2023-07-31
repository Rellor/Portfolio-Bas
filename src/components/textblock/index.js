import "./textblock.scss";

export default function TextBlock({ text, content }) {
  return (
    <div className="textDiv">
      <p> {text} </p>
      {content}
    </div>
  );
}
