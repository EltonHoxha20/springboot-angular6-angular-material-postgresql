<h1> Springboot 2, Angular6, and Postgresql Integration Example </h1>

<p>This repository is a simple example on how to integrate Springboot 2 with Angular 6 through RESTful webservice.</p>

<h3>Prerequisites</h3>
<p>1. <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">JDK 1.8</a></p>
<p>2. <a href="https://www.eclipse.org/downloads/packages/">Eclipse</a></p>
<p>3. <a href="https://maven.apache.org">Maven</a></p>
<p>3. <a href="https://angular.io">Angular 6</a></p>
<p>4. <a href="https://material.angular.io">Angular Material</a></p>
<p>5. <a href="https://spring.io/projects/spring-boot">Spring Boot 2.0.2.RELEASE</a><p>
<p>6 <a href="https://spring.io/projects/spring-data">Spring Data JPA</a></p>
<p>7. <a href="https://www.postgresql.org">PostgreSQL</a></p>

<p>The repository contains two separate apps i.e. customer-angular (frontend) and customer-springboot (backend). The interaction of these two apps is achieved through RESTful webservice, in which the customer-angular is a REST consumer and the rest is a REST provider. The customer-springboot used spring data jpa in handling DDL and DML, but instead of applying all its DML's default methods, I defined a custom query using spring data jpa's query annotation. </p>

<h4>Notes:</h4>
<p>1. I left the customer-angular's port by its default i.e. 4200 and customer-springboot's port is 8090 (you could change this in application.properties).</p>
<p>2. You need also change the postgres's user credetial to your own credential in application.properties</p>
<p>3. If the customer-angular app won't run, try to solve the issue by executing npm install in customer-angular root directory.</p>
