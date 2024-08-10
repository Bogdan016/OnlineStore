package com.github.Bogdan016.onlinestore.configuration;

import com.github.Bogdan016.onlinestore.entity.Product;
import com.github.Bogdan016.onlinestore.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class RestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);

        HttpMethod[] unsuportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        // dezactivam PUT, POST, DELETE pentru Product
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(unsuportedActions)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(unsuportedActions)));

        // dezactivam PUT, POST, DELETE pentru ProductCategory
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(unsuportedActions)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(unsuportedActions)));

        // practic merge numai GET ca sa fie read only dar sa folosim in continuare REST API-ul
    }
}
