# django_angular-example

Example of a Django back end that also serves an angular front end as static.


Like my work? Tip me! https://www.paypal.me/jessamynsmith


### Development

Fork the project on github and git clone your fork, e.g.:

    git clone https://github.com/<username>/django_angular-example.git

Create a virtualenv using Python 3 and install dependencies. I recommend getting python3 using a package manager (homebrew on OSX), then installing [virtualenv](https://virtualenv.pypa.io/en/latest/installation.html) and [virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/install.html#basic-installation) to that python. NOTE! You must change 'path/to/python3'
to be the actual path to python3 on your system.

    mkvirtualenv eggtimer --python=/path/to/python3
    pip install -r requirements/development.txt

Ensure you have node installed (I recommend using homebrew on OSX), then use npm to install Javacript dependencies:

    npm install

Set environment variables as desired. Recommended dev settings:

    export DJANGO_DEBUG=1
    export DJANGO_ENABLE_SSL=0

Optional environment variables, generally only required in production:

    DJANGO_SECRET_KEY
    
You can add the exporting of environment variables to the virtualenv activate script so they are always available.

Set up db:

    python manage.py migrate

Run back-end server:

    python manage.py runserver
    
Once it is running, you can a access it in the browser at: http://127.0.0.1:8000/
    
Run front-end directly (mostly useful for testing):

    npm start

Once it is running, you can access it directly in the browser at: http://127.0.0.1:4200