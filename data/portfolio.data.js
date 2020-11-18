export const items = [
  {
    overview: "/static/networking-crea.png",
    title: "Networking Club Créa",
    subtitle:
      "Javascript - ReactJs - Redux - NodeJs - Express - Sequelize - Nodemailer - Bootstrap - PropTypes",
    linkWebSite: "https://networking.crea-aquitaine.org/",
    description: (
      <p>
        Plateforme de mise en relation entreprises.
        <br />
        Projet existant qui nécessitait la correction d'erreurs et l'amélioration de certaines fonctionnalités.
        <br />
        Réalisation :
        <br />
        - peristance des données via sessionsStorage
        <br />
        - possibilité pour un utilisateur d'envoyer un message aux administrateurs via la partie Contact
        <br />
        - récupération du mot de passe.
      </p>
    ),
  },
  {
    overview: "/static/followTheMap-overview.png",
    title: "Follow The Map",
    subtitle:
      "Java JEE - Spring - Jpa - Hibernate - PostgreSql - Thymeleaf - MapBox - Javascript - Bootstrap",
    linkWebSite: "/static/followTheMap.png",
    description: (
      <p>
        Projet de formation avec clients réels, Follow The Market.
        <br />
        Ils souhaitaient intégrer à leur solution existante une carte qui
        permettrait la visualisation des données de leur client.
        <br />
        Réalisation :
        <br />
        - prise en main de MapBox et implémentation des scripts nécessaires à
        l'affichage et la manipulation d'une map
        <br />
        - connexion à l'Api de MabBox afin de placer un marker sur la carte,
        préciser le degré de zoom, choisir un style
        <br />
        - requête à l'Api du client afin d'obtenir les coordonnées GPS et placer
        un marker représentant chacune des enseignes
        <br />
        - ajout d'un filtre depuis un formulaire sur le nom du magasin afin de
        n'en récupérer que certains
        <br />
        - affichage du nombre de magasins par secteur sous forme de regroupement
        de données (cluster)
        <br />
        - mise en place de polygones autour des villes où se trouvent des
        magasins avec dégradé de couleurs en fonction de leur concentration ou
        de la moyenne du chiffre d'affaire par ville
        <br />
        - création d'une base de données sur AWS avec PostgreSQL pour permettre
        la sauvegarde des paramètres d'une carte (latitude et longitude d'un
        point, le zoom et un style)
        <br />
        - ajout d'un formulaire pour permettre la sauvegarde de ces paramètres
        <br />
        - affichage de périmètre de déplacement possible autour d'un point en
        fonction du moyen de locomotion et de la durée souhaitée
        <br />
        Projet privé, non déployé (aperçu disponible), et réalisé en groupe de
        quatre personnes, en mode Agile, sur cinq semaines.
      </p>
    ),
  },
  {
    overview: "/static/librairie.png",
    title: "Librairie connectée",
    subtitle: "Javascript - Angular - Firebase - RxJs - Bootstrap",
    linkWebSite: "https://my-connected-library.netlify.app/",
    linkGithub: "https://github.com/Zesysy/my-library-angular",
    description: (
      <p>
        Découverte de Angular :<br />
        - mise en place d'un environnement Angular
        <br />
        - découverte de Typescript
        <br />- ajout d'une création d'utilisateur avec Firebase <br />-
        possibilité d'ajouter une image dans la base de données <br />- gestion
        des formulaires avec Angular <br />- mise en place d'observable avec
        RxJs.
      </p>
    ),
  },
  {
    overview: "/static/your-todos.png",
    title: "Your Todo List",
    subtitle:
      "Java JEE - Spring - Jpa - Hibernate - PostgreSql - Heroku - Thymeleaf - Bootstrap",
    linkWebSite: "https://your-todos-list.herokuapp.com/",
    linkGithub: "https://github.com/Zesysy/todo-list-spring",
    description: (
      <p>
        Check point de fin de formation -{">"} Réaliser en moins de 24h une
        application mobilisant les connaissances acquises durant la formation :
        <br />
        - création de la base de données avec MySQL dans un premier temps
        <br />- récupération / création / modification / suppresion des tâches
        <br />- création d'une API Rest et d'un controlleur pouvant intéragir
        avec le front (Thymeleaf)
        {/* <br /> - mise en place d'une authentification avec Spring Security (à
        finaliser) */}
        <br /> - ajout (après le check point) d'un environnement de production
        avec une base de données PostgreSQL hébergée sur Heroku
        <br />- hébergement de l'application sur Heroku.
      </p>
    ),
  },
  {
    overview: "/static/diary-todos.png",
    title: "Journal d'une Todo",
    subtitle:
      "Javascript - ReactJs - Redux - Firebase - Firestore - Formik - Yup - Styled Components - PropTypes",
    linkWebSite: "https://diary-todo.netlify.app/",
    linkGithub: "https://github.com/Zesysy/todo-list-react",
    description: (
      <p>
        Application de gestion de tâches :<br />
        - création de composants styliser avec Styled Components (création de
        variable de couleur, condition d'affichage en fonction des propriétés
        récupérées...)
        <br />
        - gestions de formulaires et validation des entrées avec Formik et Yup
        <br />
        - mise en place et gestion d'une authentification avec Firebase,
        Firestore, Redux et les librairies permettant de les lier plus
        facilement comme React-Redux-Firebase (création/modification/suppression
        de profil, vérification d'email, récupération de mot de passe...)
        <br />
        - gestion des routes en fonction de la connexion de l'utilisateur
        <br />
        - récupération / création / modification / suppresion de tâches.
        <br />
      </p>
    ),
  },

  {
    overview: "/static/blog.png",
    title: "Charlie's Angels",
    subtitle: "Java - Spring - Jdbc - MySql - Thymeleaf - Bootstrap",
    linkWebSite: "https://btz-java-2003-pjt1-blog.javarover.wilders.dev/",
    linkGithub: "https://github.com/Zesysy/projet_blog",
    description: (
      <p>
        Projet de formation avec mise en situation auprès d'un client fictif.
        Celui-ci souhaitait avoir un blog rose avec des licornes (oui oui !), où
        il pourrait créer des articles (CRUD).
        <br />
        Réalisation :<br />
        - modélisation et création de la Base de données (MySQL)
        <br />
        - récupération/création/modification/suppresion des articles
        <br />
        - affichage des articles par leur date de création
        <br />
        - ajout d'un filtre des articles par leurs catégories
        <br />
        Ce projet a été réalisé en groupe de quatres personnes, en mode Agile,
        sur deux semaines.
      </p>
    ),
  },
  {
    overview: "/static/weather.png",
    title: "Application Météo",
    subtitle: "Javascript - VueJs - Fetch - MomentJs",
    linkWebSite: "https://appli-meteo.netlify.app/",
    linkGithub: "https://github.com/Zesysy/weather-app",
    description: (
      <p>
        ** Pensée uniquement mobile **
        <br /> Découverte de VueJs :<br />
        - utilisation de conditions affichage de variables dans les templates
        <br />
        - appeler des données depuis une Api
        <br />- créer et utiliser des fonctions ou des librairies externes
        (MomentJs).
      </p>
    ),
  },
  {
    overview: "/static/movie.png",
    title: "Lovely Movie",
    subtitle: "Javascript - ReactJs - Bootstrap - PropTypes - Fetch",
    linkWebSite: "https://lovely-movie.netlify.com/",
    linkGithub: "https://github.com/Zesysy/movie-search",
    description: (
      <p>
        Recherche de film :<br />
        - connexion à l'Api afin de retrouver les films par leur nom
        <br />- utilisation des hooks afin de gérer l'état de l'application, la
        récupération des données ou l'affichage d'erreurs.
      </p>
    ),
  },
  {
    overview: "/static/audiowizard.jpeg",
    title: "AudioWizard",
    subtitle:
      "Javascript - ReactJs - Bootstrap - Axios - PropTypes - Php - Symphony - Api Platform - MomentJs",
    linkWebSite: "https://app.audiowizard.fr/#/",
    description: (
      <p>
        Lors de mon stage, nous avons travaillé à la création d'une application
        Web qui serait un outil de suivi de patients d'audioprothésistes.
        <br />
        Ma mission était de :<br />
        - générer les vues en me basant sur le wireframe et en respectant la
        charte graphique
        <br />
        - prévoir une utilisation en mode tablette et bureau
        <br />
        - mettre en place le contexte de ReactJs qui nous permettrait
        d'enregistrer un nouvel audioprothésiste, un nouveau patient et de faire
        évoluer son statut de prise en charge
        <br />
        - connecter l'application à notre Api pour permettre des requêtes
        (Axios) à celle-ci et la gestion des données utilisateurs ou patients
        <br />
        - permettre la modification de compte-rendu (CKEditor) déjà pré remplis
        avec les données récupérées sur l'Api, le but étant à terme de les
        envoyer par email
        <br />
        Tout cela en respectant le Règlement à la Protection de la Donnée
        <br />
        Le site, qui a évolué depuis, est accessible mais nécessite d'avoir un
        code utilisateur.
      </p>
    ),
  },
  {
    overview: "/static/izanamiWeb-overview.png",
    title: "Izanami Web",
    subtitle:
      "Javascript - ReactJs - Redux - NodeJs - ReduxForm - ReactPdf - Axios - Bootstrap",
    linkWebSite: "/static/izanamiWeb.png",
    description: (
      <p>
        Projet de formation avec client réel, Investoweb.
        <br />
        Il souhaitait proposait un nouvel outil de travail, plus ergonomique que
        celui utilisé, à un de leur collaborateur, une entreprise de pompes
        funèbres.
        <br />
        Réalisation :<br />
        - compréhension de l'outil existant afin de reproduire ses
        fonctionnalités
        <br />
        - récupération de toutes les entrées du premier logiciel (nom des
        familles, du défunt, du véhicule de transport...)
        <br />
        - réalisation d'un visuel épuré et ergonomique, respectant leur charte
        graphique
        <br />
        - création de formulaires avec ReduxForm
        <br />
        - utilisation de ReactPdf afin d'alimenter des documents avec les
        données entrées dans les formulaires
        <br />
        - téléchargement et impression de ses documents
        <br />- création des routes qui permettront à terme récupérer ces
        éléments sur la base de données du client
        <br />
        Projet privé, non déployé (aperçu disponible), et réalisé en groupe de
        cinq personnes, en mode Agile, sur huit semaines.
      </p>
    ),
  },
  {
    overview: "/static/wow.png",
    title: "WoW Search",
    subtitle: "Javascript - ReactJs - Axios - Bootstrap",
    linkWebSite: "https://wow-search-engine.netlify.com/",
    linkGithub: "https://github.com/Zesysy/WoW-Search-Engine",
    description: (
      <p>
        Projet de formation avec mise en situation auprès d'un client fictif. Il
        souhaitait retrouver plus facilement les données de ses personnages du
        jeu World Of Warcraft que les solutions existantes.
        <br />
        Réalisation :<br />
        - réalisation d'un moteur de recherche
        <br />
        - requête (Axios) à une Api recensant tous les personnages et leur
        données, Raider.io, en renseignant la région du joueur, le royaume où
        évolue le personnage et le nom de ce dernier (ex : EU, Hyjal, Raquette)
        <br />
        - affichage des Raids et Dongeons réalisés sous forme de barre de
        progression
        <br />- ajout d'un top cinq des meilleurs joueurs
        <br />
        Projet réalisé en groupe de trois personnes, en mode Agile, sur cinq
        semaines.
      </p>
    ),
  },
  {
    overview: "/static/wild-circus.png",
    title: "WildCircus",
    subtitle: "HTML5 - CSS3",
    linkWebSite: "https://zesysy.github.io/wildCircus/",
    linkGithub: "https://github.com/Zesysy/wildCircus",
    description: (
      <p>
        Projet d'admission à la Wild Code School. Je devais réaliser un site en
        respectant le thème (du cirque) et une liste de recommandations.
        <br />
        Mes premiers pas dans le monde du web, ma toute première réalisation, un
        témoin de mon évolution en si peu de temps !
      </p>
    ),
  },
];
