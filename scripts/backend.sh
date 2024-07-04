echo "installing dependencies, ensure sqlite is available"
composer install

echo "running migrations"
php artisan migrate:refresh

echo "serving on 8000"
php artisan serve
