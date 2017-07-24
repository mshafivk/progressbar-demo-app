# React Progressbar Demo Application
Progress bar assignment - Created a responsive progress bar using react js

### What's in it?

* Simple src/index.jsx and src/index.css (local module css).
* app.jsx contains implementation of progress bar buttons and dropdown. Code fetches data from api to load required components and attributes
* Webpack configuration for development (with hot reloading) and production (with minification).Used react-webpack started kit

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/mshafivk/progressbar-demo-app.git
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
npm run build
```

### Nginx Config

Here is an example Nginx config:
```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```

### Eslint
There is a .eslint.yaml config for eslint ready with React plugin.
To use it, you need to install additional dependencies though:

```
npm install --save-dev eslint eslint-plugin-react
```

To do the actual linting, run:

```
npm run lint
```
### To Do
Unit Tests and TDD implementation

* Now because of time constraints I havent implemented TDD and unit testing for components. I havent started this project in TDD approach. To do unit testing we can have test cases in src/__tests__/ folder. Later if time allows I will be working with that. 
