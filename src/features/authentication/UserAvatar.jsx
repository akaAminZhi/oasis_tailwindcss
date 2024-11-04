import { useUser } from "./useUser";
// const Avatar = styled.img`
//   display: block;
//   width: 4rem;
//   width: 3.6rem;
//   aspect-ratio: 1;
//   object-fit: cover;
//   object-position: center;
//   border-radius: 50%;
//   outline: 2px solid var(--color-grey-100);
// `;
function UserAvatar() {
  const { user } = useUser();
  return (
    <div className="flex gap-2 items-center font-medium text-xl text-gray-600">
      <img
        className="block w-10 object-cover object-center rounded-s-3xl "
        src={user.user_metadata.avatar || "default-user.jpg"}
        alt={`avatar of ${user.user_metadata.fullName}`}
      ></img>
      <span>{user.user_metadata.fullName}</span>
    </div>
  );
}

export default UserAvatar;
