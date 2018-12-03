import firebase from 'firebase';

export const FirebaseLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
};

export const FirebaseSignup = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
};

export const FirebaseLogout = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().signOut()
        .then(() => {
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
    });
};
