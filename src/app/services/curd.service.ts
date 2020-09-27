import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CurdService {
  constructor(
    public fireServices: AngularFirestore
  ) {
  }

  addNewFamilyMember(Record) {
    return this.fireServices.collection('Family').add(Record);
  }

  getAllFamily(){
    return this.fireServices.collection('Family').snapshotChanges();
  }
}
