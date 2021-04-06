import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos';

const usuariosRef = db.collection('usuarios');

const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append( btnNext )



let firstDocument: any = null;
let lastDocument: any = null;

btnNext.addEventListener('click',() =>{

    const query = usuariosRef
    .orderBy('nombre')
    .startAfter( lastDocument )
    query.limit(2).get().then( snap => {
        firstDocument = snap.docs[ 0 ] || null;
        lastDocument = snap.docs[ snap.docs.length - 1 ] || null;
        retornaDocumentos(snap);
    })
});

btnNext.click()

const btnprev = document.createElement('button');
btnNext.innerText = 'Previous Page';
document.body.append( btnprev )



btnprev.addEventListener('click',() =>{

    const query = usuariosRef
    .orderBy('nombre')
    .endBefore( firstDocument )

    query.limit(2).get().then( snap => {
        firstDocument = snap.docs[ 0 ] || null;
        lastDocument = snap.docs[ snap.docs.length - 1 ] || null;
        retornaDocumentos(snap);
    })
});

