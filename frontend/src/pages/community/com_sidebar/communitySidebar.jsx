import "./communitySidebar.css";
import {
  RssFeed,
  RssChat,
  Chat,
  VideoSettings,
  Group,
  Bookmark,
  EventSeat,
  GolfCourseSharp,
  GroupWork,
} from "@mui/icons-material";

export default function CommunitySidebar() {
  return (
    <div className="communitySidebar">
      <div className="communitySidebarWrapper">
        <ul className="communitySidebarList">
          <li className="communitySidebarListItem">
            <RssFeed className="cimmunitySidebarListItemIcon" />
            <span className="communitySidebarListText">Feed</span>
          </li>
          <li className="communitySidebarListItem">
            <Chat className="cimmunitySidebarListItemIcon" />
            <span className="communitySidebarListText">Chat</span>
          </li>{" "}
          <li className="communitySidebarListItem">
            <VideoSettings className="cimmunitySidebarListItemIcon" />
            <span className="communitySidebarListText">Videos</span>
          </li>{" "}
          <li className="communitySidebarListItem">
            <Group className="cimmunitySidebarListItemIcon" />
            <span className="communitySidebarListText">Groups</span>
          </li>{" "}
          <li className="communitySidebarListItem">
            <Bookmark className="cimmunitySidebarListItemIcon" />
            <span className="communitySidebarListText">Bookmarks</span>
          </li>
        </ul>
        <hr className="communitySidebarHr" />
      </div>
    </div>
  );
}
