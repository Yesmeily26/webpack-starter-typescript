# Referencia al document

```javascript

const usuario = {
nombre:'yesmeily',
activo:true,
fechaNaci:0
}

const usuariosRef = db.collection('usuarios');
db.collection('usuarios')
.add(usuario)
.then( docRef => {
console.log( docRef )
})
.catch( e => console.log('error, e '))


usuariosRef
.doc('8Yuve3P1Z6AjXEUb6nLW')
.update({
 activo: true   
});

usuariosRef
.doc('8Yuve3P1Z6AjXEUb6nLW')
.set({
 activo: true,  
  edad:17,
});
usuariosRef 
.doc('8Yuve3P1Z6AjXEUb6nLW')
.delete()
.then( () => console.log('borrado') )
.catch( e => console.log('error', e));

usuariosRef
.onSnapshot(retornaDocumentos)
   
usuariosRef.get().then( retornaDocumentos );

usuariosRef.where('salario', '>', 1800 )
.get().then( retornaDocumentos );

usuariosRef.where('salario', '>=', 1800 )
.where('salario', '<=', 2300)
.get().then( retornaDocumentos);

usuariosRef.where('salario', '>=', 1800 )
.where('activo', '==', true )
.get().then( retornaDocumentos);

```