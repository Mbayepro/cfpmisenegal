# CFPMI Sénégal - Site Web & Espace d'Administration

Site web officiel et portail d'administration pour le **CFPMI Sénégal** (*Centre de Formation Professionnelle aux Métiers de l'Industrie*), slogan : **« Clé de la Réussite »**, situé à **Guédiawaye, Hamo 6, Dakar**.

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 14+](https://nextjs.org/) (App Router, Server & Client Components)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Design & Styles** : [Tailwind CSS](https://tailwindcss.com/) aux couleurs officielles du logo :
  - **Bleu marine** : `#1B2A7B`
  - **Bleu ciel** : `#2AA0E0`
  - **Orange vif** : `#F26A2E`
  - **Rouge dynamique** : `#E31E24`
  - **Fond blanc** : `#FFFFFF`
- **Base de données & Stockage** : [Supabase](https://supabase.com/) (PostgreSQL + RLS + Storage Buckets + Auth)
- **Déploiement** : [Vercel](https://vercel.com/) (zéro configuration, ultra-rapide)
- **Réseau & Référencement** : Métadonnées Open Graph (1200x630) pour WhatsApp, Facebook, LinkedIn, Twitter/X, sitemap XML dynamique, schema.org `EducationalOrganization`.

---

## 🚀 Fonctionnalités & Pages

1. **Accueil (`/`)** :
   - Hero orienté emploi et insertion rapide
   - Bandeau d'annonce officiel de rentrée (**Lundi 17 Novembre 2026**)
   - Chiffres clés (500+ techniciens formés, 94% d'insertion, 100% pratique)
   - Filières en vedette avec icônes métiers personnalisées et débouchés directs au Sénégal
   - Les 4 piliers de la méthode CFPMI (ateliers réels, stages garantis avec CALD Expertise, formateurs chevronnés)
   - Témoignages réels (Jafaridun fondateur d'EFC aux Comores, Doyen Momar SECK avec le Directeur M. Gorgui FAYE)
   - Actualités récentes avec vidéos Facebook intégrées
   - Carte interactive Google Maps pour Guédiawaye Hamo 6
   - **Bouton WhatsApp flottant officiel** avec message pré-rempli sur tout le site
   - **FAQ Express** intégrée dans le pied de page (Footer)

2. **Formations (`/formations` & `/formations/[slug]`)** :
   - **BT Froid et Climatisation** (Brevet de Technicien d'État en 3 ans, post-BFEM)
   - **Froid et Climatisation** (CPS 6 mois pratique accéléré, domestique & industrielle)
   - **Électricité** (Bâtiment & industrielle, armoires, moteurs triphasés, solaire)
   - **Plomberie Sanitaire** (Réseaux, PPR, multicouche, surpresseurs)
   - **Soudure Métallique** (TIG inox, MMA à l'arc, tuyauterie)
   - **Formations à la carte** (Modules sur mesure pour professionnels)
   - Débouchés précis sur le marché sénégalais, fiches d'ateliers et demande de tarifs par WhatsApp

3. **Inscription en ligne (`/inscription`)** :
   - Formulaire multi-étapes (choix de filière, infos personnelles, upload pièce d'identité et diplôme)
   - Attribution d'un **Code Dossier unique** (ex: `CFPMI-892401`)
   - Bouton direct pour confirmer le dossier sur WhatsApp avec le secrétariat

4. **Téléchargement Brochure (`/brochure`)** :
   - Capture de prospects (nom, numéro WhatsApp, filière)
   - Téléchargement instantané du guide officiel 2026 - 2027
   - Enregistrement du lead dans Supabase

5. **Témoignages & Réussites (`/temoignages`)** :
   - Parcours inspirants : Jafaridun (EFC Comores), Doyen Momar SECK (retraité passionné de froid)
   - Liens directs vers les vidéos Facebook officielles

6. **Galerie Photos & Vidéos (`/galerie`)** :
   - Reportages photos des ateliers d'Hamo 6 (montage clim, bancs d'essais, électricité)
   - Vidéos d'ateliers et reels « Kaay Jang Métier »

7. **Contact (`/contact`)** :
   - Formulaire de message direct, repères d'accès Guédiawaye Hamo 6, numéros d'appel directs (+221 77 694 78 71 / +221 76 461 14 63)

8. **Espace Administration (`/admin`)** :
   - Tableau de bord en temps réel
   - Gestion des inscriptions (statuts : reçu, en étude, accepté, refusé)
   - Export CSV des candidatures
   - Gestion des leads brochure avec bouton de relance WhatsApp 1-clic
   - Gestion du contenu (formations, actualités, galerie, FAQ)

---

## 📦 Installation & Démarrage en local

### 1. Cloner le projet et installer les dépendances
```bash
git clone <URL_DU_REPO>
cd CFPMI-Senegal
npm install
```

### 2. Configuration des variables d'environnement
Copiez le fichier d'exemple :
```bash
cp .env.example .env.local
```
Renseignez vos clés Supabase dans `.env.local` :
```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-publishable-ou-anon
```
*(Le site fonctionne aussi en mode démo autonome sans Supabase avec des données d'exemple complètes).*

### 3. Base de données Supabase
1. Rendez-vous sur votre projet Supabase dans **SQL Editor**.
2. Copiez-collez l'intégralité du fichier [`supabase/schema.sql`](supabase/schema.sql).
3. Cliquez sur **Run** pour initialiser les tables, la sécurité RLS et les données de départ.

### 4. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 🚀 Déploiement sur Vercel (Recommandé)

1. Poussez le projet sur GitHub.
2. Connectez-vous sur [Vercel](https://vercel.com/) et cliquez sur **Add New > Project**.
3. Importez votre dépôt GitHub.
4. Dans **Environment Variables**, ajoutez :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Cliquez sur **Deploy**. Votre site est en ligne en moins de 2 minutes avec SSL gratuit !

---

## 📍 Contact CFPMI Sénégal

- **Adresse** : Guédiawaye, Hamo 6, Dakar, Sénégal
- **Téléphone / WhatsApp** : +221 77 694 78 71 / +221 76 461 14 63
- **Email** : cfpmidakar@gmail.com
- **Facebook** : [facebook.com/cfpmisenegal](https://facebook.com/cfpmisenegal)
- **Partenaire Technique** : CALD Expertise
