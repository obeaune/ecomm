import jwt from 'jsonwebtoken';
import {} from 'dotenv/config';

const tokenGenerate = (id) => {
    const SECRET = process.env.JWT_SECRET || 'bjb7xob5VdEgc+8cHgIH9dqkuSk/NgYLeHMtkEtoRPCNUswzLzAEGEaCMf8alskaBTw1r0dhQVeUR8nBWvuGADkDnT9bi+4U7OjpkmXr789Axzk9xOnLQF0tBcSt0IS8Hc7mkX9xcG3cyxHEXC/fLZTuLPFP958wZajo8Qmb1XMHTRM5qPu4Ke+lRgcb2KywHipd5I1P+i0trmI37HHHto9Ge3PD7zsOQ877XCfQ+chu0VpX/VDp0Z3HI07wY0gliuq1sMQMtSixvlutkY9wZouFQUvSazgH+OZs4k0ExB2/rubBBKGewJ00p2jwRvA600p8yEk1vvaw8oNJeUPfBQ==';

    const JWT_CONFIG = {
        expiresIn: '1d',
        algorithm: 'HS256'
    };

    const token = jwt.sign({ id }, SECRET, JWT_CONFIG);

    return token;
};

export default tokenGenerate;
