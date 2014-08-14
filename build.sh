grunt build
rm -rf ../KRamosImoveis/KRamosImoveis/static/front
mkdir ../KRamosImoveis/KRamosImoveis/static/front
mv dist/static/front/* ../KRamosImoveis/KRamosImoveis/static/front
mv dist/index.html ../KRamosImoveis/KRamosImoveis/templates/front
mv dist/404.html ../KRamosImoveis/KRamosImoveis/templates/front