import clsx from "clsx";
export const UserMenu = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && "activeNavLink");
  };
  return (
    <div>
      <li>
        <button className={buildLinkClass}>Exit</button>
      </li>
    </div>
  );
};
export default UserMenu;
