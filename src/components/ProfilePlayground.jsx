import { useState } from 'react';
import Box from '@mui/material/Box';
import ProfileCard from './ProfileCard';
import ProfileControls from './ProfileControls';

function ProfilePlayground() {
  const [profile, setProfile] = useState({
    name: 'Artem',
    surname: 'Kutsan',
    profession: 'developer',
    avatarSize: 60,
    mainColor: 'primary',
    buttonSize: 'medium',
    isOnline: false,
    cardVariant: 'elevation',
    showAlert: true,
  });

  const update = (key, value) => setProfile((prev) => ({ ...prev, [key]: value }));

  return (
    <Box display="flex" gap={4} width="100%">
      <ProfileCard profile={profile} />
      <ProfileControls profile={profile} update={update} />
    </Box>
  );
}

export default ProfilePlayground;
