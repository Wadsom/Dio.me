const { join } = require('path');
const fs = require('fs');
const FilePath = join(__dirname, 'Usuario.json');

// Usando Json como um banco de dados || NÃO RECOMENDADO
//----------------------------------------------------------------------------------------
const GetUsuario = () =>{
    const Data = fs.existsSync(FilePath)
       ? fs.readFileSync(FilePath)
       : []

   try{
    return json.parse(Data);
   } 
   catch(error){
    return []
   }   
};
//----------------------------------------------------------------------------------------


//Salvando o usuário no Json
//----------------------------------------------------------------------------------------
const saveUsario = (users)=>{
    fs.writeFileSync(FilePath, JSON.stringify(users,  null, '\t'));
}
//Definindo a route para recebimento do Usuário
const UsuarioRoute = (app)=>{ 
    app.route('/users:id?')
       .get((req,res)=>{
          const users = GetUsuario();
          res.send({users});      
        }) 
       .post((req, res) => {
        const users = GetUsuario()
        users.push (req.body)
        saveUsario(users)
        res.status(201).send('Registro Finalizado!')
       })
      
    
}

module.exports = UsuarioRoute;

