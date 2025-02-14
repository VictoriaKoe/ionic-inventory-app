## Getting Started with Ionic Angular Starter Template
This project was bootstrapped with Ionic Angular Starter Template. <br/>

All UI used is [Ionic UI Components](https://ionicframework.com/docs/components).<br/>

Icons used is [ionicons](.https://ionic.io/ionicons?_gl=1*1uv2s1v*_gcl_au*NzE2MjY5NDkyLjE3MzEzNzkyNjU.*_ga*NjQ2Njk3NjEzLjE3MzEzNzkyNjU.*_ga_REH9TJF6KF*MTczNjM4NzQ2OC41Ni4xLjE3MzYzODk4NjAuMC4wLjA.)


## Project Environment Setup
This Ionic project requires Node.js and npm [environment](.https://ionicframework.com/docs/intro/environment). <br> 

1. **Prerequisites**: Ensure you have Node.js installed on your machine. If not, download and install Node.js.

**Extra: <br>
To verify Node.js installation, run:
```bash
$ node --version
$ npm --version
```

2. Install and Run: Clone the repository to your local machine and navigate to the project directory. Run the following commands to install dependencies: 

```bash
cd inventory-frontend
npm install [--force]
```

- Add `--force` flag if you encounter any dependency issues. 

## Ionic Environment Setup
Complete guide: [ionic cli](https://ionicframework.com/docs/intro/cli)

1. Install Ionic CLI with npm
```bash
npm install -g @ionic/cli
```
If there was previous installation of Ionic CLI, it will need to be uninstalled:
```bash
$ npm uninstall -g ionic
$ npm install -g @ionic/cli
```

To check Ionic version installed, run:
```bash
ionic --version
```

2. Run the Ionic App with the command below:
```bash
ionic serve
```

## Firebase/AngularFire Setup
This project requires to install Firebase and AngularFire to run the database. 

1. Install Firebase:
```bash
npm install firebase
```

2. Install Angular Fire:
```bash
ng add @angular/fire
```

** If the above command cannot run, run the below: 
```bash
npm install @angular/fire 
```

3. After installing AngularFire, the prompt will display a list of features for the final setup of firebase.

Select the following features with the arrow keys and space bar:\
<b>
Authentication\
Firestore\
Cloud Messaging\
Cloud Storage
</b>

Press enter and follow the remaining prompts.

**<b>Notes</b>: \
If <b>@angular/fire</b> can't be installed, remove node_modules directory and reinstall again. 

Complete guide: \
[@angular/fire](https://www.npmjs.com/package/@angular/fire)\
[install angular fire](https://firebase.google.com/codelabs/firebase-web#4)

## Available Scripts

In the project directory, you can run:

### `ionic serve`

Runs the app in the development mode.\
Open [http://localhost:8100](http://localhost:8100) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `ionic generate [schematic][name]`

Generate the app pages.

`[schematic]` - type of feature (e.g. page, component, directive, service)\
`[name]` - name/path of feature being generated

Complete guide: [Ionic generate](https://ionicframework.com/docs/cli/commands/generate)

### `ng test`

Test the application. 


