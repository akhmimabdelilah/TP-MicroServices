package ma.ensa.entities;



public class Client {
	private Long id;
	private String nom;
    private Float age;
	public Client() {
		super();
	}
	public Client(String nom, Float age) {
		super();
		this.nom = nom;
		this.age = age;
	}
	public Client(Long id, String nom, Float age) {
		super();
		this.id = id;
		this.nom = nom;
		this.age = age;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public Float getAge() {
		return age;
	}
	public void setAge(Float age) {
		this.age = age;
	}
    

}
