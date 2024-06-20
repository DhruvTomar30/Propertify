import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { SignInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }),
            });
            
            const data = await res.json();
            
            if (res.ok) {
                dispatch(SignInSuccess(data));
                navigate('/');
            } else {
                console.error('Error during Google Sign-In', data);
            }
        } catch (error) {
            console.error('Could not sign in with Google', error);
        }
    };
    
    return (
        <button
            onClick={handleGoogleClick}
            type="button"
            className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
            Continue with Google
        </button>
    );
}
