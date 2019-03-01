# StatutBin
Widget pour Jeedom permettant d'affecter automatiquement une icône à un équipement selon son état allumé ou éteint. 
<i>(Info Binaire "off" ou "on" = "0" ou "1")</i>

Le widget inclus 125 appareils différents + 1 visuel par défaut mais il est possible d'utiliser ses propres icônes. 

<b>125 équipements intégrés + 1 icône par défaut:</b>
<img src="/doc/LogoNameList.jpg" alt="nomlogo"/>

Après avoir appliqué le widget, l'attribution des icônes se fait par le nom de la commande (<i>name</i>) ou par l'ajout d'un paramètre optionnel "<i><b>name</b></i>" dans les <i>Paramètres optionnels du widget</i> sur l'onglet <i>Affichage</i> de la configuration de la commande.
<blockquote>Liste des noms d'équipements intégrés au widget: <a href="/doc/LogoNameList.md">Liste "name"</a>.</blockquote>
Il est également possible de spécifier la taille des icônes par l'ajout d'un paramètre optionnel "<i><b>taille</b></i>" ayant pour valeur la dimension souhaitée. Par exemple: taille:100 = icône de 100px*100px. Par défaut les icônes font 80px*80px.
<img src="/doc/params.jpg" alt="parametres"/>

Vous avez la possibilité d'inclure vos propres icônes dans le widget. Le nommage des icônes est normalisé et doit respecter le format suivant: "<i>name_off.png</i>" & "<i>name_on.png</i>". Pour ajouter vos icônes, sur la page du Widget, cliquer sur le bouton "Fichiers" tout en haut puis "choisir un fichier" et ajouter vos images une par une.
<img src="/doc/AjoutIcone.jpg" alt="ajouticone"/>

Le widget prend en compte l'affichage d'une icône en cas de retour d'état différent de "0" ou "1". Le fichier correspondant doit s'appeler: "<i>name_wrn.png</i>". Le widget peut ainsi être adapté aux commandes de type <i>Info</i>/<i>Numérique</i> en remplaçant le sous-type "Binaire" par "Numérique" dans le menu déroulant du widget et "binary" par "numeric" sur la première ligne du code.
<img src="/doc/num.jpg" alt="numerique"/>

