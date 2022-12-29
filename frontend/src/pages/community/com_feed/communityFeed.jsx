import CommunityShare from "../communityShare/communityShare";
import "./communityFeed.css";

export default function CommunityFeed() {
  return (
    <div className="communityFeed">
      <div className="communityFeedWrapper">
        <CommunityShare />
      </div>
    </div>
  );
}
