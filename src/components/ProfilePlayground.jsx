import { useState } from 'react';
import {
  Container,
  Avatar,
  Button,
  Paper,
  Typography,
  TextField,
  Slider,
  Switch,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Alert,
  Select,
  MenuItem,
  Box,
  Stack,
} from '@mui/material';

function ProfilePlayground() {
  const [profile, setProfile] = useState({
    name: 'Artem',
    surname: 'Kutsan',
    avatarSize: 60,
    buttonColor: 'primary',
    buttonSize: 'medium',
    isOnline: false,
    cardVariant: 'elevation',
    showAlert: true,
  });

  const update = (key, value) => setProfile((prev) => ({ ...prev, [key]: value }));

  return (
    <Container maxWidth="md">
      <Box display="flex" gap={4} width="100%">
        <Paper
          elevation={profile.cardVariant === 'elevation' ? 3 : 0}
          variant={profile.cardVariant === 'outlined' ? 'outlined' : 'elevation'}
          sx={{
            p: 3,
            width: 420,
            flexShrink: 0,
            borderRadius: 6,
            boxShadow:
              profile.cardVariant === 'elevation' ? '0 8px 16px rgba(0,0,0,0.075)' : 'none',
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h6">Карточка профиля</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                sx={{
                  width: profile.avatarSize,
                  height: profile.avatarSize,
                  transition: '0.2s',
                }}
              >
                {profile.name[0]}
              </Avatar>

              <Stack>
                <Typography variant="h6">
                  {profile.name} {profile.surname}
                </Typography>

                <Typography
                  sx={{
                    color: profile.isOnline ? 'white' : 'gray',
                    border: profile.isOnline ? 'none' : '1px solid lightgray',
                    backgroundColor: profile.isOnline ? '#2e7d32' : 'transparent',
                    borderRadius: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    px: 1,
                    minHeight: '1.5rem',
                    fontSize: '0.875rem',
                  }}
                >
                  {profile.isOnline ? '● Онлайн' : '○ Офлайн'}
                </Typography>
              </Stack>
            </Stack>

            <Typography
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                borderRadius: '1rem',
                px: 2,
                fontSize: '0.875rem',
                backgroundColor: '#f1f5f9',
                color: '#475569',
                width: 'fit-content',
                minHeight: '2rem',
              }}
            >
              Разработчик
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color={profile.buttonColor}
                size={profile.buttonSize}
                sx={{
                  borderRadius: 3,
                  // height: 40,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.125)',
                  '&:hover': { boxShadow: 'none' },
                }}
              >
                Написать
              </Button>

              <Button
                variant="outlined"
                color={profile.buttonColor}
                size={profile.buttonSize}
                sx={{
                  borderRadius: 3,
                  // height: 40,
                }}
              >
                Предложить работу
              </Button>
            </Stack>
          </Stack>
        </Paper>

        {/* Правый блок */}
        <Box flex="1">
          <Stack spacing={2}>
            {/* Имя + Фамилия */}
            <Stack direction="row" spacing={2}>
              <TextField
                label="Имя"
                value={profile.name}
                onChange={(event) => update('name', event.target.value)}
                size="small"
                fullWidth
                sx={{
                  '& .MuiInputBase-root': {
                    height: 40,
                    borderRadius: 3,
                  },
                }}
              />

              <TextField
                label="Фамилия"
                value={profile.surname}
                onChange={(event) => update('surname', event.target.value)}
                size="small"
                fullWidth
                sx={{
                  '& .MuiInputBase-root': {
                    height: 40,
                    borderRadius: 3,
                    backgroundColor: '#f8fafc',
                  },
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default ProfilePlayground;
