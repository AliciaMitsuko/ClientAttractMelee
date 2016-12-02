# Attract Melee - Team Nuit Info 2016

      <p>FreeBorder est une plateforme , il fait appel à divers services (attractmelee-socialnetwork, asylium-service, account_service)</p>
      <a href="/#/asylium" class="btn btn-primary btn-lg dark-blue">Asylium</a>
      <a href="/#/depart" class="btn btn-primary btn-lg dark-blue">Départ</a>

      <br/><br/><br/><br/>
      Ceci est la page d'accueil (client). Nous avons developpé divers API indépendante. Cette page va se connecter à ses services.<br/>
      <b>attractmelee-socialnetwork</b> : Developpé à partir de Spring et TwitterJ, il permet de récupérer des tweets avec un certain # et affiche leur coordonnés sur la carte (Asylium).<br/>

      Pour l'executer :
      <ul>
        <li>$ git clone https://github.com/kevinbuisson/attractmelee-socialnetwork</li>
        <li>dans le repertoire : $ mvn spring-boot:run</li>
      </ul>
       <b>asylium-service</b> : Developpé grâce à la technologie Node.js, il permet d'évaluer un % de chance d'avoir un permis d'asile suivant son origine. Elle intègre une API du UNHCR (Haut Commisariat des Réfugier).<br/>
       Pour l'executer :
      <ul>
       <li>$ git clone https://github.com/yastij/asylium</li>
       <li>$ node app.js</li>
       <li>aller à : http://localhost:8081/asyliumDemand/SYR/estimator</li> (SYR est un code IATA)
     </ul>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>

      <p>Nous sommes une équipe de jeunes ingénieurs et nous aimons relever les défis.</p>

