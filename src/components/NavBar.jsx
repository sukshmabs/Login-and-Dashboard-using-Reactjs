import Burger from "./Burger";

const NavBar = ({ contacts, currentUser, changeChat }) => {
  return (
    <div>
      {/* <div className="logo">Nav Bar</div> */}
      <Burger
        contacts={contacts}
        currentUser={currentUser}
        changeChat={changeChat}
      />
    </div>
  );
};

export default NavBar;
