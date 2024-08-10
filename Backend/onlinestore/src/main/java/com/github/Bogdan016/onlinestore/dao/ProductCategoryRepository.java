package com.github.Bogdan016.onlinestore.dao;

import com.github.Bogdan016.onlinestore.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
// productCategory = JSON entry name
// product-category  = /product-category
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
