import CommunityShare from "../communityShare/communityShare";
import CommunityPost from "../com_post/communityPost";
import "./communityFeed.css";

export default function CommunityFeed() {
  return (
    <div className="communityFeed">
      <div className="communityFeedWrapper">
        <CommunityShare />
        <CommunityPost />
        <CommunityPost />
        <CommunityPost />
        <CommunityPost />
        <CommunityPost />
        <CommunityPost />
      </div>
    </div>
  );
}
