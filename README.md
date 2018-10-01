# take-home-test

## Overview

- clone this repository (do not fork it)
- implement the required feature
- publish it to your github
- send us the link and tell us approximatively how much time you spent on this assignment

## Requirements

You are a new developer in the Inato team, and your first job is to add a feature to an existing piece of code.

### Existing code

The existing code computes the evolution of the value of a patient for each elapsed day in a clinical trial. Here are the basic rules of this system:

- each patient has a _surgeryIn_ attribute, which denotes the number of days before the surgery (negative if the surgery is in the past)
- each patient has a _value_ attribute, which denotes how valuable the patient is
- at the end of each day our system lowers both attributes for every patient

But there is more:

- once the surgery has been done, _value_ drops twice as fast
- the _value_ of a patient is never negative
- patients with the disease "Multiple sclerosis" actually increase in _value_ as time passes
- the _value_ of a patient is never more than 50
- patients with the disease "Pancreatic cancer" cannot be operated, and never decrease in _value_
- patients with the disease "Chronic obstructive pulmonary disease", like patients with the disease "Multiple sclerosis", increase in _value_ as their surgery approaches; _value_ increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but _value_ drops to 0 after the surgery

### New feature

We have recently started a new project on a disease named "Hepatocellular carcinoma", which has the following property:

- patients degrade in _value_ twice as fast as normal patients

### Guidelines

You are encouraged to refactor the existing code before adding your own, as you would do if this was a real task in real life. We strongly recommend that you write tests to help you during this process.

Feel free to make any changes to the _updateValue_ method implementation and add any new code as long as everything still works correctly. However, do not alter the _Patient_ class or _patients_ property, as those are used by other pieces of the software.

Please commit as frequently as possible to make the review easier.

## Test

To make sure that you will not break anything in the existing code, we added a log of the simulation in the _output.txt_ file. You can generate a new file by running one of the following commands:

```sh
yarn start
```

```sh
docker-compose up
```
