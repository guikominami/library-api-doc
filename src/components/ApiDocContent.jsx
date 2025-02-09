/* eslint-disable react/prop-types */
import { BsLink45Deg } from "react-icons/bs";
import { apiLinks } from "../assets/data";
import ApiImages from "./ApiImages";
import "./ApiDocContent.css";

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
                <span>{item.url}</span>
                {item.hasLink && (
                  <span>
                    <a href={apiData.url} target="_blank">
                      <BsLink45Deg />
                    </a>
                  </span>
                )}
              </div>
              <p className="api-description">{item.description}</p>
              <ApiImages
                title={"Request"}
                header={item.header}
                body={item.body}
                classnameImage={"imageRequest"}
              />
              <ApiImages
                title={"Response"}
                header={item.headerResponse}
                body={item.bodyResponse}
                classnameImage={"imageResponse"}
              />
            </>
          </li>
        ))}
      </ul>
    </section>
  );
}
