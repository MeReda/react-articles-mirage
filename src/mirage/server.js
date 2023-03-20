import { createServer, Model, Response } from "miragejs";

createServer({
  models: {
    articles: Model,
    evenements: Model,
    annonces: Model,
  },

  seeds(server) {
    server.create("article", {
      id: 1,
      title: "Article 1",
      body: `MirageJS est une bibliothèque open-source puissante et polyvalente qui permet aux développeurs de construire, de tester et de partager facilement et rapidement des API fictives. Elle fournit une API simple et intuitive pour définir des itinéraires, traiter des requêtes et générer des données fictives, ce qui en fait un outil idéal pour les développeurs frontend qui souhaitent travailler indépendamment de l'équipe backend ou pour les développeurs qui veulent simuler différents scénarios dans leurs environnements de test. L'un des avantages significatifs de MirageJS est qu'il permet aux développeurs de simuler les réponses du serveur, de tester le code côté client et de prototyper de nouvelles fonctionnalités sans avoir besoin d'un véritable backend. Cela en fait un outil précieux pour les développeurs qui veulent créer ou itérer leurs applications rapidement, car ils peuvent utiliser MirageJS pour simuler différents scénarios de données sans avoir besoin de se connecter à un backend en direct. En plus de sa fonctionnalité de base, MirageJS propose également une gamme de plugins et d'addons qui étendent encore davantage ses capacités, y compris la prise en charge de GraphQL et de WebSockets. Cela signifie que les développeurs peuvent utiliser MirageJS pour construire des applications plus complexes et plus puissantes qui s'intègrent à une gamme de sources de données différentes. Dans l'ensemble, MirageJS est un outil essentiel pour le développement web moderne, offrant aux développeurs un moyen flexible et puissant de construire et de tester des API de manière rapide et efficace`,
      title_ar: "مقال 1",
      body_ar: `MirageJS هي مكتبة مفتوحة المصدر قوية ومتعددة الاستخدامات تسمح للمطورين بإنشاء واختبار ومشاركة واجهات برمجة تطبيقات وهمية بسهولة وسرعة. توفر واجهة برمجة التطبيقات بسيطة وبديهية لتحديد المسارات ومعالجة الطلبات وإنشاء بيانات وهمية، مما يجعلها أداة مثالية لمطوري الواجهة الأمامية الذين يرغبون في العمل بشكل مستقل عن فريق الخادم أو لمطورين يرغبون في محاكاة سيناريوهات مختلفة في بيئات الاختبار الخاصة بهم. واحدة من المزايا الكبيرة لـ MirageJS هي أنها تسمح للمطورين بمحاكاة استجابات الخادم واختبار رمز العميل ونمذجة الميزات الجديدة دون الحاجة إلى خادم حقيقي. هذا يجعلها أداة قيمة للمطورين الذين يرغبون في إنشاء أو تحسين تطبيقاتهم بسرعة، حيث يمكنهم استخدام MirageJS لمحاكاة سيناريوهات بيانات مختلفة دون الحاجة إلى الاتصال بخادم مباشر. بالإضافة إلى وظيفتها الأساسية، توفر MirageJS مجموعة من الوظائف الإضافية والإضافات التي توسع قدراتها بشكل أكبر، بما في ذلك دعم GraphQL و WebSockets. وهذا يعني أن المطورين يمكنهم استخدام MirageJS لبناء تطبيقات أكثر تعقيدًا وقوة تتكامل مع مجموعة متنوعة من مصادر البيانات المختلفة. بشكل عام، يعد MirageJS أداة أساسية لتطوير الويب الحديث، حيث يوفر للمطورين طريقة مرنة وقوية لبناء واختبار واجهات برمجة التطب`,
      image: "img 1",
      date: "2023-02-01",
    });
    server.create("article", {
      id: 2,
      title: "Article 2",
      body: `La bibliothèque MirageJS est open-source et polyvalente qui permet aux développeurs de construire, tester et partager rapidement des API fictives. Son API intuitive pour définir des itinéraires, traiter des requêtes et générer des données fictives en fait un outil précieux pour les développeurs frontend qui souhaitent travailler indépendamment de l'équipe backend ou simuler différents scénarios dans leurs environnements de test.Un avantage significatif de MirageJS est sa capacité à simuler les réponses du serveur, tester le code côté client et prototyper de nouvelles fonctionnalités sans avoir besoin d'un véritable backend. Cela en fait un outil précieux pour les développeurs qui souhaitent créer ou itérer rapidement leurs applications, car ils peuvent utiliser MirageJS pour simuler différents scénarios de données sans avoir besoin de se connecter à un backend en direct.En plus de sa fonctionnalité de base, MirageJS propose également une gamme de plugins et d'addons qui étendent encore davantage ses capacités, notamment la prise en charge de GraphQL et de WebSockets. Cela signifie que les développeurs peuvent utiliser MirageJS pour construire des applications plus complexes et plus puissantes qui s'intègrent à une gamme de sources de données différentes.Dans l'ensemble, MirageJS est un outil essentiel pour le développement web moderne, offrant aux développeurs un moyen flexible et puissant de construire et de tester des API de manière rapide et efficace.`,
      title_ar: "مقال 2",
      body_ar: `MirageJS هي مكتبة مفتوحة المصدر قوية ومتعددة الاستخدامات تسمح للمطورين بإنشاء واختبار ومشاركة واجهات برمجة تطبيقات وهمية بسهولة وسرعة. توفر واجهة برمجة التطبيقات بسيطة وبديهية لتحديد المسارات ومعالجة الطلبات وإنشاء بيانات وهمية، مما يجعلها أداة مثالية لمطوري الواجهة الأمامية الذين يرغبون في العمل بشكل مستقل عن فريق الخادم أو لمطورين يرغبون في محاكاة سيناريوهات مختلفة في بيئات الاختبار الخاصة بهم. واحدة من المزايا الكبيرة لـ MirageJS هي أنها تسمح للمطورين بمحاكاة استجابات الخادم واختبار رمز العميل ونمذجة الميزات الجديدة دون الحاجة إلى خادم حقيقي. هذا يجعلها أداة قيمة للمطورين الذين يرغبون في إنشاء أو تحسين تطبيقاتهم بسرعة، حيث يمكنهم استخدام MirageJS لمحاكاة سيناريوهات بيانات مختلفة دون الحاجة إلى الاتصال بخادم مباشر. بالإضافة إلى وظيفتها الأساسية، توفر MirageJS مجموعة من الوظائف الإضافية والإضافات التي توسع قدراتها بشكل أكبر، بما في ذلك دعم GraphQL و WebSockets. وهذا يعني أن المطورين يمكنهم استخدام MirageJS لبناء تطبيقات أكثر تعقيدًا وقوة تتكامل مع مجموعة متنوعة من مصادر البيانات المختلفة. بشكل عام، يعد MirageJS أداة أساسية لتطوير الويب الحديث، حيث يوفر للمطورين طريقة مرنة وقوية لبناء واختبار واجهات برمجة التطب`,
      image: "img 2",
      date: "2023-02-02",
    });
    server.create("article", {
      id: 3,
      title: "Article 3",
      body: `MirageJS est une bibliothèque open-source polyvalente qui permet aux développeurs de construire, de tester et de partager facilement et rapidement des API fictives. Sa syntaxe intuitive pour définir des itinéraires, traiter des requêtes et générer des données fictives en fait un outil précieux pour les développeurs frontend souhaitant travailler de manière autonome par rapport à l'équipe backend ou pour simuler différents scénarios dans leurs environnements de test.Un avantage significatif de MirageJS est sa capacité à simuler les réponses du serveur, à tester le code côté client et à prototyper de nouvelles fonctionnalités sans avoir besoin d'un véritable backend. Cela en fait un outil précieux pour les développeurs qui souhaitent créer ou itérer rapidement leurs applications, car ils peuvent utiliser MirageJS pour simuler différents scénarios de données sans avoir besoin de se connecter à un backend en direct.En plus de sa fonctionnalité de base, MirageJS propose également une gamme de plugins et d'addons qui étendent encore davantage ses capacités, y compris la prise en charge de GraphQL et de WebSockets. Cela signifie que les développeurs peuvent utiliser MirageJS pour construire des applications plus complexes et plus puissantes qui s'intègrent à une gamme de sources de données différentes. Dans l'ensemble, MirageJS est un outil essentiel pour le développement web moderne, offrant aux développeurs un moyen flexible et puissant de construire et de tester des API de manière rapide et efficace.`,
      title_ar: "مقال 3",
      body_ar: `MirageJS هي مكتبة مفتوحة المصدر قوية ومتعددة الاستخدامات تسمح للمطورين بإنشاء واختبار ومشاركة واجهات برمجة تطبيقات وهمية بسهولة وسرعة. توفر واجهة برمجة التطبيقات بسيطة وبديهية لتحديد المسارات ومعالجة الطلبات وإنشاء بيانات وهمية، مما يجعلها أداة مثالية لمطوري الواجهة الأمامية الذين يرغبون في العمل بشكل مستقل عن فريق الخادم أو لمطورين يرغبون في محاكاة سيناريوهات مختلفة في بيئات الاختبار الخاصة بهم. واحدة من المزايا الكبيرة لـ MirageJS هي أنها تسمح للمطورين بمحاكاة استجابات الخادم واختبار رمز العميل ونمذجة الميزات الجديدة دون الحاجة إلى خادم حقيقي. هذا يجعلها أداة قيمة للمطورين الذين يرغبون في إنشاء أو تحسين تطبيقاتهم بسرعة، حيث يمكنهم استخدام MirageJS لمحاكاة سيناريوهات بيانات مختلفة دون الحاجة إلى الاتصال بخادم مباشر. بالإضافة إلى وظيفتها الأساسية، توفر MirageJS مجموعة من الوظائف الإضافية والإضافات التي توسع قدراتها بشكل أكبر، بما في ذلك دعم GraphQL و WebSockets. وهذا يعني أن المطورين يمكنهم استخدام MirageJS لبناء تطبيقات أكثر تعقيدًا وقوة تتكامل مع مجموعة متنوعة من مصادر البيانات المختلفة. بشكل عام، يعد MirageJS أداة أساسية لتطوير الويب الحديث، حيث يوفر للمطورين طريقة مرنة وقوية لبناء واختبار واجهات برمجة التطب`,
      image: "img 3",
      date: "2023-02-03",
    });
    server.create("article", {
      id: 4,
      title: "Article 4",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      title_ar: "مقال 4",
      body_ar: `MirageJS هي مكتبة مفتوحة المصدر قوية ومتعددة الاستخدامات تسمح للمطورين بإنشاء واختبار ومشاركة واجهات برمجة تطبيقات وهمية بسهولة وسرعة. توفر واجهة برمجة التطبيقات بسيطة وبديهية لتحديد المسارات ومعالجة الطلبات وإنشاء بيانات وهمية، مما يجعلها أداة مثالية لمطوري الواجهة الأمامية الذين يرغبون في العمل بشكل مستقل عن فريق الخادم أو لمطورين يرغبون في محاكاة سيناريوهات مختلفة في بيئات الاختبار الخاصة بهم. واحدة من المزايا الكبيرة لـ MirageJS هي أنها تسمح للمطورين بمحاكاة استجابات الخادم واختبار رمز العميل ونمذجة الميزات الجديدة دون الحاجة إلى خادم حقيقي. هذا يجعلها أداة قيمة للمطورين الذين يرغبون في إنشاء أو تحسين تطبيقاتهم بسرعة، حيث يمكنهم استخدام MirageJS لمحاكاة سيناريوهات بيانات مختلفة دون الحاجة إلى الاتصال بخادم مباشر. بالإضافة إلى وظيفتها الأساسية، توفر MirageJS مجموعة من الوظائف الإضافية والإضافات التي توسع قدراتها بشكل أكبر، بما في ذلك دعم GraphQL و WebSockets. وهذا يعني أن المطورين يمكنهم استخدام MirageJS لبناء تطبيقات أكثر تعقيدًا وقوة تتكامل مع مجموعة متنوعة من مصادر البيانات المختلفة. بشكل عام، يعد MirageJS أداة أساسية لتطوير الويب الحديث، حيث يوفر للمطورين طريقة مرنة وقوية لبناء واختبار واجهات برمجة التطب`,
      image: "img 4",
      date: "2023-02-04",
    });
    server.create("article", {
      id: 5,
      title: "Article 5",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      title_ar: "مقال 5",
      body_ar: `MirageJS هي مكتبة مفتوحة المصدر قوية ومتعددة الاستخدامات تسمح للمطورين بإنشاء واختبار ومشاركة واجهات برمجة تطبيقات وهمية بسهولة وسرعة. توفر واجهة برمجة التطبيقات بسيطة وبديهية لتحديد المسارات ومعالجة الطلبات وإنشاء بيانات وهمية، مما يجعلها أداة مثالية لمطوري الواجهة الأمامية الذين يرغبون في العمل بشكل مستقل عن فريق الخادم أو لمطورين يرغبون في محاكاة سيناريوهات مختلفة في بيئات الاختبار الخاصة بهم. واحدة من المزايا الكبيرة لـ MirageJS هي أنها تسمح للمطورين بمحاكاة استجابات الخادم واختبار رمز العميل ونمذجة الميزات الجديدة دون الحاجة إلى خادم حقيقي. هذا يجعلها أداة قيمة للمطورين الذين يرغبون في إنشاء أو تحسين تطبيقاتهم بسرعة، حيث يمكنهم استخدام MirageJS لمحاكاة سيناريوهات بيانات مختلفة دون الحاجة إلى الاتصال بخادم مباشر. بالإضافة إلى وظيفتها الأساسية، توفر MirageJS مجموعة من الوظائف الإضافية والإضافات التي توسع قدراتها بشكل أكبر، بما في ذلك دعم GraphQL و WebSockets. وهذا يعني أن المطورين يمكنهم استخدام MirageJS لبناء تطبيقات أكثر تعقيدًا وقوة تتكامل مع مجموعة متنوعة من مصادر البيانات المختلفة. بشكل عام، يعد MirageJS أداة أساسية لتطوير الويب الحديث، حيث يوفر للمطورين طريقة مرنة وقوية لبناء واختبار واجهات برمجة التطب`,
      image: "img 5",
      date: "2023-02-05",
    });
    server.create("article", {
      id: 6,
      title: "Article 6",
      body: `MirageJS is a powerful and versatile open-source library that enables developers to build, test, and share mock APIs easily and quickly. It provides a simple and intuitive API for defining routes, handling requests, and generating fake data, making it an ideal tool for frontend developers who want to work independently from the backend team or for developers who want to simulate different scenarios in their testing environments.One of the significant advantages of MirageJS is that it enables developers to simulate server responses, test client-side code, and prototype new features without needing a real backend. This makes it a valuable tool for developers who want to create or iterate their applications rapidly, as they can use MirageJS to simulate different data scenarios without the need to connect to a live backend.In addition to its core functionality, MirageJS also offers a range of plugins and addons that extend its capabilities further, including support for GraphQL and WebSockets. This means that developers can use MirageJS to build more complex and powerful applications that integrate with a range of different data sources.Overall, MirageJS is an essential tool for modern web development, providing developers with a flexible and powerful way to build and test APIs in a fast and efficient manner.`,
      title_ar: "مقال 6",
      body_ar: `MirageJS هي مكتبة مفتوحة المصدر قوية ومتعددة الاستخدامات تسمح للمطورين بإنشاء واختبار ومشاركة واجهات برمجة تطبيقات وهمية بسهولة وسرعة. توفر واجهة برمجة التطبيقات بسيطة وبديهية لتحديد المسارات ومعالجة الطلبات وإنشاء بيانات وهمية، مما يجعلها أداة مثالية لمطوري الواجهة الأمامية الذين يرغبون في العمل بشكل مستقل عن فريق الخادم أو لمطورين يرغبون في محاكاة سيناريوهات مختلفة في بيئات الاختبار الخاصة بهم. واحدة من المزايا الكبيرة لـ MirageJS هي أنها تسمح للمطورين بمحاكاة استجابات الخادم واختبار رمز العميل ونمذجة الميزات الجديدة دون الحاجة إلى خادم حقيقي. هذا يجعلها أداة قيمة للمطورين الذين يرغبون في إنشاء أو تحسين تطبيقاتهم بسرعة، حيث يمكنهم استخدام MirageJS لمحاكاة سيناريوهات بيانات مختلفة دون الحاجة إلى الاتصال بخادم مباشر. بالإضافة إلى وظيفتها الأساسية، توفر MirageJS مجموعة من الوظائف الإضافية والإضافات التي توسع قدراتها بشكل أكبر، بما في ذلك دعم GraphQL و WebSockets. وهذا يعني أن المطورين يمكنهم استخدام MirageJS لبناء تطبيقات أكثر تعقيدًا وقوة تتكامل مع مجموعة متنوعة من مصادر البيانات المختلفة. بشكل عام، يعد MirageJS أداة أساسية لتطوير الويب الحديث، حيث يوفر للمطورين طريقة مرنة وقوية لبناء واختبار واجهات برمجة التطب`,
      image: "img 6",
      date: "2023-02-06",
    });

    server.create("evenement", {
      id: 1,
      title: "Spring Fashion Week",
      title_ar: "أسبوع الموضة الربيعي",
      date: "2023-04-15",
      location: "New York City, NY",
      location_ar: "مدينة نيويورك، نيويورك",
      description:
        "The Latest Trends and Styles showcased in a Spring Fashion Week",
      description_ar:
        "آخر صيحات الموضة والأساليب المعروضة في أسبوع الموضة الربيعي",
      image: "Image 1",
    });
    server.create("evenement", {
      id: 2,
      title: "Music Festival",
      title_ar: "مهرجان الموسيقى",
      date: "2023-05-20",
      location: "London, UK",
      location_ar: "لندن، المملكة المتحدة",
      description: "Live Performances from Top Artists at a Music Festival",
      description_ar: "عروض مباشرة من أفضل الفنانين في مهرجان الموسيقى",
      image: "Image 2",
    });

    server.create("evenement", {
      id: 3,
      title: "Tech Conference",
      title_ar: "مؤتمر التقنية",
      date: "2023-06-10",
      location: "San Francisco, CA",
      location_ar: "سان فرانسيسكو، كاليفورنيا",
      description:
        "Keynote Speakers and Networking Opportunities at a Tech Conference",
      description_ar: "متحدثون رئيسيون وفرص تواصل في مؤتمر التقنية",
      image: "Image 3",
    });

    server.create("evenement", {
      id: 4,
      title: "Anime Expo",
      title_ar: "معرض الأنمي",
      date: "2023-07-05",
      location: "Tokyo, Japan",
      location_ar: "طوكيو، اليابان",
      description:
        "Celebrating Japanese Animation and Pop Culture at an Anime Expo",
      description_ar:
        "احتفالٌ بالرسوم المتحركة اليابانية والثقافة الشعبية في معرض الأنمي",
      image: "Image 4",
    });

    server.create("evenement", {
      id: 5,
      title: "Food and Juse Festival",
      title_ar: "مهرجان الطعام والعصائر",
      date: "2023-08-15",
      location: "Sydney, Australia",
      location_ar: "سيدني، أستراليا",
      description:
        "Sample the Best Cuisine and Juses at a Food and Juse Festival",
      description_ar: "تذوق أفضل المأكولات والعصائر في مهرجان الطعام والعصائر",
      image: "Image 5",
    });

    server.create("evenement", {
      id: 6,
      title: "Carnival",
      title_ar: "كرنفال",
      date: "2023-09-23",
      location: "Rio de Janeiro, BR",
      location_ar: "ريو دي جانيرو، البرازيل",
      description:
        "A Spectacular Display of Music, Dance, and Costumes at Carnival",
      description_ar: "عرض رائع للموسيقى والرقص والأزياء في كرنفال",
      image: "Image 6",
    });
    server.create("annonce", {
      id: 1,
      title: "Annonce 1",
      title_ar: "إعلان 1",
      body: " MirageJS est une bibliothèque open-source puissante et polyvalente qui permet aux développeurs de construire, de tester et de partager facilement et rapidement des API fictives.",
      body_ar:
        "ميراج جي إس هي مكتبة مفتوحة المصدر قوية ومتعددة الاستخدامات تتيح للمطورين إنشاء واختبار ومشاركة واجهات برمجية وهمية بسهولة وسرعة.",
      image: "img 1",
      date: "2023-02-01",
    });
    server.create("annonce", {
      id: 2,
      title: "Annonce 2",
      title_ar: "إعلان 2",
      body: "La bibliothèque MirageJS est open-source et polyvalente qui permet aux développeurs de construire, tester et partager rapidement des API fictives.",
      body_ar:
        "ميراج جي إس هي مكتبة مفتوحة المصدر قوية ومتعددة الاستخدامات تتيح للمطورين إنشاء واختبار ومشاركة واجهات برمجية وهمية بسهولة وسرعة.",
      image: "img 2",
      date: "2023-02-02",
    });
    server.create("annonce", {
      id: 3,
      title: "Annonce 3",
      title_ar: "إعلان 3",
      body: "La bibliothèque MirageJS est open-source et polyvalente qui permet aux développeurs de construire, tester et partager rapidement des API fictives.",
      body_ar:
        "ميراج جي إس هي مكتبة مفتوحة المصدر قوية ومتعددة الاستخدامات تتيح للمطورين إنشاء واختبار ومشاركة واجهات برمجية وهمية بسهولة وسرعة.",
      image: "img 3",
      date: "2023-02-02",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/articles", (schema, request) => {
      return new Response(404, {}, { error: "Error fetching data" });
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

    this.get("/annonces", (schema, request) => {
      return schema.annonces.all();
    });

    this.get("/annonces/:id", (schema, request) => {
      const id = request.params.id;
      return schema.annonces.find(id);
    });
  },
});
