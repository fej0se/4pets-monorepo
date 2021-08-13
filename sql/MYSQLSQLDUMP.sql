-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: db-mysql-nyc3-51803-do-user-9201426-0.b.db.ondigitalocean.com    Database: defaultdb
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '5f5b3acb-f994-11eb-b7bc-f27f9e3577c0:1-836';

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `departmentId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `departmentId` (`departmentId`),
  CONSTRAINT `Categories_ibfk_1` FOREIGN KEY (`departmentId`) REFERENCES `Departments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'Verão - Dog',1),(2,'Inverno - Dog',1),(3,'Diversos - Dog',1),(4,'Acessórios - Dog',1),(5,'Verão - Cat',2),(6,'Inverno - Cat',2),(7,'Diversos - Cat',2),(8,'Acessórios - Cat',2);
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Departments`
--

DROP TABLE IF EXISTS `Departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departments`
--

LOCK TABLES `Departments` WRITE;
/*!40000 ALTER TABLE `Departments` DISABLE KEYS */;
INSERT INTO `Departments` VALUES (1,'Dogs'),(2,'Cats');
/*!40000 ALTER TABLE `Departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` longtext,
  `image` varchar(255) DEFAULT NULL,
  `storeName` varchar(255) DEFAULT NULL,
  `linkToProd` varchar(255) DEFAULT NULL,
  `categoryId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `Products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `Categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Blusa em Moletinho - Azul Marinho','Blusa super confortável para o seu pet ficar protegido nos passeios em dias mais fresquinhos! <br /> Feita em moletinho de alta qualidade com elastano. Apresenta manguinha comprida. <br /> Perfeita para a composição de looks com acessórios!','https://i.ibb.co/BVdJBXq/blusa-em-moletinho-azul.jpg','Pet Elegante','https://www.petelegante.com.br/cachorros/roupinhas-para-cachorro/cachorro-filhote/blusa-em-moletinho-azul-marinho',2,'2021-08-10 21:23:41','2021-08-10 21:23:41'),(2,'Casaco Charlote - Caramelo','Casaco feito especialmente para manter sua filhota confortável e protegida nos dias frios! <br /> Feito em tweed caramelo e creme! Apresenta o fechamento com botões tradicionais de camisa estilo madeira! <br /> Sua princesa irá curtir o inverno quentinha e super estilosa!','https://i.ibb.co/HTKfG4r/casaco-charlote-petelegante.jpg','Pet Elegante','https://www.petelegante.com.br/cachorros/roupinhas-para-cachorro/cachorro-extra-gigante/casaco-charlote-caramelo',2,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(3,'Blusa Plush com Gola Alta - Rosa','Blusa feita especialmente para manter seu filho pet confortável e protegido nos dias frios!<br /> Feita em tecido plush aveludado com elastano super fofinha e confortável! Contém gola alta feita em pelúcia carneirinho que traz ainda mais charme à peça!<br /> Feita em malha super confortável! Apresenta gola e mangas compridas trazem ainda mais charme a peça! Para dias com temperaturas mais baixas, para deixar seu dog quentinho e confortável em todas as épocas do ano.','https://i.ibb.co/58YXHsq/blusa-plush-com-gola-pelucia-roupa-pet-elegante-rosa3.jpg','Pet Elegante','https://www.petelegante.com.br/blusa-plush-com-gola-alta-rosa',2,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(26,'Pijaminha Fofis - Ursinhos Divertidos','Blusa feita especialmente para manter seu filho pet confortável e protegido nos dias friozinhos! <br />','https://i.ibb.co/0CmKfCF/pijama-pandinha-roupa-pet-elegante4.jpg','Pet Elegante','https://www.petelegante.com.br/cachorros/roupinhas-para-cachorro/cachorro-extra-gigante/pijaminha-fofis-ursinhos-divertidos',2,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(27,'MOLETOM CANGURU','Moletom com bolsinhos na parte da frente, básico e casual, para deixar o dia-a-dia do seu bichano bem descolado.','https://cdn.awsli.com.br/1000x1000/31/31979/produto/29119612/0a34db736e.jpg','Cansei de ser gato','https://www.canseidesergato.com/moletom-canguru?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&sku=5A5924-p',6,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(28,'Algodão Doce Forrada Cinza Prata','Super confotável, moderna e quentinha. Para dias com temperaturas mais baixas. Confeccionado com muito carinho, para deixar seu gatinho quentinho e confortável em todas as épocas do ano.','https://i.ibb.co/xDWm8t6/algodao-doce-forrada-cinza-prata.jpg','Lis Vic','https://lisvic.com.br/produto/algodao-doce-forrada-cinza-prata/',6,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(29,'Soft Fleece Pink Ribana Corações','Super confotável, moderna e quentinha. Para dias com temperaturas mais baixas. Confeccionado com muito carinho, para deixar seu gatinho quentinho e confortável em todas as épocas do ano.','https://i.ibb.co/3SqTbzg/Soft-Fleece-Pink-Ribana-Cora-es-2.jpg','Lis Vic','https://lisvic.com.br/produto/20143/',6,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(30,'Gatinhos E Patinhas','Super confotável, moderna e quentinha. Para dias com temperaturas mais baixas. Confeccionado com muito carinho, para deixar seu gatinho quentinho e confortável em todas as épocas do ano.','https://i.ibb.co/FD2QKSf/Gatinhos-E-Patinhas.jpg','Lis Vic','https://lisvic.com.br/produto/gatinhos-e-patinhas/',6,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(31,'Pijaminha Fofis - Pandinha Rei','Blusa feita especialmente para manter seu filho pet confortável e protegido nos dias friozinhos! <br /> Feita em malha super confortável! Apresenta gola e mangas compridas trazem ainda mais charme a peça! Para dias com temperaturas mais baixas, para deixar seu dog quentinho e confortável em todas as épocas do ano. <br /> Seu pet irá curtir o inverno super estiloso!','https://i.ibb.co/fMGHpxL/pijaminha-ursinho-divertido-pet-elegante.jpg','Pet Elegante','https://www.petelegante.com.br/cachorros/roupinhas-para-cachorro/cachorro-micro/pijaminha-fofis-pandinha-rei',2,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(32,'Pijama Amarelo Doguinhos ','O pijama perfeito para proteger o seu filho de 4 patas nas noites mais fresquinhas! <br />Feito em malha de alta qualidade confortável com elastano. Apresenta uma gola estampada que traz ainda mais charme a peça! <br /> O seu filhote terá noites relaxantes e confortáveis! ','https://i.ibb.co/QXF8xpm/pijama-doguinhos-amarelo.jpg','Pet Elegante','https://www.petelegante.com.br/pijama-amarelo-doguinhos-colec-o-bons-sonhos',2,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(33,'Blusa Plush com Gola Alta - Castor','Blusa feita especialmente para manter seu filho pet confortável e protegido nos dias frios! <br /> Feita em tecido plush aveludado com elastano super fofinha e confortável! Contém gola alta feita em pelúcia carneirinho que traz ainda mais charme à peça! <br /> Seu pet irá curtir o inverno quentinho e super estiloso!  ','https://i.ibb.co/D9G01r4/blusa-plush-com-gola-pelucia-roupa-pet-elegante3.jpg','Pet Elegante','https://www.petelegante.com.br/cachorros/roupinhas-para-cachorro/cachorro-medio/blusa-plush-com-gola-alta-castor',2,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(34,'Roupinha Para Cachorros e Gatos','Super confotável, moderna e quentinha. Para dias com temperaturas mais baixas. Confeccionado com muito carinho, para deixar seu gatinho quentinho e confortável em todas as épocas do ano.','https://cdn.shopify.com/s/files/1/0558/8598/8019/products/HTB1Uz7Wc56guuRkSnb4q6zu4XXaT_600x.jpg?v=1623019651','Variedade pets','https://variedadespet.com.br/products/casaco-para-cachorros-e-gatos?currency=BRL&variant=39933532176563&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping',6,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(35,'Microsoft Rosa Com Quadrados','Super confotável, moderna e quentinha. Para dias com temperaturas mais baixas. Confeccionado com muito carinho, para deixar seu gatinho quentinho e confortável em todas as épocas do ano.','https://i.ibb.co/zXqGmtp/microsoft-rosa-com-quadrados.jpg','Lis Vic','https://lisvic.com.br/produto/microsoft-rosa-com-quadrados/',6,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(36,'Matelassê Forrada Ribana Pluminha','Super confotável, moderna e quentinha. Para dias com temperaturas mais baixas. Confeccionado com muito carinho, para deixar seu gatinho quentinho e confortável em todas as épocas do ano.','https://lisvic.com.br/wp-content/uploads/2020/06/aded8b95-2596-4432-8799-370e27c2011f.jpg','Lis Vic','https://lisvic.com.br/produto/matelasse-forrada-ribana-pluminha/',6,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(37,'Vestido de Malha e Piquet Lindinha','Vestido perfeito para a sua princesa curtir os passeios super charmosa e confortável! <br /> Feito em malha leve e fresquinha de alta qualidade! A saia é decorada com renda que traz ainda mais charme a peça.','https://www.petelegante.com.br/media/catalog/product/v/e/vestido_roxo_com_saia_florida.jpg','Pet Elegante','https://www.petelegante.com.br/cachorros/roupinhas-para-cachorro/cachorro-extra-gigante/vestido-de-malha-e-piquet-lindinha',1,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(38,'Vestido Bonequinha - Moletom e Tricoline','Feito em moletom de alta qualidade, com saia de tricoline e lacinhos na alcinha que trazem ainda mais charme a peça! Apresenta abertura para a passagem da guia, assim a sua princesa pode curtir os passeios com o look impecável.','https://www.petelegante.com.br/media/catalog/product/v/e/vestido_em_moletom_e_tricoline_laranja_coracoes3.jpg?pe_fullscreen=https://www.petelegante.com.br/media/catalog/product/v/e/vestido_em_moletom_e_tricoline_laranja_coracoes3.jpg','Pet Elegante','https://www.petelegante.com.br/vestido-bonequinha-moletom-e-tricoline',1,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(39,'Camisa para Cachorros Limão','A Camisa para Cachorros Limão é azul turquesa, com estampa de limões sicilianos e gravata borboleta amarela é uma peça linda e que vai deixar seu bichinho muito charmoso!','https://cdn.awsli.com.br/1000x1000/1012/1012421/produto/48032716/ec2d5b1c07.jpg','Bichinho Virtual','https://www.bichinhovirtual.com.br/camisa-para-cachorros-limao',1,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(40,'Regata Pet com Proteção UV Tie Dye Laranja','A Regata Pet Tie Dye Laranja, da Dog & Design, além de ser estilosa e confortável, também conta com Proteção UV! <br /> O tecido com tecnologia de Proteção UV é feito para refletir os raios UVA e UVB. Dessa maneira, ao se expor ao sol, a roupa não permitirá que a pele do seu bichinho absorva a radiação, se tornando perfeita para usar no verão, em praias e piscinas. Lembrando que mesmo com a Proteção UV, seu animal não deve ficar exposto diretamente ao sol nos horários mais quentes do dia.','https://cdn.awsli.com.br/1000x1000/1012/1012421/produto/93336585/1a533c3ac6.jpg','Bichinho Virtual','https://www.bichinhovirtual.com.br/regata-pet-com-protecao-uv-tie-dye-laranja',1,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(41,'Biquíni para Cachorros Moranguinho','O Biquíni para Cachorros Moranguinho, da Simba, é cheio de estilo e charme! <br  /> O top e a calcinha são rosa com sementinhas pretas e babado verde esmeralda. A calcinha tem abertura para passar o rabinho do cachorro.','https://cdn.awsli.com.br/1000x1000/1012/1012421/produto/89110925/c178395b96.jpg','Bichinho Virtual','https://www.bichinhovirtual.com.br/biquini-para-cachorros-moranguinho',1,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(42,'Vestido Classic - Xadrez Creme e Preto','Vestido feito especialmente para manter sua filhota confortável e protegida nos dias frios! <br /> Feito em moletom e poliéster! Apresenta acoplado na roupinha uma bolsinha de verdade!','https://www.petelegante.com.br/media/catalog/product/v/e/vestido_classic_branco_e_preto.jpg?pe_fullscreen=https://www.petelegante.com.br/media/catalog/product/v/e/vestido_classic_branco_e_preto.jpg','Pet Elegante','https://www.petelegante.com.br/cachorros/roupinhas-para-cachorro/cachorro-extra-gigante/vestido-classic-xadrez-creme-e-preto',1,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(43,'Camiseta Pet - Terra','Linda camiseta vermelha listrada feita para o seu pet arrasar no verão. De material confortável que se adapta no corpo do seu pet, perfeito para passeios no parque.','https://d3ugyf2ht6aenh.cloudfront.net/stores/329/073/products/camiseta-terra-para-cachorro-e-gato-frente1-8b72cf2e232986175016025076875420-1024-1024.jpg','Cacau dress pet','https://www.cacaudresspet.com/produtos/camiseta-pet-terra/?variant=222111662',1,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(44,'Blusa Malha Pickorruchos Navy com Capuz Vermelha','Estampa descontraída, com detalhe em bordado, essa camiseta tem modelo diferenciado e inovador, que permite seu pet toda a liberdade ao se movimentar. Confortável e prático na hora de colocar, possui um elastico na barriga para melhor ajuste.','https://www.petlove.com.br/images/products/241445/product/Blusa_Malha_Pickorruchos_Navy_com_Capuz_Vermelha_-2072495_2.jpg?1627784116','Petlove','https://www.petlove.com.br/blusa-malha-pickorruchos-navy-com-capuz-vermelha/p?sku=2072553',1,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(45,'Roupa Camiseta Malha Azul para cachorros','Leve e confortável, a roupa para cachorro camiseta de malha da Algodão Dog é a uma excelente opção para o dia a dia, especialmente em momentos de clima agradável. Protege o seu pet, garantindo conforto e estilo. <br /> O modelo Camiseta Malha Azul é uma peça única e exclusiva da Algodão Dog. O material da roupinha é cotton penteado e conta com diversos tamanhos.','https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_570,h_708/https://www.algodaodog.com.br/wp-content/uploads/2020/03/Malha-azul-para-cachorro-03.jpg','Algodãodog','https://www.algodaodog.com.br/produto/roupa-para-cachorro-camiseta-malha-azul/',1,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(46,'ROUPA PARA GATOS STAR WARS','Deixe seu gato estiloso com essa roupa com a estampa do Star Wars! Leve e prática de usar, seu gato vai arrasar em todos os lugares que for!','https://images.tcdn.com.br/img/img_prod/924463/roupa_para_gatos_star_wars_1081_1_cdc6a8cbd896883d3594a5f3b991f336.jpg','Cara de dono','https://www.caradodono.com.br/gatos/roupa-para-gatos-star-wars?parceiro=6012',5,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(48,'Roupinha do Simpsons','Deixe seu gato estiloso com essa roupa com a estampa do Homer Simpson! <br />  Leve e prática de usar, seu gato vai arrasar em todos os lugares que for!','https://images.tcdn.com.br/img/img_prod/924463/roupa_para_gatos_simpson_1317_1_f1c32fdf408f924202eb16bbed0c4535.jpg','Cara de dono','https://www.caradodono.com.br/gatos/roupa-para-gatos-simpson?parceiro=6012',5,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(49,'ROUPINHA PET PARA GATOS AZUL','Cotton – Esta roupa protetora, na cava traseira o designer é estilo shorts, e possui abertura na parte inferior.','https://www.megapet.com.br/controle/arquivo/roupinha-pet-para-gatos-azul-n3-gato-de-4-a-5-kg.jpg','Megapet','https://www.megapet.com.br/produto/roupinhapetparagatosazul-n3gatode4a5kg',5,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(60,'Bandana para Cachorros e Gatos Scooby-Doo','A Bandana para Cachorros e Gatos Scooby-Doo, da FreeFaro, é um show! /n  A coleção é inspirada no famoso personagem Scooby Doo e perfeita para os fãs que já desvendaram muitos enigmas com a turma da Máquina de Mistério! <br /> Fabricado em tecido super macio, a bandana é triangular e atada com nó, sendo possível adequar a altura e a largura da maneira que mais te agrade. <br /> A bandana está disponível em três tamanhos, então é necessário medir o pescoço do seu bichinho, para saber qual tamanho melhor se adequa para ele. <br /> O tecido é dupla face, o que possibilita você usar tanto de um lado quanto do outro. Em um dos lados tem o rosto e as pintinhas do Scooby Doo, já do outro tem a plaquinha que ele usa em sua coleira. Uma fofura! < br/> Acabamento com logo da Free Faro, em material emborrachado atóxico, que não encarde e não despedaça.','https://cdn.awsli.com.br/1000x1000/1012/1012421/produto/59749896/5f28aadcda.jpg','Bichinho Virtual','https://www.bichinhovirtual.com.br/bandana-para-cachorros-e-gatos-scooby-doo',4,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(61,'Bandana para Cachorros e Gatos Tie Dye','A Bandana Tie Dye é dupla face, com estampa colorida e detalhe em tule colorido.  <br />Super alegre e divertida, é a bandana perfeita para arrasar no carnaval e tirar muitas fotos lindas. <br />Como ela é dupla face, você tem duas opções de cores em uma só bandana, para variar o look do seu bichinho. Como a bandana é tingida, as cores podem variar, fazendo com que cada peça seja exclusiva. <br />Para prender no pescoço do seu pet é super fácil, basta deixar uma folga para que fique confortável no pescoço e fazer um nó. <br />Seu animalzinho vai fazer sucesso te acompanhando nos passeios com a sua bandana em estampa tie dye, que está super em alta. Uma peça linda, com um contraste único de cores vibrantes. <br />Composição: tricoline branca com tingimento em acrilex e detalhes em tule colorido.','https://cdn.awsli.com.br/1000x1000/1012/1012421/produto/86130210/e24c6dd564.jpg','Bichinho Virtual','https://www.bichinhovirtual.com.br/bandana-para-cachorros-e-gatos-tie-dye',4,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(62,'Gravata para Cachorros e Gatos Travel Airplane','Grava borboleta feita com tecido confortável. Com um elastico resistente e um feixo no pescoço, essa gravata é perfeita para ocasiões sociais ou para passeios no shopping','https://cdn.awsli.com.br/64x50/1012/1012421/produto/89713724/dadf941e98.jpg','Bichinho Virtual','https://www.bichinhovirtual.com.br/gravata-para-cachorros-e-gatos-travel-airplane',4,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(63,'Capa de Chuva Elegance Cores Variadas','Feita de tecido impermeável e com uma faixa refletiva costurada em toda a extensão das costas, essa capa além de proteger seu pet contra chuva auxilia nos passeios nortunos, onde existe transito intenso de automoveis, devido a faixa refletiva.','https://www.petlove.com.br/images/products/185691/large/3101208.jpg?1627602607','Petlove','https://www.petlove.com.br/capa-de-chuva-elegance---chalesco-30208/p?sku=3101208',4,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(64,'Bandana para Cachorros e Gatos Mulher Maravilha','As botas de borracha para cães PawZ são reutilizáveis e impermeáveis, e no momento em que estiverem desgastadas, podem ser descartadas. Feito de borracha natural. 100% biodegradável e reciclável. Não tóxicas. Aprovada por veterinários.','https://cdn.awsli.com.br/1000x1000/1012/1012421/produto/80875735/023e78dd8d.jpg','Bichinho Virtual','https://www.bichinhovirtual.com.br/bandana-para-cachorros-e-gatos-mulher-maravilha',4,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(65,'Pawz Boots Botas para Cachorros | Large | Grande','Pawz Boots Botas para Cachorros | Large | Grande','https://cdn.awsli.com.br/1000x1000/1012/1012421/produto/42531459/8530b06fd4.jpg','Bichinho Virtual','https://www.bichinhovirtual.com.br/pawz-boots-botas-para-cachorros-large-grande',4,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(66,'BANDANA PARA GATOS GAMER NEON','Fabricado em tecido super macio, a bandana é triangular e atada com nó, sendo possível adequar a altura e a largura da maneira que mais te agrade.','https://images.tcdn.com.br/img/img_prod/924463/bandana_para_gatos_gamer_neon_1841_1_68f479f345166732b7fe548dc2e880e2.jpg','Cara de dono','https://www.caradodono.com.br/bandanas/bandana-para-gatos-gamer-neon?parceiro=6012',8,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(67,'Gravata Borboleta em Pelúcia com Elástico – Café','Gravata em tecido de pelúcia estilo borboleta. Apresenta elástico regulável para que a gravata fique certinha e confortável no pescoço do pet.','https://www.petelegante.com.br/media/catalog/product/g/r/gravata_pelucia_marrom_.png?pe_fullscreen=https://www.petelegante.com.br/media/catalog/product/g/r/gravata_pelucia_marrom_.png','Pet Elegante','https://www.petelegante.com.br/gatos/gravata-para-gato/gravata-borboleta-em-pelucia-com-elastico-cafe',8,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(68,'Colarinho com Gravata Borboleta - Azul Marinho e Dourado Estrelinhas','Lindo colarinho estilo gola polo feito em tecido tricoline de alta qualidade! Apresenta uma gravata borboleta acoplada ao colarinho trazendo ainda mais charme a peça. O fechamento da gola é feito com velcro, sendo fácil de colocar e de ajustar ao pescocinho do seu filhote para que fique firme e confortável.','https://www.petelegante.com.br/media/catalog/product/c/o/colarinho_com_gravata_borboleta_1.jpg?pe_fullscreen=https://www.petelegante.com.br/media/catalog/product/c/o/colarinho_com_gravata_borboleta_1.jpg','Pet Elegante','https://www.petelegante.com.br/colarinho-com-gravata-borboleta-azul-marinho-e-dourado-estrelinhas',8,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(69,'Bandana para gatos gamer zone ','As  bandanas personalizadas oferecem aquela beleza que você espera para seu cão ou gato, essas bandanas se destacam em meio aos outros visualmente agradando seu dono e a todos ao seu redor, confeccionadas com todo carinho.','https://images.tcdn.com.br/img/img_prod/924463/bandana_para_gatos_gamer_zone_1825_1_c078db423543ecd4c22d4e159a0959b8.jpg','Cara de dono','https://www.caradodono.com.br/bandanas/bandana-para-gatos-gamer-zone',8,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(70,'FANTASIA DE DINOSSAURO ROXO','Feita de material confortável, essa roupa é quentinha, confortável e fácil de vestir. ','https://cdn.awsli.com.br/1000x1000/31/31979/produto/55861427/55a62e92f1.jpg','Cansei de ser gato','https://www.canseidesergato.com/fantasia-dinossauro',7,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(71,'FANTASIA JUBA DE LEÃO','Cansou de ter um gato? A juba de leão ajuda você a transformar o seu gato em uma verdadeira fera!','https://cdn.awsli.com.br/1000x1000/31/31979/produto/29095720/d36d2b7a01.jpg','Cansei de ser gato','https://www.canseidesergato.com/juba-leao',7,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(72,'FANTASIA DE VACA','Seu gato cansou? Então ele pode virar uma vaca!','https://cdn.awsli.com.br/1000x1000/31/31979/produto/32363745/774da1dfb9.jpg','Cansei de ser gato','https://www.canseidesergato.com/none-32363745',7,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(73,'Roupa Fantasia Pet Gato Dinossauro Complet','Fantasia de dinossauro super confortável. Feita de 100% algodão ela vai dar um estilo extra para o seu gato.','https://images-americanas.b2w.io/produtos/01/00/img/600490/2/600490234_2SZ.jpg','Americanas','https://www.americanas.com.br/produto/600490728#&gid=1&pid=4',7,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(74,'Camiseta Piticas Capitã Marvel','Produto original, licenciado e exclusivo Piticas. Ela possui uma costura reforçada, é resitente, confortável e segura para o seu pet. Que tal trazer a tona os super poderes dos seus gatos com essa camiseta?','https://staticpetz.stoom.com.br/fotos/1600799325415.jpg','Petz','https://www.petz.com.br/produto/camiseta-piticas-capita-marvel-159777',3,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(75,'Smoking Futon Dog Wedding sem Guia Preto','Elegante, ajustável e confortável, essa é a roupa ideal para seu pet ficar fashion neste Carnaval.','https://www.petlove.com.br/images/products/221160/product/Smoking_Futon_Dog_Wedding_sem_Guia_-_Preto_3108830_1.jpg?1627707874','Petlove','https://www.petlove.com.br/smoking-futon-dog-sem-guia-preto/p?sku=3108830-2',3,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(76,'Fantasia Pirata','Divertida e confortável, com cores brilhantes e chamativas, essa fantasia permite ventilação da pele. ','https://www.petlove.com.br/images/products/217028/product/Fantasia_Petlove_Pirata_F%C3%AAmea_para_C%C3%A3es_1240470.jpg?1627696503','Petlove','https://www.petlove.com.br/fantasia-futon-dog-pirata-femea-para-caes/p/destaque?sku=1240543&utm_source=google&utm_medium=organic_shopping',3,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(77,'JAQUETA PARA CACHORROS \"FROG\"','As roupas da PopDog são modeladas para atender todos os cães, inclusive os de peito largo, como bulldogs e pugs, garantindo o conforto independente do porte ou raça.','https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/696/products/frog-21-e015e2da985e564ef915718531869311-1024-1024.jpg','Pop DOg','https://www.lojapopdog.com/produtos/jaqueta-para-cachorros-frog/',3,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(78,'Fantasia Futon Dog de Vampiro','Elegante, ajustável e confortável, essa é a roupa ideal para seu pet ficar fashion neste Carnaval.','https://www.petlove.com.br/images/products/186355/product/Futon_Fantasia_Vampiro__3108839_1.jpg?1627604657','Petlove','https://www.petlove.com.br/fantasia-futon-dog-de-vampiro/p?sku=3108839-5',3,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(79,'Fantasia para Cachorros Presidiário','Feito com certeza da qualidade Sulamericana Fantasias, possui um design diferenciado e tecido macio que evita coceiras.','https://abrakadabra.vteximg.com.br/arquivos/ids/236598-1000-1000/70102_000_1.jpg?v=637308542129570000','Abracadabra','https://www.abrakadabra.com.br/fantasia-para-cachorros-presidiario-70102/p',3,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(80,'Fantasias para pets - Cowboy Cat - Roupas para pets','Elegante, ajustável e confortável, essa é a roupa ideal para seu pet ficar fashion neste Carnaval.','https://cdn.shopify.com/s/files/1/0539/3822/5343/products/HTB1VsJOjqQoBKNjSZJnq6yw9VXav_600x.jpg?v=1619637757','Mudamind','https://www.mudamind.com.br/products/fantasias-para-pets-cowboy-cat-roupas-para-pets?currency=BRL&variant=39694664368319&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping',7,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(90,'Roupinha do simba','Traga o leão que existe dentro do seu gato com essa roupa com a estampa do Simba! Leve e prática de usar, seu gato vai arrasar em todos os lugares que for!','https://images.tcdn.com.br/img/img_prod/924463/roupa_para_gatos_simba_805_1_01b63bfc293c09381406f80f3e248eeb.jpg','Cara de dono','https://www.caradodono.com.br/gatos/roupa-para-gatos-simba',5,'2021-08-10 21:37:06','2021-08-10 21:37:06');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sizes`
--

DROP TABLE IF EXISTS `Sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `size` varchar(255) DEFAULT NULL,
  `prodId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `prodId` (`prodId`),
  CONSTRAINT `Sizes_ibfk_1` FOREIGN KEY (`prodId`) REFERENCES `Products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sizes`
--

LOCK TABLES `Sizes` WRITE;
/*!40000 ALTER TABLE `Sizes` DISABLE KEYS */;
INSERT INTO `Sizes` VALUES (1,'P',1,'2021-08-10 21:23:42','2021-08-10 21:23:42'),(2,'G',1,'2021-08-10 21:23:42','2021-08-10 21:23:42'),(3,'GG',1,'2021-08-10 21:23:42','2021-08-10 21:23:42'),(4,'P',2,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(5,'M',2,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(6,'G',2,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(7,'GG',2,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(8,'P',37,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(9,'M',37,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(10,'GG',37,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(11,'G',37,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(12,'P',38,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(13,'M',38,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(14,'GG',38,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(15,'GG',39,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(16,'M',39,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(17,'P',40,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(18,'P',41,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(19,'M',41,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(20,'G',41,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(21,'GG',41,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(22,'P',42,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(23,'P',43,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(24,'P',44,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(25,'M',44,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(26,'M',45,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(27,'G',45,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(28,'GG',45,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(29,'P',3,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(30,'G',3,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(31,'M',3,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(32,'GG',3,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(33,'P',26,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(34,'G',26,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(35,'GG',26,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(36,'P',31,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(37,'M',31,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(38,'G',31,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(39,'GG',31,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(40,'P',32,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(41,'GG',32,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(42,'P',33,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(43,'M',74,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(44,'P',74,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(45,'GG',74,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(46,'P',75,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(47,'M',75,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(48,'G',75,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(49,'GG',75,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(50,'P',76,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(51,'M',76,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(52,'G',76,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(53,'GG',76,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(54,'M',77,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(55,'G',78,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(56,'GG',78,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(57,'M',79,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(58,'P',79,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(59,'G',79,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(60,'G',60,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(61,'P',60,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(62,'M',60,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(63,'P',61,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(64,'M',61,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(65,'G',61,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(66,'GG',62,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(67,'G',62,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(68,'M',62,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(69,'P',62,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(70,'P',63,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(71,'M',63,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(72,'M',64,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(73,'G',65,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(74,'GG',65,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(75,'P',65,'2021-08-10 21:37:06','2021-08-10 21:37:06'),(76,'M',65,'2021-08-10 21:37:06','2021-08-10 21:37:06');
/*!40000 ALTER TABLE `Sizes` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-11  0:30:04