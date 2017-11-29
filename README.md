
#Fais-toi des muscles

## Table of Contents

1. Features

## Features

- A user can know his 1RM based on a number of repetitions 
- A user can create a program from his X RM, for the 4th exercices
- A program is a succession of cycles
- A cycle is divide into 4 weeks
- A week contains 4 Sessions
- A Session is a chain of 4 main lifts

## In Progress 
    - Afficher le retour du webservice de login dans le connected component

-> Brancher le mapdispatch sur le calcul du 1RM, pour mettre également dans le Worker son programme s'il n'existe pas
-> trouver un système pour faire de même pour les 4 Lifts
-> Refondre l'interface pour avoir 4 zones comme sur les IHM
-> Use business class for initialize the program of the user when he is logged
-> Manage the form for display 4 area, one per lift
-> Manage form for allow user to fill his maxes

- A user can know his 1RM based on a number of repetitions
- When he is logged, if he has no program yet, we show him the program builder

## Done 
-> Login -> branch the Login page form to the Log action (actionCreator -> Sagas -> api)
-> Login -> hide the Login comp / or display a message  when we have no worker connected.
