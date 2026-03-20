// src/pages/profile/index.jsx
import Meta from '../../components/Meta';
import ProfilePlayground from '../../components/ProfilePlayground';

function ProfilePage() {
  return (
    <>
      <Meta title="Profile App" />

      {/* <div className="container max-w-5xl"> */}
      <ProfilePlayground />
      {/* </div> */}
    </>
  );
}

export default ProfilePage;
