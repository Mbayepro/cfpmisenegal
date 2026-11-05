import { Filiere, TarifItem, Temoignage, Actualite, FAQItem, GalerieItem } from "./types";

export const INITIAL_FILIERES: Filiere[] = [
  {
    id: "f1-froid-clim-bt",
    slug: "bt-froid-et-climatisation-3ans",
    titre: "BT Froid et Climatisation (Post-BFEM)",
    sous_titre: "Brevet de Technicien d'État en 3 ans — L'alternative technique au Bac",
    description_courte: "Vous venez d'obtenir le BFEM ? Préparez directement un métier technique en 3 ans avec le Brevet de Technicien (BT) en Froid et Climatisation.",
    description_complete: `Vous venez d’obtenir le BFEM ? Deux parcours de trois ans s’offrent à vous :
Dans l’enseignement général, vous poursuivez en Seconde, Première puis Terminale pour préparer le Baccalauréat.
Au CFPMI, vous pouvez choisir une voie technique avec le BT en Froid et Climatisation, également sur trois ans, mais avec une formation orientée vers un métier, la pratique et l’insertion professionnelle.

Pendant ces trois années, l’apprenant acquiert progressivement des compétences en installation, maintenance et dépannage des équipements de froid et de climatisation.
À l’issue du parcours, il obtient un Brevet de Technicien (BT) officiel et peut s’orienter vers différents débouchés : Technicien en Froid et Climatisation, Technicien de maintenance, Monteur Dépanneur, Technicien SAV ou encore poursuivre ses études vers le BTS.
Même durée : 3 ans. Deux orientations différentes. Avec le BT, vous préparez directement un métier d'avenir !`,
    categorie: "technique",
    duree: "3 ans (Cursus Brevet de Technicien)",
    horaires: "Cours du Jour (Lundi au Vendredi : 08h00 - 14h00)",
    frais_inscription: 40000,
    mensualite: 45000,
    debouches: [
      "Technicien Supérieur en Froid et Climatisation",
      "Technicien de maintenance industrielle et tertiaire",
      "Monteur Dépanneur frigoriste qualifié",
      "Technicien SAV (Service Après-Vente)",
      "Poursuite d'études vers le BTS ou licence professionnelle",
      "Création et direction d'entreprise frigorifique",
    ],
    matieres: [
      "Thermodynamique et cycles frigorifiques industriels",
      "Installation et dépannage de split-systems et climatiseurs centraux",
      "Chambres froides positives et négatives agroalimentaires",
      "Électrotechnique, schémas de commande et automatismes",
      "Brasure forte oxyacétylénique et tuyauterie cuivre",
      "Dessin technique industriel et devis métré",
    ],
    materiel: [
      "Bancs didactiques de froid et climatisation réels",
      "Manifolds électroniques, pompes à vide double étage",
      "Stations de récupération et balances de charge précises",
      "Postes de soudure oxyacétylène et outillage individuel",
    ],
    avantages: [
      "Diplôme d'État : Brevet de Technicien (BT)",
      "Alternative concrète et professionnalisante au Bac général",
      "Stages en immersion chaque année chez nos partenaires (dont CALD Expertise)",
      "Insertion professionnelle directe dès l'obtention du diplôme",
    ],
    image_url: "/images/image3.jpeg",
    statut: "ouvert",
    ordre: 1,
  },
  {
    id: "f2-froid-clim-accelere",
    slug: "froid-et-climatisation",
    titre: "Froid et Climatisation (CPS Accéléré 6 mois)",
    sous_titre: "Domestique, Commerciale et Industrielle — 100% Pratique",
    description_courte: "Apprenez en faisant : montage, dépannage, tirage au vide et charge frigorifique en 6 mois intensifs.",
    description_complete: `Travaux pratiques au CFPMI : montage et dépannage de climatiseur.
La pratique m’apprend ce que la théorie, à elle seule, ne peut pas toujours transmettre.
Sur le terrain, tout le corps et tous les sens sont mobilisés : observer les gestes, écouter le fonctionnement des moteurs et des ventilateurs, détecter les bruits anormaux, ressentir la fraîcheur de l’air qui sort de l’évaporateur, manipuler les équipements avec précision et travailler dans le respect des normes de sécurité.

C’est ainsi que se construit la vraie maîtrise d’un métier : comprendre, observer, écouter, ressentir et agir.
Au CFPMI, nous croyons à une formation où l’apprenant ne se contente pas de savoir, mais apprend surtout à savoir faire. Apprendre en faisant. Comprendre par la pratique. Devenir opérationnel.`,
    categorie: "technique",
    duree: "6 mois (Pratique accélérée - CPS)",
    horaires: "Jour (08h30 - 13h00) | Soir (17h30 - 20h30) | Samedi intensif",
    frais_inscription: 35000,
    mensualite: 45000,
    debouches: [
      "Frigoriste d'intervention (climatisation résidentielle et tertiaire)",
      "Mainteneur de chambres froides en entrepôts et supermarchés",
      "Installateur de groupes split et gainables VRV/DRV",
      "Artisan entrepreneur frigoriste indépendant (ex: EFC)",
      "Agent technique dans les hôtels et cliniques à Dakar",
    ],
    matieres: [
      "Montage complet et raccordement de climatiseurs split",
      "Tirage au vide, déshydratation et recherche de fuites à l'azote",
      "Charge en fluides frigorigènes (R410A, R32, R134a, R404A)",
      "Brasure forte sur cuivre et dudgeonnage de précision",
      "Diagnostic méthodique et dépannage des pannes électriques et frigorifiques",
      "Maintenance préventive des chambres froides positives et négatives",
    ],
    materiel: [
      "Manifolds électroniques et analogiques de pointe",
      "Pompes à vide double étage et stations de récupération",
      "Postes de brasure oxyacétylénique et dudgeonnières",
      "Chambres froides d'exercice et climatiseurs split réels",
      "Multimètres, pinces ampèremétriques et détecteurs électroniques",
    ],
    avantages: [
      "100% pratique en atelier équipé à Guédiawaye Hamo 6",
      "Stage de fin de formation garanti chez CALD Expertise et entreprises partenaires",
      "Certificat Professionnel de Spécialité (CPS)",
      "Accompagnement à l'installation en tant qu'auto-entrepreneur",
    ],
    image_url: "/images/image1.jpeg",
    statut: "ouvert",
    ordre: 2,
  },
  {
    id: "f3-electricite",
    slug: "electricite-batiment-industrielle",
    titre: "Électricité Bâtiment & Industrielle",
    sous_titre: "Installations résidentielles, armoires électriques et automatisme",
    description_courte: "Devenez électricien qualifié : câblage résidentiel, schémas normalisés, armoires de distribution et moteurs industriels.",
    description_complete: "L'électricité est le cœur de chaque bâtiment et industrie. Le cursus du CFPMI forme des techniciens capables de lire un plan d'architecte, de dimensionner les sections de câbles, d'implanter les armoires de protection NF C 15-100, de brancher les moteurs triphasés et d'intégrer des convertisseurs solaires.",
    categorie: "technique",
    duree: "6 mois (Pratique accélérée - CPS)",
    horaires: "Jour (08h30 - 13h00) | Soir (17h30 - 20h30) | Samedi intensif",
    frais_inscription: 35000,
    mensualite: 40000,
    debouches: [
      "Électricien bâtiment sur chantiers de villas et immeubles",
      "Technicien câbleur d'armoires électriques de commande",
      "Agent d'entretien et de maintenance électrique d'usines",
      "Installateur de kits solaires et onduleurs photovoltaïques",
      "Entrepreneur installateur électricien agréé",
    ],
    matieres: [
      "Normes d'installation électrique (NF C 15-100)",
      "Circuits d'éclairage : simple, double, va-et-vient, télérupteur, minuterie",
      "Tableau de répartition, disjoncteurs, différentiels et terre",
      "Électrotechnique industrielle : moteurs asynchrones triphasés, contacteurs",
      "Schémas électriques de démarrage (direct, étoile-triangle, inverseur)",
      "Initiation à l'énergie solaire et secours par groupe électrogène",
    ],
    materiel: [
      "Planches individuelles de câblage grandeur nature",
      "Moteurs triphasés, relais thermiques et contacteurs Schneider/Legrand",
      "Gaines, câbles cuivre rigides et souples, tire-fils",
      "Mesureurs d'isolement (Megger), testeurs de différentiel, multimètres",
      "Équipements de protection individuelle (EPI isolants)",
    ],
    avantages: [
      "Immersion régulière sur de vrais chantiers à Dakar",
      "Formation adaptée aux normes sénégalaises et internationales",
      "Débouchés immédiats dès le 3ème mois de cours",
      "Attestation de compétence reconnue par les professionnels",
    ],
    image_url: "/images/image2.jpeg",
    statut: "ouvert",
    ordre: 3,
  },
  {
    id: "f4-plomberie",
    slug: "plomberie-sanitaire",
    titre: "Plomberie Sanitaire & Réseaux",
    sous_titre: "Installation sanitaire, tuyauterie moderne PPR, PER, cuivre et évacuation",
    description_courte: "Apprenez l'adduction d'eau, la pose d'équipements sanitaires modernes, le dépannage de fuites et les réseaux d'évacuation.",
    description_complete: "Un bon plombier ne chôme jamais à Dakar. Cette formation vous enseigne toutes les techniques modernes : thermosoudure des tubes PPR, tuyauterie multicouche sans fuite, raccordement de châteaux d'eau, surpresseurs automatiques et chauffe-eaux solaires.",
    categorie: "technique",
    duree: "6 mois (Pratique accélérée - CPS)",
    horaires: "Jour (08h30 - 13h00) | Soir (17h30 - 20h30) | Week-end",
    frais_inscription: 35000,
    mensualite: 40000,
    debouches: [
      "Plombier installateur sanitaire de bâtiments neufs",
      "Dépanneur urgentiste en plomberie résidentielle et hôtelière",
      "Spécialiste en surpresseurs et pompage d'eau",
      "Artisan plombier indépendant",
      "Chef d'équipe réseaux hydrauliques",
    ],
    matieres: [
      "Techniques de thermosoudure PPR et cintrage multicouche",
      "Brasure sur cuivre et tuyauterie PVC évacuation",
      "Installation complète de salles de bains modernes et cuisines",
      "Surpresseurs, ballons vessie, clapets anti-retour et réservoirs",
      "Recherche et réparation méthodique des fuites encastrées",
      "Chiffrage de devis et métré de chantier",
    ],
    materiel: [
      "Polyfuseuses pour tubes PPR de différents diamètres",
      "Pinces à sertir multicouche et coupe-tubes professionnels",
      "Stands d'entraînement sanitaire avec robinetterie et WC suspendus",
      "Pompes d'épreuve hydrauliques pour test d'étanchéité",
    ],
    avantages: [
      "Un des métiers les plus rentables en prestation directe",
      "Ateliers pratiques avec eau réelle sous pression",
      "Stages d'application avec maîtres artisans réputés",
    ],
    image_url: "/images/image2-bis.jpeg",
    statut: "ouvert",
    ordre: 4,
  },
  {
    id: "f5-soudure",
    slug: "soudure-metallique",
    titre: "Soudure Métallique & Tuyauterie",
    sous_titre: "Procédés ARC (MMA), TIG, MIG-MAG et menuiserie métallique",
    description_courte: "Devenez soudeur d'élite capable de réaliser des assemblages métalliques industriels, charpentes, garde-corps et réservoirs.",
    description_complete: "Le secteur industriel, maritime et de la construction métallique recherche activement des soudeurs sachant exécuter des cordons réguliers et conformes. Le CFPMI vous forme aux procédés de soudage à l'arc électrode enrobée, TIG pour l'inox et tuyauterie, et MIG-MAG pour la cadence industrielle.",
    categorie: "technique",
    duree: "6 mois (Pratique intensive - CPS)",
    horaires: "Jour (08h30 - 13h00) | Soir (17h30 - 20h30)",
    frais_inscription: 35000,
    mensualite: 45000,
    debouches: [
      "Soudeur à l'arc sur charpentes métalliques et BTP",
      "Soudeur tuyauterie industrielle TIG / MIG",
      "Ferronnier et fabricant de grilles, portes et portails",
      "Agent de maintenance sur chantiers maritimes et pétroliers",
      "Responsable d'atelier de soudure",
    ],
    matieres: [
      "Sécurité en soudage, ventilation et protection des yeux",
      "Soudage à l'électrode enrobée (toutes positions : à plat, montant, plafond)",
      "Initiation soudure TIG sur acier et acier inoxydable",
      "Découpage thermique, meulage et préparation des chanfreins",
      "Lecture de plans de charpente métallique et traçage",
      "Contrôle visuel et ressuage des soudures",
    ],
    materiel: [
      "Postes à souder Inverter MMA dernière génération",
      "Postes TIG haute fréquence et torches refroidies",
      "Masques automatiques LCD et EPI complets en cuir",
      "Tronçonneuses à métaux, meuleuses et tables de bridage",
    ],
    avantages: [
      "Consommables et métal fournis sans frais supplémentaires",
      "Entraînement quotidien en cabine de soudure sécurisée",
      "Compétence hautement demandée au Sénégal et à l'international",
    ],
    image_url: "/images/image1.jpeg",
    statut: "ouvert",
    ordre: 5,
  },
  {
    id: "f6-a-la-carte",
    slug: "formations-a-la-carte",
    titre: "Formations à la Carte & Entreprises",
    sous_titre: "Modules accélérés sur mesure pour professionnels et salariés",
    description_courte: "Programmes personnalisés pour le perfectionnement de vos équipes ou une reconversion express en 1 à 3 mois.",
    description_complete: "Vous êtes déjà en activité et souhaitez vous perfectionner sur un point précis (diagnostic Inverter, automatisme industriel, soudure TIG, dimensionnement solaire) ? Le CFPMI bâtit avec vous un module court, flexible et 100% adapté à vos disponibilités.",
    categorie: "specialise",
    duree: "1 à 3 mois (Modulable)",
    horaires: "Horaires flexibles (Soir, Samedi ou Immersion pleine)",
    frais_inscription: 30000,
    mensualite: 50000,
    debouches: [
      "Montée en compétences de techniciens en poste",
      "Reconversion professionnelle rapide et ciblée",
      "Obtention d'une certification spécifique pour postuler à un nouvel emploi",
    ],
    matieres: [
      "Modules techniques au choix selon vos besoins",
      "Pratique intensive sur les points de blocage du professionnel",
      "Résolution de cas concrets rencontrés sur vos chantiers",
    ],
    materiel: [
      "Accès aux équipements professionnels du centre",
    ],
    avantages: [
      "Programme 100% sur mesure",
      "Éligible au financement 3FPT / ONFP pour entreprises",
      "Attestation modulaire délivrée en fin de session",
    ],
    image_url: "/images/image2.jpeg",
    statut: "ouvert",
    ordre: 6,
  },
];

export const INITIAL_TARIFS: TarifItem[] = [
  {
    id: "t0",
    filiere_nom: "BT Froid et Climatisation (Post-BFEM)",
    niveau: "Diplôme d'État en 3 ans (Cycle Brevet de Technicien)",
    duree: "3 Ans + Stages annuels",
    frais_inscription: 40000,
    mensualite: 45000,
    total_estime: 445000,
    materiel_inclus: "Blouses + Manuels de cours + Accès complet aux bancs didactiques",
    modalites: "Paiement mensuel sur 9 mois par année académique. Facilités de paiement.",
    est_populaire: true,
    ordre: 1,
  },
  {
    id: "t1",
    filiere_nom: "Froid et Climatisation (CPS Accéléré)",
    niveau: "Formation Pratique Accélérée (6 Mois)",
    duree: "6 Mois + Stage terrain (CALD Expertise)",
    frais_inscription: 35000,
    mensualite: 45000,
    total_estime: 305000,
    materiel_inclus: "Blouse atelier CFPMI + Livrets de cours + Accès outillage complet",
    modalites: "Mensualité payable entre le 1er et le 5 de chaque mois. Remise de 10% en cas de paiement comptant.",
    est_populaire: true,
    ordre: 2,
  },
  {
    id: "t2",
    filiere_nom: "Électricité Bâtiment & Industrielle",
    niveau: "Formation Pratique Accélérée (6 Mois)",
    duree: "6 Mois + Stage terrain",
    frais_inscription: 35000,
    mensualite: 40000,
    total_estime: 275000,
    materiel_inclus: "Blouse atelier + Fiches de schémas + Équipements de câblage d'exercice",
    modalites: "Échelonnement mensuel sans frais. Possibilité de payer par Wave ou Orange Money.",
    est_populaire: true,
    ordre: 3,
  },
  {
    id: "t3",
    filiere_nom: "Plomberie Sanitaire & Réseaux",
    niveau: "Formation Pratique Accélérée (6 Mois)",
    duree: "6 Mois + Stage terrain",
    frais_inscription: 35000,
    mensualite: 40000,
    total_estime: 275000,
    materiel_inclus: "Blouse de travail + Tubes et raccords PPR/cuivre fournis en atelier",
    modalites: "Paiement mensuel accessible avec attestation de suivi remise chaque mois.",
    est_populaire: false,
    ordre: 4,
  },
  {
    id: "t4",
    filiere_nom: "Soudure Métallique & Tuyauterie",
    niveau: "Formation Pratique Intensive (6 Mois)",
    duree: "6 Mois + Stage terrain",
    frais_inscription: 35000,
    mensualite: 45000,
    total_estime: 305000,
    materiel_inclus: "Masque de protection LCD + Électrodes et métaux d'exercice inclus",
    modalites: "Mensualité fixe couvrant tous les consommables d'atelier.",
    est_populaire: false,
    ordre: 5,
  },
  {
    id: "t5",
    filiere_nom: "Modules à la Carte / Entreprises",
    niveau: "Perfectionnement Technique Express",
    duree: "1 à 3 Mois",
    frais_inscription: 30000,
    mensualite: 50000,
    total_estime: 180000,
    materiel_inclus: "Support technique sur mesure + Accès illimité aux bancs d'essais",
    modalites: "Sur devis spécifique selon le volume horaire et le nombre d'apprenants.",
    est_populaire: false,
    ordre: 6,
  },
];

export const INITIAL_TEMOIGNAGES: Temoignage[] = [
  {
    id: "tem-jafaridun",
    nom: "Jafaridun",
    origine: "Comores",
    filiere_suivie: "Froid & Climatisation et Électricité",
    annee_promotion: "Formation Accélérée & Stages CALD Expertise",
    entreprise_creee_ou_poste: "Fondateur et Directeur d'EFC (Électricité, Froid et Confort) aux Comores",
    photo_url: "/images/image2.jpeg",
    video_url: "https://www.facebook.com/share/v/1BpDwuyiiD/",
    citation: "DE DAKAR AUX COMORES : Tout a commencé par un appel depuis la France. Arrivé au CFPMI à Dakar, j'ai suivi la pratique, fait mes stages terrain avec CALD Expertise, et aujourd'hui j'ai créé mon entreprise EFC !",
    histoire_complete: `DE DAKAR AUX COMORES : LE PARCOURS DE JAFARIDUN 🇸🇳➡️🇰🇲

Tout a commencé par un appel depuis la France. Mohamed, son cousin, avait découvert le CFPMI ici même, sur Facebook, et souhaitait que Jafaridun nous rejoigne.

Arrivé à Dakar, Jafaridun savait exactement ce qu’il voulait. Il a suivi notre formation accélérée, puis il est allé sur le terrain, en stage sur plusieurs sites avec les équipes du CFPMI et de notre partenaire CALD Expertise. Dynamique, rigoureux et engagé, il a été un apprenant modèle.

Aujourd’hui, de retour aux Comores, il a créé sa propre entreprise : EFC (Électricité, Froid et Confort). Installation électrique, climatisation, froid, maintenance : il met en application, chantier après chantier, toutes les compétences acquises au CFPMI.

Jafaridun, toute l’équipe du CFPMI est fière de toi. Bonne continuation !`,
    est_en_vedette: true,
    ordre: 1,
  },
  {
    id: "tem-momar-seck",
    nom: "Doyen Momar SECK",
    origine: "Sénégal (Dakar)",
    filiere_suivie: "Froid et Climatisation",
    annee_promotion: "Remise Solennelle d'Attestation",
    entreprise_creee_ou_poste: "Retraité & Praticien Frigoriste Passionné",
    photo_url: "/images/image1.jpeg",
    video_url: "https://www.facebook.com/share/v/1HyeydyCLq/",
    citation: "Il n'y a pas d'âge pour apprendre ! Parti à la retraite, j'ai choisi d'apprendre un métier passionnant au CFPMI avec assiduité et curiosité.",
    histoire_complete: `REMISE D'ATTESTATION | « Il n'y a pas d'âge pour apprendre »

Le Centre de Formation et de Perfectionnement aux Métiers de l'Industrie (CFPMI) a eu l'honneur de remettre son attestation de formation en Froid et Climatisation au Doyen Momar SECK.

Parti à la retraite il y a quelques années, le Doyen Momar SECK aurait pu choisir le repos. Il a choisi d'apprendre. Animé par une véritable passion pour le froid, il a rejoint nos ateliers avec assiduité, rigueur et une curiosité intacte, et a mené sa formation jusqu'au bout.

Son parcours est une source d'inspiration pour toute notre communauté d'apprenants : la soif d'apprendre et la volonté de se perfectionner n'ont pas d'âge. Retrouvez en vidéo le mot du Directeur du CFPMI, M. Gorgui FAYE, puis le témoignage émouvant du Doyen Momar SECK.`,
    est_en_vedette: true,
    ordre: 2,
  },
  {
    id: "tem-moussa",
    nom: "Moussa Diop",
    origine: "Sénégal (Guédiawaye)",
    filiere_suivie: "Électricité Bâtiment & Industrielle",
    annee_promotion: "Promotion 2024",
    entreprise_creee_ou_poste: "Chef d'équipe Électricité sur chantiers BTP",
    photo_url: "/images/image2-bis.jpeg",
    citation: "En 6 mois seulement, je suis passé de demandeur d'emploi à chef d'équipe respecté. Les formateurs sont des professionnels du terrain qui nous transmettent les vraies réalités.",
    histoire_complete: "J'habitais à quelques minutes du centre à Hamo 6. Après le lycée, je cherchais une formation qui débouche sur du concret. Au CFPMI, le câblage d'armoires et la lecture de plans m'ont ouvert les yeux. Dès la fin de mon stage obligatoire, l'entreprise m'a embauché directement en contrat à durée indéterminée.",
    est_en_vedette: false,
    ordre: 3,
  },
  {
    id: "tem-aissatou",
    nom: "Aïssatou Sow",
    origine: "Sénégal (Pikine)",
    filiere_suivie: "Froid et Climatisation",
    annee_promotion: "Promotion 2024",
    entreprise_creee_ou_poste: "Technicienne Frigoriste Indépendante",
    photo_url: "/images/image3.jpeg",
    citation: "Certains pensent que le froid et la climatisation sont réservés aux hommes. Au CFPMI, j'ai été encouragée dès le premier jour et je gagne très bien ma vie avec mes propres clients.",
    histoire_complete: "Les femmes ont toute leur place dans les métiers techniques. Au CFPMI, nous bénéficions du même niveau d'exigence et de sécurité. Aujourd'hui, j'installe et dépanne des climatiseurs dans tout Dakar avec ma boîte à outils.",
    est_en_vedette: false,
    ordre: 4,
  },
];

export const INITIAL_ACTUALITES: Actualite[] = [
  {
    id: "actu-remise-momar-seck",
    slug: "remise-attestation-doyen-momar-seck-il-ny-a-pas-d-age-pour-apprendre",
    titre: "🎓 REMISE D'ATTESTATION | « Il n'y a pas d'âge pour apprendre » : Le Doyen Momar SECK à l'honneur",
    resume: "Le CFPMI a l'honneur de remettre son attestation de formation en Froid et Climatisation au Doyen Momar SECK, retraité passionné, en présence du Directeur M. Gorgui FAYE.",
    contenu: `🎓 REMISE D'ATTESTATION | « Il n'y a pas d'âge pour apprendre »

Le Centre de Formation et de Perfectionnement aux Métiers de l'Industrie (CFPMI) a l'honneur de remettre son attestation de formation en Froid et Climatisation au Doyen Momar SECK.

Parti à la retraite il y a quelques années, le Doyen Momar SECK aurait pu choisir le repos. Il a choisi d'apprendre. Animé par une véritable passion pour le froid, il a rejoint nos ateliers avec assiduité, rigueur et une curiosité intacte, et a mené sa formation jusqu'au bout.

Son parcours est une source d'inspiration pour toute notre communauté d'apprenants : la soif d'apprendre et la volonté de se perfectionner n'ont pas d'âge.

Dans cette vidéo, retrouvez le mot du Directeur du CFPMI, M. Gorgui FAYE, puis le témoignage du Doyen Momar SECK.

Toute l'équipe du CFPMI lui adresse ses sincères félicitations et lui souhaite plein succès dans la suite de son parcours.

Vous aussi, formez-vous aux métiers de l'industrie avec le CFPMI.
- Guédiawaye, Hamo 6
- +221 77 694 78 71
- cfpmidakar@gmail.com

#cfmpisenegal #formationprofessionnelle`,
    image_url: "/images/image1.jpeg",
    video_url: "https://www.facebook.com/share/v/1HyeydyCLq/",
    auteur: "Direction Générale • M. Gorgui FAYE",
    categorie: "Remise d'Attestation",
    est_publie: true,
    date_publication: "2026-11-05",
  },
  {
    id: "actu-jafaridun-dakar-comores",
    slug: "de-dakar-aux-comores-le-parcours-de-jafaridun-efc",
    titre: "🇸🇳➡️🇰🇲 DE DAKAR AUX COMORES : Le parcours inspirant de Jafaridun, fondateur d'EFC",
    resume: "Découvrez l'histoire de Jafaridun : d'un appel depuis la France à son arrivée au CFPMI Dakar, ses stages chez CALD Expertise et la création de son entreprise EFC aux Comores.",
    contenu: `DE DAKAR AUX COMORES : LE PARCOURS DE JAFARIDUN 🇸🇳➡️🇰🇲

Tout a commencé par un appel depuis la France. Mohamed, son cousin, avait découvert le CFPMI ici même, sur Facebook, et souhaitait que Jafaridun nous rejoigne.

Arrivé à Dakar, Jafaridun savait exactement ce qu’il voulait. Il a suivi notre formation accélérée, puis il est allé sur le terrain, en stage sur plusieurs sites avec les équipes du CFPMI et de notre partenaire CALD Expertise. Dynamique, rigoureux et engagé, il a été un apprenant modèle.

Aujourd’hui, de retour aux Comores, il a créé sa propre entreprise : EFC (Électricité, Froid et Confort). Installation électrique, climatisation, froid, maintenance : il met en application, chantier après chantier, toutes les compétences acquises au CFPMI.

Jafaridun, toute l’équipe du CFPMI est fière de toi. 
Bonne continuation !

📌 Le CFPMI vous forme aux métiers de :
✅ Froid et climatisation (domestique et industrielle)
✅ Électricité (bâtiment et industrielle)
✅ Plomberie
✅ Soudure métallique
✅ Autres formations à la carte, sur demande

Formations initiales et formations continues pour les professionnels.
🎓 Diplômes : CPS (préparé en 6 mois), CAP, BEP, BT et BTS.

📍 Guédiawaye, Hamo 6 – Dakar
📞 +221 77 694 78 71
📧 cfpmidakar@gmail.com

CFPMI, Clé de la Réussite 🔑

#CFPMI #FormationProfessionnelle #Froid #Climatisation #Électricité #Entrepreneuriat #Sénégal #Comores #Jeunesse #Réussite`,
    image_url: "/images/image2.jpeg",
    video_url: "https://www.facebook.com/share/v/1BpDwuyiiD/",
    auteur: "Communication CFPMI",
    categorie: "Success Story",
    est_publie: true,
    date_publication: "2026-11-04",
  },
  {
    id: "actu-choix-filiere",
    slug: "ta-filiere-peut-decider-de-la-vitesse-d-entree-dans-le-monde-professionnel",
    titre: "Ta filière peut décider de la vitesse à laquelle tu entres dans le monde professionnel",
    resume: "Dis-moi quelle filière tu suis, je te dirai quelles opportunités professionnelles elle peut réellement t’ouvrir au Sénégal.",
    contenu: `Ta filière peut décider de la vitesse à laquelle tu entres dans le monde professionnel.

Dis-moi quelle filière tu suis, je te dirai quelles opportunités professionnelles elle peut réellement t’ouvrir.

Choisir une formation, ce n’est pas seulement choisir un diplôme.
C’est aussi choisir des compétences, des débouchés et un avenir professionnel.

Alors, quelle filière suis-tu ? 
Nous sommes joignables au 77 694 78 71

CFPMI Sénégal
Guédiawaye, Hamo 6

#senegal #formationprofessionnelle #emploi`,
    image_url: "/images/image2-bis.jpeg",
    video_url: "https://www.facebook.com/share/v/14zTmSZJL74/",
    auteur: "Pôle Orientation & Insertion",
    categorie: "Conseils Carrière",
    est_publie: true,
    date_publication: "2026-11-03",
  },
  {
    id: "actu-image-3",
    slug: "bfem-deux-parcours-bt-froid-climatisation",
    titre: "Vous venez d’obtenir le BFEM ? Le Brevet de Technicien (BT) en Froid et Climatisation en 3 ans",
    resume: "Deux parcours de trois ans s’offrent à vous : l’enseignement général vers le Bac, ou la voie technique au CFPMI avec le BT en Froid et Climatisation.",
    contenu: `Vous venez d’obtenir le BFEM ? 
Deux parcours de trois ans s’offrent à vous.

Dans l’enseignement général, vous poursuivez en Seconde, Première puis Terminale pour préparer le Baccalauréat.
Au CFPMI, vous pouvez choisir une voie technique avec le BT en Froid et Climatisation, également sur trois ans, mais avec une formation orientée vers un métier, la pratique et l’insertion professionnelle.

Pendant ces trois années, l’apprenant acquiert progressivement des compétences en installation, maintenance et dépannage des équipements de froid et de climatisation.
À l’issue du parcours, il obtient un Brevet de Technicien (BT) et peut s’orienter vers différents débouchés : Technicien en Froid et Climatisation, Technicien de maintenance, Monteur Dépanneur, Technicien SAV ou encore poursuivre ses études vers le BTS.

Même durée : 3 ans.
Deux orientations différentes.
Avec le BT, vous préparez directement un métier technique.

- CFPMI – Guédiawaye Hamo 6 ;
- 77 694 78 71 ;
- cfpmidakar@gmail.com. 

Choisissez la voie technique. Formez-vous à un métier. Construisez votre avenir professionnel.`,
    image_url: "/images/image3.jpeg",
    auteur: "Direction des Études",
    categorie: "Orientation BFEM",
    est_publie: true,
    date_publication: "2026-11-02",
  },
  {
    id: "actu-kaay-jang",
    slug: "kaay-jang-metier-cfpmi-senegal",
    titre: "« Kaay Jang Métier !!! » — L'appel du CFPMI à la jeunesse pour un avenir assuré",
    resume: "Kaay Jang Métier !!! Apprendre un vrai métier manuel et industriel qui paye et recrute sans attendre. Contactez-nous au 77 694 78 71.",
    contenu: `Kaay Jang Métier !!! 

Formez-vous aux métiers concrets de l'industrie :
- Froid et climatisation (domestique et industrielle)
- Électricité (bâtiment et industrielle)
- Plomberie
- Soudure métallique
- Formations modulaires à la carte

Nous sommes joignables au 77 694 78 71 
CFPMI Sénégal — Guédiawaye Hamo 6, Dakar.`,
    image_url: "/images/image1.jpeg",
    video_url: "https://www.facebook.com/share/r/19N97Jze1E/",
    auteur: "Équipe CFPMI",
    categorie: "Appel Jeunesse",
    est_publie: true,
    date_publication: "2026-11-01",
  },
];

export const INITIAL_FAQ: FAQItem[] = [
  {
    id: "faq-diplomes",
    question: "Quels sont les diplômes et titres préparés au CFPMI ?",
    reponse: "Le CFPMI prépare à plusieurs niveaux de qualification selon votre profil et vos objectifs : le CPS (Certificat Professionnel de Spécialité préparé en 6 mois accélérés 100% pratique), le CAP, le BEP, le BT (Brevet de Technicien en 3 ans après le BFEM) et le BTS pour les techniciens supérieurs.",
    categorie: "Formations",
    ordre: 1,
  },
  {
    id: "faq-age",
    question: "Y a-t-il un âge limite pour s'inscrire au CFPMI ?",
    reponse: "Non, comme le prouve le parcours inspirant de notre Doyen Momar SECK (retraité ayant suivi avec succès la formation en Froid & Climatisation), « Il n'y a pas d'âge pour apprendre ». Nos formations sont ouvertes aussi bien aux jeunes diplômés du BFEM/Bac qu'aux adultes et professionnels en reconversion.",
    categorie: "Inscriptions",
    ordre: 2,
  },
  {
    id: "faq-0",
    question: "Quelle est la différence entre le BT en 3 ans (post-BFEM) et la formation accélérée en 6 mois (CPS) ?",
    reponse: "Le Brevet de Technicien (BT) en Froid et Climatisation est un cursus d'État complet de 3 ans accessible après le BFEM, constituant une alternative technique professionnalisante au lycée général (Seconde, Première, Terminale). La formation accélérée de 6 mois (CPS), quant à elle, est une formation pratique intensive destinée à acquérir rapidement les compétences opérationnelles de terrain pour entrer directement dans la vie active ou créer son entreprise.",
    categorie: "Formations",
    ordre: 3,
  },
  {
    id: "faq-1",
    question: "Où se trouve exactement le CFPMI ?",
    reponse: "Le CFPMI est basé à Dakar, dans la commune de Guédiawaye, quartier Hamo 6. Notre centre dispose d'ateliers spacieux et équipés. Vous pouvez nous contacter par téléphone ou WhatsApp au +221 77 694 78 71 ou +221 76 461 14 63 pour recevoir notre géolocalisation exacte.",
    categorie: "Général",
    ordre: 4,
  },
  {
    id: "faq-2",
    question: "Quelles sont les conditions d'admission ? Faut-il avoir le Bac ?",
    reponse: "Aucun diplôme supérieur n'est obligatoire pour rejoindre nos formations pratiques accélérées : il suffit de savoir lire, écrire et d'être motivé. Pour la filière BT (Brevet de Technicien en 3 ans), le diplôme du BFEM (ou niveau 3ème) est requis.",
    categorie: "Inscriptions",
    ordre: 5,
  },
  {
    id: "faq-3",
    question: "Quels sont les créneaux horaires proposés ?",
    reponse: "Pour s'adapter à votre emploi du temps, nous proposons 3 créneaux : le créneau Jour (matin, de 08h30 à 13h00), le créneau Soir (de 17h30 à 20h30, idéal pour les travailleurs) et le Samedi intensif.",
    categorie: "Formations",
    ordre: 6,
  },
  {
    id: "faq-4",
    question: "Aidez-vous les apprenants à trouver des stages et du travail ?",
    reponse: "Absolument. Grâce à notre partenaire de référence CALD Expertise et notre réseau d'entreprises partenaires, chaque apprenant bénéficie de stages sur de vrais chantiers, comme l'a vécu Jafaridun avant de fonder son entreprise EFC.",
    categorie: "Stages & Emploi",
    ordre: 7,
  },
];

export const INITIAL_GALERIE: GalerieItem[] = [
  {
    id: "gal-momar-seck",
    titre: "🎓 Remise d'attestation au Doyen Momar SECK par M. Gorgui FAYE",
    description: "« Il n'y a pas d'âge pour apprendre ». Le Doyen Momar SECK, jeune retraité passionné, reçoit son attestation en Froid & Climatisation.",
    media_url: "/images/image1.jpeg",
    video_url: "https://www.facebook.com/share/v/1HyeydyCLq/",
    type_media: "video",
    categorie: "remise_attestations",
    ordre: 1,
  },
  {
    id: "gal-jafaridun-video",
    titre: "🇸🇳➡️🇰🇲 De Dakar aux Comores : Le parcours de Jafaridun (EFC)",
    description: "Venu des Comores via un appel de France, formé au CFPMI et stagiaire chez CALD Expertise, il dirige aujourd'hui l'entreprise EFC.",
    media_url: "/images/image2.jpeg",
    video_url: "https://www.facebook.com/share/v/1BpDwuyiiD/",
    type_media: "video",
    categorie: "chantiers",
    ordre: 2,
  },
  {
    id: "gal-kaay-jang",
    titre: "Kaay Jang Métier !!! — Vidéo officielle CFPMI",
    description: "Appel vibrant à la jeunesse sénégalaise pour choisir la voie technique et les compétences opérationnelles.",
    media_url: "/images/image2-bis.jpeg",
    video_url: "https://www.facebook.com/share/r/19N97Jze1E/",
    type_media: "video",
    categorie: "ateliers",
    ordre: 3,
  },
  {
    id: "gal-filiere-vitesse",
    titre: "Ta filière peut décider de la vitesse d'entrée dans le monde professionnel",
    description: "Choisir des compétences et des débouchés concrets avec le CFPMI à Guédiawaye Hamo 6.",
    media_url: "/images/image3.jpeg",
    video_url: "https://www.facebook.com/share/v/14zTmSZJL74/",
    type_media: "video",
    categorie: "ateliers",
    ordre: 4,
  },
  {
    id: "gal-tp-montage",
    titre: "Travaux pratiques au CFPMI : montage et dépannage de climatiseur",
    description: "Observer, écouter les ventilateurs, détecter les bruits anormaux, ressentir la fraîcheur et intervenir avec précision.",
    media_url: "/images/image1.jpeg",
    type_media: "photo",
    categorie: "ateliers",
    ordre: 5,
  },
];
