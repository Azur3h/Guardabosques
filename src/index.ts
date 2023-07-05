import db from "./firebase/config";
import { addDoc, doc, collection, updateDoc, getFirestore, deleteDoc, onSnapshot, getDoc, getDocs } from 'firebase/firestore';
import { retornaDocumentos } from "./helpers/retornaDocumentos";


/*
    documentacion actualizada:
    https://firebase.google.com/docs/reference/js/firestore_lite.md

    doc( reference to a Firestore document, path to a document, additionals path segments relative to 1st arguments )
    collection( a reference to the root firestore stance, path to a document, additionals path segments relative to 1st arguments )
    updateDoc( reference to the document to update, An object containing the fields and values with which to update the document )
    addDoc(reference, data)
    setDoc( reference, data, options) // es como update pero destruye los datos no especificados
    deleteDoc(reference)
*/

const usuario = {
    nombre: "Juana",
    activo: true,
    fechaNaci: 10
};

const documentoRef = doc(collection(db, "usuarios"),'48KcuntZ9YtIvfBam45M');

const usuariosRef = collection(db, "usuarios");

const liteDocRef = doc(usuariosRef, '48KcuntZ9YtIvfBam45M');


getDocs( usuariosRef).then( retornaDocumentos );




// });
// Se puede abreviar asi
// onSnapshot( usuariosRef, retornaDocumentos);
//

/* select * from usuarios
onSnapshot(usuariosRef, (snapshot) => {
    const usuarios: any = [];
    snapshot.docs.forEach((doc) => {
        usuarios.push({ ...doc.data(), id: doc.id });
    });
    console.log(usuarios);
});   
    */
   
   // FUNCIONA
   //  addDoc(collection(db, "usuarios"), usuario)
   //     .then( docRef => { console.log( docRef ) })
   //     .catch( e => console.log("Error", e))
   
// updateDoc(documentoRef, { fechaNaci: 99 });

//  deleteDoc(documentoRef)
//     .then( () => console.log("Borrado") )
//     .catch( e => console.log("error", e) );



// Devuelve una petición cuando alguno de los valores con snapshot tuvo un cambio

// onSnapshot( usuariosRef, ( snapshot ) => {
//     const usuarios: any = [];

//     snapshot.docs.forEach(( doc ) => {
//         usuarios.push({ ...doc.data(), id: doc.id });
//     });
//     console.log( usuarios );
// });

// Devuelve una petición pero luego no lo vuelve a hacer si hay cambios

// getDocs( usuariosRef).then( retornaDocumentos );