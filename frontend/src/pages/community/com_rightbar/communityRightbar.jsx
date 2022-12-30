import "./communityRightbar.css";

export default function CommunityRightbar() {
  return (
    <div className="communityRightbar">
      <div className="communityRightbarWrapper">
        <h5 className="communityRightbarOnelineFriends">Online Frineds</h5>
        <ul className="communityRightbarFriendList">
          <li className="communityRightbarFriend">
            <div className="communityRightbarProfileImgContainer">
              <img
                src="/assets/cat3.jpg"
                alt=""
                className="communityRightbarProfileImg"
              />
              <span className="communityRightbarOnline"></span>
            </div>
            <span className="communityRightbarUsername">Md Rasel</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
