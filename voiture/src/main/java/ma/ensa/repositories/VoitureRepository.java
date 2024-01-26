package ma.ensa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.ensa.entities.Voiture;
@Repository
public interface VoitureRepository extends JpaRepository<Voiture, Long> {

}
