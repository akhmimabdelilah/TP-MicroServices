package ma.ensa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import ma.ensa.entities.Voiture;
import ma.ensa.repositories.VoitureRepository;

@RestController
public class VoitureController {
	@Autowired
	VoitureRepository voitureRepository;

	@GetMapping("/voitures")
	public List<Voiture> findAll() {
		return voitureRepository.findAll();
	}

	@GetMapping("/voiture/{id}")
	public Voiture findById(@PathVariable Long id) throws Exception {

		return this.voitureRepository.findById(id).orElseThrow(() -> new Exception("voiture inexistant"));
	}

}
