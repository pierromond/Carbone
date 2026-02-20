// =============================================
// Propositions Labo — Dilemmes Carbone
// Contexte : laboratoire de recherche en physique / ingénierie
// Sources : ADEME Base Carbone & Impact CO₂
// =============================================
// ID stables : ne JAMAIS réutiliser un ID supprimé.
// Pour ajouter : prendre le prochain numéro libre (L56, L57…).
// =============================================

export const laboProposals = [
  // --- Missions : enjeu de carrière vs prestige ---
  {id: "L01", text: "Vol A/R pour qu'un doctorant présente sa 1ʳᵉ publication orale en conférence internationale", co2: 150},
  {id: "L02", text: "Vol A/R pour qu'un directeur de recherche assiste à une conférence sans présentation", co2: 150},
  {id: "L03", text: "Vol A/R pour un jury de thèse (membre obligatoire, visio impossible)", co2: 150},
  {id: "L04", text: "Vol A/R pour un comité de pilotage qui pourrait se faire en visio", co2: 150},
  {id: "L05", text: "Vol A/R intercontinental pour qu'un post-doc donne un séminaire dans un labo partenaire", co2: 500},
  {id: "L06", text: "Vol A/R intercontinental pour un professeur invité à une remise de prix honorifique", co2: 500},
  {id: "L07", text: "Envoyer un doctorant à une école d'été en voiture (A/R 700 km) — formation essentielle à sa thèse", co2: 135},
  {id: "L08", text: "Envoyer un permanent à un workshop en voiture (A/R 700 km) — sujet périphérique", co2: 135},
  {id: "L09", text: "Trajet quotidien en voiture (15 km A/R) pendant 8 semaines — labo inaccessible en TC", co2: 70},
  {id: "L10", text: "Trajet quotidien en voiture (15 km A/R) pendant 8 semaines — bus disponible (+20 min)", co2: 70},

  // --- Calcul HPC : recherche fondamentale vs optimisation ---
  {id: "L11", text: "Simulation CFD (10 nœuds, 2 semaines) pour la thèse d'un doctorant — résultats publiables", co2: 100},
  {id: "L12", text: "Simulation CFD (10 nœuds, 2 semaines) pour affiner une figure avant soumission", co2: 100},
  {id: "L13", text: "Entraîner un modèle de deep learning (4 GPU, 6 semaines) pour un projet médical", co2: 200},
  {id: "L14", text: "Entraîner un modèle de deep learning (4 GPU, 6 semaines) pour un benchmark d'article", co2: 200},
  {id: "L15", text: "Serveur de calcul 500 W en continu 5 mois — seule ressource pour les thésards", co2: 100},
  {id: "L16", text: "Serveur de calcul 500 W en continu 5 mois — utilisé à 10 % de sa capacité", co2: 100},
  {id: "L17", text: "Calcul éléments finis (20 cœurs, 1 mois) pour dimensionner un prototype sismique", co2: 80},
  {id: "L18", text: "Calcul éléments finis (20 cœurs, 1 mois) pour reproduire des résultats déjà publiés", co2: 80},
  {id: "L19", text: "Laisser 5 stations de travail 24h/24, 2 mois — mesures en continu nécessaires", co2: 120},
  {id: "L20", text: "Laisser 5 stations de travail 24h/24, 2 mois — par habitude, personne ne les éteint", co2: 120},
  {id: "L21", text: "Calcul Monte-Carlo massif sur cluster pendant 1 mois — thèse en physique nucléaire", co2: 300},
  {id: "L22", text: "Calcul Monte-Carlo massif sur cluster pendant 1 mois — exploration sans objectif précis", co2: 300},

  // --- Équipement : enseignement vs recherche, nécessité vs renouvellement ---
  {id: "L23", text: "Acheter un oscilloscope neuf — modèle en panne, TP de licence bloqués", co2: 100},
  {id: "L24", text: "Acheter un oscilloscope neuf — un chercheur préfère un modèle plus récent", co2: 100},
  {id: "L25", text: "Acheter une imprimante 3D pour prototyper des dispositifs médicaux", co2: 80},
  {id: "L26", text: "Acheter une imprimante 3D pour imprimer des goodies pour les portes ouvertes", co2: 80},
  {id: "L27", text: "Remplacer le PC fixe d'un doctorant dont la machine plante quotidiennement", co2: 260},
  {id: "L28", text: "Remplacer le PC fixe d'un permanent qui veut un écran plus grand", co2: 260},
  {id: "L29", text: "Acheter 10 capteurs MEMS pour un banc de mesure — campagne terrain unique", co2: 50},
  {id: "L30", text: "Acheter 10 capteurs MEMS — expérience déjà réalisée dans un autre labo", co2: 50},

  // --- Consommables : expériences essentielles vs confort ---
  {id: "L31", text: "Consommer 250 L d'azote liquide — essais cryogéniques sur un matériau innovant", co2: 100},
  {id: "L32", text: "Consommer 250 L d'azote liquide — refaire un TP déjà filmé en vidéo", co2: 100},
  {id: "L33", text: "Couler 750 kg de béton pour éprouvettes — norme de certification obligatoire", co2: 100},
  {id: "L34", text: "Couler 750 kg de béton pour éprouvettes — vérification interne non imposée", co2: 100},
  {id: "L35", text: "Utiliser 50 L de résine époxy — composites pour collaboration internationale", co2: 100},
  {id: "L36", text: "Utiliser 50 L de résine époxy — projet de fin d'études d'un stagiaire M1", co2: 100},
  {id: "L37", text: "10 bouteilles de gaz argon — soudures sur prototype de recherche", co2: 70},
  {id: "L38", text: "10 bouteilles de gaz argon — essais exploratoires sans protocole défini", co2: 70},

  // --- Énergie bâtiment : sécurité vs habitude ---
  {id: "L39", text: "Faire fonctionner la salle blanche 1 journée — fabriquer des micro-capteurs (projet ANR)", co2: 100},
  {id: "L40", text: "Faire fonctionner la salle blanche 1 journée — visite de démonstration pour financeurs", co2: 100},
  {id: "L41", text: "Hotte aspirante 24h/24, 2 mois — manipulation de solvants toxiques obligatoire", co2: 80},
  {id: "L42", text: "Hotte aspirante 24h/24, 2 mois — laissée en marche par précaution hors manipulation", co2: 80},
  {id: "L43", text: "Climatiser la salle serveur 3 semaines en été — risque de surchauffe des machines", co2: 60},
  {id: "L44", text: "Climatiser un bureau individuel 3 semaines en été — confort du chercheur", co2: 60},

  // --- Terrain : impact sociétal vs publication ---
  {id: "L45", text: "Campagne de mesures acoustiques (3 sites) — cartographier le bruit urbain (santé publique)", co2: 120},
  {id: "L46", text: "Campagne de mesures acoustiques (3 sites) — ajouter des données à un article existant", co2: 120},
  {id: "L47", text: "Groupe électrogène diesel 1 semaine — capteurs en zone isolée sans électricité", co2: 100},
  {id: "L48", text: "Groupe électrogène diesel 1 semaine — tests en extérieur alors qu'un banc intérieur existe", co2: 100},
  {id: "L49", text: "Expédier 200 kg de matériel par fret (1 000 km) — observatoire environnemental permanent", co2: 80},
  {id: "L50", text: "Expédier 200 kg de matériel par fret (1 000 km) — expérience ponctuelle de 2 jours", co2: 80},

  // --- Enseignement & publications ---
  {id: "L51", text: "500 polycopiés de 100 pages — promotion sans accès au numérique", co2: 50},
  {id: "L52", text: "500 polycopiés de 100 pages — le PDF est disponible en ligne", co2: 50},
  {id: "L53", text: "Équiper un poste étudiant PC neuf — formation indispensable en simulation", co2: 260},
  {id: "L54", text: "Équiper un poste étudiant PC neuf — le PC actuel est lent mais fonctionnel", co2: 260},

  // --- Méta ---
  {id: "L55", text: "Créer ce questionnaire labo en discutant 2 h avec Claude Opus 4.6 (~100 requêtes LLM)", co2: 0.5}
];
