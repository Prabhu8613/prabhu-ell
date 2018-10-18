# YellCampaign

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Doker stuff


#Build :

sudo docker build -t crm-campaign-ux .

#Push the image to docker :

sudo docker login -u `username` -p `password`

sudo docker tag crm-campaign-ux capstonetravelagency/crm-campaign-ux

sudo docker push capstonetravelagency/crm-campaign-ux

#Pull

sudo docker pull capstonetravelagency/crm-campaign-ux

# Run the container

sudo docker run -it -p 4203:4203 capstonetravelagency/crm-campaign-ux

