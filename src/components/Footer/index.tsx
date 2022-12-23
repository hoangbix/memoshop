import { Container } from '@mui/material';
import { FooterCopyRight } from './FooterCopyRight';
import FooterMenu from './FooterMenu';

const Footer = () => {
  return (
    <Container maxWidth={'xxl'}>
      <FooterMenu />
      <FooterCopyRight />
    </Container>
  );
};

export default Footer;
