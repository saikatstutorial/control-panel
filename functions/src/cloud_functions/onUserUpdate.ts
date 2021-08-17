import * as functions from "firebase-functions";
import { auth } from "../firebase";

const onUserUpdate = functions.firestore.document("Users/{userId}").onUpdate((change: any, context: any) => {
    try {
        const preValue = change.before.data();
        const postValue = change.after.data();
        if (preValue.isDisabled === false && postValue.isDisabled == true) {
            auth
                .updateUser(postValue.uid, {
                    disabled: true
                })
                .then((result) => console.log(result))
                .catch((error) => console.log(error));
        }
    } catch (e) {
        console.log(e);
    }
});

export default onUserUpdate;