export const items = [
  {
    title: "Journal d'une Todo",
    subtitle:
      "Javascript - ReactJs - Redux - Firebase - Firestore - Formik - Yup",
    link: "https://diary-todo.netlify.app/",
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
        - récupération/création/modification/suppresion de tâches.
        <br />
      </p>
    ),
  },
  {
    title: "Follow The Map",
    subtitle:
      "Java - Spring - Jpa - Hibernate - PostgresSql - Thymeleaf - MapBox - Javascript",
    link: "/static/followTheMap.png",
    description: (
      <p>
        Projet de formation avec clients réels, Follow The Market.
        <br />
        Ils souhaitaient intégrer à leur solution existante une carte qui
        permettrait la visualiation des données de leur client.
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
        - création d'une base de données sur AWS avec PostgresSql pour permettre
        la sauvegarde des paramètres d'une carte (latitude et longitude d'un
        point, le zoom, et un style)
        <br />
        - ajout d'un formulaire pour permettre la sauvegarde de ces paramètres.
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
    title: "Charlie's Angels",
    subtitle: "Java - Spring - Jdbc - MySql - Thymeleaf",
    link: "https://btz-java-2003-pjt1-blog.javarover.wilders.dev/",
    description: (
      <p>
        Projet de formation avec mise en situation auprès d'un client fictif.
        Celui-ci souhaitait avoir un blog rose avec des licornes (oui oui !), où
        il pourrait créer des articles (CRUD).
        <br />
        Réalisation :<br />
        - modélisation et création de la Base de données (Mysql)
        <br />
        - récupération/création/modification/suppresion des articles
        <br />
        - affichage des articles par leur date de création
        <br />- ajout d'un filtre des articles par leur catégories.
        <br />
        Ce projet a été réalisé en groupe de quatres personnes, en mode Agile,
        sur deux semaines.
      </p>
    ),
  },
  {
    title: "Application Météo",
    subtitle: "Javascript - VueJs - MomentJs",
    link: "https://appli-meteo.netlify.app/",
    description: (
      <p>
        Découverte de VueJs :<br />
        - utilisation de conditions affichage de variables dans les templates
        <br />
        - appeler des données depuis une Api
        <br />- créer et utiliser des fonctions ou des librairies externes
        (MomentJs).
      </p>
    ),
  },
  {
    title: "Lovely Movie",
    subtitle: "Javascript - ReactJs",
    link: "https://lovely-movie.netlify.com/",
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
    title: "AudioWizard",
    subtitle: "Javascript - ReactJs - Php - Symphony - Api Platform - MomentJs",
    link: "https://app.audiowizard.fr/#/",
    description: (
      <p>
        Lors de mon stage, nous avons travaillé à la création d'une application
        Web qui serait un outils de suivi de patients d'audioprothésistes.
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
        - permettre la modification de compte-rendu (CKEditor) déjà pré-remplis
        avec les données récupérées sur l'Api, le but étant à terme de les
        envoyer par email
        <br />
        Tout cela en respectant le Règlement à la Protection de la Donnée
        <br />
        Le site, qui a évolué depuis, est accessible mais nécessite d'avoir un
        code d'authentification.
      </p>
    ),
  },
  {
    title: "Izanami Web",
    subtitle: "Javascript - ReactJs - NodeJs - ReduxForm -ReactPdf",
    link: "/static/izanamiWeb.png",
    description: (
      <p>
        Projet de formation avec client réel, Investoweb.
        <br />
        Il souhaitait proposait un nouvel outils de travail, plus ergonomique
        que celui utilisé, à un de leur collaborateur, une entreprise de pompes
        funèbres.
        <br />
        Réalisation :<br />
        - compréhension de l'outils existant afin de reproduire ses
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
        éléments sur la base de données du client.
        <br />
        Projet privé, non déployé (aperçu disponible), et réalisé en groupe de
        cinq personnes, en mode Agile, sur huit semaines.
      </p>
    ),
  },
  {
    title: "WoW Search",
    subtitle: "Javascript - ReactJs",
    link: "https://wow-search-engine.netlify.com/",
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
        <br />- ajout d'un top cinq des meilleurs joueurs.
        <br />
        Projet réalisé en groupe de trois personnes, en mode Agile, sur cinq
        semaines.
      </p>
    ),
  },
  {
    title: "WildCircus",
    subtitle: "HTML5 - CSS3",
    link: "https://zesysy.github.io/wildCircus/",
    description: (
      <p>
        Projet d'amission à la Wild Code School. Je devais réaliser un site en
        respectant le thème (du cirque) et une liste de recommandations.
        <br />
        Mes premiers pas dans le monde du web, ma toute première réalisation, un
        témoin de mon évolution en si peu de temps !
      </p>
    ),
  },
];
