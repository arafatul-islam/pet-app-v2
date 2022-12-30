import { MoreVert, ThumbDown, ThumbUp } from "@mui/icons-material";
import "./communityPost.css";

export default function CommunityPost() {
  return (
    <div className="communityPost">
      <div className="communityPostWrapper">
        <div className="cummunityPostTop">
          <div className="communityPostTopLeft">
            <img
              src="/assets/cat1.jpg"
              className="communityPostProfileImg"
              alt=""
            />
            <span className="communityPostUsername">Arafat</span>
            <span className="communityPostDate">5 min ago</span>
          </div>
          <div className="communityPostTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="communityPostCenter">
          <span className="communityPostText">1st post</span>
          <img src="/assets/cat2.jpg" alt="" className="communityPostImg" />
        </div>
        <div className="communityPostBottom">
          <div className="communityPostBottomLeft">
            <ThumbUp className="communityPostThumbIcon" />
            <ThumbDown className="communityPostThumbIcon" />
            <span className="communityPostThumbCounter">30</span>
          </div>
          <div className="communityPostBottomRight">
            <span className="communityPostCommentText">4 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
