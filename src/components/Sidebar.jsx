/* eslint-disable react/prop-types */
import { apiLinks } from "../assets/data";
import "./Sidebar.css";

export default function Sidebar({ onMenuClicked }) {
  return (
    <aside className="main-sidebar">
      {apiLinks.map((item, index) => (
        <span key={item.id}>
          {item.url === "" && (
            <p>
              {item.name}
            </p>
          )}        
          {item.url !== "" && (
            <button
              onClick={() => onMenuClicked(index, item.name)}
            >
              {item.name}
            </button>
          )}
        </span>
      ))}
    </aside>
  );
}
