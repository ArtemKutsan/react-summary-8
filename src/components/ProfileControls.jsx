// src/components/ProfileControls.jsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { professions } from '../constants';

function ProfileControls({ profile, update }) {
  return (
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
          {Object.entries(professions).map(([key, label]) => (
            <MenuItem key={key} value={key} sx={{ py: 1 }}>
              {label}
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
        <FormControlLabel
          control={
            <Checkbox
              checked={profile.showAlert}
              onChange={(event) => update('showAlert', event.target.checked)}
            />
          }
          label="Показать уведомление"
        />
      </Stack>
    </Box>
  );
}

export default ProfileControls;
