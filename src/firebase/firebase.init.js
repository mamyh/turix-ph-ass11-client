import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';

const initializingMyAPP = () => initializeApp(firebaseConfig);

export default initializingMyAPP;