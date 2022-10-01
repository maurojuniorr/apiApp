// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Primeira pessoa',
      idade: 36,	
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Segunda pessoa',
      idade: 37
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e"29d72',
      name: 'Terceira pessoa',
      idade: 31
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d70',
      name: 'Quarta pessoa',
      idade: 45
      },
    {
      id: '58694a0f-3da1-471f-bd96-145571e9d372',
      name: 'Quinta pessoa',
      idade: 32
      },
    {
      id: '58694a0f-3d31-471f-bd96-145571e9d372',
      name: 'Sexta pessoa',
      idade: 32
      },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29370',
        name: 'Sétima pessoa',
        idade: 48
      },
    {
        id: '58694a0f-3da1-471f-bd96-4455795e29d70',
        name: 'Oitava pessoa',
        idade: 45
        },
    {
        id: '58694a0f-3da1-471f-bd96-1455431e9d372',
        name: 'Nona pessoa',
        idade: 32
        },
    {
          id: '58694a0f-3da1-471f-bd96-14557231e29370',
          name: 'Decima pessoa',
          idade: 48
        },
    ];
  
  if(req.method === "POST"){
    const usuarioId = req.body.id;
    const novoUsuario = req.body.name;
    const usuarioIdade = req.body.idade;

    if(novoUsuario === ""){
      return res.status(400).json({
        mensagem:'O usuario não foi criado'
      })
    }
    DATA.push({id: usuarioId, name:novoUsuario, idade:usuarioIdade})
    return res.status(200).json(DATA)
  }
  
}
