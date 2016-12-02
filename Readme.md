# Attract Melee - Team Nuit Info 2016

##### Nous sommes une équipe de jeunes ingénieurs et nous aimons relever les défis.

#### FreeBorder est une plateforme conçue par Attract Melee. Ce repository correspond au client capable de se connecter aux divers services et des les interpréter. Nous avons developpé divers API indépendante (attractmelee-socialnetwork, asylium-service, account_service), dans des langages différents.

#### attractmelee-socialnetwork :
Developpé à partir de Spring et TwitterJ, il permet de récupérer des tweets avec un certain # et affiche leur coordonnés sur la carte (Asylium).<br/>

###### Pour l'executer :
  - $ git clone https://github.com/kevinbuisson/attractmelee-socialnetwork
  - cd attractmelee-socialnetwork
  - $ mvn spring-boot:run

#### asylium-service :
Developpé grâce à la technologie Node.js, il permet d'évaluer un % de chance d'avoir un permis d'asile suivant son origine. Elle intègre une API du UNHCR (Haut Commisariat des Réfugier).<br/>

###### Pour l'executer :
 - $ git clone https://github.com/yastij/asylium
 - $ node app.js
 - aller à : http://localhost:8081/asyliumDemand/:IATA/estimator (:IATA peut être remplacé par SYR par exemple) pour visualiser des données.

#### Acount_Service

##### Pour l'executer :
- $ git clone https://github.com/madkira/Nuit_de_la_Raclette
- Le tutoriel d'installation se trouve dans le readme.md https://github.com/madkira/Nuit_de_la_Raclette/blob/master/README.md

#### Client : ClientAttractMelee

##### Pour l'executer :
- $ git clone https://github.com/AliciaMitsuko/ClientAttractMelee
- Installer nodejs, et bower (vous trouverez facilement un tutoriel sur internet)
- $ npm install
- $ bower install -g
- $ npm start

## Petit apercu en image
Nous avons eu le temps d'intégrer deux services sur trois pendant la nuit (socialnetwork et asylium-service);
Vous trouverez ci-dessous un aperçu en image

![alt tag](https://github.com/AliciaMitsuko/ClientAttractMelee/blob/master/image/FreeBorder_socialnetwork.png)

![alt tag](https://github.com/AliciaMitsuko/ClientAttractMelee/blob/master/image/FreeBorder_asylium_service.png)
