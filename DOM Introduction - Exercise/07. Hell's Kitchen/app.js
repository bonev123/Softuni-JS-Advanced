function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      //1. Select els
      let textAreaEl = document.querySelector('#inputs textarea')
      //2. extract/parse input
      let text = textAreaEl.value;
      let inputArr = JSON.parse(text);
      // 3. Add object to keep restaurant and workers data
      let restaurants = {};
      //4. Fill restaurant object with input data
      for (let i = 0; i < inputArr.length; i++) {
         let [restaurantName, workersStr] = inputArr[i].split(' - ');
         let inputWorkers = workersStr.split(', ').map(w => {
            let [name, salary] = w.split(' ');
            return { name, salary: Number(salary) };
         });

         if(!restaurants[restaurantName]){
            restaurants[restaurantName] = {
               workers: [],
               getAverageSalary: function (){return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length}

            }
         }
         restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers);
      }
      //5. Calculate best restaurant
      let sortedRestaurants = Object.values(restaurants).sort((a, b) => b.getAverageSalary() - a.getAverageSalary())
      let bestRestaurant = sortedRestaurants[0]
      let sortedWorkers = bestRestaurant.workers.sort((a,b) => b.salary - a.salary);
      let averageSalary = bestRestaurant[1].getAverageSalary().toFixed(2);

      let bestSalary = sortedWorkers[0].salary.toFixed(2);
      let workersString = sortedWorkers.map(x => `Name: ${x.name} With Salary: ${x.salary}`).join(' ');
      let topRestaurantString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`
      
      //6. Insert best restaurant and worker data into DOM
      let bestRestaurantEl = document.querySelector('#bestRestaurant p')
      let workersEl = document.querySelector('#workers p')

      bestRestaurantEl.textContent = topRestaurantString;
      workersEl.textContent = workersString;
   }
}


// 100/100
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs textarea');
   const bestRestaurantParagraph = document.querySelector('#bestRestaurant p');
   const workersParagraph = document.querySelector('#workers p');
   function onClick() {
      let array = JSON.parse(input.value);
      let restaurants = {};
      array.forEach(line => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArray = tokens[1].split(', ');
         let workers = [];
 
         for (const worker of workersArray) {
            const workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workers.push({ name: workerTokens[0], salary })
         }
         if(restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         } 
         workers.sort((a, b) => b.salary - a.salary);
         const bestSalary = workers[0].salary;
         const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      });
      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;
      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            bestRestaurant = { 
               name, 
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
                                    
            }
            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }
 
      bestRestaurantParagraph.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      let workersResult = [];
      bestRestaurant.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });
 
      workersParagraph.textContent = workersResult.join(' ');
   }
}

