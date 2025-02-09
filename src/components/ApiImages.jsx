/* eslint-disable react/prop-types */
export default function ApiImages({ title, header, body, tips }) {
  return (
    <div className="request-response-content">
      <h1>{title}</h1>
      {tips && <p className="api-description">{tips}</p>}
      <div className="request-images">
        <div className="request-images-child">
          <h2>Header</h2>
          <img src={header} alt=""/>
        </div>
        {body && (
          <div className="request-images-child">
            <h2>Body</h2>
            <img src={body} alt=""/>
          </div>
        )}
      </div>
    </div>
  );
}
