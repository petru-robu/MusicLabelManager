FROM php:8.2-apache

# Install MySQL extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy source files
COPY ./src /var/www/html/

EXPOSE 80
