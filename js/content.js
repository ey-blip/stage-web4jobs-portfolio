/**
 * ==============================================================================
 * PROJET DE STAGE — AYA JEDDI
 * FICHIER DE CONTENU ÉDITABLE (js/content.js)
 * ==============================================================================
 * Ce fichier regroupe l'ENSEMBLE des données textuelles et configurables du site.
 * Pour personnaliser votre présentation ou compléter les sections :
 * 1. Modifiez les valeurs des propriétés ci-dessous.
 * 2. Les éléments non renseignés affichent la mention standard : "[À compléter]".
 * 3. Ne modifiez pas la structure des clés d'objets pour préserver l'affichage.
 * ==============================================================================
 */

window.CONTENT = {
  // Identité de l'étudiante
  identity: {
    name: "Aya Jeddi",
    title: "Mon expérience de stage chez Web4Jobs",
    subtitle: "Conception pédagogique • Création de cours • Activités interactives • Quiz",
    academicProfile: [
      "Master Technologies Éducatives et Innovation Pédagogique (TEIP)",
      "Master Dispositifs Numériques Éducatifs (DNE)"
    ],
    presentationSummary: "Une expérience au croisement des technologies éducatives, de la conception pédagogique et de la création de ressources numériques.",
    internshipDates: "[À compléter]",
    photoPlaceholderText: "[À compléter]",
    photoAlt: "Photo personnelle — à remplacer",
    portfolioUrl: "#", // <!-- À COMPLÉTER : remplacer # par le lien réel de l'e-portfolio -->
    portfolioButtonText: "Voir mon e-portfolio"
  },

  // Section 2 — Stage en quelques mots
  stage: {
    title: "Mon stage en quelques mots",
    intro: "Ce stage a constitué une opportunité concrète de mettre en pratique les apports théoriques des technologies éducatives et de l'ingénierie pédagogique au sein d'un environnement professionnel.",
    cards: [
      {
        id: "conception-pedagogique",
        number: "01",
        title: "Conception pédagogique",
        summary: "Alignement constructif des objectifs d'apprentissage et des modalités pédagogiques.",
        details: "Définition d'objectifs pédagogiques précis, formulation des compétences visées et élaboration de stratégies adaptées aux profils des apprenants pour garantir un apprentissage progressif et efficace."
      },
      {
        id: "structuration-contenus",
        number: "02",
        title: "Structuration des contenus",
        summary: "Découpage modulaire et séquençage logique des parcours d'apprentissage.",
        details: "Organisation des connaissances en modules digestes et hiérarchisés, favorisant la charge cognitive optimale et facilitant la navigation autonome au sein des modules de cours."
      },
      {
        id: "creation-cours",
        number: "03",
        title: "Création de cours numériques",
        summary: "Scénarisation et conception de supports d'apprentissage interactifs.",
        details: "Élaboration de trames de cours engageantes combinant apports notionnels, illustrations concrètes et points de synthèse pour consolider l'assimilation des concepts clés."
      },
      {
        id: "conception-activites",
        number: "04",
        title: "Conception d'activités pédagogiques",
        summary: "Mise en activité réflexive et pratique des apprenants.",
        details: "Conception d'exercices d'application, de mises en situation et de questions ouvertes invitant l'apprenant à mobiliser activement ses connaissances plutôt qu'à simplement consommer du contenu."
      },
      {
        id: "creation-quiz",
        number: "05",
        title: "Création de quiz",
        summary: "Évaluation formative immédiate avec feedbacks explicatifs.",
        details: "Conception de questionnaires à visée formative dotés de rétroactions constructives pour éclairer l'erreur, ancrer la mémorisation et permettre à chacun de mesurer sa progression."
      },
      {
        id: "reflexion-experience",
        number: "06",
        title: "Réflexion sur l'expérience d'apprentissage",
        summary: "Approche ergonomique et centrée sur les besoins réels de l'apprenant.",
        details: "Analyse continue des parcours sous l'angle de l'utilisabilité, de l'accessibilité et de la clarté pédagogique afin d'éliminer les irritants et de maximiser l'engagement."
      }
    ]
  },

  // Section 3 — Web4Jobs
  web4jobs: {
    title: "L'environnement professionnel : Web4Jobs",
    blocks: {
      organisation: {
        title: "Organisation",
        content: "Web4Jobs est une organisation spécialisée dans l'insertion professionnelle et la formation aux métiers du numérique.",
        status: "verified"
      },
      contexte: {
        title: "Contexte du stage",
        content: "[À compléter]",
        status: "placeholder"
      },
      role: {
        title: "Mon rôle",
        content: "[À compléter]",
        status: "placeholder"
      },
      objectifs: {
        title: "Objectifs principaux",
        content: "[À compléter]",
        status: "placeholder"
      }
    }
  },

  // Section 4 — Missions & Démarche
  missions: {
    title: "Mon rôle pendant le stage",
    workflowTitle: "Ma démarche de conception pédagogique",
    workflowSubtitle: "Cette méthodologie en six étapes formalise ma démarche d'ingénierie pédagogique et ne constitue pas une liste exhaustive de tâches contractuelles.",
    workflowSteps: [
      {
        step: 1,
        name: "Analyser",
        description: "Comprendre l'objectif d'apprentissage et les besoins de l'apprenant.",
        details: "Identification des prérequis, ciblage des difficultés prévisibles et analyse du contexte de formation pour asseoir des fondations solides."
      },
      {
        step: 2,
        name: "Concevoir",
        description: "Planifier la structure pédagogique et les activités.",
        details: "Établissement du scénario pédagogique global, choix des stratégies didactiques et articulation entre temps théoriques et temps pratiques."
      },
      {
        step: 3,
        name: "Structurer",
        description: "Organiser le cours en sections et étapes cohérentes.",
        details: "Séquençage chronologique et thématique des unités d'apprentissage pour guider l'apprenant pas à pas sans surcharge cognitive."
      },
      {
        step: 4,
        name: "Produire",
        description: "Créer contenus, activités et quiz.",
        details: "Rédaction des synthèses notionnelles, conception des exercices d'entraînement et rédaction des feedbacks d'évaluation formative."
      },
      {
        step: 5,
        name: "Tester",
        description: "Vérifier clarté, utilisabilité et cohérence.",
        details: "Contrôle de la lisibilité des consignes, vérification des liens logiques et validation du parcours utilisateur avant diffusion."
      },
      {
        step: 6,
        name: "Améliorer",
        description: "Modifier selon les observations et les objectifs.",
        details: "Ajustement continu des contenus et des activités à partir des retours d'usage et des indicateurs de compréhension des apprenants."
      }
    ],
    realise: {
      title: "Ce que j'ai réalisé",
      subtitle: "Contributions pédagogiques au cours du stage",
      items: [
        "Conception pédagogique",
        "Structuration des cours",
        "Création d'activités",
        "Création de quiz",
        "Organisation des ressources",
        "[À compléter]"
      ]
    },
    appris: {
      title: "Ce que j'ai appris",
      subtitle: "Apports réflexifs et professionnels",
      items: [
        "Conception de parcours numériques",
        "Approche centrée sur l'apprenant",
        "Évaluation formative",
        "Création de ressources numériques",
        "Travail dans un contexte professionnel"
      ]
    },
    timeline: {
      title: "Parcours chronologique",
      subtitle: "Grandes étapes de la démarche au fil des semaines",
      steps: [
        {
          id: "decouverte",
          name: "Découverte",
          date: "[À compléter]",
          summary: "Prise de contact avec l'environnement de travail, les équipes et les projets éducatifs en cours."
        },
        {
          id: "analyse",
          name: "Analyse",
          date: "[À compléter]",
          summary: "Étude des publics cibles, des objectifs pédagogiques attendus et des contraintes formatives."
        },
        {
          id: "conception",
          name: "Conception",
          date: "[À compléter]",
          summary: "Élaboration des scénarios pédagogiques, définition des trames et structuration des modules."
        },
        {
          id: "production",
          name: "Production",
          date: "[À compléter]",
          summary: "Développement des contenus pédagogiques, création des activités interactives et des quiz formatifs."
        },
        {
          id: "tests",
          name: "Tests",
          date: "[À compléter]",
          summary: "Vérification de la clarté des consignes, de la cohérence globale et de l'ergonomie d'apprentissage."
        },
        {
          id: "amelioration",
          name: "Amélioration",
          date: "[À compléter]",
          summary: "Itérations et ajustements qualitatifs pour optimiser l'efficacité didactique et l'engagement."
        },
        {
          id: "bilan-timeline",
          name: "Bilan",
          date: "[À compléter]",
          summary: "Synthèse des acquis, formalisation des retours d'expérience et clôture de la mission de stage."
        }
      ]
    }
  },

  // Section 5 — Projet 1 : Aya Fire Recovery
  ayaFireRecovery: {
    title: "Projet 1 — Aya Fire Recovery",
    badge: "Dispositif Numérique Éducatif",
    projectUrl: "#", // <!-- À COMPLÉTER : remplacer # par le lien réel du projet -->
    projectButtonText: "Voir le projet",
    screenshotPlaceholder: "[Ajouter ici des captures d'écran du projet Aya Fire Recovery]",
    pedagogicalNotice: "Important : Mon rôle s'est articulé autour de l'ingénierie pédagogique et de la scénarisation. Le développement technique global relève de l'équipe technique.",
    tabs: [
      {
        id: "contexte",
        label: "Contexte",
        content: "[À compléter]"
      },
      {
        id: "objectif",
        label: "Objectif",
        content: "[À compléter]"
      },
      {
        id: "contribution",
        label: "Ma contribution pédagogique",
        content: "[À compléter]"
      },
      {
        id: "ressources",
        label: "Ressources créées",
        content: "[À compléter]"
      },
      {
        id: "appris",
        label: "Ce que j'ai appris",
        content: "[À compléter]"
      }
    ],
    chain: [
      {
        step: 1,
        name: "Contenu",
        description: "Sélection et vulgarisation didactique des connaissances fondamentales nécessaires aux apprenants.",
        role: "Cadrage pédagogique"
      },
      {
        step: 2,
        name: "Structure pédagogique",
        description: "Découpage en séquences progressives favorisant l'assimilation et le repérage autonome.",
        role: "Architecture de parcours"
      },
      {
        step: 3,
        name: "Activités",
        description: "Scénarisation d'exercices interactifs favorisant l'appropriation active des notions.",
        role: "Mise en pratique"
      },
      {
        step: 4,
        name: "Évaluation",
        description: "Création de points de contrôle formatifs pour valider l'acquisition des compétences cibles.",
        role: "Mesure des acquis"
      }
    ]
  },

  // Section 6 — Projet 2 : Oralis Academy
  oralisAcademy: {
    title: "Projet 2 — Oralis Academy",
    badge: "Préparation au Grand Oral",
    description: "Oralis Academy est un projet numérique éducatif dédié à la préparation du Grand Oral.",
    purpose: "Accompagner les apprenants dans la préparation, la structuration et la présentation de leur oral.",
    learnerJourneyTitle: "Parcours apprenant Oralis Academy",
    learnerJourney: [
      {
        step: 1,
        title: "Préparer",
        description: "Identifier ses thématiques, clarifier ses motivations et poser les fondations de son sujet.",
        focus: "Recherche & exploration"
      },
      {
        step: 2,
        title: "Structurer",
        description: "Organiser son plan d'intervention, articuler ses arguments et soigner les transitions.",
        focus: "Logique argumentative"
      },
      {
        step: 3,
        title: "S'entraîner",
        description: "Mettre en pratique sa prise de parole, minuter son discours et tester différentes formulations.",
        focus: "Répétition active"
      },
      {
        step: 4,
        title: "S'exprimer",
        description: "Travailler la voix, la posture corporelle, le regard et l'interaction avec l'auditoire.",
        focus: "Communication non verbale"
      },
      {
        step: 5,
        title: "Réussir",
        description: "Aborder l'épreuve avec confiance, sérénité et clarté le jour J face au jury.",
        focus: "Maîtrise & accomplissement"
      }
    ],
    pedagogicalAreasTitle: "Domaines pédagogiques abordés",
    pedagogicalAreas: [
      {
        id: "prep-oral",
        title: "Préparation de l'oral",
        details: "Méthodologie pour définir sa problématique, documenter son sujet et construire un fil conducteur solide et captivant."
      },
      {
        id: "org-idees",
        title: "Organisation des idées",
        details: "Techniques de hiérarchisation des arguments, d'élaboration de schémas logiques et de clarté rédactionnelle."
      },
      {
        id: "gest-stress",
        title: "Gestion du stress",
        details: "Exercices de respiration, préparation mentale et stratégies d'apaisement pour transformer l'appréhension en énergie positive."
      },
      {
        id: "gest-temps",
        title: "Gestion du temps",
        details: "Gestion précise du timing d'épreuve : introduction rythmée, développement équilibré et conclusion sans précipitation."
      },
      {
        id: "comm-jury",
        title: "Communication avec le jury",
        details: "Posture d'échange constructif, écoute active lors des questions et précision dans les réponses apportées."
      },
      {
        id: "argumentation",
        title: "Argumentation",
        details: "Construction de raisonnements convaincants appuyés sur des exemples probants et un vocabulaire adapté."
      }
    ],
    courseDesignTitle: "Conception des cours",
    courseDesignSubtitle: "Architecture pédagogique modulaire du dispositif Oralis Academy",
    coursePath: [
      {
        id: "intro",
        number: "Module 0",
        title: "Introduction",
        subtitle: "Comprendre les exigences et les critères d'évaluation de l'épreuve orale.",
        details: "[À compléter]"
      },
      {
        id: "cours-1",
        number: "Cours 1",
        title: "Construire son projet et préparer son oral",
        subtitle: "Choix de la problématique, collecte documentaire et scénarisation du propos.",
        details: "[À compléter]"
      },
      {
        id: "cours-2",
        number: "Cours 2",
        title: "Structurer son oral et développer son argumentation",
        subtitle: "Architecture du discours, plans types et enchaînements démonstratifs.",
        details: "[À compléter]"
      },
      {
        id: "cours-3",
        number: "Cours 3",
        title: "S'entraîner et se mettre en situation",
        subtitle: "Simulations pratiques, gestion des relances du jury et posture oratoire.",
        details: "[À compléter]"
      }
    ]
  },

  // Section 7 — Activités & Quiz
  activitiesAndQuiz: {
    title: "Activités & quiz",
    sectionNotice: "Cette section détaille les principes didactiques appliqués lors de la conception d'activités formatives et d'outils d'autoévaluation.",
    formatsTitle: "Conception des activités pédagogiques",
    formatsLabelSingle: "Exemple de format pédagogique",
    formatsCategoryLabel: "Exemples de formats pédagogiques",
    formatsCategoryNotice: "Ces formats illustrent différentes modalités didactiques possibles. Ils ne sont pas présentés comme des réalisations exhaustives de stage.",
    formats: [
      {
        id: "questions",
        name: "Questions",
        purpose: "Stimuler la réflexion préalable et encourager la formulation d'hypothèses personnelles."
      },
      {
        id: "quiz",
        name: "Quiz",
        purpose: "Vérifier la compréhension et permettre l'autoévaluation immédiate de l'apprenant."
      },
      {
        id: "exercices",
        name: "Exercices",
        purpose: "Mettre en pratique les notions théoriques au travers de tâches cadrées et progressives."
      },
      {
        id: "activites-reflexion",
        name: "Activités de réflexion",
        purpose: "Favoriser la prise de recul critique et l'intégration des concepts dans un cadre personnel."
      },
      {
        id: "mises-en-situation",
        name: "Mises en situation",
        purpose: "Mobiliser ses connaissances dans une situation proche du réel pour développer des compétences transposables."
      },
      {
        id: "autoevaluation",
        name: "Autoévaluation",
        purpose: "Permettre à l'apprenant de situer son niveau de maîtrise et d'identifier ses besoins d'approfondissement."
      },
      {
        id: "ressources-telechargeables",
        name: "Ressources téléchargeables",
        purpose: "Fournir des fiches mémos, grilles d'analyse et guides méthodologiques réutilisables hors ligne."
      }
    ],
    quizLogicTitle: "Création des quiz : la démarche formative",
    quizLogicSteps: [
      {
        step: 1,
        title: "Objectif d'apprentissage",
        desc: "Définir précisément la compétence ou la notion ciblée par l'évaluation."
      },
      {
        step: 2,
        title: "Question",
        desc: "Formuler un énoncé clair, sans piège inutile, ancré dans le contexte du cours."
      },
      {
        step: 3,
        title: "Réponse de l'apprenant",
        desc: "Permettre à l'apprenant d'exprimer son choix et de tester sa compréhension."
      },
      {
        step: 4,
        title: "Feedback explicatif",
        desc: "Fournir une justification immédiate explicitant pourquoi la réponse est juste ou erronée."
      },
      {
        step: 5,
        title: "Autoévaluation",
        desc: "Aider l'apprenant à réguler son propre apprentissage et à cibler ses révisions."
      }
    ],
    quizBenefitsTitle: "Bénéfices de l'évaluation formative",
    quizBenefits: [
      "Vérifier la compréhension en temps réel",
      "Favoriser l'autoévaluation et la métacognition",
      "Identifier précocement les difficultés et confusions",
      "Renforcer l'apprentissage par la rétroaction immédiate"
    ],
    mockup: {
      label: "Exemple de question — contenu à remplacer",
      questionText: "Quel est le rôle principal d'une évaluation formative dans un dispositif d'apprentissage en ligne ?",
      options: [
        {
          id: "opt-1",
          text: "Attribuer une note finale définitive sanctionnant l'ensemble du parcours.",
          isCorrect: false,
          feedback: "Incorrect : L'évaluation formative ne vise pas la certification finale, mais l'accompagnement de l'apprentissage."
        },
        {
          id: "opt-2",
          text: "Permettre à l'apprenant de mesurer ses acquis en continu et de bénéficier de rétroactions constructives.",
          isCorrect: true,
          feedback: "Exact : L'évaluation formative éclaire l'apprenant sur ses progrès, identifie ses lacunes et guide sa régulation cognitive."
        },
        {
          id: "opt-3",
          text: "Remplacer l'ensemble des contenus théoriques par des tests automatisés.",
          isCorrect: false,
          feedback: "Incorrect : L'évaluation formative complète et articule les contenus théoriques, elle ne les substitue pas."
        },
        {
          id: "opt-4",
          text: "Mesurer uniquement la vitesse de lecture des pages du cours.",
          isCorrect: false,
          feedback: "Incorrect : L'évaluation formative évalue la compréhension conceptuelle et l'assimilation pédagogique, non la vitesse de défilement."
        }
      ]
    },
    comparisonTitle: "Rendre l'apprentissage plus interactif",
    comparisonSubtitle: "Passer d'une posture de spectateur passif à celle d'acteur engagé dans sa formation",
    comparison: {
      classique: {
        title: "Contenu classique",
        badge: "Modèle transmissif passif",
        steps: ["Lire", "Regarder"],
        description: "L'apprenant consulte un support linéaire sans engagement cognitif profond ni rétroaction active."
      },
      interactif: {
        title: "Apprentissage interactif",
        badge: "Modèle socioconstructiviste actif",
        steps: ["Lire", "Réfléchir", "Répondre", "Pratiquer", "Recevoir un feedback"],
        description: "L'apprenant mobilise activement ses facultés réflexives, expérimente et ajuste ses représentations grâce aux rétroactions."
      }
    },
    pedagogicalWorkflowTitle: "Ma démarche de conception pédagogique",
    pedagogicalWorkflowSubtitle: "Du cadrage initial à l'évaluation formative",
    verticalWorkflow: [
      {
        step: 1,
        title: "Objectifs pédagogiques",
        description: "Définition précise des compétences cibles selon la taxonomie d'apprentissage appropriée."
      },
      {
        step: 2,
        title: "Public cible",
        description: "Analyse des profils apprenants, de leurs besoins, prérequis et conditions d'accès aux ressources."
      },
      {
        step: 3,
        title: "Contenu",
        description: "Scénarisation didactique et modularisation des savoirs fondamentaux."
      },
      {
        step: 4,
        title: "Activité",
        description: "Création d'opportunités d'engagement réflexif et de mise en pratique active."
      },
      {
        step: 5,
        title: "Évaluation",
        description: "Mesure formative de l'acquisition des connaissances et de la progression."
      },
      {
        step: 6,
        title: "Feedback",
        description: "Rétroaction constructive et remédiation pour consolider durablement les acquis."
      }
    ]
  },

  // Section 8 — Compétences
  competences: {
    title: "Compétences",
    toolsTitle: "Outils et environnement numérique",
    toolsNotice: "Conformément aux règles éditoriales, seuls les intitulés de fonctions d'outils sont mentionnés sans attribution logicielle anticipée.",
    tools: [
      { id: "tool-1", name: "[Outil de création de cours]", role: "Auteur & scénarisation" },
      { id: "tool-2", name: "[Outil de création de quiz]", role: "Évaluation interactive" },
      { id: "tool-3", name: "[Outil de conception d'activités]", role: "Didactique & exercices" },
      { id: "tool-4", name: "[CMS / plateforme]", role: "Gestion & diffusion" },
      { id: "tool-5", name: "[Autres outils]", role: "Environnement complémentaire" }
    ],
    categories: [
      { id: "all", label: "Toutes" },
      { id: "conception", label: "Conception pédagogique" },
      { id: "creation", label: "Création numérique" },
      { id: "pedagogie", label: "Pédagogie" },
      { id: "pro", label: "Professionnelles" }
    ],
    skillsList: [
      // Conception pédagogique
      { category: "conception", title: "Structuration d'un parcours d'apprentissage", desc: "Organisation modulaire et cohérente de parcours complets de formation." },
      { category: "conception", title: "Formulation d'objectifs", desc: "Rédaction d'objectifs pédagogiques opérationnels et mesurables." },
      { category: "conception", title: "Organisation des contenus", desc: "Hiérarchisation didactique limitant la charge cognitive inutile." },
      { category: "conception", title: "Choix des activités", desc: "Sélection des modalités pédagogiques les plus appropriées aux acquis visés." },
      // Création numérique
      { category: "creation", title: "Création de ressources pédagogiques numériques", desc: "Conception de supports interactifs adaptés aux environnements d'apprentissage en ligne." },
      { category: "creation", title: "Structuration de cours en ligne", desc: "Agencement ergonomique de leçons numériques guidant l'apprenant." },
      { category: "creation", title: "Création d'activités interactives", desc: "Scénarisation d'exercices d'application engageants et dynamiques." },
      { category: "creation", title: "Création de quiz", desc: "Élaboration de questionnaires formatifs avec explications didactiques." },
      // Pédagogie
      { category: "pedagogie", title: "Approche centrée sur l'apprenant", desc: "Conception pensée avant tout pour les besoins, le rythme et le profil de l'usager." },
      { category: "pedagogie", title: "Évaluation formative", desc: "Intégration d'évaluations intermédiaires favorisant la remédiation immédiate." },
      { category: "pedagogie", title: "Autoévaluation", desc: "Autonomisation de l'apprenant dans le suivi réflexif de ses progrès." },
      { category: "pedagogie", title: "Mise en situation", desc: "Ancrage des compétences dans des contextes professionnels réalistes." },
      // Professionnelles
      { category: "pro", title: "Organisation", desc: "Rigueur dans la gestion des tâches, la documentation et le respect des échéances." },
      { category: "pro", title: "Autonomie", desc: "Capacité d'initiative, d'exploration et de prise de décision raisonnée." },
      { category: "pro", title: "Adaptation", desc: "Flexibilité face aux retours, aux contraintes de projet et aux contextes changeants." },
      { category: "pro", title: "Travail en contexte professionnel", desc: "Collaboration constructive au sein d'une structure dédiée à la formation." }
    ]
  },

  // Section 9 — Bilan
  bilan: {
    title: "Ce que cette expérience m'a appris",
    subtitle: "Enseignements majeurs tirés de la pratique de l'ingénierie pédagogique en milieu professionnel",
    expandableCards: [
      {
        id: "principe-1",
        number: "01",
        title: "Concevoir avant de produire",
        summary: "Définir précisément l'objectif pédagogique avant d'amorcer toute réalisation numérique.",
        details: "L'efficacité d'une ressource découle de la rigueur de sa phase de scénarisation. Concevoir en amont permet d'assurer un alignement constructif parfait entre ce que l'apprenant doit maîtriser et ce qui est produit."
      },
      {
        id: "principe-2",
        number: "02",
        title: "L'interactivité doit avoir un objectif",
        summary: "L'interactivité doit soutenir l'apprentissage plutôt que simplement décorer un cours.",
        details: "L'animation et l'interaction ne sont pas des fins en soi. Elles doivent générer un effort cognitif constructif : pousser à l'analyse, faire tester une idée ou apporter une rétroaction éclairante sur une erreur."
      },
      {
        id: "principe-3",
        number: "03",
        title: "Le numérique accompagne la pédagogie",
        summary: "Les outils numériques trouvent leur utilité lorsqu'ils se mettent au service d'un projet didactique clair.",
        details: "La technologie est un amplificateur pédagogique, jamais un substitut à la démarche enseignante. Elle offre de formidables opportunités de personnalisation dès lors que la vision éducative guide chaque choix technique."
      }
    ],
    defisTitle: "Défis rencontrés",
    defisNotice: "Les défis professionnels spécifiques rencontrés durant le stage sont présentés sous forme de fiches éditables.",
    defisCards: [
      {
        id: "defi-1",
        defi: "[Défi rencontré]",
        solution: "[Solution mise en place]",
        appris: "[Ce que j'ai appris]"
      },
      {
        id: "defi-2",
        defi: "[Défi rencontré]",
        solution: "[Solution mise en place]",
        appris: "[Ce que j'ai appris]"
      }
    ],
    experienceSummaryTitle: "Bilan de mon expérience",
    experienceSummaryText: "Ce stage au sein de Web4Jobs a constitué une passerelle essentielle entre les fondements théoriques dispensés dans le cadre de mes Masters en Technologies Éducatives et Dispositifs Numériques Éducatifs, et les exigences pratiques de l'ingénierie pédagogique professionnelle. Il m'a permis d'affiner ma posture de conceptrice pédagogique, attentive à la rigueur méthodologique comme à l'expérience humaine des apprenants.",
    personalReflectionTitle: "Ma réflexion personnelle",
    personalReflectionContent: "[À compléter]"
  },

  // Section 10 — Conclusion / Footer
  finalSection: {
    title: "Merci pour votre attention",
    subtitle: "Une expérience qui renforce mon projet dans le domaine des technologies éducatives et de la conception pédagogique numérique.",
    backToTopText: "Retour au début",
    eportfolioNotice: "Consultez l'ensemble de mes travaux et réalisations universitaires sur mon e-portfolio.",
    eportfolioUrl: "#", // <!-- À COMPLÉTER : remplacer # par le lien réel de l'e-portfolio -->
    eportfolioButtonText: "Voir mon e-portfolio",
    academicAttribution: "Aya Jeddi • Double Master TEIP (Technologies Éducatives et Innovation Pédagogique) & DNE (Dispositifs Numériques Éducatifs)"
  }
};
