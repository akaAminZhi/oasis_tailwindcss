// const ButtonIcon = styled.button`
//   background: none;
//   border: none;
//   padding: 0.6rem;
//   border-radius: var(--border-radius-sm);
//   transition: all 0.2s;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.2rem;
//     height: 2.2rem;
//     color: var(--color-brand-600);
//   }
// `;

// export default ButtonIcon;
function ButtonIcon({ children, ...props }) {
  return (
    <button
      className="py-2 rounded-md duration-200 hover:bg-gray-100 "
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
