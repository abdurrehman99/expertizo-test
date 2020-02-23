import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Progress } from 'reactstrap';

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state = {
            count : 0,
            correctAns : false,
            ansCorrect : '',
            ansFalse : '',
            disabled : false,
            progressCount : 5,
            questions : [
                {
                    category: "Entertainment  Video Games",
                    type: "multiple",
                    difficulty: "hard",
                    question: "What was the name of the hero in the 80s animated video game  Dragon s Lair  ",
                    correct_answer: "Dirk the Daring",
                    incorrect_answers: [
                      "Arthur",
                      "Sir Toby Belch",
                      "Guy of Gisbourne"
                    ]
                  },
                  {
                    category: "Animals",
                    type: "multiple",
                    difficulty: "easy",
                    question: "What is the scientific name for modern day humans ",
                    correct_answer: "Homo Sapiens",
                    incorrect_answers: [
                      "Homo Ergaster",
                      "Homo Erectus",
                      "Homo Neanderthalensis"
                    ]
                  },
                  {
                    category: "Entertainment  Books",
                    type: "multiple",
                    difficulty: "hard",
                    question: "What is Ron Weasley s middle name ",
                    correct_answer: "Bilius",
                    incorrect_answers: ["Arthur", "John", "Dominic"]
                  },
                  {
                    category: "Entertainment  Comics",
                    type: "multiple",
                    difficulty: "easy",
                    question: "Who is the creator of the comic series  The Walking Dead  ",
                    correct_answer: "Robert Kirkman",
                    incorrect_answers: [
                      "Stan Lee",
                      "Malcolm Wheeler-Nicholson",
                      "Robert Crumb"
                    ]
                  },
                  {
                    category: "Entertainment  Board Games",
                    type: "multiple",
                    difficulty: "medium",
                    question: "At the start of a standard game of the Monopoly  if you throw a double six  which square would you land on ",
                    correct_answer: "Electric Company",
                    incorrect_answers: ["Water Works", "Chance", "Community Chest"]
                  },
                  {
                    category: "Geography",
                    type: "multiple",
                    difficulty: "easy",
                    question: "What is the capital of Jamaica ",
                    correct_answer: "Kingston",
                    incorrect_answers: ["Rio de Janeiro", "Dar es Salaam", "Kano"]
                  },
                  {
                    category: "History",
                    type: "multiple",
                    difficulty: "medium",
                    question: "When did Jamaica recieve its independence from England  ",
                    correct_answer: "1962",
                    incorrect_answers: ["1492", "1963", "1987"]
                  },
                  {
                    category: "Animals",
                    type: "boolean",
                    difficulty: "easy",
                    question: "Kangaroos keep food in their pouches next to their children.",
                    correct_answer: "False",
                    incorrect_answers: ["True"]
                  },
                  {
                    category: "General Knowledge",
                    type: "multiple",
                    difficulty: "medium",
                    question: "In 2013 how much money was lost by Nigerian scams ",
                    correct_answer: " 12.7 Billion",
                    incorrect_answers: [
                      " 95 Million",
                      " 956 Million",
                      " 2.7 Billion"
                    ]
                  },
                  {
                    category: "History",
                    type: "multiple",
                    difficulty: "medium",
                    question: "How old was Lyndon B. Johnson when he assumed the role of President of the United States ",
                    correct_answer: "55",
                    incorrect_answers: ["50", "60", "54"]
                  },
                  {
                    category: "Entertainment  Video Games",
                    type: "multiple",
                    difficulty: "hard",
                    question: "In World of Warcraft lore  who organized the creation of the Paladins ",
                    correct_answer: "Alonsus Faol",
                    incorrect_answers: [
                      "Uther the Lightbringer",
                      "Alexandros Mograine",
                      "Sargeras  The Daemon Lord"
                    ]
                  },
                  {
                    category: "Entertainment  Video Games",
                    type: "boolean",
                    difficulty: "medium",
                    question: "In the game  Subnautica   a  Cave Crawler  will attack you.",
                    correct_answer: "True",
                    incorrect_answers: ["False"]
                  },
                  {
                    category: "Entertainment  Japanese Anime   Manga",
                    type: "multiple",
                    difficulty: "medium",
                    question: "What is the name of the device that allows for infinite energy in the anime  Dimension W  ",
                    correct_answer: "Coils",
                    incorrect_answers: ["Wires", "Collectors", "Tesla"]
                  },
                  {
                    category: "Entertainment  Video Games",
                    type: "multiple",
                    difficulty: "medium",
                    question: "What is the name of Cream the Rabbit s mom in the  Sonic the Hedgehog  series ",
                    correct_answer: "Vanilla",
                    incorrect_answers: ["Peach", "Strawberry", "Mint"]
                  },
                  {
                    category: "History",
                    type: "multiple",
                    difficulty: "easy",
                    question: "These two countries held a commonwealth from the 16th to 18th century.",
                    correct_answer: "Poland and Lithuania",
                    incorrect_answers: [
                      "Hutu and Rwanda",
                      "North Korea and South Korea",
                      "Bangladesh and Bhutan"
                    ]
                  },
                  {
                    category: "Entertainment  Television",
                    type: "multiple",
                    difficulty: "hard",
                    question: "Which of these voices wasn t a choice for the House AI in  The Simpsons Treehouse of Horror  short  House of Whacks ",
                    correct_answer: "George Clooney",
                    incorrect_answers: [
                      "Matthew Perry",
                      "Dennis Miller",
                      "Pierce Brosnan"
                    ]
                  },
                  {
                    category: "Entertainment  Music",
                    type: "multiple",
                    difficulty: "medium",
                    question: "From which album is the Gorillaz song   On Melancholy Hill  featured in ",
                    correct_answer: "Plastic Beach",
                    incorrect_answers: ["Demon Days", "Humanz", "The Fall"]
                  },
                  {
                    category: "General Knowledge",
                    type: "boolean",
                    difficulty: "easy",
                    question: "Scotland voted to become an independent country during the referendum from September 2014.",
                    correct_answer: "False",
                    incorrect_answers: ["True"]
                  },
                  {
                    category: "Entertainment Video Games",
                    type: "multiple",
                    difficulty: "medium",
                    questio: "In Left 4 Dead  which campaign has the protagonists going through a subway in order to reach a hospital for evacuation ",
                    correct_answer: "No Mercy",
                    incorrect_answers: [
                      "Subway Sprint",
                      "Hospital Havoc",
                      "Blood Harvest"
                    ]
                  },
                  {
                    category: "History",
                    type: "multiple",
                    difficulty: "hard",
                    question: "What was the last colony the UK ceded marking the end of the British Empire ",
                    correct_answer: "Hong Kong",
                    incorrect_answers: ["India", "Australia", "Ireland"]
                  }
            ]
        }
    }
    qsChange = ()=>{
        if(this.state.count !== 19) {
            this.setState({
                count : this.state.count+1,
                correctAns : false,
                disabled : false,
                progressCount : this.state.progressCount+5,
                ansCorrect : '',
                ansWrong : ''

            });
        }
        
    }
    ansChk = (e)=>{
        if(this.state.questions[this.state.count].correct_answer === e.target.value ){
            console.log('ans is correct');
            this.setState({
                correctAns : true,
                ansCorrect : 'Correct Answer !',
                disabled : true,
            });
        }
        else{
            this.setState({
                correctAns : true,
                ansWrong : 'Wrong Answer !',
                disabled : true,
            });
        }
    }
    render() {
        let rating = 0
        const hard = (
        <StarRatings
            rating={3}
            starRatedColor="dark"
            numberOfStars={3}
            name='rating'
            />);

        const medium = (<StarRatings
            rating={2}
            starRatedColor="dark"
            numberOfStars={3}
            name='rating'
        />);

        const easy = (<StarRatings
            rating={1}
            starRatedColor="dark"
            numberOfStars={3}
            name='rating'
        />);
            

        return (
            <div className='container'>
                <Progress value={this.state.progressCount} />
                <h1>Question {this.state.count+1} of 20</h1>
                <h4>Category : {this.state.questions[this.state.count].category}</h4>
                {
                    console.log(this.state.questions[this.state.count].difficulty)
                    
                }
            
                    <StarRatings
                    rating={1}
                    starRatedColor="dark"
                    numberOfStars={3}
                    name='rating'
                    />
                        

                <h2 className='my-4'>{this.state.questions[this.state.count].question}</h2>

                <button disabled={this.state.disabled} className='btn btn-outline-primary mr-2' value={ this.state.questions[this.state.count].incorrect_answers[2] } onClick={ (e)=>this.ansChk(e) } >{this.state.questions[this.state.count].incorrect_answers[2]}</button>

                <button disabled={this.state.disabled} className='btn btn-outline-primary mr-2' value={ this.state.questions[this.state.count].incorrect_answers[0] } onClick={ (e)=>this.ansChk(e) } >{this.state.questions[this.state.count].incorrect_answers[0]}</button>

                <button disabled={this.state.disabled} className='btn btn-outline-primary mr-2' value={ this.state.questions[this.state.count].correct_answer } onClick={ (e)=>this.ansChk(e) } >{this.state.questions[this.state.count].correct_answer}</button>

                <button disabled={this.state.disabled} className='btn btn-outline-primary mr-2' value={ this.state.questions[this.state.count].incorrect_answers[1] } onClick={ (e)=>this.ansChk(e) } >{this.state.questions[this.state.count].incorrect_answers[1]}</button><br/>
                
                {
                    this.state.correctAns ? 
                    <React.Fragment>
                        <h2 className='text-success my-4'>{this.state.ansCorrect}</h2>
                        <h2 className='text-danger my-4'>{this.state.ansWrong}</h2>
                        <button className='w-25 btn btn-outline-info' onClick={ this.qsChange }>Next Question</button>
                    </React.Fragment> : null
                }
                
            </div>
        )
    }
}

export default Quiz;