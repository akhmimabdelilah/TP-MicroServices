package ma.ensa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.discovery.ReactiveDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@EnableDiscoveryClient
@RestController
//@EnableEurekaClient	
@SpringBootApplication
public class GateWayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GateWayApplication.class, args);
	}

	@GetMapping
	public String helloGateway() {
		return "Hello Gateway";
	}

//	@Bean
//	public RouteLocator routes(RouteLocatorBuilder builder) {
//	  return builder.routes().route(r ->.path("/clients/**").uri("lb://SERVICE-CLIENT")).build();
//	 }
//
//	@Bean
//	GateWayApplication routesDynamique(ReactiveDiscoveryClient rdc, DiscoveryLocatorProperties dlp) {
//		return new DiscoveryClientRouteDefinitionLocator(rdc, dlp);
//	}

}
