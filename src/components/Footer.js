import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import logo from '../assets/img/logo.svg';
import linkedInIcon from '../assets/img/linkedIn.svg';
import githubIcon from '../assets/img/github.svg';
import emailIcon from '../assets/img/email.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={linkedInIcon} /></a>
                            <a href=""><img src={githubIcon} /></a>
                            <a href=""><img src={emailIcon} /></a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};