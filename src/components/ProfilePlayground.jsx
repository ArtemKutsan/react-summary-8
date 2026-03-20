import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

const professions = ['Разработчик', 'Дизайнер', 'Менеджер'];

function ProfilePlayground() {
  const [profile, setProfile] = useState({
    name: 'Artem',
    surname: 'Kutsan',
    profession: 'Разработчик',
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
      <Paper
        elevation={profile.cardVariant === 'elevation' ? 3 : 0}
        variant={profile.cardVariant === 'outlined' ? 'outlined' : 'elevation'}
        sx={{
          p: 3,
          width: 420,
          flexShrink: 0,
          borderRadius: 6,
          boxShadow: profile.cardVariant === 'elevation' ? '0 8px 16px rgba(0,0,0,0.075)' : 'none',
          height: 'fit-content',
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
                bgcolor: (theme) => theme.palette[profile.mainColor].main,
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
                  backgroundColor: profile.isOnline ? '#2e7d32' : 'transparent',
                  borderRadius: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'fit-content',
                  px: 1,
                  minHeight: '1.5rem',
                  fontSize: '0.875rem',
                  transition: '0.2s',
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
            {profile.profession}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color={profile.mainColor}
              size={profile.buttonSize}
              sx={{
                borderRadius: 3,
                // height: 40,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.125)',
                '&:hover': { boxShadow: 'none' },
                transition: '0.2s',
              }}
            >
              Написать
            </Button>

            <Button
              variant="outlined"
              color={profile.mainColor}
              size={profile.buttonSize}
              sx={{
                borderRadius: 3,
                // height: 40,
              }}
            >
              Предложить работу
            </Button>
          </Stack>

          {/* {profile.showAlert && (
              <Alert severity="info" sx={{ mt: 2, width: '100%' }}>
                Какое-то уведомление...
              </Alert>
            )} */}
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
                  bgcolor: '#f5f5f5',
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
                  bgcolor: '#f5f5f5',
                },
              }}
            />
          </Stack>

          <Select
            value={profile.profession}
            onChange={(event) => update('profession', event.target.value)}
            size="small"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                height: 40,
                borderRadius: 3,
                backgroundColor: '#f8fafc',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: 3,
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  borderRadius: 3,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.125)',
                },
              },
              MenuListProps: {
                sx: {
                  py: 0,
                },
              },
            }}
          >
            {professions.map((item) => (
              <MenuItem key={item} value={item} sx={{ py: 1 }}>
                {item}
              </MenuItem>
            ))}
          </Select>

          {/* Размер аватара */}
          <Box>
            <Typography>Размер аватара: {profile.avatarSize}px</Typography>
            <Slider
              value={profile.avatarSize}
              min={60}
              max={120}
              onChange={(event, value) => update('avatarSize', value)}
            />
          </Box>

          {/* Цвет кнопок */}
          <RadioGroup
            value={profile.mainColor}
            onChange={(event) => update('mainColor', event.target.value)}
          >
            <Stack direction="row" spacing={2}>
              <FormControlLabel value="primary" control={<Radio />} label="Primary" />
              <FormControlLabel value="secondary" control={<Radio />} label="Secondary" />
              <FormControlLabel value="success" control={<Radio />} label="Success" />
              <FormControlLabel value="error" control={<Radio />} label="Error" />
            </Stack>
          </RadioGroup>

          {/* Размер кнопок */}
          <RadioGroup
            value={profile.buttonSize}
            onChange={(event) => update('buttonSize', event.target.value)}
          >
            <Stack direction="row" spacing={2}>
              <FormControlLabel value="small" control={<Radio />} label="Small" />
              <FormControlLabel value="medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="large" control={<Radio />} label="Large" />
            </Stack>
          </RadioGroup>

          {/* Онлайн */}
          <FormControlLabel
            control={
              <Switch
                checked={profile.isOnline}
                onChange={(event) => update('isOnline', event.target.checked)}
              />
            }
            label="Онлайн"
          />

          {/* Стиль карточки */}
          <RadioGroup
            value={profile.cardVariant}
            onChange={(event) => update('cardVariant', event.target.value)}
          >
            <Stack direction="row" spacing={2}>
              <FormControlLabel value="elevation" control={<Radio />} label="С тенью" />
              <FormControlLabel value="outlined" control={<Radio />} label="С обводкой" />
            </Stack>
          </RadioGroup>

          {/* Alert */}
          {/* <FormControlLabel
              control={
                <Checkbox
                  checked={profile.showAlert}
                  onChange={(event) => update('showAlert', event.target.checked)}
                />
              }
              label="Показать уведомление"
            /> */}
        </Stack>
      </Box>
    </Box>
  );
}

export default ProfilePlayground;
