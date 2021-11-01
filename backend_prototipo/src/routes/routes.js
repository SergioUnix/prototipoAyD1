const { Router } = require('express');
const router = Router();

const BD = require('../database');

const { Console } = require('console');


const nodemailer = require('nodemailer');
////////////////////////////////////////////////////////////////////////////////////// Para las Fotos


const path = require('path');
const multer = require('multer');
const fs = require('fs');


const storage = multer.diskStorage({
    //destination: path.join(__dirname, '../public/uploads'),
    destination: 'uploads/',
    filename:  (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const uploadImage = multer({
    storage,
    limits: {fileSize: 10000000} //10 megas
}).single('photo');


// RENDER FORM UPLOAD
router.get('/images/upload', (req, res) => {
    res.render('index');
});

router.get('/images', (req, res) => {});
///////////////////////////////////////////////////////////////////////////////      USUARIOS

//login solo traigo un registro
    router.get("/api/usuario/:correo/:pass", async (req, res) => {
        const {pass}= req.params;
        const {correo}= req.params;
  
        
        sql = "select * from usuario where contrasenia ='" + pass +"' and correo ='"+correo+"' and confirmacion ='Confirmado'";
   
        let result = await BD.query(sql);
  
        var string = JSON.stringify(result);
        var Users = JSON.parse(string);

        res.json(Users[0]);
    })

//Verifico un usuario si existe.... es como el login para confirmar cuenta....
router.post("/api/usuario/verificar",uploadImage, async (req, res) => {
    const {correo,pass,nombre,apellido}= req.body;

  
    sql = `select * from usuario where correo='`+correo+ `' and contrasenia='`+pass +`' and nombre='`+nombre+`' and apellido='`+apellido+`'`;
  
    let result = await BD.query(sql);
  
        var string = JSON.stringify(result);
        var Users = JSON.parse(string);

        res.json(Users[0]);

})

//Usuario para recuperar contrasenia .... solamente uso el correo
router.get("/api/usuario/recuperar/recuperar/:correo", async (req, res) => {
    const {correo}= req.params;

    sql = "select * from usuario where correo ='"+correo+"' and confirmacion ='Confirmado'";
   
    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users[0]);
})



//UPDATE ... despues de confirmar con el anterir Cambio el estato del usuario a Confirmado
router.put('/api/usuario/verificar/confirmacion',uploadImage, async (req, res) => {
    const {confirmacion,id_usuario } = req.body;
  
    sql = `update usuario set confirmacion='`+estado+`'
    where id_usuario=`+id_usuario+`;`
    await BD.query(sql);

    res.status(200).json({
        "confirmacion":confirmacion
        })

})



//obtengo un Usuario  pero solo dado su Id_usuario
router.get("/api/usuario/perfil-update/uno/:id", async (req, res) => {
    const {id}= req.params;
    
    sql = "select * from usuario where id_usuario ="+id;


 let result = await BD.query(sql);
  
 var string = JSON.stringify(result);
 var Users = JSON.parse(string);

 res.json(Users[0]);
})














// Guardar un Usuario segunda opcion con foto
router.post('/api/usuario/registro/con/foto',uploadImage,async (req, res) => {
    const { nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo} = req.body;
   
    let aux=req.file.path;  

    var output = [];           //change this
    for (var i = 0; i < aux.length; i++) {
      if (aux[i] == "\\") {
        output[i] = "/";
      } else
        output[i] = aux[i];
    } // end forloop
    output= output.join('');
    console.log(output)
  

     sql = `insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) 
     values('`+nombre+`','`+apellido+`','`+correo+`','`+contrasenia+`','`+confirmacion+`',STR_TO_DATE('`+nac+`',GET_FORMAT(date,'AAAA-MM-DD HH: MM: SS')),'`+pais+`','`+output+`',`+creditos+`,`+fk_tipo+`)`


     
     await BD.query(sql)
     .then ( (res) =>{

         res.statusCode=200;
     },
     (err) =>{console.log(err); res.statusCode=500;}
 ); 
  
     res.json({
        "nombre":nombre,
         "apellido":apellido,
         "correo":correo,
         "contrasenia":contrasenia,
         "confirm,cion":confirmacion,
         "nac":nac,
         "pais":pais,
         "foto":output,
         "creditos":creditos,
         "fk_tipo":fk_tipo
 
     });





})

// Guardar un Usuario  Primera opcion por medio de un objeto
 router.post('/api/usuario/registro/con/objeto',async (req, res) => {
    const { nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo} = req.body;

    sql = `insert into usuario (nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo) 
    values('`+nombre+`','`+apellido+`','`+correo+`','`+contrasenia+`','`+confirmacion+`',STR_TO_DATE('`+nac+`',GET_FORMAT(date,'AAAA-MM-DD HH: MM: SS')),'`+pais+`','`+foto+`',`+creditos+`,`+fk_tipo+`)`

     
    await BD.query(sql)
     .then ( (res) =>{   
         
        res.statusCode=200;
     
    },
     (err) =>{console.log(err); res.statusCode=500;}
 ); 


    res.json({
         "nombre":nombre,
         "apellido":apellido,
         "correo":correo,
         "contrasenia":contrasenia,
         "confirm,cion":confirmacion,
         "nac":nac,
         "pais":pais,
         "foto":foto,
         "creditos":creditos,
        "fk_tipo":fk_tipo
        
     });

})



//UPDATE un Usuario.... con un objeto usuario
router.put('/api/usuario/perfil-update/update/up/objeto',uploadImage, async (req, res) => {
    const {nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo, id_usuario } = req.body;

    sql = `update usuario set nombre='`+nombre+`' ,apellido='`+apellido+`' ,correo='`+correo+`' ,contrasenia='`+contrasenia+`'  ,confirmacion='`+confirmacion+`' 
    ,nac= STR_TO_DATE('`+nac+`',GET_FORMAT(date,'AAAA-MM-DD HH: MM: SS')), pais='`+pais+`' , foto='`+foto+`'  ,creditos=`+creditos+`   ,fk_tipo=`+fk_tipo+`
      where id_usuario=`+id_usuario+`;`


      await BD.query(sql);

    res.status(200).json({
        "nombre":nombre,
        "apellido":apellido,
        "correo":correo,
        "contrasenia":contrasenia,
        "confirmacion":confirmacion,
        "nac":nac,
        "pais": pais,
        "foto": foto,
        "creditos": creditos,
        "fk_tipo": fk_tipo
     })

})

//UPDATE un solo Usuario..... pero mandandole una nueva imagen
router.put('/api/usuario/perfil-update/update/up/imagen',uploadImage, async (req, res) => {
    const {nombre,apellido,correo,contrasenia,confirmacion,nac,pais,foto,creditos,fk_tipo, id_usuario } = req.body;
    let aux=req.file.path;  
    var output = [];           //change this
    for (var i = 0; i < aux.length; i++) {
      if (aux[i] == "\\") {
        output[i] = "/";
      } else
        output[i] = aux[i];
    } // end forloop
    output= output.join('');
    console.log(output)


    sql = `update usuario set nombre='`+nombre+`' ,apellido='`+apellido+`' ,correo='`+correo+`' ,contrasenia='`+contrasenia+`' 
     ,confirmacion='`+confirmacion+`' ,nac= STR_TO_DATE('`+nac+`',GET_FORMAT(date,'AAAA-MM-DD HH: MM: SS')), pais='`+pais+`' , foto='`+output+`'  ,creditos=`+creditos+`   ,fk_tipo=`+fk_tipo+`
      where id_usuario=`+id_usuario+`;`

      await BD.query(sql);

    res.status(200).json({
        "nombre":nombre,
        "apellido":apellido,
        "correo":correo,
        "contrasenia":contrasenia,
        "confirmacion":confirmacion,
        "nac":nac,
        "pais": pais,
        "foto": output,
        "creditos": creditos,
        "fk_tipo": fk_tipo
    })

})


























///////////////////////////////////////////////////////////////////////////////      PRODUCTOS



//obtengo todos los productos ,,, lo visualiza el usuario Administrador
router.get('/api/producto/perfil_productos/all', async (req, res) => {
    const {id}= req.params;
    sql = `Select id_producto,producto,estado,fk_usuario,precio,detalle,fk_categoria, producto.foto, producto.palabras, producto.user_compra, usuario.nombre, usuario.apellido, categoria.categoria, usuario.correo    
     from producto    inner join usuario on producto.fk_usuario= usuario.id_usuario    inner join categoria on producto.fk_categoria = categoria.id_categoria`; 

     let result = await BD.query(sql);
  
     var string = JSON.stringify(result);
     var Users = JSON.parse(string);

     res.json(Users);
})


//obtengo todos los productos publicados menos el del usuario logueado
router.get('/api/producto/perfil_productos/:id', async (req, res) => {
    const {id}= req.params;
    sql = `Select id_producto,producto,estado,fk_usuario,precio,detalle,fk_categoria, producto.foto, producto.palabras, producto.user_compra, usuario.nombre, usuario.apellido, categoria.categoria    
     from producto    inner join usuario on producto.fk_usuario= usuario.id_usuario    inner join categoria on producto.fk_categoria = categoria.id_categoria    
    where usuario.id_usuario !=`+id +` and producto.estado ='Sin Bloquear'`; 

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})



////////////////////////////orden Ascendente de la Categoria lo visualiza el usuario cliente
router.get('/api/producto/perfil_productos/orden/ascendente/:id', async (req, res) => {
    const {id}= req.params;
    sql = `Select id_producto,producto,estado,fk_usuario,precio,detalle,fk_categoria, producto.foto, producto.palabras, producto.user_compra, usuario.nombre, usuario.apellido, categoria.categoria    
     from producto    inner join usuario on producto.fk_usuario= usuario.id_usuario    inner join categoria on producto.fk_categoria = categoria.id_categoria    
    where usuario.id_usuario !=`+id +` and producto.estado ='Sin Bloquear' order by categoria.categoria ASC`; 

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})



////////////////////////////orden Ascendente por precio  lo visualiza el usuario cliente
router.get('/api/producto/perfil_productos/orden/ascendente/precio/:id', async (req, res) => {
    const {id}= req.params;
    sql = `Select id_producto,producto,estado,fk_usuario,precio,detalle,fk_categoria, producto.foto, producto.palabras, producto.user_compra, usuario.nombre, usuario.apellido, categoria.categoria    
     from producto    inner join usuario on producto.fk_usuario= usuario.id_usuario    inner join categoria on producto.fk_categoria = categoria.id_categoria    
    where usuario.id_usuario !=`+id +` and producto.estado ='Sin Bloquear' order by producto.precio ASC`; 

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})



////////////////////////////orden Descendente del precio lo visualiza el usuario cliente
router.get('/api/producto/perfil_productos/orden/descendente/precio/:id', async (req, res) => {
    const {id}= req.params;
    sql = `Select id_producto,producto,estado,fk_usuario,precio,detalle,fk_categoria, producto.foto, producto.palabras, producto.user_compra, usuario.nombre, usuario.apellido, categoria.categoria    
     from producto    inner join usuario on producto.fk_usuario= usuario.id_usuario    inner join categoria on producto.fk_categoria = categoria.id_categoria    
    where usuario.id_usuario !=`+id +` and producto.estado ='Sin Bloquear' order by producto.precio DESC`; 

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})





////////////////////////////orden Ascendente de la Categoria lo visualiza el usuario cliente
router.get('/api/producto/perfil_productos/orden/descendente/:id', async (req, res) => {
    const {id}= req.params;
    sql = `Select id_producto,producto,estado,fk_usuario,precio,detalle,fk_categoria, producto.foto, producto.palabras, producto.user_compra, usuario.nombre, usuario.apellido, categoria.categoria    
     from producto    inner join usuario on producto.fk_usuario= usuario.id_usuario    inner join categoria on producto.fk_categoria = categoria.id_categoria    
    where usuario.id_usuario !=`+id +` and producto.estado ='Sin Bloquear' order by categoria.categoria DESC`; 

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})













//obtengo todos los productos Creados por Mi 
router.get('/api/producto/producto_mio/:id', async (req, res) => {
    const {id}= req.params;
    sql = `Select id_producto,producto,estado,fk_usuario,precio,detalle, palabras,fk_categoria, producto.foto, usuario.nombre, usuario.apellido, categoria.categoria     from producto    inner join usuario on producto.fk_usuario= usuario.id_usuario    inner join categoria on producto.fk_categoria = categoria.id_categoria    
    where usuario.id_usuario =`+id; 

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})

//obtengo solamente un producto en base a su id_producto
router.get('/api/producto/producto_crear/:id', async (req, res) => {
    const {id}= req.params;
    sql = "select * from producto where id_producto ="+id; 

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users[0]);
})
 

// Guardar un Producto
router.post('/api/producto/producto_crear/',uploadImage,async (req, res) => {
    const { producto,estado,fk_usuario,precio,detalle,fk_categoria,foto, palabras, user_compra } = req.body;

    let aux=req.file.path;  

    var output = [];           //change this
    for (var i = 0; i < aux.length; i++) {
      if (aux[i] == "\\") {
        output[i] = "/";
      } else
        output[i] = aux[i];
    } // end forloop
    output= output.join('');
    console.log(output)

     sql = `insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto, palabras, user_compra)
      values('`+producto+`','`+estado+`',`+fk_usuario+`,`+precio+`,'`+detalle+`',`+fk_categoria+`, '`+output+`', '`+palabras+`', `+user_compra+`)`
     
     
     await BD.query(sql)
     .then ( (res) =>{
         res.statusCode=200;
     },
     (err) =>{console.log(err); res.statusCode=500;}
 ); 
  
     res.json({
         "producto":producto,
         "estado":estado,
         "fk_usuario":fk_usuario,
         "precio":precio,
         "detalle":detalle,
         "fk_categoria":fk_categoria,
         "foto": output,
         "palabras": palabras,
         "user_compra": user_compra
 
     })

})

// Guardar un Producto   Segunda opcion
 router.post('/api/producto/producto_crear/con/objeto',async (req, res) => {
    const { producto,estado,fk_usuario,precio,detalle,fk_categoria,foto, palabras, user_compra } = req.body;

    sql = `insert into producto (producto,estado,fk_usuario,precio,detalle,fk_categoria, foto, palabras, user_compra)
     values('`+producto+`','`+estado+`',`+fk_usuario+`,`+precio+`,'`+detalle+`',`+fk_categoria+`, '`+foto+`', '`+palabras+`', `+user_compra+`)`

     
     
     await BD.query(sql)
     .then ( (res) =>{
         res.statusCode=200;
     },
     (err) =>{console.log(err); res.statusCode=500;}
 ); 
  
     res.json({
         "producto":producto,
         "estado":estado,
         "fk_usuario":fk_usuario,
         "precio":precio,
         "detalle":detalle,
         "fk_categoria":fk_categoria,
         "foto": foto,
         "palabras": palabras,
         "user_compra": user_compra
 
     })

})

//UPDATE un solo producto
router.put('/api/producto/producto_crear/actualizar', async (req, res) => {
    const {producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra,id_producto } = req.body;
  

    sql = `update producto set producto='`+producto+`',estado='`+estado+`',fk_usuario=`+fk_usuario+
    `,precio=`+precio+`,detalle='`+detalle+`',fk_categoria=`+fk_categoria+`, foto='`+foto+
    `',palabras='`+palabras+`',user_compra=`+user_compra+` 
    where id_producto=`+id_producto+`;`

 
    await BD.query(sql)

    res.status(200).json({
        "producto":producto,
        "estado":estado,
        "fk_usuario":fk_usuario,
        "precio":precio,
        "detalle":detalle,
        "fk_categoria":fk_categoria,
        "foto": foto,
        "palabras": palabras,
        "user_compra": user_compra
    })

})

//UPDATE un solo producto pero mandandole una nueva imagen
router.put('/api/producto/producto_crear/actualizar/imagen',uploadImage, async (req, res) => {
    const {producto,estado,fk_usuario,precio,detalle,fk_categoria, foto,palabras,user_compra,id_producto } = req.body;
    let aux=req.file.path;  
    console.log(aux)
    
    var output = [];           //change this
for (var i = 0; i < aux.length; i++) {
  if (aux[i] == "\\") {
    output[i] = "/";
  } else
    output[i] = aux[i];
} // end forloop
output= output.join('');
console.log(output)
 
    sql = `update producto set producto='`+producto+`',estado='`+estado+`',fk_usuario=`+fk_usuario+`,precio=`+precio+`,detalle='`+detalle+`',fk_categoria=`+fk_categoria+`, foto='`+output+`',palabras='`+palabras+`',user_compra=`+user_compra+` where id_producto=`+id_producto+`;`
    await BD.query(sql)

    res.status(200).json({
        "producto":producto,
        "estado":estado,
        "fk_usuario":fk_usuario,
        "precio":precio,
        "detalle":detalle,
        "fk_categoria":fk_categoria,
        "foto": output,
        "palabras": palabras,
        "user_compra": user_compra
    })

})



//obtengo todos los comentarios de un producto dado su id_producto
router.get('/api/producto/detalle/:id', async (req, res) => {
    const {id}= req.params;
    sql = `select id_comentario,comentario,fk_producto,fk_usuario,fecha_creacion,usuario.nombre,usuario.apellido from comentario
    inner join usuario on comentario.fk_usuario = usuario.id_usuario where fk_producto=`+id; 
  //  sql = `select * from publicacion`;


  let result = await BD.query(sql);
  
  var string = JSON.stringify(result);
  var Users = JSON.parse(string);

  res.json(Users);
})









///////////////////////////////////////////////////////////////////////////////      CATEGORIAS
///OBTENGO TODAS LAS CATEGORIAS
//para varios registros
router.get('/api/categoria/getCategorias', async (req, res) => {
    sql = "select * from categoria";

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})





///////////////////////////////////////////////////////////////////////   COMENTARIOS
router.post('/api/comentario/detalle/',async (req, res) => {
    const { comentario,fk_producto,fk_usuario } = req.body;
 sql = `insert into comentario (comentario,fk_producto,fk_usuario) values(`+comentario+`,`+fk_producto+`,`+fk_usuario+`)`;

    await BD.query(sql)
    .then ( (res) =>{
      res.statusCode=200;
    },
    (err) =>{console.log(err); res.statusCode=500;}
);

    res.json({
        "comentario":comentario,
        "fk_producto":fk_producto,
        "fk_usuario":fk_usuario
    })
})      




/////////////////////////////////////////////////////////////////////////////    Likes
//obtengo el conteo de likes dado un id_producto
router.get('/api/likes/detalle/:id', async (req, res) => {
    const {id}= req.params;
    sql = `select count(id_likes) as contador from likes where fk_producto=`+id; 
    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users[0]);
})
//obtengo el conteo de Dislikes dado un id_producto .....
router.get('/api/Dislikes/detalle/:id', async (req, res) => {
    const {id}= req.params;
    sql = `select count(id_Dislikes) as contador from Dislikes where fk_producto=`+id; 
    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users[0]);
})


//Si devuelve un arreglo mayor a 0 significa que el usuario ya hizo like .... verifica like dado el id_usuario
router.get('/api/likes/detalle/verifico/:id/:cod', async (req, res) => {
    const {id}= req.params;
    const {cod}=req.params;
    sql = `select * from likes where fk_usuario=`+id+ ` and fk_producto=`+cod; 
   
    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})

//Si devuelve un arreglo mayor a 0 significa que el usuario ya hizo DISLIKE ES DIFERENTE QUE EL DE ARRIBA
router.get('/api/likes/detalle/verifico/dislike/:id/:cod', async (req, res) => {
    const {id}= req.params;
    const {cod}=req.params;
    sql = `select * from Dislikes where fk_usuario=`+id+ ` and fk_producto=`+cod; 

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})



//Creo un like 
router.post('/api/likes/detalle/crear',async (req, res) => {
    const { fk_producto,fk_usuario} = req.body;
sql = `insert into likes (fk_producto,fk_usuario) values(`+fk_producto+`,`+fk_usuario+`)`;

    await BD.query(sql)
    .then ( (res) =>{
     res.statusCode=200;
    },
    (err) =>{console.log(err); res.statusCode=500;}
);

    res.json({
        "fk_producto":fk_producto,
        "fk_usuario":fk_usuario
    })
})

//Elimino un Like dado el id_usuario y el id_producto
router.delete("/api/likes/detalle/eliminar/:id/:cod", async (req, res) => {
    const { id } = req.params;
    const { cod } = req.params;

    sql = `delete from likes where fk_usuario=`+id +`and fk_producto=`+cod;

    await BD.query(sql)

    res.json({ "msg": "like Eliminado " })
})



//Creo un Dislike 
router.post('/api/Dislikes/detalle/crear',async (req, res) => {
    const { fk_producto,fk_usuario} = req.body;
 
    sql = `insert into Dislikes (fk_producto,fk_usuario) values(`+fk_producto+`,`+fk_usuario+`)`;

    await BD.query(sql)
    .then ( (res) =>{
       res.statusCode=200;
    },
    (err) =>{console.log(err); res.statusCode=500;}
);

    res.json({
        "fk_producto":fk_producto,
        "fk_usuario":fk_usuario
    })
})

//Elimino un DisLike dado el id_usuario y el id_producto
router.delete("/api/Dislikes/detalle/eliminar/:id/:cod", async (req, res) => {
    const { id } = req.params;
    const { cod } = req.params;

    sql = `delete from Dislikes where fk_usuario=`+id +`and fk_producto=`+cod;

    await BD.query(sql)

    res.json({ "msg": "Dislike Eliminado " })
})













/////////////////////////////////////////////////////////////////////////////            Cambio de EStado de productos, Operaciones de Carrito


//UPDATE a un estado Carrito pero tambien cambio el user_compra para saber que usuario esta haciendo la compra
router.put('/api/producto/perfil/carrito',uploadImage, async (req, res) => {
    const {estado,user_compra,id_producto } = req.body;


    sql = `update producto set estado='`+estado+`', user_compra=`+user_compra+`
    where id_producto=`+id_producto+`;`

    await BD.query(sql);
  
    res.status(200).json({
        "estado":estado,
        "user_compra":user_compra
        })

})


//obtengo todos los productos que estan en estado de Carrito por parte de un Usuario
router.get('/api/producto/carrito/lista/productos/:user_compra', async (req, res) => {
    const {user_compra}= req.params;

    sql = `Select id_producto,producto,estado,fk_usuario,precio,detalle,fk_categoria, producto.foto, producto.palabras, producto.user_compra, usuario.nombre, usuario.apellido, categoria.categoria,  usuario.correo   
     from producto    inner join usuario on producto.fk_usuario= usuario.id_usuario    inner join categoria on producto.fk_categoria = categoria.id_categoria    
    where producto.user_compra =`+user_compra +` and producto.estado ='Carrito'`; 

 let result = await BD.query(sql);
  
 var string = JSON.stringify(result);
 var Users = JSON.parse(string);

 res.json(Users);
})




// Guardar compra de un cliente....... 
router.post('/api/carrito/carrito-lista/crear/compra',uploadImage,async (req, res) => {
    const {fk_cliente } = req.body;
    sql = `INSERT into compra(fk_cliente) values(`+fk_cliente+`)`
 
     
    await BD.query(sql)
     
     .then ( (res) =>{
     res.statusCode=200;
     },
     (err) =>{console.log(err); res.statusCode=500;}
     ); 
  
     res.json({
         "fk_cliente":fk_cliente
     })

})


//obtengo la ultima compra que se acaba de crear por parte del cliente
router.get('/api/carrito/carrito-lista/obtener/ultima/compra/:fk_cliente', async (req, res) => {
    const {fk_cliente}= req.params;

    sql = `Select compra.id_compra from compra where fk_cliente=`+fk_cliente+` order by compra.id_compra DESC`; 

 let result = await BD.query(sql);
  
 var string = JSON.stringify(result);
 var Users = JSON.parse(string);

 res.json(Users[0]);
})



// Guardar un DETALLE de una compra de un cliente....... 
router.post('/api/carrito/carrito-lista/crear/detalle/detalle',uploadImage,async (req, res) => {
    const {cantidad,fk_producto,fk_compra } = req.body;

    sql = `INSERT into detalle(cantidad,fk_producto,fk_compra) values(`+cantidad+`,`+fk_producto+`,`+fk_compra+`)`
    
     
    await BD.query(sql)
     .then ( (res) =>{
     res.statusCode=200;
     },
     (err) =>{console.log(err); res.statusCode=500;}
     ); 
  
     res.json({
         "cantidad":cantidad,
         "fk_producto":fk_producto,
         "fk_compra":fk_compra         
     })

})










router.post('/api/carrito/carrito-lista/suma/resta/creditos',uploadImage,async (req, res) => {
    const {id_usuario, operacion, valor } = req.body;


    sql = `update usuario set creditos=creditos `+ operacion +` `+valor+` where id_usuario=`+id_usuario+`;`
  
     
    await BD.query(sql)
     .then ( (res) =>{
 res.statusCode=200;
     },
     (err) =>{console.log(err); res.statusCode=500;}
     ); 
  
     res.json({
         "valor":valor      
     })

})



////////////////////////////////////Categorias

//Creo una Categoria 
router.post('/api/categorias/categoria-crear/crear',async (req, res) => {
    const {categoria} = req.body;
sql = `insert into categoria (categoria) values(`+categoria+`)`;

    await BD.query(sql)
    .then ( (res) =>{
     res.statusCode=200;
    },
    (err) =>{console.log(err); res.statusCode=500;}
);

    res.json({
        "categoria":categoria
    })
})




//////////////////////////////////////////////////////////////////////////////////////         Reportes 



//////////////////////////// Reporte 1  Descendente
router.get('/api/reportes/componente/reporte/reporte/1/obtener/des', async (req, res) => {
    sql = `select bitacora.id_bitacora,bitacora.descripcion, bitacora.tipo, bitacora.fecha_creacion, usuario.id_usuario, usuario.nombre, usuario.apellido
    from bitacora
    inner join usuario on usuario.id_usuario= bitacora.fk_usuario
    order by bitacora.fecha_creacion DESC`; 

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})


//////////////////////////// Reporte 1  Ascendente
router.get('/api/reportes/componente/reporte/reporte/1/obtener', async (req, res) => {
    sql = `select bitacora.id_bitacora,bitacora.descripcion, bitacora.tipo, bitacora.fecha_creacion, usuario.id_usuario, usuario.nombre, usuario.apellido
    from bitacora
    inner join usuario on usuario.id_usuario= bitacora.fk_usuario
    order by bitacora.fecha_creacion ASC`; 

    let result = await BD.query(sql);
  
    var string = JSON.stringify(result);
    var Users = JSON.parse(string);

    res.json(Users);
})




///////////////////////////////////////////////////////////////////////////////////////////    Bitacora

// Guardar Una accion por parte de cualquier usuario
router.post('/api/bitacora/guardar/accion/en/todo/el/programa',uploadImage,async (req, res) => {
    const {descripcion,tipo,fk_usuario} = req.body;

    sql = `INSERT into bitacora (descripcion,tipo,fk_usuario) values('`+descripcion+`', '`+tipo+`', `+fk_usuario+`)`
   
     
    await BD.query(sql)
     .then ( (res) =>{
 res.statusCode=200;
     },
     (err) =>{console.log(err); res.statusCode=500;}
     ); 
  
     res.json({
         "descripcion":descripcion,
         "tipo":tipo,
         "fk_usuario":fk_usuario         
     })

})






module.exports = router;