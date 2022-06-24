create database db_animeIFCVS;
use db_animeIFCVS;

create table tb_anime(
	id_anime	int primary key auto_increment,
    nm_anime	varchar(500)
);

truncate table tb_anime;
select * from tb_anime;