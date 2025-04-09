FROM node:18
WORKDIR /app

# Installer les dépendances système (pour SQLite)
RUN apt-get update && apt-get install -y build-essential sqlite3

# 1. D'abord copier package.json
COPY package*.json ./

# 2. Installer les dépendances
RUN npm install

# 3. Copier le reste du code
COPY . .

# Lancer l'app
CMD ["node", "server.js"]