import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../pages/_app";
import icons from "../../utils/icons";
import Form from 'react-bootstrap/Form';

export default function LoginModal({appID}) {
    const { setIsUser } = useContext(UserContext);
    const [username, setUsername] = useState('');

    useEffect(() => {
      require('@passageidentity/passage-auth');
    }, [])

    return (
    <div className="absolute opacity-100 z-10 pointer-events-auto
    left-0 right-0 top-0 bottom-0 block
    transition-all duration-300 ease-in-out delay-0 glass">
      <Form className='absolute bg-zinc top-28 left-8 mx-20 pt-8 p-4 text-center text-darkanime flex flex-col gap-4'>
      <span className="absolute top-3 left-3" onClick={() => setIsUser(false)}>{icons.close}</span>
        <div className='flex flex-col gap-4 mt-4'>
        <Form.Group controlId="username">
            <Form.Control
              type="text"
              placeholder="Enter Username"
              className="text-center bg-white text-black"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
        </div>
        <button disabled={username === ''} className="text-green-600">{icons.signIn}</button>
        <div className='text-sm'>Continue with Google</div>
        <span className='text-sm'>No account? Sign Up</span>
      </Form>
    </div>
  );
}
