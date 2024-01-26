package ma.ensa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.ensa.entities.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

}
