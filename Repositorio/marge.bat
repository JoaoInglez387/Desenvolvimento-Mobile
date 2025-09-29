cd fs-next

git checkout master
git pull master

git pull origin master_Vinicius
git pull origin master_Inglez
git pull origin master_Fernanda
git pull origin master_Beatriz

git merge origin master_Vinicius
git merge origin master_Inglez
git merge origin master_Fernanda
git merge origin master_Beatriz

git push origin master

git checkout master_Vinicius
git merge origin master
git push origin master_Vinicius

git checkout master_Inglez
git merge origin master
git push origin master_Inglez

git checkout master_Fernanda
git merge origin master
git push origin master_Fernanda

git checkout master_Beatriz
git merge origin master
git push origin master_Beatriz

git checkout master_Vinicius

