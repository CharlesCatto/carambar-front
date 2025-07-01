# 🍬 Carambar & Co - Application de Blagues

Frontend React pour afficher des blagues Carambar aléatoires.

## 🌐 Démo
🔗 [Voir la démo](https://charlescatto.github.io/carambar-front/)

---

## 🎨 Technologies
- React 18
- TypeScript
- Vite
- CSS Modules

---

## 🛠️ Installation

```bash
git clone https://github.com/CharlesCatto/carambar-front.git
cd carambar-front
npm install
```

**🏗️ Structure du projet**

src/
├── components/    # Composants React
├── services/      # Appels API
├── types/         # Définitions TypeScript
├── styles/        # CSS global (index.css)
└── App.tsx        # Composant principal

**🔌 Configuration**

Créez un fichier .env à la racine du projet :

VITE_API_URL=https://carambar-back-hmfy.onrender.com/api/v1 
Vous trouverez un .env.sample avec une configuration pour tester en local carambar-back ( https://github.com/CharlesCatto/carambar-back )

   **🚀 Lancement de l'application**

npm run dev                  # Lancement en mode développement (http://localhost:5173)

---

## ✨ Fonctionnalités

    🎲 Bouton pour générer une blague aléatoire

    🪄 Affichage progressif : d’abord la question, puis la réponse

    🎨 Thème graphique Carambar (couleurs jaune & rose)

---

## 🧠 Auteurs

    Charles Catto
