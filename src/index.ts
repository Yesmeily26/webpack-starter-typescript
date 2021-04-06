import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos';

const usuariosRef = db.collection('usuarios');


usuariosRef
.orderBy('nombre')
.orderBy('salario')
.get().then( retornaDocumentos);

