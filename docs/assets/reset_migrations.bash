rm -R -f ./migrations &&
pipenv run init &&
dropdb -h localhost -U postgres ecommerce || true &&
createdb -h localhost -U postgres ecommerce || true &&
psql -h localhost ecommerce -U postgres -c 'CREATE EXTENSION unaccent;' || true &&
pipenv run migrate &&
pipenv run upgrade
