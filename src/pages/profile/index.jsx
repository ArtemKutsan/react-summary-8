// src/pages/profile/index.jsx
import Meta from '../../components/Meta';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProfilePlayground from '../../components/ProfilePlayground';

function ProfilePage() {
  return (
    <>
      <Meta title="Profile App" />

      <Box component="main">
        <Container maxWidth="md">
          <ProfilePlayground />
        </Container>
      </Box>
    </>
  );
}

export default ProfilePage;
