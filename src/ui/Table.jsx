import { createContext, useContext } from "react";

const tableConext = createContext();
function Table({ children, columns }) {
  const styleTable = "border border-stone-200 rounded-md";
  return (
    <tableConext.Provider value={{ columns }}>
      <div className={styleTable}>{children}</div>
    </tableConext.Provider>
  );
}

function Row({ children }) {
  const { columns } = useContext(tableConext);
  const styleRow = `grid grid-cols-[${columns}] gap-1 items-center  border  px-2 py-3 font-semibold`;
  return <div className={styleRow}>{children}</div>;
}

function Header({ children }) {
  const { columns } = useContext(tableConext);

  const styleHeader = `grid grid-cols-[${columns}] gap-1 items-center  border  px-2 py-3 font-semibold gap-1 items-center bg-stone-50  border-stone-100 uppercase text-stone-600 tracking-wide`;
  return <div className={styleHeader}>{children}</div>;
}

function Body({ children }) {
  return <section className="my-1 mx-0">{children}</section>;
}

function Footer({ children }) {
  return (
    <footer className="p-3 flex bg-gray-50 justify-center">{children}</footer>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Footer = Footer;
Table.Body = Body;
export default Table;
