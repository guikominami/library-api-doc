/* eslint-disable react/prop-types */
import { apiLinks } from "../assets/data";
import "./Sidebar.css";

export default function Sidebar({ onMenuClicked }) {
  return (
    <aside className="main-sidebar">
      {apiLinks.map((item, index) => (
        <>
          {item.url === "" && (
            <span
              key={item.id}
            >
              {item.name}
            </span>
          )}        
          {item.url !== "" && (
            <button
              key={item.id}
              onClick={() => onMenuClicked(index, item.name)}
            >
              {item.name}
            </button>
          )}
        </>
      ))}
    </aside>
  );
}
