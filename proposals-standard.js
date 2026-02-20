// =============================================
// Propositions Standard — Dilemmes Carbone
// Sources : ADEME Base Carbone & Impact CO₂
//   Avion court-courrier : 0,224 kg/km
//   Voiture thermique : 0,192 kg/km
//   Voiture électrique : 0,020 kg/km
//   TGV : 0,0023 kg/km
//   Bus diesel : 0,114 kg/km
//   Scooter thermique : 0,060 kg/km
//   Bœuf : 28,0 kg CO₂/kg — Veau : 22,5
//   Crevettes : 20,3 — Porc : 6,67 — Poulet : 4,56
//   Fromage pâte dure : 6,28 — Lait : 1,15/L
//   Smartphone : 80 — Tablette : 87 — Écran : 93
//   Box internet : 81 — PC fixe pro : 259
//   Streaming : 0,064 kg/h — Visio : 0,057 kg/h
//   E-mail : 0,0025 kg — Élec. France : 0,057 kg/kWh
// =============================================
// ID stables : ne JAMAIS réutiliser un ID supprimé.
// Pour ajouter : prendre le prochain numéro libre (S58, S59…).
// =============================================

export const standardProposals = [
  // --- Transport : contexte éthique fort ---
  {id: "S01", text: "Prendre l'avion A/R Paris → Marseille pour assister aux obsèques d'un proche", co2: 150},
  {id: "S02", text: "Prendre l'avion A/R Paris → Barcelone pour un week-end de loisirs", co2: 300},
  {id: "S03", text: "Conduire 500 km pour rendre visite à un parent hospitalisé", co2: 95},
  {id: "S04", text: "Conduire 500 km pour un week-end gastronomique entre amis", co2: 95},
  {id: "S05", text: "Prendre l'avion A/R pour accompagner son enfant à un concours national", co2: 150},
  {id: "S06", text: "Prendre l'avion A/R pour un enterrement de vie de célibataire à Porto", co2: 400},
  {id: "S07", text: "Faire un A/R en voiture pour un entretien d'embauche décisif (600 km)", co2: 115},
  {id: "S08", text: "Faire un A/R en voiture pour un concert de son artiste préféré (600 km)", co2: 115},
  {id: "S09", text: "Se rendre au travail en voiture (20 km A/R) pendant 5 semaines — seul emploi accessible", co2: 95},
  {id: "S10", text: "Se rendre à la salle de sport en voiture (20 km A/R) pendant 5 semaines", co2: 95},
  {id: "S11", text: "Vol A/R Paris → New York pour les funérailles d'un ami d'enfance", co2: 500},
  {id: "S12", text: "Vol A/R Paris → New York pour un shopping week-end (Black Friday)", co2: 500},

  // --- Alimentation : dilemmes culturels, santé, plaisir ---
  {id: "S13", text: "Manger de la viande rouge (200 g) chaque soir pendant 3 semaines, prescrit par un médecin (anémie sévère)", co2: 115},
  {id: "S14", text: "Manger de la viande rouge (200 g) chaque soir pendant 3 semaines, par habitude culinaire", co2: 115},
  {id: "S15", text: "Consommer 5 kg de crevettes lors d'un repas de fête de famille traditionnel", co2: 100},
  {id: "S16", text: "Consommer 5 kg de crevettes en livraison à domicile pour des apéros personnels", co2: 100},
  {id: "S17", text: "Manger du fromage local (comté) 100 g/jour pendant 5 mois — soutien aux producteurs de montagne", co2: 95},
  {id: "S18", text: "Manger du fromage importé 100 g/jour pendant 5 mois — commandé en ligne", co2: 95},
  {id: "S19", text: "Offrir un repas de bœuf français pour les 80 ans de sa grand-mère (20 convives, 10 kg)", co2: 280},
  {id: "S20", text: "Commander 20 burgers en livraison express pour une soirée foot entre copains", co2: 280},
  {id: "S21", text: "Boire du café équitable 1 tasse/jour pendant 1 an (soutien coopérative)", co2: 60},
  {id: "S22", text: "Boire des capsules alu 1 tasse/jour pendant 1 an (praticité)", co2: 60},
  {id: "S23", text: "Nourrir quotidiennement une famille de 4 personnes en bio local pendant 1 mois", co2: 200},
  {id: "S24", text: "Commander seul en livraison express chaque soir pendant 1 mois", co2: 200},

  // --- Numérique : nécessité vs confort ---
  {id: "S25", text: "Acheter un smartphone neuf pour un adolescent entrant au lycée (premier téléphone)", co2: 80},
  {id: "S26", text: "Acheter un smartphone neuf pour remplacer un modèle vieux de 2 ans encore fonctionnel", co2: 80},
  {id: "S27", text: "Acheter une tablette neuve pour un enfant dyslexique (outil pédagogique prescrit)", co2: 87},
  {id: "S28", text: "Acheter une tablette neuve pour regarder des séries dans son lit", co2: 87},
  {id: "S29", text: "Acheter un PC fixe pro pour un travailleur indépendant (outil principal)", co2: 260},
  {id: "S30", text: "Acheter un PC gamer haut de gamme pour jouer en 4K", co2: 350},
  {id: "S31", text: "Laisser un PC fixe (300 W) allumé 24h/24 pendant 8 mois — télétravail en zone rurale sans alternative", co2: 100},
  {id: "S32", text: "Laisser un PC fixe (300 W) allumé 24h/24 pendant 8 mois — miner de la cryptomonnaie", co2: 100},
  {id: "S33", text: "Acheter un écran 27\" neuf pour un graphiste freelance (outil de travail)", co2: 93},
  {id: "S34", text: "Acheter un écran 27\" neuf juste pour le gaming", co2: 93},

  // --- Énergie & logement : vulnérabilité vs confort ---
  {id: "S35", text: "Chauffer un logement mal isolé tout l'hiver pour une personne âgée seule (20 m²)", co2: 100},
  {id: "S36", text: "Chauffer un bureau individuel tout l'hiver alors qu'un open space chauffé est disponible", co2: 100},
  {id: "S37", text: "Climatiser une chambre tout l'été pour un bébé en bas âge", co2: 75},
  {id: "S38", text: "Climatiser un salon tout l'été pour son confort personnel", co2: 150},
  {id: "S39", text: "Faire fonctionner un chauffe-eau électrique 1 an pour une famille de 3 personnes", co2: 100},
  {id: "S40", text: "Prendre des bains chauds quotidiens de 30 min pendant 6 mois (relaxation)", co2: 100},
  {id: "S41", text: "Isoler les combles d'un logement social (artisan A/R 100 km + matériaux)", co2: 75},
  {id: "S42", text: "Faire installer un jacuzzi extérieur (artisan A/R 100 km + matériaux)", co2: 75},

  // --- Consommation : solidarité vs mode ---
  {id: "S43", text: "Acheter 15 t-shirts neufs en coton bio pour une association caritative (dons)", co2: 100},
  {id: "S44", text: "Acheter 15 t-shirts neufs en fast fashion pour renouveler sa garde-robe", co2: 100},
  {id: "S45", text: "Acheter un vélo électrique neuf pour remplacer une voiture (trajet domicile–travail)", co2: 100},
  {id: "S46", text: "Acheter un vélo électrique neuf pour des promenades dominicales", co2: 100},
  {id: "S47", text: "Acheter un réfrigérateur neuf (classe A) pour remplacer un vieux modèle très énergivore", co2: 150},
  {id: "S48", text: "Acheter un second réfrigérateur pour stocker les boissons au garage", co2: 150},
  {id: "S49", text: "Acheter un canapé neuf pour meubler un premier logement social", co2: 200},
  {id: "S50", text: "Acheter un canapé design importé pour refaire sa décoration intérieure", co2: 300},

  // --- Divers : engagement vs indifférence ---
  {id: "S51", text: "Imprimer 10 000 pages de supports pédagogiques pour une école sans accès numérique", co2: 50},
  {id: "S52", text: "Imprimer 10 000 pages de prospectus publicitaires pour un commerce local", co2: 50},
  {id: "S53", text: "Consommer 2 avocats importés par avion/semaine pendant 1 an — seule source de lipides (régime médical)", co2: 80},
  {id: "S54", text: "Consommer 2 avocats importés par avion/semaine pendant 1 an — tendance alimentaire", co2: 80},
  {id: "S55", text: "A/R en voiture pour emmener un enfant handicapé à un centre spécialisé (400 km)", co2: 75},
  {id: "S56", text: "A/R en voiture pour assister à l'ouverture d'un centre commercial (400 km)", co2: 75},

  // --- Méta ---
  {id: "S57", text: "Créer ce questionnaire en discutant 2 h avec Claude Opus 4.6 (~100 requêtes LLM)", co2: 0.5}
];
