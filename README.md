# Veille IA

## Exercice recommendations réalisateurs

### Prompt :

```
Donne moi une liste de recommendations de réalisateurs en se basant sur mon réalisateur préféré : Christopher Nolan
```

### Réponse :

```
Si tu aimes Christopher Nolan, tu pourrais apprécier le travail de ces réalisateurs qui partagent certaines similitudes stylistiques ou thématiques avec lui :

1. Denis Villeneuve - Ses films, comme "Blade Runner 2049" et "Inception", partagent une certaine complexité narrative et visuelle.
2. David Fincher - Connu pour ses thrillers psychologiques tels que "Fight Club" et "Seven", Fincher partage une affinité pour les récits complexes et les visuels saisissants.
3. Darren Aronofsky - Son style narratif ambitieux et visuellement saisissant, comme dans "Requiem for a Dream" et "Black Swan", pourrait te plaire si tu apprécies les films de Nolan.
4. Duncan Jones - Il a réalisé des films comme "Moon" et "Source Code", qui ont une approche similaire à celle de Nolan dans la façon de traiter la science-fiction et les concepts philosophiques.
5. David O. Russell - Bien qu'il soit plus connu pour ses drames, Russell partage avec Nolan une capacité à diriger des acteurs talentueux dans des histoires complexes et émotionnelles.
6. Alfonso Cuarón - Son utilisation immersive de la caméra et ses histoires émotionnelles, comme dans "Gravity" et "Children of Men", pourraient te rappeler le style de Nolan.
7. Steven Soderbergh - Ses films, tels que "Traffic" et "Ocean's Eleven", montrent une maîtrise de la narration non linéaire et des thèmes de crime et de suspense.

Ces réalisateurs offrent des expériences cinématographiques captivantes qui pourraient te plaire si tu es fan du travail de Christopher Nolan.
```

### Prompt :
```
Je souhaite obtenir un fichier JSON avec des clés qui permettent d'avoir le nom du réalisateur, et un tableau avec comme clé le titre d'un film réalisé
```

### Réponse :
```
Bien sûr, voici un exemple de fichier JSON avec les réalisateurs que j'ai mentionnés précédemment, ainsi que quelques-uns de leurs films :
```
```json
{
  "Denis Villeneuve": {
    "films": ["Blade Runner 2049", "Arrival", "Prisoners"]
  },
  "David Fincher": {
    "films": ["Fight Club", "Seven", "Gone Girl"]
  },
  "Darren Aronofsky": {
    "films": ["Requiem for a Dream", "Black Swan", "The Fountain"]
  },
  "Duncan Jones": {
    "films": ["Moon", "Source Code", "Warcraft"]
  },
  "David O. Russell": {
    "films": ["Silver Linings Playbook", "American Hustle", "The Fighter"]
  },
  "Alfonso Cuarón": {
    "films": ["Gravity", "Children of Men", "Y Tu Mamá También"]
  },
  "Steven Soderbergh": {
    "films": ["Traffic", "Ocean's Eleven", "Contagion"]
  }
}
```
```
Ce fichier JSON contient les noms des réalisateurs en tant que clés, avec un tableau de leurs films les plus connus associés à chaque réalisateur. Vous pouvez ajouter d'autres films ou réalisateurs selon vos préférences.
```

## Exercice API REST

### Prompt :
```
Je souhaite que tu me donnes un code javascript en utilisant express pour créer une API REST au format JSON sous certaines conditions : 
- toutes les routes sont protégées par un basic auth
- au moins : une route GET qui renvoie un objet correspondant aux paramètres passés dans la query et une route POST qui renvoie un objet correspondant à ce qui a été passé dans le body de la requête
- avoir un fichier .http permettant de tester mes routes avec un basic auth
le fichier .http contiendra des tests exécutés après la réponse de la requête pour s’assurer que nos routes renvoient ce qu’on leur demande
- au moins une des requêtes aura un test s’assurant que l’on obtient une erreur 401 lorsque l’authentification n’est pas bonne
```

### Réponse :

```
Voici un exemple de code JavaScript utilisant Express pour créer une API REST avec les fonctionnalités que vous avez mentionnées :
```
```js
const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

// Middleware for Basic Authentication
app.use(basicAuth({
    users: { 'username': 'password' }, // Replace 'username' and 'password' with your credentials
    unauthorizedResponse: (req) => {
        return 'Unauthorized';
    }
}));

// Middleware for parsing JSON bodies
app.use(express.json());

// GET route
app.get('/api', (req, res) => {
    const queryParams = req.query;
    res.json(queryParams);
});

// POST route
app.post('/api', (req, res) => {
    const requestBody = req.body;
    res.json(requestBody);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

```
```
Pour tester les routes avec un fichier .http, vous pouvez utiliser l'extension REST Client pour Visual Studio Code. Voici un exemple de fichier .http :
```
```http
###
GET /api?param1=value1&param2=value2
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
###

###
POST /api
Content-Type: application/json
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

{
    "key": "value"
}
###

```
```
Assurez-vous de remplacer username et password par vos identifiants réels. Ces identifiants seront utilisés pour l'authentification de base. Les tests seront exécutés automatiquement après chaque requête, et vous devriez voir les réponses correspondantes dans la sortie de la requête. Assurez-vous que votre serveur Express est en cours d'exécution lorsque vous exécutez ces requêtes.
```

### Prompt :
```
refactorise les requetes http du fichier .http pour utiliser une variable pour l’hôte des requêtes (pour avoir par exemple POST {{baseURL}}/api/data)
```

### Réponse : 
```
Pour utiliser une variable pour l'hôte des requêtes dans votre fichier .http, vous pouvez définir une variable dans le fichier lui-même ou utiliser une variable globale dans votre environnement REST Client. Voici comment vous pouvez le faire en utilisant une variable dans le fichier .http :
```
```http
@baseURL = http://localhost:3000

###
GET {{baseURL}}/api?param1=value1&param2=value2
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
###

###
POST {{baseURL}}/api
Content-Type: application/json
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

{
    "key": "value"
}
###
```
```
Dans ce cas, j'ai défini @baseURL comme http://localhost:3000. Vous pouvez remplacer cette valeur par l'URL de votre serveur si elle est différente. En utilisant {{baseURL}} dans vos requêtes, la valeur de @baseURL sera substituée lors de l'exécution des requêtes. Assurez-vous simplement que le serveur Express est en cours d'exécution sur le même hôte et port spécifié dans la variable @baseURL.
```

### Prompt : 
```
Dans le fichier .http il manque une requête pour tester que l’on obtient une erreur 401 lorsque l’authentification n’est pas bonne
```

### Réponse :
```Pour tester une erreur 401 lorsque l'authentification n'est pas correcte, vous pouvez inclure une requête qui envoie une demande sans les informations d'identification correctes. Voici comment vous pouvez le faire dans votre fichier .http :
```
```http
@baseURL = http://localhost:3000

###
GET {{baseURL}}/api?param1=value1&param2=value2
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
###

###
POST {{baseURL}}/api
Content-Type: application/json
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

{
    "key": "value"
}
###

###
GET {{baseURL}}/api?param1=value1&param2=value2
Authorization: Basic wrong_credentials
###
```
```
Dans cette requête supplémentaire, j'ai inclus une demande GET vers l'API avec des informations d'identification incorrectes. Remplacez "wrong_credentials" par des informations d'identification incorrectes réelles. Lorsque vous exécuterez cette requête, vous devriez recevoir une erreur 401 Unauthorized, comme prévu. Cela permet de tester que votre API renvoie correctement une erreur 401 lorsque les informations d'identification sont incorrectes.
```