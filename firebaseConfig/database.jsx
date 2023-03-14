import {appFirebase} from "./initialize";
import { getDatabase, ref, set, get, child, onValue } from "firebase/database";
import { getFirestore, collection, doc, setDoc, getDocs, orderBy } from "firebase/firestore";

const database = getDatabase(appFirebase);
const db = getFirestore(appFirebase)

export{ database, ref, set, get, child, onValue, db, collection, doc, setDoc, getDocs, orderBy };