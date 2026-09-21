import { LEGAL, REPO } from "@/lib/content";

const fr = {
  langName: "Français",
  meta: {
    title: "FreeYourDisk — Libérez votre disque, en toute sécurité",
    description:
      "Utilitaire de bureau pour Linux, macOS et Windows qui analyse votre disque et libère de l'espace sans risque : caches, gros fichiers, applications, gestionnaire de tâches et santé des disques — autour d'un donut 3D. Open-source, GPL-3.0.",
  },
  nav: {
    features: "Fonctionnalités",
    preview: "Aperçu",
    safety: "Sécurité",
    download: "Télécharger",
    source: "Code source",
    cta: "Télécharger",
  },
  hero: {
    badge: "Open-source · GPL-3.0",
    titleA: "Libérez votre disque,",
    titleB: "en toute sécurité.",
    sub: "Un utilitaire de bureau pour Linux, macOS et Windows qui analyse votre disque et récupère de l'espace sans risque — caches, gros fichiers, applications, gestionnaire de tâches et santé des disques, autour d'un donut 3D. Corbeille par défaut, zéro suppression à l'aveugle.",
    ctaDownload: "Télécharger",
    ctaSource: "Code source",
    trust: ["Sans privilèges root", "Aucune télémétrie", "100 % local"],
    availableOn: "Disponible sur",
    downloadFor: "Télécharger pour",
    hint: "Aperçu interactif — dans l'application, le donut est en 3D.",
    marquee: [
      "Fichiers temporaires",
      "Gros fichiers",
      "Worktrees git",
      "Caches de dev",
      "Caches applis & navigateurs",
      "Applications",
      "Santé des disques",
      "Gestionnaire de tâches",
    ],
    demo: {
      title: "Le donut qui se remplit",
      total: "Disque",
      used: "Utilisé",
      reclaimable: "Récupérable",
      selected: "Sélectionné",
      toReclaim: "récupérables",
      selectedLabel: "sélectionnés",
      rows: [
        { label: "Caches de dev", gb: 128 },
        { label: "Fichiers temporaires", gb: 41 },
        { label: "Caches navigateur", gb: 35 },
      ],
      footnote:
        "Exemple sur un disque fictif de 913 GB — dans l'application, le donut est en 3D et reflète votre disque réel.",
    },
  },
  features: {
    eyebrow: "// Ce qu'il fait",
    title: "Un seul outil pour reprendre la main sur votre espace",
    sub: "Du donut 3D au gestionnaire de tâches d'urgence : chaque catégorie est mesurée précisément et chaque action est réversible.",
    items: [
      { icon: "ChartDonut", wide: true, title: "Scan unifié, donut 3D", body: "Un seul clic lance tous les scans et la répartition par type. Un donut 3D montre l'espace utilisé, récupérable et libre — la couche verte grandit à mesure que vous cochez." },
      { icon: "Broom", wide: false, title: "Catégories de nettoyage", body: "Fichiers temporaires, gros fichiers, worktrees git obsolètes, caches de dev (node_modules, target, .next…) et caches applis & navigateurs régénérables." },
      { icon: "Package", wide: false, title: "Applications", body: "Inventaire des applications classé par espace — apt / flatpak / snap / AppImage sur Linux, registre & Microsoft Store sur Windows — mises à jour détectées à l'ouverture, désinstallation et mise à jour en lot. Les composants système essentiels sont protégés." },
      { icon: "Gauge", wide: true, title: "Gestionnaire de tâches", body: "Graphe CPU / RAM / swap temps réel, heatmap d'utilisation par cœur, température, table de processus triable, et un « tuer le plus gros » d'urgence. Raccourci global configurable." },
      { icon: "Heartbeat", wide: false, title: "Santé des disques", body: "SMART par disque via nvme-cli (NVMe) ou smartctl (SATA) — état, heures d'allumage, température — avec des graphes de débit en temps réel. Les outils manquants s'installent en un clic selon votre distribution." },
      { icon: "ShieldCheck", wide: false, title: "Sûr par conception", body: "Scans en lecture seule, aperçu avant suppression, corbeille par défaut, liste blanche de zones, et actions git qui ne touchent jamais au travail non commité." },
    ],
  },
  preview: {
    eyebrow: "// Aperçu",
    title: "Pensé pour la lecture d'un coup d'œil",
    shots: [
      { key: "home", title: "Accueil", caption: "Donut 3D d'utilisation et répartition par type de fichier sur tout le disque." },
      { key: "taskmanager", title: "Gestionnaire de tâches", caption: "CPU / RAM / swap temps réel, heatmap par cœur et température." },
      { key: "health", title: "Santé des disques", caption: "SMART, débit temps réel et disponibilité, disque par disque." },
      { key: "applications", title: "Applications", caption: "Classées par espace, mises à jour détectées, désinstallation en lot." },
      { key: "biggest", title: "Plus gros fichiers", caption: "Explorateur lecture seule de ce qui prend le plus de place." },
      { key: "settings", title: "Réglages", caption: "Thème, langue, démarrage, surveillance d'espace et raccourcis." },
    ],
  },
  safety: {
    eyebrow: "// Sûr par conception",
    title: "Six garanties non négociables",
    sub: "Un nettoyeur de disque ne devrait jamais vous faire perdre de données. FreeYourDisk est construit autour d'invariants que les tests font respecter.",
    items: [
      { icon: "Eye", title: "Scans en lecture seule", body: "L'analyse ne modifie jamais le système de fichiers — garanti par les tests." },
      { icon: "ListChecks", title: "Aperçu avant suppression", body: "Chaque suppression affiche un aperçu exact (nombre, taille, destination) et exige une confirmation." },
      { icon: "Recycle", title: "Corbeille par défaut", body: "Les fichiers vont dans la corbeille XDG récupérable ; la suppression définitive est un choix explicite." },
      { icon: "MapPinArea", title: "Liste blanche de zones", body: "Les suppressions sont validées contre des zones autorisées ; les symlinks qui s'en échappent sont refusés." },
      { icon: "GitBranch", title: "Git-safe", body: "Les actions git ne suppriment jamais de worktree contenant des modifications non commitées." },
      { icon: "Lock", title: "Moindre privilège", body: "L'interface tourne sans privilèges ; un helper minimal via Polkit gère le rare besoin de root. La WebView ne tourne jamais en root." },
    ],
  },
  download: {
    eyebrow: "// Télécharger",
    titleA: "Installez FreeYourDisk",
    sub: "Gratuit et open-source. Choisissez le format adapté à votre système.",
    cta: "Télécharger",
    forYou: "Recommandé pour votre système",
    other: "Autres systèmes",
    recommendedPre: "Recommandé pour la santé des disques :",
    releaseNotes: "Notes de version & sommes de contrôle",
    unsignedHint:
      "Builds macOS et Windows non signés : sur macOS, clic droit sur l'app › Ouvrir ; sur Windows, cliquez « Informations complémentaires » › « Exécuter quand même ».",
    os: { linux: "Linux", macos: "macOS", windows: "Windows" } as Record<string, string>,
    osNote: {
      linux: "x86-64",
      macos: "Apple Silicon (arm64)",
      windows: "x64",
    } as Record<string, string>,
    labels: {
      AppImage: "Universel · toutes distributions",
      ".deb": "Debian · Ubuntu",
      ".rpm": "Fedora · RHEL",
      DMG: "macOS · Apple Silicon (non signé)",
      ".exe": "Windows 10 / 11 · installeur",
    } as Record<string, string>,
  },
  faq: {
    eyebrow: "// Questions",
    title: "Tout ce qu'il faut savoir",
    items: [
      { q: "Sur quels systèmes FreeYourDisk fonctionne-t-il ?", a: "Linux, macOS et Windows. Sur Linux : AppImage universel plus paquets natifs .deb (Debian, Ubuntu) et .rpm (Fedora, RHEL). Sur Windows : un installeur (Windows 10/11, x64). Sur macOS : un build Apple Silicon. Les builds macOS et Windows sont des bêtas non signées pour l'instant." },
      { q: "Mes fichiers peuvent-ils être supprimés par erreur ?", a: "Les scans sont en lecture seule, chaque suppression montre un aperçu exact et passe par la corbeille récupérable par défaut. Les zones supprimables sont sur liste blanche et les worktrees git non commités ne sont jamais touchés." },
      { q: "L'application a-t-elle besoin des droits root ?", a: "Non pour l'usage courant. L'interface tourne en utilisateur normal ; un helper minimal est invoqué via Polkit uniquement pour les rares actions privilégiées (lecture SMART NVMe, /var/tmp, paquets apt/snap)." },
      { q: "Est-ce gratuit et open-source ?", a: "Oui. FreeYourDisk est publié sous licence GPL-3.0-or-later. Le code complet est sur GitHub." },
      { q: "Comment obtenir les informations SMART de mes NVMe ?", a: "FreeYourDisk détecte les outils manquants (nvme-cli pour NVMe, smartmontools pour SATA) et les installe en un clic via votre gestionnaire de paquets (apt, dnf, pacman, zypper). Ce sont des dépendances recommandées, pas obligatoires : le reste fonctionne sans." },
    ],
  },
  footer: {
    tagline: "Libérez votre disque, en toute sécurité. Open-source, sous licence GPL-3.0.",
    cols: [
      { title: "Produit", links: [
        { label: "Fonctionnalités", href: "#features", external: false },
        { label: "Aperçu", href: "#screenshots", external: false },
        { label: "Sécurité", href: "#safety", external: false },
        { label: "Télécharger", href: "#download", external: false },
      ]},
      { title: "Code", links: [
        { label: "GitHub", href: REPO, external: true },
        { label: "Notes de version", href: `${REPO}/releases`, external: true },
        { label: "Changelog", href: `${REPO}/blob/master/CHANGELOG.md`, external: true },
        { label: "Licence GPL-3.0", href: `${REPO}/blob/master/LICENSE`, external: true },
      ]},
      { title: "Légal", links: [
        { label: "Mentions légales", href: "/mentions-legales", external: false },
        { label: "Confidentialité", href: "/confidentialite", external: false },
      ]},
    ],
    rights: "GPL-3.0-or-later",
    noData: "Conçu pour Linux, macOS et Windows. Aucune donnée collectée.",
  },
  legalLinks: { notice: "Mentions légales", privacy: "Confidentialité" },
  legal: {
    updated: "Dernière mise à jour : Juin 2026",
    back: "Retour à l'accueil",
    notice: {
      title: "Mentions légales",
      blocks: [
        { h: "1. Éditeur du site", p: ["Le site FreeYourDisk est édité par :"], ul: [
          `Raison sociale : ${LEGAL.company} (SAS)`,
          `SIREN : ${LEGAL.siren}`,
          "Activité principale : Régie publicitaire de médias (code APE : 73.12Z)",
          `Siège social : ${LEGAL.address}`,
          `Email : ${LEGAL.email}`,
          `Téléphone : ${LEGAL.phone}`,
        ]},
        { h: "2. Directeur de la publication", p: [`Le directeur de la publication est le représentant légal de la société ${LEGAL.company}.`], ul: [] },
        { h: "3. Hébergement", p: ["Le site est hébergé par :"], ul: [
          `Hébergeur : ${LEGAL.host.name}`,
          `Adresse : ${LEGAL.host.address}, États-Unis`,
          `Site web : ${LEGAL.host.site}`,
        ]},
        { h: "4. Logiciel & licence", p: [`FreeYourDisk est un logiciel libre distribué sous licence GNU General Public License v3.0 ou ultérieure (GPL-3.0-or-later). Son code source est publiquement accessible sur GitHub (${REPO}). L'usage du logiciel est régi par les termes de cette licence.`], ul: [] },
        { h: "5. Propriété intellectuelle", p: [`Les contenus de ce site de présentation (textes, graphismes, logo, captures d'écran) sont la propriété de ${LEGAL.company}, sauf mention contraire. Le code source de l'application est régi par la licence GPL-3.0.`], ul: [] },
        { h: "6. Données personnelles", p: ["Ce site vitrine ne collecte aucune donnée personnelle et n'utilise pas de cookies de suivi. L'application FreeYourDisk fonctionne entièrement en local et ne transmet aucune donnée. Voir notre politique de confidentialité."], ul: [] },
        { h: "7. Responsabilité", p: [`${LEGAL.company} s'efforce d'assurer l'exactitude des informations diffusées mais ne peut en garantir l'exhaustivité. Le logiciel est fourni « tel quel », sans garantie, conformément à la licence GPL-3.0.`], ul: [] },
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      intro: "FreeYourDisk est conçu autour d'un principe simple : vos données ne quittent jamais votre machine. Cette page explique ce que cela signifie, pour le logiciel comme pour ce site.",
      blocks: [
        { h: "1. L'application FreeYourDisk", p: [], ul: [
          "Aucune télémétrie : l'application n'envoie aucune donnée d'usage, statistique ou identifiant.",
          "Traitement 100 % local : analyse du disque, SMART et gestion des processus s'exécutent sur votre ordinateur.",
          "Aucun compte : aucune inscription ni connexion.",
          "Accès réseau : seulement ce que vous déclenchez (vérification de mises à jour via vos gestionnaires de paquets, ouverture de liens).",
        ]},
        { h: "2. Ce site de présentation", p: [], ul: [
          "Site statique : aucune base de données, aucun formulaire de collecte.",
          "Pas de cookies de suivi ni de traceurs publicitaires.",
          `Hébergement : le site est servi par ${LEGAL.host.name} ; des journaux techniques temporaires peuvent exister à des fins de sécurité, sans nous être transmis pour profilage.`,
          "Téléchargements : les fichiers d'installation sont servis par GitHub, soumis à sa politique de confidentialité.",
        ]},
        { h: "3. Vos droits (RGPD)", p: [`Comme nous ne collectons pas de données personnelles, il n'y a aucune donnée à consulter, rectifier ou supprimer. Si vous nous contactez par email, votre message sert uniquement à vous répondre. Vous pouvez exercer vos droits à ${LEGAL.email}.`], ul: [] },
        { h: "4. Responsable du traitement", p: [`${LEGAL.company} (SAS), ${LEGAL.address}. Contact : ${LEGAL.email}.`], ul: [] },
      ],
    },
  },
};

export type Dictionary = typeof fr;
export default fr;
