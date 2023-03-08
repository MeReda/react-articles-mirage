import { createServer, Model } from "miragejs";

createServer({
  models: {
    articles: Model,
    evenements: Model,
  },

  seeds(server) {
    server.create("article", {
      id: 1,
      title: "Article 1",
      body: `MirageJS est une bibliothèque open-source puissante et polyvalente qui permet aux développeurs de construire, de tester et de partager facilement et rapidement des API fictives. Elle fournit une API simple et intuitive pour définir des itinéraires, traiter des requêtes et générer des données fictives, ce qui en fait un outil idéal pour les développeurs frontend qui souhaitent travailler indépendamment de l'équipe backend ou pour les développeurs qui veulent simuler différents scénarios dans leurs environnements de test. L'un des avantages significatifs de MirageJS est qu'il permet aux développeurs de simuler les réponses du serveur, de tester le code côté client et de prototyper de nouvelles fonctionnalités sans avoir besoin d'un véritable backend. Cela en fait un outil précieux pour les développeurs qui veulent créer ou itérer leurs applications rapidement, car ils peuvent utiliser MirageJS pour simuler différents scénarios de données sans avoir besoin de se connecter à un backend en direct. En plus de sa fonctionnalité de base, MirageJS propose également une gamme de plugins et d'addons qui étendent encore davantage ses capacités, y compris la prise en charge de GraphQL et de WebSockets. Cela signifie que les développeurs peuvent utiliser MirageJS pour construire des applications plus complexes et plus puissantes qui s'intègrent à une gamme de sources de données différentes. Dans l'ensemble, MirageJS est un outil essentiel pour le développement web moderne, offrant aux développeurs un moyen flexible et puissant de construire et de tester des API de manière rapide et efficace`,
      image: "img 1",
      date: "2023-02-01",
    });
    server.create("article", {
      id: 2,
      title: "Article 2",
      body: `La bibliothèque MirageJS est open-source et polyvalente qui permet aux développeurs de construire, tester et partager rapidement des API fictives. Son API intuitive pour définir des itinéraires, traiter des requêtes et générer des données fictives en fait un outil précieux pour les développeurs frontend qui souhaitent travailler indépendamment de l'équipe backend ou simuler différents scénarios dans leurs environnements de test.Un avantage significatif de MirageJS est sa capacité à simuler les réponses du serveur, tester le code côté client et prototyper de nouvelles fonctionnalités sans avoir besoin d'un véritable backend. Cela en fait un outil précieux pour les développeurs qui souhaitent créer ou itérer rapidement leurs applications, car ils peuvent utiliser MirageJS pour simuler différents scénarios de données sans avoir besoin de se connecter à un backend en direct.En plus de sa fonctionnalité de base, MirageJS propose également une gamme de plugins et d'addons qui étendent encore davantage ses capacités, notamment la prise en charge de GraphQL et de WebSockets. Cela signifie que les développeurs peuvent utiliser MirageJS pour construire des applications plus complexes et plus puissantes qui s'intègrent à une gamme de sources de données différentes.Dans l'ensemble, MirageJS est un outil essentiel pour le développement web moderne, offrant aux développeurs un moyen flexible et puissant de construire et de tester des API de manière rapide et efficace.`,
      image: "img 2",
      date: "2023-02-02",
    });
    server.create("article", {
      id: 3,
      title: "Article 3",
      body: `MirageJS est une bibliothèque open-source polyvalente qui permet aux développeurs de construire, de tester et de partager facilement et rapidement des API fictives. Sa syntaxe intuitive pour définir des itinéraires, traiter des requêtes et générer des données fictives en fait un outil précieux pour les développeurs frontend souhaitant travailler de manière autonome par rapport à l'équipe backend ou pour simuler différents scénarios dans leurs environnements de test.Un avantage significatif de MirageJS est sa capacité à simuler les réponses du serveur, à tester le code côté client et à prototyper de nouvelles fonctionnalités sans avoir besoin d'un véritable backend. Cela en fait un outil précieux pour les développeurs qui souhaitent créer ou itérer rapidement leurs applications, car ils peuvent utiliser MirageJS pour simuler différents scénarios de données sans avoir besoin de se connecter à un backend en direct.En plus de sa fonctionnalité de base, MirageJS propose également une gamme de plugins et d'addons qui étendent encore davantage ses capacités, y compris la prise en charge de GraphQL et de WebSockets. Cela signifie que les développeurs peuvent utiliser MirageJS pour construire des applications plus complexes et plus puissantes qui s'intègrent à une gamme de sources de données différentes. Dans l'ensemble, MirageJS est un outil essentiel pour le développement web moderne, offrant aux développeurs un moyen flexible et puissant de construire et de tester des API de manière rapide et efficace.`,
      image: "img 3",
      date: "2023-02-03",
    });
    server.create("article", {
      id: 4,
      title: "Article 4",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      image: "img 4",
      date: "2023-02-04",
    });
    server.create("article", {
      id: 5,
      title: "Article 5",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      image: "img 5",
      date: "2023-02-05",
    });
    server.create("article", {
      id: 6,
      title: "Article 6",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      image: "img 6",
      date: "2023-02-06",
    });
    server.create("evenement", {
      id: 1,
      title: "Spring Fashion Week",
      date: "2023-04-15",
      location: "New York City, NY",
      description:
        "The Latest Trends and Styles showcased in a Spring Fashion Week",
      image: "Image 1",
    });
    server.create("evenement", {
      id: 2,
      title: "Music Festival",
      date: "2023-05-20",
      location: "London, UK",
      description: "Live Performances from Top Artists at a Music Festival",
      image: "Image 2",
    });
    server.create("evenement", {
      id: 3,
      title: "Tech Conference",
      date: "2023-06-10",
      location: "San Francisco, CA",
      description:
        "Keynote Speakers and Networking Opportunities at a Tech Conference",
      image: "Image 3",
    });
    server.create("evenement", {
      id: 4,
      title: "Anime Expo",
      date: "2023-07-05",
      location: "Tokyo, Japan",
      description:
        "Celebrating Japanese Animation and Pop Culture at an Anime Expo",
      image: "Image 4",
    });
    server.create("evenement", {
      id: 5,
      title: "Food and Juse Festival",
      date: "2023-08-15",
      location: "Sydney, Australia",
      description:
        "Sample the Best Cuisine and Juses at a Food and Juse Festival",
      image: "Image 5",
    });
    server.create("evenement", {
      id: 6,
      title: "Carnival",
      date: "2023-09-23",
      location: "Rio de Janeiro, BR",
      description:
        "A Spectacular Display of Music, Dance, and Costumes at Carnival",
      image: "Image 6",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/articles", (schema, request) => {
      return schema.articles.all();
    });

    this.get("/articles/:id", (schema, request) => {
      const id = request.params.id;
      return schema.articles.find(id);
    });

    this.get("/evenements", (schema, request) => {
      return schema.evenements.all();
    });

    this.get("/evenements/:id", (schema, request) => {
      const id = request.params.id;
      return schema.evenements.find(id);
    });
  },
});
