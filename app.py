from flask import Flask
import requests
from flask_cors import CORS, cross_origin


app = Flask(__name__)

@app.route('/')
@cross_origin()
def hello():
    return 'Hello, world!'

@app.route('/beer')
@cross_origin()
def get_beer():
    response = requests.get('https://api.punkapi.com/v2/beers/random').json()
    ##return name tagline abv ibu food_pairing as a json object
    return {
        "name": response[0]['name'],
        "tagline": response[0]['tagline'],
        "abv": response[0]['abv'],
        "ibu": response[0]['ibu'],
        "food_pairing": response[0]['food_pairing']
    }


@app.route('/cocktail')
@cross_origin()
def get_cocktail():
    response = requests.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').json()
    response = response['drinks'][0]
    name= response["strDrink"]
    tags= response["strTags"].split(",") if response["strTags"] else []
    instructions= response["strInstructions"]
    ingredients=  [response["strIngredient"+str(i)] for i in range(1,16) if response["strIngredient"+str(i) ]  ]
    measure=  [response["strMeasure"+str(i)] for i in range(1,16) if response["strMeasure"+str(i) ]  ]

    return {
        "name": name,
        "tags": tags,
        "instructions": instructions,
        "ingredients": ingredients,
        "measure": measure
    }

@app.route('/suggestion')
@cross_origin()
def get_suggestion():
        response = requests.get('https://api.punkapi.com/v2/beers/random').json()


    
if __name__ == '__main__':
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    app.debug = True
    app.run()
