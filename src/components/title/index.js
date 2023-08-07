import "./title.scss";

export default function TitleBlock({ title, extraData }) {
  return (
    <div className="title">
      <h2> {title} </h2>
      {extraData ? <p> {extraData} </p> : null}
    </div>
  );
}
