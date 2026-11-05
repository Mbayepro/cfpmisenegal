export interface Filiere {
  id: string;
  slug: string;
  titre: string;
  sous_titre?: string;
  description_courte: string;
  description_complete: string;
  categorie: 'technique' | 'industriel' | 'specialise';
  duree: string;
  horaires: string;
  frais_inscription: number;
  mensualite: number;
  debouches: string[];
  matieres: string[];
  materiel: string[];
  avantages: string[];
  image_url: string;
  statut: 'ouvert' | 'bientot' | 'complet';
  ordre: number;
  created_at?: string;
}

export interface InscriptionDossier {
  id?: string;
  code_dossier?: string;
  filiere_id?: string;
  filiere_nom: string;
  session_souhaitee: string;
  creneau: 'jour' | 'soir' | 'weekend';
  nom: string;
  prenom: string;
  email?: string;
  telephone: string;
  whatsapp: string;
  sexe: 'M' | 'F';
  date_naissance?: string;
  adresse: string;
  ville: string;
  niveau_etude: string;
  cni_url?: string;
  diplome_url?: string;
  statut?: 'recu' | 'en_etude' | 'accepte' | 'refuse';
  notes_admin?: string;
  created_at?: string;
}

export interface LeadBrochure {
  id?: string;
  nom_complet: string;
  whatsapp: string;
  filiere_interet?: string;
  source?: string;
  statut_relance?: 'a_relancer' | 'contacte' | 'inscrit' | 'abandon';
  telecharge_a?: string;
}

export interface TarifItem {
  id: string;
  filiere_nom: string;
  niveau: string;
  duree: string;
  frais_inscription: number;
  mensualite: number;
  total_estime: number;
  materiel_inclus: string;
  modalites?: string;
  est_populaire?: boolean;
  ordre: number;
}

export interface Temoignage {
  id: string;
  nom: string;
  origine: string;
  filiere_suivie: string;
  annee_promotion: string;
  entreprise_creee_ou_poste: string;
  photo_url: string;
  video_url?: string;
  citation: string;
  histoire_complete: string;
  est_en_vedette: boolean;
  ordre: number;
}

export interface Actualite {
  id: string;
  slug: string;
  titre: string;
  resume: string;
  contenu: string;
  image_url: string;
  video_url?: string;
  auteur: string;
  categorie: string;
  est_publie: boolean;
  date_publication: string;
}

export interface GalerieItem {
  id: string;
  titre: string;
  description?: string;
  media_url: string;
  video_url?: string;
  type_media: 'photo' | 'video';
  categorie: 'ateliers' | 'chantiers' | 'remise_attestations' | 'partenaires';
  ordre: number;
}

export interface FAQItem {
  id: string;
  question: string;
  reponse: string;
  categorie: string;
  ordre: number;
}

export interface ContactMessage {
  id?: string;
  nom: string;
  email?: string;
  telephone: string;
  sujet: string;
  message: string;
  est_traite?: boolean;
  created_at?: string;
}

