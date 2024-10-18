import { useState, useEffect } from "react";
import { Row, Col, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        email && 
        email.indexOf("@") > -1 &&
        onValidated({ 
            EMAIL: email 
        });
    };

    const clearFields = () => {
        setEmail('');
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
                        {status === "sending" && <Alert variant="info">Sending...</Alert>}
                        {status === "error" && <Alert variant="danger" dangerouslySetInnerHTML={{ __html: message }} />}
                        {status === "success" && <Alert variant="success">Thank you for subscribing!</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input type="email" value={email} name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
};