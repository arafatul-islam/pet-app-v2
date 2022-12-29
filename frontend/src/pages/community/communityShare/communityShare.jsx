import "./communityShare.css";

import React from "react";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";

export default function CommunityShare() {
  return (
    <div className="communityShare">
      <div className="communityShareWrapper">
        <div className="communityShareTop">
          <img src="/assets/cat1.jpg" className="communityShareImg" alt="" />
          <input
            placeholder="What's going on?"
            className="communityShareInput"
          />
        </div>
        <hr className="communityShateHr" />
        <div className="communityShareBottom">
          <div className="communityShareOptions">
            <div className="communityShareOption">
              <PermMedia htmlColor="tomato" className="communityShareIcon" />
              <span className="communityShareOptionText">Photo</span>
            </div>
            <div className="communityShareOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="communityShareIcon"
              />
              <span className="communityShareOptionText">Feelings</span>
            </div>{" "}
            <div className="communityShareOption">
              <Room htmlColor="green" className="communityShareIcon" />
              <span className="communityShareOptionText">Location</span>
            </div>
          </div>

          <button className="communityShareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
