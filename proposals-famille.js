// =============================================
// Propositions Famille — Dilemmes Carbone
// Contexte : vie de famille, classe moyenne, France métropolitaine
// Sources : ADEME Base Carbone & Impact CO₂ (2024)
//
// Principaux facteurs utilisés :
//   Voiture familiale (7L/100 km, 1 pers.) : 0,211 kg CO₂/km
//   Voiture familiale pleine (4 pers.)      : 0,211 kg/km (total véhicule)
//   Avion court-courrier (1 pers, A/R)      : 0,224 kg/km·pers
//   Camion de déménagement (diesel)         : ~1,0 kg/km
//   Bœuf                                   : 28,0 kg CO₂/kg viande
//   Agneau                                 : 24,0 kg CO₂/kg
//   Porc                                   : 6,67 kg CO₂/kg
//   Fromage pâte dure                      : 6,28 kg CO₂/kg
//   Crevettes tropicales                   : 20,3 kg CO₂/kg
//   Chocolat (tablette)                    : ~6,0 kg CO₂/kg
//   Lait maternisé (poudre)                : ~5,0 kg CO₂/kg
//   Électricité FR                         : 0,057 kg CO₂/kWh
//   Fioul domestique                       : 0,325 kg CO₂/kWh PCI
//   Chauffage élec. résistance 80 m²/hiver : ~1 750 kWh → ~100 kg
//   Sèche-linge A (260 kWh/an)             : ~15 kg/an (élec. FR)
//   Sèche-linge ancien (500 kWh/an)        : ~28 kg/an
//   Climatiseur split (600 kWh/saison)     : ~34 kg (élec. FR)
//   Couches jetables (1 an, ~1 460 pces)   : 0,05 kg/pce → ~73 kg
//   Tablette numérique neuve               : 87 kg (fabrication)
//   Console de jeu neuve                   : ~80 kg (fabrication)
//   Smartphone neuf                        : ~80 kg (fabrication)
//   TV 43" neuve                           : ~180 kg (fabrication)
//   TV 65" OLED neuve                      : ~290 kg (fabrication)
//   Lit bébé + matelas                     : ~35 kg (fabrication)
//   Siège auto neuf                        : ~40 kg (fabrication)
//   Lit + armoire + bureau enfant          : ~120 kg (fabrication)
//
// =============================================
// Règles de construction des paires :
//   - ID impair (F01, F03…) = contexte de NÉCESSITÉ ou contrainte
//   - ID pair  (F02, F04…) = contexte de CONFORT ou loisir
//   - Même thème de dépense entre les deux membres d'une paire
//   - CO₂ différents entre les deux membres, tous dans [50, 250] kg
// =============================================
// ID stables : ne JAMAIS réutiliser un ID supprimé.
// Pour ajouter : prendre le prochain numéro libre (F101, F102…).
// =============================================

export const familleProposals = [

  // ============================================================
  // THÈME 1 — Vacances & déplacements longue distance (F01–F20)
  // ============================================================

  // Paire 1 : route familiale → grand-parents vs tourisme
  {id: "F01", text: "Voiture famille (4 pers.) A/R 400 km — rendre visite à des grands-parents en EHPAD, aucun transport en commun disponible", co2: 170},
  {id: "F02", text: "Voiture famille (4 pers.) A/R 500 km — week-end gastronomique dans une ville réputée", co2: 210},

  // Paire 2 : accompagnement médical vs loisir
  {id: "F03", text: "Voiture (3 pers.) A/R 280 km — accompagner un enfant à un centre de rééducation spécialisé, séances hebdomadaires prescrites", co2: 120},
  {id: "F04", text: "Voiture (3 pers.) A/R 380 km — journée famille dans un grand parc d'attractions", co2: 160},

  // Paire 3 : vol domestique nécessité vs plaisir
  {id: "F05", text: "Vol A/R Paris→Ajaccio (2 adultes) — unique possibilité de voir la famille corse avant opération chirurgicale d'un proche", co2: 140},
  {id: "F06", text: "Vol A/R Paris→Barcelone (2 adultes) — city-break romantique pendant que les enfants sont en colo", co2: 195},

  // Paire 4 : avion seul nécessité vs plaisir
  {id: "F07", text: "Vol A/R (1 adulte) Paris→Bordeaux — convocation urgente au tribunal, TGV complet", co2: 85},
  {id: "F08", text: "Vol A/R (1 adulte) Paris→Rome — week-end culturel pour un anniversaire entre amis", co2: 130},

  // Paire 5 : garde alternée vs vacances
  {id: "F09", text: "Voiture seule A/R 1 000 km — emmener les enfants chez leur autre parent (garde alternée bi-mensuelle, TC inaccessible)", co2: 210},
  {id: "F10", text: "Voiture avec caravane A/R 1 200 km — vacances camping en bord de mer, été", co2: 250},

  // Paire 6 : déménagement étudiant vs fête
  {id: "F11", text: "Location voiture + 600 km d'essence — déménagement d'un enfant majeur entrant à l'université en première année", co2: 95},
  {id: "F12", text: "Location minibus + 800 km — week-end festif de 40 ans organisé avec 7 amis", co2: 150},

  // Paire 7 : récupérer les enfants vs sortie loisir
  {id: "F13", text: "Voiture A/R 140 km — récupérer les enfants chez les grands-parents un dimanche soir, dernier bus passé", co2: 60},
  {id: "F14", text: "Voiture A/R 240 km — marché de Noël dans une ville voisine réputée, sortie plaisir", co2: 100},

  // Paire 8 : camping-car convalescence vs vacances
  {id: "F15", text: "Camping-car loué 1 semaine, 900 km — vacances sédentaires prescrites après opération, impossible de prendre l'avion", co2: 190},
  {id: "F16", text: "Camping-car loué 10 jours, 1 100 km — road trip estival famille de 5, choix de loisir", co2: 240},

  // Paire 9 : rapatriement enfant malade vs shopping
  {id: "F17", text: "Avion A/R (1 adulte) — rapatriement d'urgence depuis résidence secondaire après hospitalisation d'un enfant", co2: 75},
  {id: "F18", text: "Avion A/R (1 adulte) — week-end shopping à Londres, soldes de janvier", co2: 120},

  // Paire 10 : médicaments spéciaux vs loisir
  {id: "F19", text: "Voiture A/R 130 km — récupérer des médicaments rares en pharmacie hospitalière spécialisée, rupture locale", co2: 55},
  {id: "F20", text: "Voiture A/R 210 km — vide-grenier voisin et marché vintage, sortie du dimanche", co2: 90},

  // ============================================================
  // THÈME 2 — Mobilité quotidienne (F21–F36)
  // ============================================================

  // Paire 11 : école rurale déserte vs choix confort
  {id: "F21", text: "Voiture A/R école 15 km/j pendant 6 mois — zone rurale, bus scolaire supprimé faute d'élèves", co2: 95},
  {id: "F22", text: "Voiture A/R école 20 km/j pendant 6 mois — refus du vélo pour l'enfant, route jugée dangereuse", co2: 130},

  // Paire 12 : crèche isolée vs activité extrascolaire
  {id: "F23", text: "Voiture crèche A/R 8 km/j, 5 mois — crèche unique de la commune, accessible uniquement en voiture", co2: 65},
  {id: "F24", text: "Voiture activité extrascolaire A/R 10 km/j, 5 mois — cours de natation 3 fois/semaine", co2: 95},

  // Paire 13 : aidant vs confort
  {id: "F25", text: "Voiture A/R 25 km/j, 20 semaines — aidant familial emmenant quotidiennement un parent âgé en hôpital de jour", co2: 90},
  {id: "F26", text: "Voiture A/R 25 km/j, 20 semaines — trajet domicile-bureau avec parking gratuit, bus disponible en 30 min", co2: 105},

  // Paire 14 : famille nombreuse rurale vs CSP+ urbain
  {id: "F27", text: "SUV diesel 7 places — seul véhicule praticable pour famille nombreuse (5 enfants) en zone rurale sans alternative de transport", co2: 75},
  {id: "F28", text: "SUV diesel 7 places — achat de confort pour famille urbaine avec 2 enfants, gamme jugée plus sûre", co2: 110},

  // Paire 15 : garde alternée vs sport
  {id: "F29", text: "Voiture A/R 12 km/j, 10 semaines — navette hebdomadaire pour garde alternée en péri-urbain", co2: 50},
  {id: "F30", text: "Voiture A/R 19 km/j, 10 semaines — aller-retour salle de sport 3 fois/semaine, bus disponible", co2: 80},

  // Paire 16 : orthophonie vs VTC confort
  {id: "F31", text: "Taxi médical 2x/semaine, 40 km A/R, 3 mois — enfant en orthophonie remboursée, parents sans voiture", co2: 85},
  {id: "F32", text: "VTC quotidien 20 km, 3 mois — refus du métro par confort, horaires personnels flexibles", co2: 120},

  // Paire 17 : examen université vs shopping
  {id: "F33", text: "Voiture A/R 70 km — emmener un enfant à un examen universitaire à 5h du matin, aucun TC à cette heure", co2: 60},
  {id: "F34", text: "Voiture A/R 100 km — journée outlets un samedi, promotions exceptionnelles", co2: 85},

  // Paire 18 : relogement urgence vs déménagement choix
  {id: "F35", text: "Camion de déménagement A/R 150 km — famille relogée d'urgence depuis logement déclaré insalubre par le juge", co2: 70},
  {id: "F36", text: "Camion de déménagement A/R 250 km — déménagement choisi pour agrandir dans une maison plus grande", co2: 110},

  // ============================================================
  // THÈME 3 — Alimentation familiale (F37–F54)
  // ============================================================

  // Paire 19 : anémie prescrite vs habitude
  {id: "F37", text: "Viande rouge 3 repas/sem., 4 mois — enfant en croissance avec carence en fer sévère, prescrit par hématologue pédiatrique", co2: 110},
  {id: "F38", text: "Viande rouge 3 repas/sem., 6 mois — habitude culinaire familiale et préférence gustative, alternatives disponibles", co2: 170},

  // Paire 20 : tradition religieuse vs abonnement boucherie
  {id: "F39", text: "Agneau 1 repas/sem. pendant 3 mois — préparation du sacrifice rituel de l'Aïd, tradition familiale partagée", co2: 60},
  {id: "F40", text: "Agneau 1 repas/sem. pendant 4 mois — abonnement box de viande haut de gamme, découverte gastronomique", co2: 85},

  // Paire 21 : régime médical vs fromages/charcuterie
  {id: "F41", text: "Alimentation riche en fromages locaux 3 mois — régime lacto-protéiné prescrit pour parent diabétique hospitalisé", co2: 75},
  {id: "F42", text: "Raclette + charcuterie importée 3 repas/sem., 3 mois — tradition conviviale de l'hiver dans la famille", co2: 105},

  // Paire 22 : baptême bœuf local vs barbecue régulier
  {id: "F43", text: "Repas de baptême 30 couverts, 8 kg de bœuf local — célébration religieuse unique, organisation famille", co2: 130},
  {id: "F44", text: "Barbecue bi-mensuel, bœuf importé, 6 mois, 20 personnes — rituel estival convivial récurrent", co2: 185},

  // Paire 23 : lait maternisé prescrit vs Deliveroo
  {id: "F45", text: "Lait maternisé 1 an — allaitement impossible pour raison médicale, prescrit par pédiatre, 12 boîtes/mois", co2: 80},
  {id: "F46", text: "Commandes livraison repas quotidiennes 1 mois — parent en télétravail intensif, cuisine délaissée", co2: 115},

  // Paire 24 : chocolat artisanal local vs chocolat premium import
  {id: "F47", text: "Chocolat artisanal local Noël + Pâques, famille de 4 — achat groupé chez chocolatier de proximité, 6 kg/an", co2: 55},
  {id: "F48", text: "Chocolat premium importé (Belgique, Pérou) bi-hebdomadaire, famille de 4, 6 mois — plaisir quotidien", co2: 90},

  // Paire 25 : poisson grossesse vs crevettes habitude
  {id: "F49", text: "Poisson frais hebdomadaire + saumon 2x/mois, 8 mois — régime recommandé pendant grossesse par gynécologue", co2: 70},
  {id: "F50", text: "Crevettes tropicales congelées 2x/semaine, 6 mois — snacking familial habituel du vendredi soir", co2: 100},

  // Paire 26 : aide alimentaire AMAP vs meal kit premium
  {id: "F51", text: "Panier AMAP bio 4 mois — programme municipal aide alimentaire familles précaires, logistique vélo", co2: 95},
  {id: "F52", text: "Abonnement meal kit premium bio 4 mois — livrés en camion réfrigéré, cuisine simplifiée CSP+", co2: 140},

  // Paire 27 : parent isolé petits pots vs yaourts exotiques
  {id: "F53", text: "Petits pots bébé industriels 6 mois — parent isolé sans temps de cuisiner, 2 repas/jour bébé 4–12 mois", co2: 65},
  {id: "F54", text: "Yaourts exotiques et desserts importés quotidiens enfants, 1 an — goût, variété, fin de repas festif", co2: 85},

  // ============================================================
  // THÈME 4 — Logement & énergie (F55–F70)
  // ============================================================

  // Paire 28 : logement mal isolé locataire vs propriétaire inactif
  {id: "F55", text: "Chauffage électrique résistance tout l'hiver, 80 m² — locataire en passoire thermique sans droit aux travaux, budget contraint", co2: 165},
  {id: "F56", text: "Chauffage fioul maison 120 m² — propriétaire qui reporte les travaux de pompe à chaleur depuis 5 ans", co2: 220},

  // Paire 29 : canicule bébé vs climatisation totale
  {id: "F57", text: "Climatisation chambre bébé 2 mois — canicule, RDC sous toiture, bébé de 5 mois sans autre protection possible", co2: 75},
  {id: "F58", text: "Climatisation 4 pièces tout l'été — confort famille aisée avec piscine, logement bien exposé mais chaud", co2: 130},

  // Paire 30 : sèche-linge couches vs quotidien confort
  {id: "F59", text: "Sèche-linge hebdomadaire 1 an — appartement sans terrasse ni séchoir, couches lavables + linge bébé", co2: 55},
  {id: "F60", text: "Sèche-linge quotidien 1 an — séchage extérieur refusé pour gain de temps, grande maison avec jardinage", co2: 85},

  // Paire 31 : chauffe-eau collectif cassé vs bains quotidiens
  {id: "F61", text: "Remplacement chauffe-eau électrique 200 L — cumulus collectif de l'immeuble en fin de vie, famille 4 pers.", co2: 80},
  {id: "F62", text: "Bains chauds quotidiens + douche 30 min chacun, famille 3 pers., 1 an — hygiène excessive, habitude culturelle", co2: 110},

  // Paire 32 : VMC enfant asthmatique vs rénovation salle de bain
  {id: "F63", text: "Installation VMC double flux — humidité persistante dans l'appartement, enfant asthmatique diagnostiqué, préconisé par pneumologue", co2: 100},
  {id: "F64", text: "Rénovation salle de bain complète (carrelage, robinetterie, box) — artisans A/R 100 km × 5 jours, confort et esthétique", co2: 155},

  // Paire 33 : congélateur monoparental vs second frigo confort
  {id: "F65", text: "Congélateur coffre 200 L — parent isolé cuisinant en batch le dimanche pour toute la semaine, surgelé maison", co2: 60},
  {id: "F66", text: "Second réfrigérateur américain — stockage boissons et extra pour réceptions, confort de la maison secondaire", co2: 95},

  // Paire 34 : poêle à granulés rural vs jacuzzi
  {id: "F67", text: "Poêle à granulés (installation + usage 1 hiver) — logement rural sans gaz de ville ni fioul, zone froide (Massif Central)", co2: 140},
  {id: "F68", text: "Jacuzzi électrique extérieur (achat + usage 1 hiver, 2×/semaine) — bien-être et réception en maison individuelle", co2: 190},

  // Paire 35 : famille nombreuse lessive vs perfectionnisme
  {id: "F69", text: "Lave-linge 40 °C quotidien 1 an — famille nombreuse de 7 (5 enfants), aide sociale, pas de tri possible", co2: 70},
  {id: "F70", text: "Lave-linge 90 °C quotidien 1 an — habitude parentale de désinfecter systématiquement, enfants adultes", co2: 100},

  // ============================================================
  // THÈME 5 — Équipement enfants & puériculture (F71–F82)
  // ============================================================

  // Paire 36 : couches prescrites vs commodité
  {id: "F71", text: "Couches jetables éco-certifiées 1 an — allergie cutanée sévère diagnostiquée aux couches lavables (dermatologue)", co2: 75},
  {id: "F72", text: "Couches jetables + lingettes plastiques 1 an — refus des lavables par commodité et manque de temps déclaré", co2: 110},

  // Paire 37 : lit médical vs chambre complète
  {id: "F73", text: "Lit évolutif + matelas orthopédique neuf — scoliose décelée chez l'enfant, prescrit par pédiatre-orthopédiste", co2: 90},
  {id: "F74", text: "Chambre enfant complète neuve (lit, armoire, bureau, décoration) — emménagement maison plus grande, CSP+", co2: 135},

  // Paire 38 : poussette double jumeaux vs premium solo
  {id: "F75", text: "Poussette double neuve — jumeaux nés prématurément, occasion introuvable dans la région en urgence", co2: 55},
  {id: "F76", text: "Poussette tout-terrain premium haut de gamme — premier enfant, achat de confort et de longévité", co2: 95},

  // Paire 39 : siège auto légal vs premium isofix
  {id: "F77", text: "Siège auto groupe 0–1–2 neuf — obligation légale, marché occasion localement épuisé, livraison 48 h", co2: 80},
  {id: "F78", text: "Siège auto rotatif premium + base Isofix neuve — seconde voiture familiale, confort d'installation quotidien", co2: 120},

  // Paire 40 : naissance modeste vs nurserie CSP+
  {id: "F79", text: "Table à langer + baignoire bébé neuves — aide naissance famille avec 2 SMIC, premier enfant en logement social", co2: 65},
  {id: "F80", text: "Nurserie thématique complète (décoration, mobilier, rangement) — premier enfant CSP+, achat en showroom", co2: 100},

  // Paire 41 : vélo utilitaire vs cargo électrique
  {id: "F81", text: "Vélo enfant + siège bébé + casques — mobilité douce pour déplacements nécessaires en zone semi-rurale", co2: 85},
  {id: "F82", text: "Vélo cargo électrique + remorque enfants — loisirs cyclo-urbains, remplace la voiture le week-end", co2: 130},

  // ============================================================
  // THÈME 6 — Numérique & loisirs familiaux (F83–F92)
  // ============================================================

  // Paire 42 : tablette prescrite vs console cadeau
  {id: "F83", text: "Tablette neuve — enfant dyspraxique, outil pédagogique prescrit par ergothérapeute, logiciels spécialisés", co2: 87},
  {id: "F84", text: "Console de jeu dernière génération — cadeau de Noël pour enfant de 10 ans, demandée depuis 1 an", co2: 130},

  // Paire 43 : smartphone collège sécurité vs mode
  {id: "F85", text: "Smartphone reconditionné pour enfant entrant au collège — outil de sécurité familiale (géolocalisation, appels)", co2: 80},
  {id: "F86", text: "Smartphone dernier modèle pour enfant de 12 ans — pour avoir le même que les copains, remplace un modèle fonctionnel", co2: 115},

  // Paire 44 : TV panne vs upgrade plaisir
  {id: "F87", text: "TV 43\" neuve — remplacement de la télévision en panne, seul écran du foyer pour famille de 4 personnes", co2: 180},
  {id: "F88", text: "TV 65\" OLED neuve — upgrade salon pour profiter des films en 4K, ancienne TV de 4 ans offerte", co2: 250},

  // Paire 45 : streaming famille monoparentale vs multi-abo
  {id: "F89", text: "Abonnement streaming familial 1 an — divertissement principal d'une famille monoparentale en zone rurale sans cinéma", co2: 55},
  {id: "F90", text: "3 abonnements streaming simultanés 1 an — chaque membre de la famille veut sa propre plateforme", co2: 80},

  // Paire 46 : PC scolaire précaire vs gaming
  {id: "F91", text: "Ordinateur portable reconditionné — outil scolaire obligatoire, famille sous le seuil de pauvreté, aide CAF", co2: 70},
  {id: "F92", text: "Ordinateur portable gaming neuf — usage mixte (école + jeux), ancien PC encore fonctionnel donné", co2: 105},

  // ============================================================
  // THÈME 7 — Fêtes & événements familiaux (F93–F100)
  // ============================================================

  // Paire 47 : Noël tradition familiale vs mariage traiteur
  {id: "F93", text: "Repas de Noël 15 couverts, bœuf local 8 kg — tradition annuelle organisée par la grand-mère depuis 40 ans", co2: 130},
  {id: "F94", text: "Repas de mariage 80 couverts, agneau + bœuf importé, traiteur et emballages jetables — célébration unique", co2: 200},

  // Paire 48 : baptême sobre vs anniversaire enfant
  {id: "F95", text: "Baptême 30 personnes au local paroissial, déco récupérée, gâteau maison — rite religieux sobre et communautaire", co2: 85},
  {id: "F96", text: "Anniversaire 6 ans, 20 enfants invités, déco plastique neuve + traiteur livraison — fête enfantine incontournable", co2: 140},

  // Paire 49 : sapin naturel local vs artificiel importé
  {id: "F97", text: "Sapin naturel local 3 ans de suite — acheté chez le producteur à 15 km, tradition annuelle de la famille", co2: 65},
  {id: "F98", text: "Sapin artificiel PVC importé + guirlandes LED chinoises — commandé en ligne, pratique et réutilisable 10 ans", co2: 95},

  // Paire 50 : enterrement de vie sobre vs EVJF
  {id: "F99", text: "EVG sobre : nuit en gîte rural, 6 amis en covoiturage A/R 200 km — choix délibérément low-carbon du groupe", co2: 90},
  {id: "F100", text: "EVJF avec activités thème + hôtel, minivan loué A/R 400 km pour 8 personnes — fête attendue depuis des années", co2: 155},
];
