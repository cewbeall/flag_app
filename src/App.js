import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Style/app_style.css"
import {Link} from "react-router-dom"

function App() {

  const [country, setCountry] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [response, setResponse] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [entered, setEntered] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);


  let countryNames = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'The Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cabo Verde',
    'The Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'The Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Timor-leste',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    "Côte D'ivoire",
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'North Korea',
    'The Republic of Korea',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Republic of North Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'The Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Palestine',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    // 'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    // 'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];

  let amountCountries = countryNames.length
  const newCountry = () => {
    let num = Math.random(0, 1);
    num*=amountCountries;
    num = Math.floor(num);
    let currentCountry = countryNames[num];
    setCountry(currentCountry);
    setIsCorrect(false);
    setEntered(false);
    setReveal(false); 
    // set streak to 0 if it had already been revealed
  }

  const revealAnswer = () => {
    setReveal(true);
    setStreak(0);
  }

  const checkAnswer = () => {
    let r = response.toLowerCase()
    let c = country.toLowerCase()
      if (r === c) {
        if (!isCorrect) {
          setIsCorrect(true);
          // also increment streak
          setStreak(streak + 1);
          if (best < streak + 1) {
            setBest(streak + 1)
          }
        }
          
      }
      else {
        // set streak to 0
        setStreak(0);
      }
      setEntered(true);
  }

  useEffect(() => {
    newCountry();
    setResponse("")
  }, [trigger])

  // let link = "https://restcountries.com/v3.1/name/" + country
  // let link = "https://restcountries.com/v3.1/name/Argentina"
  let link = "https://countryflagsapi.com/png/" + country

  return (
    <div class="all">
      <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
      <div class="heading">
        <h4><Link to="/HowToPlay">How to play</Link></h4>
        <h1 class="title">
          Guess the Flag!
        </h1>
        <h4><Link to="/Creator">Credits</Link></h4>
      </div>
      <div class="flag">
        <img src={link}/>
      </div>
      <div class = "box">
        <div class="enter">
          <div class="entertext"> 
            {entered ? (isCorrect ? <h3>Correct!</h3> : <h3>Incorrect!</h3>) : <h3>Enter an answer</h3>}
            <input value={response} onChange={e => setResponse(e.target.value)}/>
          </div>
          <button onClick={() => checkAnswer()}>Check</button>
        </div>
        <div class="reveal">
          <div class="revealtext"> 
            {reveal ? <h3>{country}</h3> : <h3>Don't know?</h3>}
          </div>
          <button class="revealbutton" onClick={() => revealAnswer()}>Reveal Answer</button>
        </div>
        <div class="new">
          <button onClick={() => setTrigger(!trigger)}>Next Flag</button>
        </div>
        <div class="streak">
          <h3>Streak: {streak}</h3>
          <h3>Best: {best}</h3>
        </div>
      </div>
      
    </div>
  );
}

export default App;
