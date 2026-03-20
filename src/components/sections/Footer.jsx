import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Footer() {
  return (
    <Box component="footer">
      <Container maxWidth="md" sx={{ py: 3 }}>
        <Typography textAlign="center">© 2026. Все права защищены.</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
