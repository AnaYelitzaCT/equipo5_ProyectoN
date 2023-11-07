
class Person{
    name="";
    email="";
    age="";
    resume="";
    id=0;
  
    static total=0;
  
  constructor(name, email, age, resume){
    this.name=name.toUpperCase();
    this.email=email.toLowerCase();
    this.age=(age<18)?18:age;
    this.resume=resume;
    Person.total++;
    this.id = Person.total;
  }//constructor
  static printTotal(div){
    div.insertAdjacentHTML("afterbegin",`<div class="alert alert-danger" role="alert">
                         Total de personas <strog>${Person.total}</strong></div>
    
    `);
  }
  
  printInfo(div){
    let card=`<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${this.id}.- ${this.email}</div>
    <div class="card-body" id="cardBody_${this.id}">
      <h5 class="card-title">${this.name} - ${this.age} pesos.</h5>
      <p class="card-text">${this.resume}</p>
    </div>
  </div>`;
    div.insertAdjacentHTML("beforeend",card);
  }//printInfo
  }//class  Person
  
  class Employee extends Person {
    department="";
    salary="0.0";
  
    constructor(name, email, age, resume,department, salary){
       super(name, email, age, resume);
       this.department=department;
       this.salary=salary;
    }//constructor
  
    printInfo(div){
       super.printInfo(div);
       let cardBody=document.getElementById(`cardBody_${this.id}`);
       cardBody.insertAdjacentHTML("beforeend",`
       <p class="card-text">${this.department}</p>
       <p class="card-text">$${this.salary} </p>
       `)
    }
  }//class employee
  
  let divObjetos = document.getElementById("divObjetos");
  let empleados=[];//arreglo
  empleados.push(new Employee("Royal Canin", "Alimento", 235, "Alimento para gato","Dev",67268726));
  empleados.push(new Employee("NUCAT","Alimento", 100, "Alimento para gato 13 kg","Dev",6726872));
  empleados.push(new Employee("Whiskas", "Alimento", 184,"Alimento para gato carne 3 kg","Dev",672687 ));
  empleados.push(new Employee("Purina felix", "Alimento", 89,"Alimento para gato en lata","Dev",6726 ));
  empleados.push(new Employee("Purina felix", "Alimento", 99,"Alimento para gato en lata sabor pollo ","Dev",6726 ));
  empleados.push(new Employee("Kit Cat", "Alimento", 74,"Alimento para gato en lata, sabor atún","Dev",6726 ));
  
  empleados.forEach((e)=> e.printInfo(divObjetos));
  Person.printTotal(divObjetos);