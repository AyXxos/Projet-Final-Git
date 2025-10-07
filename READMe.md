# Projet Final Git

---

## Adam Sicaud / Simon Guigue

--- 

1. Configuration git

PS C:\Users\Etudiants\Documents\GIT\projet_final\Projet-Final-Git> git config --list
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=schannel
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.helper=manager
credential.https://dev.azure.com.usehttppath=true
:...skipping...
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=schannel
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.helper=manager
credential.https://dev.azure.com.usehttppath=true
init.defaultbranch=master
user.email=simon.guigue@supdevinci-edu.fr
user.name=StudentSimonfr
init.defaultbranch=main
core.editor=code --wait
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.symlinks=false
core.ignorecase=true
remote.origin.url=https://github.com/AyXxos/Projet-Final-Git.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.main.remote=origin
branch.main.merge=refs/heads/main

---

2. Création des branches 

feature/image-top-index
* main

---

3. Historique des commits

898c042 (HEAD -> main, origin/main, origin/HEAD, feature/image-top-index) Ajout image top index.html
ea61538 Changements de couleurs et du fond de la navbar
6cc7b20 Ajout du lien de redirection du portfolio d'Adam dans la navbar d'index.html
29afb58 Merge & changement d'icone index.html
398ff4d changement icone index.html
8fc6545 Changement de l'icone d'index.html
27d66db Ajout d'une icone à l'onglet d'index.html
3aadc81 (origin/feature/charte-graphique-git-couleur) changement couleur et opacité easter egg
890e887 (origin/feature/image-bottom-index) Ajout d'image en bas d'index.html
1bcd89b ajout des contributeurs sur commandes.html et changement de la couleur de la variable --accent dans style.cs.
e2c254a Ajout du nom des collaborateurs dans index.html et changement de font dans styles.css
79bbbb8 Initial commit

---

4. Status du projet

On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        READMe.md

nothing added to commit but untracked files present (use "git add" to track)

### Ce fichier readme va etre add et commit puis push après avoir tout écrit c'est donc normal d'avoir ce message

5. Graphe des branches

* 898c042 (HEAD -> main, origin/main, origin/HEAD, feature/image-top-index) Ajout image top index.html
* ea61538 Changements de couleurs et du fond de la navbar
* 6cc7b20 Ajout du lien de redirection du portfolio d'Adam dans la navbar d'index.html
*   29afb58 Merge & changement d'icone index.html
|\
| * 398ff4d changement icone index.html
* | 8fc6545 Changement de l'icone d'index.html
|/
* 27d66db Ajout d'une icone à l'onglet d'index.html
* 3aadc81 (origin/feature/charte-graphique-git-couleur) changement couleur et opacité easter egg
* 890e887 (origin/feature/image-bottom-index) Ajout d'image en bas d'index.html
* 1bcd89b ajout des contributeurs sur commandes.html et changement de la couleur de la variable --accent dans style.cs.
* e2c254a Ajout du nom des collaborateurs dans index.html et changement de font dans styles.css
* 79bbbb8 Initial commit