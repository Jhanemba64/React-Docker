# Étape 1 : Utilise Node.js pour le développement
FROM node:18-alpine

# Définir le répertoire de travail dans le container
WORKDIR /app

# Copier les fichiers nécessaires pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet dans le container
COPY . .

# Exposer le port utilisé par Vite
EXPOSE 5173

# Commande par défaut pour lancer Vite en mode développement
CMD ["npm", "run", "dev"]
