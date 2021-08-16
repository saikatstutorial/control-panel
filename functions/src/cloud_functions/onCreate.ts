import * as functions from "firebase-functions";
import { db } from "../firebase";

const onCreate = functions.auth.user().onCreate((user) => {
    try {
        const email = user.email;
        const displayName = user.displayName;
        const uid = user.uid;
        db.collection("Users")
            .add({
                uid,
                email,
                displayName,
                isDisabled: false
            })
            .then(() => {
                console.log("Success");
            })
            .catch(() => {
                console.log("Failed");
            });
    } catch (e) {
        console.log(e);
    }

});

export default onCreate;