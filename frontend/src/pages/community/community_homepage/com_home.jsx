import "./com_home.css";
import ComTopbar from "../com-topbar/com-topbar.jsx";
import CommunitySidebar from "../com_sidebar/communitySidebar";
import CommunityFeed from "../com_feed/communityFeed";
import CommunityRightbar from "../com_rightbar/communityRightbar";

const CommunityHomePage = (props) => {
  return (
    <>
      <ComTopbar />
      <div className="communityHomeContainer">
        <CommunitySidebar />
        <CommunityFeed />
        <CommunityRightbar />
      </div>
    </>
  );
};
export default CommunityHomePage;
