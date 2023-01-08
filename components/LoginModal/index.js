import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../pages/_app";
// import icons from "../../utils/icons";
// import Form from 'react-bootstrap/Form';

export default function LoginModal({appID}) {
    // const { setIsUser } = useContext(UserContext);
    // const [username, setUsername] = useState('');

    useEffect(() => {
      require('@passageidentity/passage-auth');
    }, [])

    return (
    <div className="absolute opacity-100 z-10 pointer-events-auto
    left-0 right-0 top-0 bottom-0 block
    transition-all duration-300 ease-in-out delay-0 glass">
      <div className="absolute top-40 left-[3.5rem] bg-zinc">
        <passage-auth app-id={appID} ></passage-auth>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      appID: process.env.PASSAGE_APP_ID
    }
  }
}