# Use PHP 8.3 with Apache
FROM php:8.3-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    curl \
    nodejs \
    npm \
    libonig-dev \
    libzip-dev \
    && docker-php-ext-install pdo_mysql mbstring zip

# Set working directory
WORKDIR /var/www/html

# Copy app files first (before composer install)
COPY . .

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install PHP dependencies
RUN composer install --prefer-dist --no-progress --no-suggest --no-interaction

# Install Node dependencies (for React/Vite)
RUN npm install

# Fix permissions for Laravel writable dirs
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache


# Optional if using Apache
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf

# Change ownership to www-data
RUN chown www-data:www-data /var/www/html/.env

# Ensure readable
RUN chmod 644 /var/www/html/.env

# Enable Apache modules
RUN a2enmod rewrite ssl headers

# Install Certbot
RUN apt-get update && apt-get install -y certbot python3-certbot-apache

# Expose ports for Apache and Vite dev server
EXPOSE 80
EXPOSE 5173

# Start Apache
CMD ["apache2-foreground"]