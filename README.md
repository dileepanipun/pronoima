# Pronoima Ionic Angular Application

## Description
This is an Ionic Angular application that provides a mobile-first user experience. The application uses Ionic's UI components and Angular's powerful framework features to deliver a responsive and modern application.

[![Build Status](https://img.shields.io/github/workflow/status/pronoima/pronoima-ionic/CI)](https://github.com/pronoima/pronoima-ionic/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Ionic](https://img.shields.io/badge/ionic-%5E6.0.0-blue)](https://ionicframework.com)
[![Angular](https://img.shields.io/badge/angular-%5E13.0.0-red)](https://angular.io)
[![npm version](https://img.shields.io/npm/v/@pronoima/ionic.svg)](https://www.npmjs.com/package/@pronoima/ionic)

## Project Activity
![Repobeats analytics image](https://repobeats.axiom.co/api/embed/db39c7965eec0a8f6c75c656f2170d2051f529aa.svg "Repobeats analytics image")

## Prerequisites
- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Ionic CLI (`npm install -g @ionic/cli`)
- Angular CLI (`npm install -g @angular/cli`)

## Installation
1. Clone the repository 
```bash
git clone [your-repository-url]
```

2. Install dependencies
```bash
npm install
```

## Development Server
Run the development server:
```bash
ionic serve
```

Navigate to `http://localhost:8100/` in your browser. The application will automatically reload if you change any of the source files.

## Project Structure
The project structure is organized as follows:

```
src/
├── app/                   # Main application folder
│   ├── app.component.ts   # Root component
│   ├── app.module.ts      # Root module
│   └── pages/             # Application pages
├── assets/                # Static assets
├── theme/                 # Global SCSS files
└── environments/          # Environment configurations
```


## Building for Production
To build the application for production:
```bash
ionic build --prod
```


## Deployment
The application can be deployed to various platforms:

### Web
```bash
ionic build --platform web
```
Deploy the contents of `www` folder to your web server

### iOS
```bash
ionic build --platform ios
```


### Android
```bash
ionic build --platform android
```
    
## Testing
- Run unit tests: `ng test`
- Run end-to-end tests: `ng e2e`

## Built With
- Ionic Framework
- Angular
- Capacitor (for native functionality)

## Contributing
[Add your contribution guidelines here]

## License
[Add your license information here]

## Contact
[Add your contact information here]