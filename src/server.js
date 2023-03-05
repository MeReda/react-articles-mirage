import { createServer, Model } from "miragejs";

createServer({
  models: {
    articles: Model,
  },

  seeds(server) {
    server.create("article", {
      id: 1,
      title: "Article 1",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.

      One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.
      
      In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.
      
      Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      image: "img 1",
      date: "2023-02-01",
    });
    server.create("article", {
      id: 2,
      title: "Article 2",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.

      One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.
      
      In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.
      
      Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      image: "img 2",
      date: "2023-02-02",
    });
    server.create("article", {
      id: 3,
      title: "Article 3",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.

      One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.
      
      In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.
      
      Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      image: "img 3",
      date: "2023-02-03",
    });
    server.create("article", {
      id: 4,
      title: "Article 4",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.

      One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.
      
      In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.
      
      Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      image: "img 4",
      date: "2023-02-04",
    });
    server.create("article", {
      id: 5,
      title: "Article 5",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.

      One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.
      
      In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.
      
      Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      image: "img 5",
      date: "2023-02-05",
    });
    server.create("article", {
      id: 6,
      title: "Article 6",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.

      One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.
      
      In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.
      
      Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      image: "img 6",
      date: "2023-02-06",
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
  },
});
