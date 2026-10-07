import { LEGAL, REPO } from "@/lib/content";

const fr = {
  langName: "Français",
  meta: {
    title: "FreeYourDisk — Libérez votre disque, en toute sécurité",
    description:
      "FreeYourDisk 0.6.5 : analyse et nettoyage du disque, applications et mises à jour à la demande, gestionnaire de tâches et santé des disques sur Linux, macOS et Windows. Open-source, GPL-3.0.",
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
    sub: "Analysez votre disque, repérez les caches et gros fichiers, gérez vos applications et leurs mises à jour sur Linux, macOS et Windows. Un donut 3D rend l'espace visible, avec aperçu et confirmation avant nettoyage.",
    ctaDownload: "Télécharger",
    ctaSource: "Code source",
    trust: ["Analyse sans droits administrateur", "Aucune télémétrie", "Analyse 100 % locale"],
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
    sub: "Du donut 3D au gestionnaire de tâches : consultez l'espace occupé et choisissez les opérations à lancer, avec des garde-fous adaptés à chaque action.",
    items: [
      { icon: "ChartDonut", wide: true, title: "Scan unifié, donut 3D", body: "Un seul clic lance tous les scans et la répartition par type. Un donut 3D montre l'espace utilisé, récupérable et libre — la couche verte grandit à mesure que vous cochez." },
      { icon: "Broom", wide: false, title: "Catégories de nettoyage", body: "Fichiers temporaires, gros fichiers, worktrees git obsolètes, caches de dev (node_modules, target, .next…) et caches applis & navigateurs régénérables." },
      { icon: "Package", wide: false, title: "Applications et mises à jour", body: "Consultez un inventaire réactif de vos applications sur Linux, Windows et macOS. Vérifiez les mises à jour à la demande via APT / Flatpak / Snap, winget ou Homebrew, puis choisissez celles à installer. Les AppImage et applications sans gestionnaire compatible restent en gestion manuelle." },
      { icon: "Gauge", wide: true, title: "Gestionnaire de tâches", body: "Graphe CPU / RAM / swap temps réel, heatmap d'utilisation par cœur, température, table de processus triable, et un « tuer le plus gros » d'urgence. Raccourci global configurable." },
      { icon: "Heartbeat", wide: false, title: "Santé des disques", body: "État SMART, température et heures d'utilisation lorsque le disque, le système et les outils disponibles les exposent. Suivez aussi les débits en temps réel. L'application vous indique les outils manquants et les options d'installation compatibles." },
      { icon: "ShieldCheck", wide: false, title: "Sûr par conception", body: "Scans en lecture seule, aperçu avant suppression, corbeille par défaut, liste blanche de zones, et actions git qui ne touchent jamais au travail non commité." },
    ],
  },
  preview: {
    eyebrow: "// Aperçu",
    title: "Pensé pour la lecture d'un coup d'œil",
    themeLabel: "Thème des captures",
    light: "Clair",
    dark: "Sombre",
    shots: [
      { key: "home", title: "Accueil", caption: "Donut 3D d'utilisation et répartition par type de fichier sur tout le disque." },
      { key: "taskmanager", title: "Gestionnaire de tâches", caption: "CPU / RAM / swap temps réel, heatmap par cœur et température." },
      { key: "health", title: "Santé des disques", caption: "SMART, débit temps réel et disponibilité, disque par disque." },
      { key: "applications", title: "Applications", caption: "Inventaire réactif, vérification des mises à jour à la demande et actions sur votre sélection." },
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
      { icon: "Recycle", title: "Corbeille par défaut", body: "Le nettoyage des fichiers utilise la corbeille du système par défaut : XDG sous Linux, corbeille macOS ou Windows. La suppression définitive nécessite un choix explicite." },
      { icon: "MapPinArea", title: "Liste blanche de zones", body: "Les suppressions sont validées contre des zones autorisées ; les symlinks qui s'en échappent sont refusés." },
      { icon: "GitBranch", title: "Git-safe", body: "Les actions git ne suppriment jamais de worktree contenant des modifications non commitées." },
      { icon: "Lock", title: "Moindre privilège", body: "L'interface et les analyses courantes tournent sans droits administrateur. Les opérations qui en ont besoin demandent une autorisation par le mécanisme du système, notamment Polkit sous Linux." },
    ],
  },
  download: {
    eyebrow: "// Télécharger",
    titleA: "Installez FreeYourDisk",
    sub: "Version 0.6.5, gratuite et open-source. Choisissez le format et l'architecture adaptés à votre système.",
    cta: "Télécharger",
    forYou: "Recommandé pour votre système",
    other: "Autres systèmes",
    recommendedPre: "Recommandé pour la santé des disques :",
    releaseNotes: "Notes de version & sommes de contrôle",
    unsignedHint:
      "Les versions macOS sont signées avec Developer ID et notarisées par Apple. L'installeur Windows n'est pas signé : SmartScreen peut afficher un avertissement. Vérifiez la provenance du téléchargement avant de l'exécuter.",
    os: { linux: "Linux", macos: "macOS", windows: "Windows" } as Record<string, string>,
    osNote: {
      linux: "x86-64",
      macos: "Apple Silicon (arm64) et Intel (x64)",
      windows: "x64",
    } as Record<string, string>,
    labels: {
      AppImage: "AppImage · Linux x86-64",
      ".deb": "Debian · Ubuntu",
      ".rpm": "Fedora · RHEL",
      "DMG · Apple Silicon": "DMG · Apple Silicon",
      "DMG · Intel": "DMG · Intel",
      ".exe": "Windows 10 / 11 · installeur",
    } as Record<string, string>,
  },
  faq: {
    eyebrow: "// Questions",
    title: "Tout ce qu'il faut savoir",
    items: [
      { q: "Sur quels systèmes FreeYourDisk fonctionne-t-il ?", a: "La version 0.6.5 est disponible pour Linux x86-64 en .deb, .rpm et AppImage ; Windows 10/11 x64 en .exe ; et macOS en DMG pour Apple Silicon ou Intel. Les DMG sont signés et notarisés. L'installeur Windows n'est pas signé et peut déclencher SmartScreen." },
      { q: "Mes fichiers peuvent-ils être supprimés par erreur ?", a: "Les scans sont en lecture seule, chaque suppression montre un aperçu exact et passe par la corbeille récupérable par défaut. Les zones supprimables sont sur liste blanche et les worktrees git non commités ne sont jamais touchés." },
      { q: "L'application a-t-elle besoin des droits administrateur ?", a: "Pas pour les analyses courantes. Certaines lectures SMART, opérations de nettoyage système ou actions sur les paquets peuvent demander une autorisation. Sous Linux, un helper limité utilise Polkit ; les autres systèmes suivent leurs propres mécanismes d'autorisation. L'interface reste exécutée sous votre compte utilisateur." },
      { q: "Comment sont vérifiées les mises à jour des applications ?", a: "Ouvrir l'onglet Applications charge uniquement l'inventaire. Le bouton de vérification interroge ensuite les gestionnaires disponibles : APT, Flatpak et Snap sous Linux, winget sous Windows, Homebrew sous macOS. Seules les mises à jour prises en charge sont proposées. Les AppImage et les applications installées manuellement ne sont pas mises à jour automatiquement." },
      { q: "Est-ce gratuit et open-source ?", a: "Oui. FreeYourDisk est publié sous licence GPL-3.0-or-later. Le code complet est sur GitHub." },
      { q: "Comment obtenir les informations SMART de mes disques ?", a: "La disponibilité dépend du disque, de ses pilotes et des outils installés. Sous Linux, FreeYourDisk peut utiliser nvme-cli et smartmontools, avec installation via un gestionnaire de paquets compatible. Sur macOS et Windows, les informations accessibles dépendent aussi des interfaces et permissions du système. Ces outils restent facultatifs pour les autres fonctions de l'application." },
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
    updated: "Dernière mise à jour : octobre 2026",
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
