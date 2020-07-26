from flask import Flask

app = Flask(__name__)
app.config["DEBUG"] = True

# Removed when db is implemented
test_accounts = {
    'jmilne': 'test',
    'strikit925': 'stoopid'
}

url_prefix = '/api/v1'

def accountRequestValidation(request):
    """
    Validates that the request has a username and password
    """
    username = ''
    password = ''
    if 'username' in request.args:
        username = request.args['username']
    else:
        return 'Invalid request, no username provided'

    if 'password' in requsts.args:
        password = request.args['password']
    else:
        return 'Invalid request, no password provided'
    
    return username, password

def accountCreationValidation(username, password):
    """
    Validates that the username and password adhere to well formed guidlines
    """
    pass

# ----- API ENDPOINTS ----- #

@app.route(f'{url_prefix}/accounts/login', methods=['POST'])
def login():
    """
    Returns true if the login account information is valid, false otherwise
    """
    username, password = accountRequestValidation(request)

    # check database
    if test_accounts[username] == password:
        return True
    else:
        return False

@app.route(f'{url_prefix}/accounts/create', methods=['POST'])
def createAccount():
    """

    """
    username, password = accountRequestValidation(request)

    # Make post request to db
    test_accounts[username] = password

if __name__ == '__main__':
    app.run()