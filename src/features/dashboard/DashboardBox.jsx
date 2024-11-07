// import styled from "styled-components";

// const DashboardBox = styled.div`
//   /* Box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);

//   padding: 3.2rem;

//   display: flex;
//   flex-direction: column;
//   gap: 2.4rem;
// `;

export default function DashboardBox({ children, customStyle }) {
  return (
    <div
      className={
        "flex flex-col gap-2 p-6 border rounded-md border-gray-100 bg-gray-50 " +
        customStyle
      }
    >
      {children}
    </div>
  );
}
