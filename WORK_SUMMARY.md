# Tabi work summary

## Everbase API

First i played with the Everbase API within their online editor.
It gave me a global vision on the datas and how to use it to answer the usage of the app.

## Prep

- _Every good project starts with a kanban_ :)
- I started to write this work summary to plan each step and don't forget to note as the development progresses.
- I wrote quick user stories based on the challenge requirements

As a user:

- I can search for a city, in order to plan my trip
- I can search with the input of a city name, to have detailed datas on a particuliar city
- I can search with the input of a country name, in order to find cities where to travel
- I can search with the input of a continent name, in order to find cities where to travel
- I can be aware of the app loading search results, in order to have a good user experience
- I can be aware of the app encounting errors, in order to have a good user experience
- I can read detailed informations about a city, in order to plan my trip
- I can see the city on a map, in order to know where it is precisely located

As a fellow developer:

- I can read a nice README, in order to onboard easily in the project
- I can run the app with Docker, in order to run it with any environment

## Vue CLI

I initiated the project with the following packages:

- Vue CLI
- Vue Router
- Babel
- ESlint
- Jest
- Vue Apollo

## Dev

- Footer component: a simple query to the Everbase API to list the countries
- Results: a query with variables and some bindings (I've got stuck with graphQL variables and Vue Apollo but it's not that hard afterwards)
- Search: bindings and event emitter
- Style: homebrew quick and dirty responsive CSS

## Docker

I'm not comfortable yet with Docker, so i learned and implemented [the simple example of the Vue Cookbook](https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html)

Have a look at the README for the commands to execute.

## Next steps

- Unit tests (one day, i will master the TDD and implement tests first...)
- Create a detailed view a city, with a Leaflet map
- API key for the Everbase API must be set thru Docker (+ remove .env file)
- Improve front end quality: tests with Webhint & Lighthouse