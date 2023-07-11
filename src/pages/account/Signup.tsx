import { signup } from 'apis/account';
import React, { useState } from 'react';

const Signup = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEamil] = useState('');

    const handleSignup = (): void => {
        signup({
            userId: id,
            userPw: pw,
            userTel: tel,
            userEmail: email,
        });
    };

    const onChange = (e: any): void => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'id':
                setId(value);
                break;
            case 'pw':
                setPw(value);
                break;
            case 'tel':
                setTel(value);
                break;
            case 'email':
                setEamil(value);
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <input type="text" name="id" onChange={onChange} value={id} />
            <input type="text" name="pw" onChange={onChange} value={pw} />
            <input type="text" name="tel" onChange={onChange} value={tel} />
            <input type="text" name="email" onChange={onChange} value={email} />
            <button onClick={handleSignup}>회원가입</button>
        </div>
    );
};

export default Signup;
