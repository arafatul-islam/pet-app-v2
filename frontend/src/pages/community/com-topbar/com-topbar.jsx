import "./com-topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
function ComTopbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">Pet Community</div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="search " className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItems">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="assets/cat1.jpg" className="topbarImage" alt="user image" />
      </div>
    </div>
  );
}

export default ComTopbar;
