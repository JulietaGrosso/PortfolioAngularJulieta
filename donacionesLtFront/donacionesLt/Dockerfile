# Etapa 1: Build
FROM node:22 AS build


WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Compilar Angular SSR
RUN npm run build

# Etapa 2: Run SSR con Node
FROM node:22-slim AS run

WORKDIR /app

# Copiar solo la build generada
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

RUN npm install --omit=dev

EXPOSE 4000

CMD ["node", "dist/donacionesLt/server/server.mjs"]
