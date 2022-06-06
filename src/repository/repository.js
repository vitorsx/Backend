import { con } from "./connection.js";

export async function inserirAnime(anime){
    const comando = `
    insert into tb_anime(nm_anime)
		values(?)
    `
    const [resposta] = await con.query(comando, [anime.nome])
    anime.id = resposta.insertId
    return anime;
}

export async function verAnime(){
    const comando = `select * from tb_anime`

    const [resposta] = await con.query(comando)
    return resposta;
}