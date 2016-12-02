# Attract Melee - Team Nuit Info 2016

#### FreeBorder est une plateforme conçue par Attract Melee (attractmelee-socialnetwork, asylium-service, account_service). Ce repository correspond au client capable de se connecter aux divers services et des les interpréter. Nous avons developpé divers API indépendante, dans des langages différents.

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

<br/><br/><br/><br/><br/>

Nous sommes une équipe de jeunes ingénieurs et nous aimons relever les défis.
