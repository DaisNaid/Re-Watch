import LoginModal from '../components/LoginModal/index';

export default function useAuthDisplay(isUser) {
    return isUser ? <LoginModal /> : null
}