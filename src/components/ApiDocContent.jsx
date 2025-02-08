/* eslint-disable react/prop-types */
import { BsLink45Deg } from "react-icons/bs";

import "./ApiDocContent.css";
import { apiLinks } from "../assets/data";

export default function ApiDocContent({ index }) {
  console.log("apiDataId", index);
  const apiData = apiLinks[index].url;
  console.log("apiData", apiData);

  return (
    <section className="content">
      <ul>
        <h1>{apiData.name}</h1>
        {apiData.apis.map((item) => (
          <li key={item.id}>
            <>
              <div className="api-url">
                <span className="api-type">{item.type}</span>
                <span>{apiData.url}</span>
                {item.hasLink && (
                  <span>
                    <a href={apiData.url} target="_blank">
                      <BsLink45Deg />
                    </a>
                  </span>
                )}
              </div>
              <p>{item.description}</p>
              <h1>Request</h1>
              <div className="request-images">
                <span>
                  <p>Header</p>
                  <img src={item.header} alt="" />
                </span>
                <span>
                  <p>Body</p>
                  <img src={item.body} alt="" />
                </span>
              </div>

              <h1>Response</h1>
              <div className="request-images">
                <span>
                  <p>Header</p>
                  <img src={item.headerResponse} alt="" />
                </span>
                <span>
                  <p>Body</p>
                  <img src={item.bodyResponse} alt="" />
                </span>
              </div>
              <p>Tips: {item.tips}</p>
            </>
          </li>
        ))}
      </ul>
    </section>
  );
}
