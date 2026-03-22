import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

function ProfileCard({ profile }) {
  const handleAlertClick = () => {
    alert('Спасибо, что прочитал!');
  };

  const handleWriteClick = () => {
    alert(`Напиши сообщение для ${profile.name} ${profile.surname}`);
  };

  const handleJobOfferClick = () => {
    const confirmed = confirm(`Хочешь предложить работу ${profile.name} ${profile.surname}?`);
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
                bgcolor: (theme) => theme.palette[profile.mainColor].main,
              }}
            >
              {profile.name[0]}
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
          {profile.profession}
        </Typography>

        <Stack direction="row" spacing={2}>
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

          <Button
            variant="outlined"
            color={profile.mainColor}
            size={profile.buttonSize}
            sx={{
              borderRadius: 3,
            }}
            onClick={handleJobOfferClick}
          >
            Предложить работу
          </Button>
        </Stack>

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
      </Stack>
    </Paper>
  );
}

export default ProfileCard;
