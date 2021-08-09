import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User, UserModel } from '../models/User';
import { map } from "rxjs/internal/operators/map";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userCollection: AngularFirestoreCollection<UserModel>;
    constructor(
        private readonly afs: AngularFirestore
    ) {
        this.userCollection = afs.collection<UserModel>('Users');
    }

    getAllUsers() {
        return this.userCollection.snapshotChanges().pipe(
            map(actions =>
                actions.map(a => {
                    console.log(a.payload.doc.data())
                    const data = a.payload.doc.data() as UserModel;
                    const id = a.payload.doc.id;
                    return { id, userModel: data } as User;
                })
            )
        )
    }
}
