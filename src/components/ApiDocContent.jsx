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
      <>
        <h1>{apiData.name}</h1>
        <div className="api-url">
          <span className="api-type">{apiData.type}</span>
          <span>{apiData.url}</span>
          {apiData.hasLink && (
            <span>
              <a href={apiData.url} target="_blank">
                <BsLink45Deg />
              </a>
            </span>
          )}
        </div>
        <p className="api-description">{apiData.description}</p>
        <ApiImages
          title={"Request"}
          header={apiData.header}
          body={apiData.body}
          classnameImage={"imageRequest"}
        />
        <ApiImages
          title={"Response"}
          header={apiData.headerResponse}
          body={apiData.bodyResponse}
          classnameImage={"imageResponse"}
        />
      </>
    </section>
  );
}
