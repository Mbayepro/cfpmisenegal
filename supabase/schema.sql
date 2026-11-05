-- ==============================================================================
-- SCHEMA SUPABASE COMPLET POUR CFPMI SÉNÉGAL
-- "Clé de la Réussite" - Guédiawaye, Hamo 6, Dakar
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TABLE DES FILIÈRES / FORMATIONS
CREATE TABLE IF NOT EXISTS public.filieres (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    titre TEXT NOT NULL,
    sous_titre TEXT,
    description_courte TEXT NOT NULL,
    description_complete TEXT NOT NULL,
    categorie TEXT NOT NULL DEFAULT 'technique', -- 'technique', 'industriel', 'specialise'
    duree TEXT NOT NULL,                         -- Ex: '3 ans (BT)' ou '6 mois (Accéléré)'
    horaires TEXT NOT NULL,                      -- Ex: 'Jour (8h-13h) / Soir (17h-20h) / Week-end'
    frais_inscription NUMERIC NOT NULL DEFAULT 35000,
    mensualite NUMERIC NOT NULL DEFAULT 40000,
    debouches JSONB NOT NULL DEFAULT '[]'::jsonb,
    matieres JSONB NOT NULL DEFAULT '[]'::jsonb,
    materiel JSONB NOT NULL DEFAULT '[]'::jsonb,
    avantages JSONB NOT NULL DEFAULT '[]'::jsonb,
    image_url TEXT,
    statut TEXT NOT NULL DEFAULT 'ouvert',       -- 'ouvert', 'bientot', 'complet'
    ordre INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 3. TABLE DES CANDIDATURES / INSCRIPTIONS
CREATE TABLE IF NOT EXISTS public.inscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code_dossier TEXT UNIQUE,
    filiere_id UUID REFERENCES public.filieres(id) ON DELETE SET NULL,
    filiere_nom TEXT NOT NULL,
    session_souhaitee TEXT NOT NULL,             -- Ex: 'Rentrée Lundi 17 Novembre 2026'
    creneau TEXT NOT NULL DEFAULT 'jour',        -- 'jour', 'soir', 'weekend'
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    email TEXT,
    telephone TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    sexe TEXT NOT NULL,                          -- 'M' ou 'F'
    date_naissance DATE,
    adresse TEXT NOT NULL,
    ville TEXT NOT NULL DEFAULT 'Dakar',
    niveau_etude TEXT NOT NULL,                  -- 'BFEM', 'BAC', 'CAP', 'Autodidacte', etc.
    cni_url TEXT,                                -- URL Supabase Storage
    diplome_url TEXT,                            -- URL Supabase Storage
    statut TEXT NOT NULL DEFAULT 'recu',         -- 'recu', 'en_etude', 'accepte', 'refuse'
    notes_admin TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 4. TABLE DES LEADS BROCHURE
CREATE TABLE IF NOT EXISTS public.leads_brochure (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nom_complet TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    filiere_interet TEXT,
    source TEXT DEFAULT 'site_web',
    statut_relance TEXT DEFAULT 'a_relancer',     -- 'a_relancer', 'contacte', 'inscrit', 'abandon'
    telecharge_a TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 5. TABLE DE LA GRILLE TARIFAIRE
CREATE TABLE IF NOT EXISTS public.tarifs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    filiere_nom TEXT NOT NULL,
    niveau TEXT NOT NULL,                         -- 'BT en 3 ans (Post-BFEM)', 'Pratique Accélérée (6 mois)', etc.
    duree TEXT NOT NULL,
    frais_inscription NUMERIC NOT NULL,
    mensualite NUMERIC NOT NULL,
    total_estime NUMERIC NOT NULL,
    materiel_inclus TEXT NOT NULL,
    modalites TEXT,
    est_populaire BOOLEAN DEFAULT false,
    ordre INTEGER NOT NULL DEFAULT 1
);

-- 6. TABLE DES TÉMOIGNAGES & RÉUSSITES
CREATE TABLE IF NOT EXISTS public.temoignages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nom TEXT NOT NULL,
    origine TEXT DEFAULT 'Sénégal',
    filiere_suivie TEXT NOT NULL,
    annee_promotion TEXT NOT NULL,
    entreprise_creee_ou_poste TEXT NOT NULL,
    photo_url TEXT,
    citation TEXT NOT NULL,
    histoire_complete TEXT NOT NULL,
    est_en_vedette BOOLEAN DEFAULT true,
    ordre INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 7. TABLE DES ACTUALITÉS ET BLOG
CREATE TABLE IF NOT EXISTS public.actualites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    titre TEXT NOT NULL,
    resume TEXT NOT NULL,
    contenu TEXT NOT NULL,
    image_url TEXT,
    auteur TEXT DEFAULT 'Direction CFPMI',
    categorie TEXT DEFAULT 'Annonce',
    est_publie BOOLEAN DEFAULT true,
    date_publication DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 8. TABLE DE LA GALERIE PHOTOS / VIDÉOS
CREATE TABLE IF NOT EXISTS public.galerie (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    titre TEXT NOT NULL,
    description TEXT,
    media_url TEXT NOT NULL,
    type_media TEXT DEFAULT 'photo',              -- 'photo', 'video'
    categorie TEXT DEFAULT 'ateliers',            -- 'ateliers', 'chantiers', 'remise_attestations', 'partenaires'
    ordre INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 9. TABLE DES QUESTIONS FRÉQUENTES (FAQ)
CREATE TABLE IF NOT EXISTS public.faq (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question TEXT NOT NULL,
    reponse TEXT NOT NULL,
    categorie TEXT DEFAULT 'General',             -- 'General', 'Inscriptions', 'Formations', 'Stages & Emploi'
    ordre INTEGER NOT NULL DEFAULT 1
);

-- 10. TABLE DES CONTACTS ET MESSAGES
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nom TEXT NOT NULL,
    email TEXT,
    telephone TEXT NOT NULL,
    sujet TEXT NOT NULL,
    message TEXT NOT NULL,
    est_traite BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 11. TABLE DES PARAMÈTRES GLOBAUX
CREATE TABLE IF NOT EXISTS public.parametres (
    cle TEXT PRIMARY KEY,
    valeur TEXT NOT NULL,
    description TEXT
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.filieres ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads_brochure ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tarifs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.temoignages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.actualites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.galerie ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faq ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parametres ENABLE ROW LEVEL SECURITY;

-- Lecture publique
CREATE POLICY "Public Read Filieres" ON public.filieres FOR SELECT USING (true);
CREATE POLICY "Public Read Tarifs" ON public.tarifs FOR SELECT USING (true);
CREATE POLICY "Public Read Temoignages" ON public.temoignages FOR SELECT USING (true);
CREATE POLICY "Public Read Actualites" ON public.actualites FOR SELECT USING (est_publie = true);
CREATE POLICY "Public Read Galerie" ON public.galerie FOR SELECT USING (true);
CREATE POLICY "Public Read FAQ" ON public.faq FOR SELECT USING (true);
CREATE POLICY "Public Read Parametres" ON public.parametres FOR SELECT USING (true);

-- Insertion publique
CREATE POLICY "Public Insert Inscriptions" ON public.inscriptions FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Leads" ON public.leads_brochure FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Contacts" ON public.contacts FOR INSERT WITH CHECK (true);

-- Administrateurs authentifiés
CREATE POLICY "Admin All Filieres" ON public.filieres FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Inscriptions" ON public.inscriptions FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Leads" ON public.leads_brochure FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Tarifs" ON public.tarifs FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Temoignages" ON public.temoignages FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Actualites" ON public.actualites FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Galerie" ON public.galerie FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin All FAQ" ON public.faq FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Contacts" ON public.contacts FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin All Parametres" ON public.parametres FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ==============================================================================
-- DONNÉES INITIALES (SEED DATA EN FRANÇAIS)
-- ==============================================================================

-- Paramètres généraux
INSERT INTO public.parametres (cle, valeur, description) VALUES
('nom_etablissement', 'CFPMI Sénégal', 'Centre de Formation Professionnelle aux Métiers de l''Industrie'),
('slogan', 'Clé de la Réussite', 'Slogan officiel du CFPMI'),
('adresse', 'Guédiawaye, Hamo 6, Dakar, Sénégal', 'Adresse physique des ateliers'),
('telephone_1', '+221 77 694 78 71', 'Numéro d''appel et WhatsApp principal'),
('telephone_2', '+221 76 461 14 63', 'Deuxième ligne directe inscriptions'),
('email', 'cfpmidakar@gmail.com', 'Adresse e-mail officielle'),
('facebook', 'https://facebook.com/cfpmisenegal', 'Page Facebook officielle'),
('alerte_active', 'true', 'Affichage du bandeau de rentrée'),
('alerte_titre', 'Rentrée Officielle : Cours ouverts !', 'Texte de l''annonce principale'),
('alerte_texte', 'Nos cours démarrent ce lundi 17 novembre 2026 ! Places limitées en Froid/Climatisation et Électricité.', 'Détail de l''annonce')
ON CONFLICT (cle) DO UPDATE SET valeur = EXCLUDED.valeur;

-- Filières
INSERT INTO public.filieres (slug, titre, sous_titre, description_courte, description_complete, categorie, duree, horaires, frais_inscription, mensualite, debouches, matieres, materiel, avantages, image_url, ordre) VALUES
(
    'bt-froid-et-climatisation-3ans',
    'BT Froid et Climatisation (Post-BFEM)',
    'Brevet de Technicien d''État en 3 ans — L''alternative technique au Bac',
    'Vous venez d''obtenir le BFEM ? Préparez directement un métier technique en 3 ans avec le Brevet de Technicien (BT) en Froid et Climatisation.',
    'Vous venez d’obtenir le BFEM ? Deux parcours de trois ans s’offrent à vous : Dans l’enseignement général, vous poursuivez en Seconde, Première puis Terminale pour préparer le Baccalauréat. Au CFPMI, vous pouvez choisir une voie technique avec le BT en Froid et Climatisation, également sur trois ans, mais avec une formation orientée vers un métier, la pratique et l’insertion professionnelle. Pendant ces trois années, l’apprenant acquiert progressivement des compétences en installation, maintenance et dépannage des équipements de froid et de climatisation. À l’issue du parcours, il obtient un Brevet de Technicien (BT) officiel et peut s’orienter vers différents débouchés : Technicien en Froid et Climatisation, Technicien de maintenance, Monteur Dépanneur, Technicien SAV ou encore poursuivre ses études vers le BTS.',
    'technique',
    '3 ans (Brevet de Technicien)',
    'Jour (08h00 - 14h00, Lundi au Vendredi)',
    40000,
    45000,
    '["Technicien en Froid et Climatisation", "Technicien de maintenance industrielle", "Monteur Dépanneur frigoriste", "Technicien SAV (Service Après-Vente)", "Poursuite d''études vers le BTS", "Création d''entreprise"]'::jsonb,
    '["Thermodynamique et cycle frigorifique", "Montage et dépannage de split et climatisation centrale", "Chambres froides positives et négatives", "Électricité et automatismes industriels", "Brasure forte et tuyauterie cuivre", "Dessin technique et schémas"]'::jsonb,
    '["Bancs didactiques complets", "Manifolds digitaux et pompes à vide double étage", "Chambres froides réelles", "Stations de récupération"]'::jsonb,
    '["Diplôme d''État : Brevet de Technicien (BT)", "Stage terrain garanti chaque année (dont CALD Expertise)", "Parcours 100% orienté métier après le BFEM"]'::jsonb,
    '/images/image3.jpeg',
    1
),
(
    'froid-et-climatisation',
    'Froid et Climatisation (Accélérée 6 mois)',
    'Domestique, Commerciale et Industrielle — 100% Pratique',
    'Apprenez en faisant : montage, dépannage, tirage au vide et charge frigorifique en 6 mois intensifs.',
    'Travaux pratiques au CFPMI : montage et dépannage de climatiseur. La pratique m’apprend ce que la théorie, à elle seule, ne peut pas toujours transmettre. Sur le terrain, tout le corps et tous les sens sont mobilisés : observer les gestes, écouter le fonctionnement des moteurs et des ventilateurs, détecter les bruits anormaux, ressentir la fraîcheur de l’air qui sort de l’évaporateur, manipuler les équipements avec précision et travailler dans le respect des normes de sécurité. C’est ainsi que se construit la vraie maîtrise d’un métier : comprendre, observer, écouter, ressentir et agir.',
    'technique',
    '6 mois (Pratique accélérée)',
    'Jour (08h30 - 13h00) | Soir (17h30 - 20h30) | Samedi intensif',
    35000,
    45000,
    '["Frigoriste d''intervention domestique et tertiaire", "Technicien de maintenance de chambres froides", "Installateur de climatiseurs split et VRV", "Artisan entrepreneur frigoriste indépendant", "Agent technique dans les hôtels et cliniques"]'::jsonb,
    '["Montage et raccordement de climatiseurs split", "Tirage au vide et charge en fluide frigorigène (R410A, R32, R134a)", "Brasure forte sur cuivre et dudgeonnage", "Dépannage méthodique des pannes", "Maintenance préventive des chambres froides"]'::jsonb,
    '["Manifolds digitaux et analogiques", "Pompes à vide double étage", "Chalumeaux oxyacétylène", "Climatiseurs split et bancs d''essais réels"]'::jsonb,
    '["100% pratique en atelier à Hamo 6", "Stage garanti chez nos partenaires (CALD Expertise)", "Attestation certifiée et aide à l''emploi"]'::jsonb,
    '/images/image1.jpeg',
    2
),
(
    'electricite-batiment-industrielle',
    'Électricité Bâtiment & Industrielle',
    'Installations résidentielles, armoires électriques et automatismes',
    'Devenez électricien qualifié : câblage résidentiel, schémas normalisés, armoires de distribution et moteurs industriels.',
    'L''essor immobilier à Dakar exige des électriciens rigoureux et conformes aux normes de sécurité électrique. Le CFPMI forme des techniciens capables de concevoir un schéma unifilaire, de réaliser une installation complète de villa ou d''immeuble, et d''intervenir sur des armoires industrielles triphasées.',
    'technique',
    '6 mois (Pratique accélérée)',
    'Jour (08h30 - 13h00) | Soir (17h30 - 20h30) | Samedi intensif',
    35000,
    40000,
    '["Électricien de bâtiment (villas, chantiers neufs)", "Électrotechnicien de maintenance industrielle", "Câbleur d''armoires électriques de commande", "Installateur d''onduleurs solaires et groupes électrogènes", "Chef d''équipe BTP"]'::jsonb,
    '["Normes NF C 15-100", "Circuits d''éclairage et prises", "Tableaux de répartition, disjoncteurs et mise à la terre", "Moteurs triphasés et démarrage étoile-triangle", "Initiation photovoltaïque"]'::jsonb,
    '["Planches individuelles de câblage", "Moteurs triphasés et contacteurs industriels", "Gaines, conduits et tire-fils professionnels", "Mesureurs d''isolement et de terre"]'::jsonb,
    '["Immersion directe sur de vrais chantiers", "Attestation reconnue", "Horaires flexibles pour les travailleurs"]'::jsonb,
    '/images/image2.jpeg',
    3
),
(
    'plomberie-sanitaire',
    'Plomberie Sanitaire & Réseaux',
    'Installation sanitaire, tuyauterie PPR, PER, cuivre et évacuation',
    'Apprenez l''adduction d''eau, la pose d''équipements sanitaires modernes, le dépannage de fuites et les réseaux d''évacuation.',
    'La plomberie moderne dépasse le simple raccordement : elle intègre les nouveaux matériaux (PPR thermosoudé, multicouche, PER), le dimensionnement des colonnes montantes et la gestion des surpresseurs d''eau.',
    'technique',
    '6 mois (Pratique accélérée)',
    'Jour (08h30 - 13h00) | Soir (17h30 - 20h30) | Week-end',
    35000,
    40000,
    '["Plombier installateur sanitaire", "Dépanneur d''urgence plomberie résidentielle", "Technicien en surpresseurs et pompage d''eau", "Artisan entrepreneur indépendant"]'::jsonb,
    '["Thermosoudure PPR et raccords multicouche", "Brasure sur cuivre", "Pose d''équipements sanitaires modernes", "Groupes de surpression et châteaux d''eau", "Évacuation PVC"]'::jsonb,
    '["Polyfuseuses PPR", "Cintreuses et pinces à sertir", "Stands de montage sanitaire sous pression"]'::jsonb,
    '["Très forte rentabilité dès la fin de formation", "Ateliers pratiques avec eau réelle sous pression"]'::jsonb,
    '/images/image2-bis.jpeg',
    4
),
(
    'soudure-metallique',
    'Soudure Métallique & Tuyauterie',
    'Procédés ARC (MMA), TIG, MIG-MAG et menuiserie métallique',
    'Devenez soudeur d''élite capable de réaliser des assemblages métalliques industriels, charpentes, garde-corps et réservoirs.',
    'Les grands projets d''infrastructures au Sénégal et chantiers de construction recherchent en permanence des soudeurs certifiés. Vous apprendrez à régler les postes, préparer les chanfreins et exécuter des cordons étanches toutes positions.',
    'technique',
    '6 mois (Pratique intensive)',
    'Jour (08h30 - 13h00) | Soir (17h30 - 20h30)',
    35000,
    45000,
    '["Soudeur à l''arc électrode enrobée (MMA)", "Soudeur TIG / MIG-MAG tuyauterie", "Ferronnier et menuisier métallique", "Agent de maintenance sur chantiers industriels"]'::jsonb,
    '["Procédé de soudage à l''électrode enrobée", "Soudure TIG sur tuyauterie fine et inox", "Découpe thermique et meulage", "Lecture de plans de charpente métallique"]'::jsonb,
    '["Postes onduleurs Inverter et combinés TIG", "Masques automatiques LCD", "Tronçonneuses à métaux et tables de bridage"]'::jsonb,
    '["Consommables et métal fournis", "Entraînement quotidien en cabine sécurisée"]'::jsonb,
    '/images/image1.jpeg',
    5
)
ON CONFLICT (slug) DO UPDATE SET
  titre = EXCLUDED.titre,
  image_url = EXCLUDED.image_url,
  description_courte = EXCLUDED.description_courte,
  description_complete = EXCLUDED.description_complete;

-- Actualités avec les textes et images réels
INSERT INTO public.actualites (slug, titre, resume, contenu, image_url, auteur, categorie, est_publie, date_publication) VALUES
(
    'travaux-pratiques-montage-depannage-climatiseur',
    'Travaux pratiques au CFPMI : montage et dépannage de climatiseur',
    'La pratique m’apprend ce que la théorie, à elle seule, ne peut pas toujours transmettre. Sur le terrain, tout le corps et tous les sens sont mobilisés.',
    'Travaux pratiques au CFPMI : montage et dépannage de climatiseur

La pratique m’apprend ce que la théorie, à elle seule, ne peut pas toujours transmettre.

Sur le terrain, tout le corps et tous les sens sont mobilisés : observer les gestes, écouter le fonctionnement des moteurs et des ventilateurs, détecter les bruits anormaux, ressentir la fraîcheur de l’air qui sort de l’évaporateur, manipuler les équipements avec précision et travailler dans le respect des normes de sécurité.

C’est ainsi que se construit la vraie maîtrise d’un métier : comprendre, observer, écouter, ressentir et agir.

Au CFPMI, nous croyons à une formation où l’apprenant ne se contente pas de savoir, mais apprend surtout à savoir faire.

Apprendre en faisant. Comprendre par la pratique. Devenir opérationnel.

#formationprofessionnelle #TravauxPratiques #compétences #insertionprofessionnelle #métier #savoirfaire',
    '/images/image1.jpeg',
    'Direction Pédagogique',
    'Travaux Pratiques',
    true,
    '2026-11-04'
),
(
    'froid-climatisation-refrigeration-pratique-terrain',
    'Froid et Climatisation : Apprendre en faisant, se perfectionner par la pratique',
    'Au CFPMI Sénégal, la formation passe aussi par la pratique, car c’est sur le terrain que le métier se comprend réellement.',
    'Au CFPMI Sénégal, la formation passe aussi par la pratique, car c’est sur le terrain que le métier se comprend réellement.

La théorie donne les bases, mais la pratique développe la compétence, la confiance et le savoir-faire professionnel.

Nous formons des apprenants capables de comprendre, diagnostiquer, monter, dépanner et intervenir efficacement sur les équipements de froid et de climatisation.

Apprendre en faisant. Se perfectionner par la pratique. Devenir opérationnel pour l’emploi.

#froidetclimatisation #Réfrigération #TravauxPratiques #FormationProfessionnelle #insertionprofessionnelle #compétences #savoirfaire #métier #apprentissage #senegal',
    '/images/image2.jpeg',
    'Pôle Froid & Climatisation',
    'Ateliers & Savoir-faire',
    true,
    '2026-11-03'
),
(
    'bfem-deux-parcours-bt-froid-climatisation',
    'Vous venez d’obtenir le BFEM ? Le Brevet de Technicien (BT) en Froid et Climatisation en 3 ans',
    'Deux parcours de trois ans s’offrent à vous : l’enseignement général vers le Bac, ou la voie technique au CFPMI avec le BT en Froid et Climatisation.',
    'Vous venez d’obtenir le BFEM ? 
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

Choisissez la voie technique. Formez-vous à un métier. Construisez votre avenir professionnel.',
    '/images/image3.jpeg',
    'Direction des Études',
    'Orientation BFEM',
    true,
    '2026-11-02'
),
(
    'rentree-novembre-2026-inscriptions-ouvertes',
    'CFPMI : Nos cours démarrent ce lundi 17 novembre 2026 !',
    'Si vous souhaitez rejoindre l’une de nos formations en Froid et Climatisation ou en Électricité, c’est le moment idéal pour intégrer le CFPMI.',
    'Les inscriptions pour la session du CFPMI sont officiellement ouvertes ! Les cours démarrent ce lundi 17 novembre 2026 dans nos ateliers de Guédiawaye Hamo 6.

Nos filières vedettes en Froid et Climatisation ainsi qu''en Électricité Bâtiment & Industrielle accueillent les nouveaux candidats souhaitant acquérir un métier durable et immédiatement rentable.

Pourquoi intégrer le CFPMI dès maintenant ?
• Formations diplômantes, qualifiantes et certifiantes ;
• Compétences 100% pratiques et directement opérationnelles ;
• Débouchés rapides sur le marché de l’emploi à Dakar et dans la sous-région ;
• Accompagnement vers l’insertion professionnelle et stages garantis (ex: CALD Expertise).

Ne laissez pas passer cette opportunité de vous former à un métier recherché et durable. Contactez-nous dès maintenant pour finaliser votre inscription au 77 694 78 71 ou au 76 461 14 63, Guédiawaye Hamo 6.',
    '/images/image2-bis.jpeg',
    'Direction Pédagogique',
    'Annonce Officielle',
    true,
    '2026-11-01'
)
ON CONFLICT (slug) DO UPDATE SET
  titre = EXCLUDED.titre,
  resume = EXCLUDED.resume,
  contenu = EXCLUDED.contenu,
  image_url = EXCLUDED.image_url;

-- Galerie
INSERT INTO public.galerie (titre, description, media_url, type_media, categorie, ordre) VALUES
('Travaux pratiques au CFPMI : montage et dépannage de climatiseur', 'La pratique m’apprend ce que la théorie ne peut pas toujours transmettre. Observer, écouter les ventilateurs, détecter les bruits anormaux et agir.', '/images/image1.jpeg', 'photo', 'ateliers', 1),
('Froid et Climatisation : Apprendre en faisant sur le terrain', 'Apprenants réalisant le diagnostic, le tirage au vide et le dépannage de compresseurs frigorifiques en atelier équipé à Hamo 6.', '/images/image2.jpeg', 'photo', 'ateliers', 2),
('Intervention technique sur split et équipement de réfrigération', 'Se perfectionner par la pratique et devenir directement opérationnel pour le marché de l''emploi sénégalais.', '/images/image2-bis.jpeg', 'photo', 'ateliers', 3),
('Post-BFEM : Cursus BT Froid et Climatisation en 3 ans', 'Séance d''application pour les apprenants du Brevet de Technicien préparant un métier d''avenir.', '/images/image3.jpeg', 'photo', 'ateliers', 4)
ON CONFLICT DO NOTHING;
