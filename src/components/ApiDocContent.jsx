/* eslint-disable react/prop-types */
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
              <div className="api-type">
                <p>{item.type}</p>
                <p>{apiData.url}</p>
              </div>
              <p>
                <b>Descrição:</b> {item.description}
              </p>
              <p>Segurança: {item.security}</p>
              <p>Parâmetros: {item.parameters}</p>
            </>
          </li>
        ))}
      </ul>
    </section>
  );
}
