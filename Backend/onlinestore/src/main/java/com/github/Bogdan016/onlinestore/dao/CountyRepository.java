package com.github.Bogdan016.onlinestore.dao;


import com.github.Bogdan016.onlinestore.entity.County;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface CountyRepository extends JpaRepository<County, Integer> {
    List<County> findByCountryCode(@Param("code") String code);
}
