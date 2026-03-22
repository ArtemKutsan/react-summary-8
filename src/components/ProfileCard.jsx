// src/components/ProfileCard.jsx
import { useState, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Tooltip from '@mui/material/Tooltip';
import { jobButtonTexts, professions } from '../constants';

function ProfileCard({ profile, update }) {
  // Состояние модального окна
  const [jobDialogOpen, setJobDialogOpen] = useState(false);

  // useRef нужен для получения ссылки элемент DOM - скрытый инпут
  const fileInputRef = useRef(null);

  // Обработчик нажатия на кнопку "Загрузить фото"
  const handlePhotoUpload = () => {
    fileInputRef.current?.click(); // програмно вызывает клик по скрытому input
  };

  // Обработчик загрузки фала фото
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        update('avatarUrl', e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAlertClick = () => {
    alert('Спасибо, что прочитал!');
  };

  const handleWriteClick = () => {
    alert(`Напиши сообщение для ${profile.name} ${profile.surname}`);
  };

  const handleJobOfferClick = () => {
    setJobDialogOpen(true);
  };

  const handleJobDialogClose = (confirmed) => {
    setJobDialogOpen(false);
    if (confirmed) {
      alert(`Заявка отправлена! ${profile.name} ${profile.surname} получит предложение`);
    } else {
      alert('Отправка отменена');
    }
  };

  return (
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
          <Badge
            overlap="circular"
            variant="dot"
            color="success"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            invisible={!profile.isOnline}
            sx={{
              '& .MuiBadge-badge': {
                border: '2px solid white',
                width: 10,
                height: 10,
              },
            }}
          >
            <Avatar
              sx={{
                width: profile.avatarSize,
                height: profile.avatarSize,
                transition: '0.2s',
                bgcolor: profile.avatarUrl
                  ? 'transparent'
                  : (theme) => theme.palette[profile.mainColor].main,
              }}
            >
              {profile.avatarUrl ? null : profile.name[0]}
              {profile.avatarUrl && (
                <img
                  src={profile.avatarUrl}
                  alt="avatar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </Avatar>
          </Badge>

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
          {professions[profile.profession] || profile.profession}
        </Typography>

        <Stack direction="row" spacing={2}>
          <Tooltip title="Нажми, чтобы написать сообщение">
            <Button
              variant="contained"
              color={profile.mainColor}
              size={profile.buttonSize}
              sx={{
                borderRadius: 3,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.125)',
                '&:hover': { boxShadow: 'none' },
                transition: '0.2s',
              }}
              onClick={handleWriteClick}
            >
              Написать
            </Button>
          </Tooltip>

          <Tooltip title="Нажми, чтобы отправить предложение">
            <Button
              variant="outlined"
              color={profile.mainColor}
              size={profile.buttonSize}
              sx={{
                borderRadius: 3,
              }}
              onClick={handleJobOfferClick}
            >
              {jobButtonTexts[profile.profession] || 'Предложить работу'}
            </Button>
          </Tooltip>
        </Stack>

        <Button
          variant="text"
          size="small"
          onClick={handlePhotoUpload}
          sx={{
            borderRadius: 3,
            transition: '0.2s',
          }}
        >
          Загрузить фото
        </Button>

        {/* Инпут для загрузки файлов. Скрытый чтобы не стилизовать инпут
        а использовать кнопку MUI. Клик по кнопке "Загрузить фото" програмно 
        "кликает" по fileInputRef.current?.click() и запучкается handleFileChange
        который запускает диалог открытия файла. useRef нужен для получения ссылки на
        скрытый инпут */}
        <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleFileChange} />

        {profile.showAlert && (
          <Alert
            severity="info"
            sx={{
              mt: 2,
              width: '100%',
              borderRadius: 3,
              alignItems: 'center',
              '& .MuiAlert-action': {
                padding: 0,
                // marginRight: 0,
                marginLeft: 'auto',
              },
            }}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={handleAlertClick}
                sx={{ borderRadius: 2, px: 1 }}
              >
                Понятно
              </Button>
            }
          >
            Не забудь загрузить аватарку!
          </Alert>
        )}

        {profile.showAlert && (
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Alert severity="success" sx={{ borderRadius: 3 }}>
              Отлично! MUI работает
            </Alert>
            <Alert severity="info" sx={{ borderRadius: 3 }}>
              Попробуй изменить цвет кнопок
            </Alert>
            <Alert severity="warning" sx={{ borderRadius: 3 }}>
              Не забывай про атрибуты
            </Alert>
            <Alert severity="error" sx={{ borderRadius: 3 }}>
              Ошибок нет, все отлично!
            </Alert>
          </Stack>
        )}

        <Dialog
          open={jobDialogOpen}
          onClose={() => handleJobDialogClose(false)}
          aria-labelledby="job-dialog-title"
          aria-describedby="job-dialog-description"
          slotProps={{
            paper: {
              sx: {
                borderRadius: 6,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.375)',
                p: 2,
              },
            },
          }}
        >
          <DialogTitle id="job-dialog-title">
            {jobButtonTexts[profile.profession] || 'Предложить работу'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Хочешь {jobButtonTexts[profile.profession]?.toLowerCase() || 'предложить работу'}{' '}
              {profile.name} {profile.surname}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ borderRadius: 3, height: 40 }}
              onClick={() => handleJobDialogClose(false)}
            >
              Отмена
            </Button>
            <Button
              sx={{ borderRadius: 3, height: 40 }}
              onClick={() => handleJobDialogClose(true)}
              autoFocus
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Paper>
  );
}

export default ProfileCard;
