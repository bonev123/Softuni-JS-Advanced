class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
    addParticipant(participantName, participantGender) {
        this.completed = 0
        if(this.participants[participantName]) {
            return `${participantName} has already been added to the list`
        } else {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`
        }
    }
    completeness(participantName, condition) {
        this.completed = 0;
        if(!this.participants[participantName]) {
            throw new Error(`${participantName} is not in the current participants list`)
        }
        if(this.participants[participantName] && condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        }
        if (condition >= 30 && condition < 60) {
            this.completed = 1;
        } else if (condition >= 60 && condition < 90) {
            this.completed = 2;
        } else {
            this.completed = 3;
        }
        
        if(this.completed == 1 || this.completed == 2) {
            return `${participantName} could only complete ${this.completed} of the disciplines`
        } else {
            let entries = Object.entries(this.participants)
            let data = entries.map(([key, val] = entry) => {
                if (key === participantName) {
                    return val;
                }
                
            });

            //let index = this.participants.indexOf(data);

            let newParticipant = {
                participantName: participantName,
                participantGender: data[0]
            } 
            this.listOfFinalists.push(newParticipant)
            return `Congratulations, ${participantName} finished the whole competition`
        }
        
    }
    rewarding (participantName) {
        if(!this.listOfFinalists.some(f => f.participantName === participantName)) {
            return `${participantName} is not in the current finalists list`
        } else {
            return `${participantName} was rewarded with a trophy for his performance`
        }
    }
    showRecord(criteria) {
        if(this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`
        }
        

        if(!this.listOfFinalists.some(f => f.participantGender === criteria)) {
            return `There are no ${participantGender}'s that finished the competition`
        } else {
            
            this.listOfFinalists.forEach((finalist) => {
            return(`${finalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`)
            });
    
        }
        
    }
    }


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));
console.log(contest.showRecord("all"));






