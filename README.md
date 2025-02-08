[Vidéo de démo disponible ici](https://github.com/Noe-Delcroix/proof-of-work/blob/main/demo/demo.mp4)



## Analyse Critique du Proof of Work

### 1. Problèmes de l'implémentation actuelle
L'implémentation actuelle de la fonction generateProof présente plusieurs faiblesses qui compromettent la sécurité et l'intégrité de cette blockchain. :

**Absence de difficulté ajustable** : La fonction ne semble pas inclure un mécanisme pour ajuster la difficulté du proof of work. Dans un système de blockchain robuste, la difficulté doit être ajustée en fonction du temps nécessaire pour miner un bloc, afin de maintenir un rythme constant de création de blocs. Cela empêche les mineurs de miner trop rapidement ou trop lentement, ce qui pourrait entraîner des problèmes de congestion ou de lenteur du réseau.

**Vulnérabilité aux attaques par force brute** : La méthode actuelle de génération de preuve repose sur des calculs simples basés sur des valeurs d'adresse. Cela peut permettre à un attaquant de prédire ou de calculer facilement la preuve requise, rendant le système vulnérable aux attaques par force brute. Un bon système de proof of work devrait nécessiter des calculs complexes qui prennent du temps et des ressources pour être résolus.

**Manque de vérification cryptographique **: La fonction n'utilise pas de mécanismes cryptographiques robustes pour garantir l'intégrité des transactions. Les preuves devraient être basées sur des algorithmes cryptographiques éprouvés qui rendent difficile la falsification des données.

### 2. Risques de sécurité
Les faiblesses identifiées dans l'implémentation actuelle entraînent plusieurs risques de sécurité :

**Attaques de double dépense** : Si un attaquant peut facilement générer des preuves, il pourrait potentiellement créer des transactions frauduleuses et tenter de les valider sur le réseau, ce qui compromettrait l'intégrité de la blockchain.

**Centralisation du minage** : Si la difficulté du proof of work n'est pas ajustée, cela pourrait favoriser certains mineurs qui ont plus de ressources, entraînant une centralisation du minage. Cela va à l'encontre des principes décentralisés d'une blockchain.

**Manipulation des transactions** : L'absence de vérification cryptographique pourrait permettre à un attaquant de manipuler les transactions ou de créer des blocs invalides, ce qui pourrait nuire à la confiance dans le système.

## Conclusion
L'implémentation actuelle du proof of work présente des faiblesses qui compromettent la sécurité du système. En améliorant la complexité des calculs, en ajustant la difficulté et en intégrant des mécanismes de vérification cryptographique, on pourrait renforcer la sécurité de la blockchain et garantir son bon fonctionnement.
