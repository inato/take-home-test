# Inato Take-Home Test Specification

You are a new developer in the Inato team, and your first job is to add a feature to an old existing piece of code.

## System specifications

Hi and welcome to the team. We are in the future, and Inato has extended its activities by opening a pharmacy. Your task is to add a new feature to our system so that we can begin distributing a new drug. First an introduction to our system:

- All drugs have an `expiresIn` value which denotes the number of days we have until the item expires.
- All drugs have a `benefit` value which denotes how powerful the drug is.
- At the end of each day our system lowers both values for every drug

But there is more:

- Once the expiration date has passed, Benefit degrades twice as fast.
- The Benefit of an item is never negative.
- "Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.
- The Benefit of an item is never more than 50.
- "Magic Pill" never expires nor decreases in Benefit.
- "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches. Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.

We have recently signed a supplier of "Dafalgan". This requires an update to our system:

- "Dafalgan" degrades in Benefit twice as fast as normal drugs.

## Instructions

- [ ] Clone this repository (do **not** fork it)
- [ ] Implement the required feature
- [ ] Publish it on your GitHub (or Gitlab, or whatever...)
- [ ] Send us the link and tell us approximately how much time you spent on this assignment

You are encouraged to refactor the existing code before adding your own, as you would do if this was a real task in real life. We strongly recommend that you write tests to help you during this process.

Feel free to make any changes to the `updateBenefitValue` method implementation and add any new code as long as everything still works correctly. However, do not break the public API of the `Drug` and `Pharmacy` classes, as those are used by other pieces of the software (you can add new methods though).

Please commit as frequently as possible to make the review easier.

We expect you to spend no more than 5 hours on this assignment. We value the quality of the end result, not how much time you have spent on it.

## Test

To make sure that you will not break anything in the existing code, we added the result of the simulation in the _output.json_ file. Make sure that your code is able to generate a file with identical content. You can generate a new file by running one of the following commands:

```sh
pnpm start
```

```sh
docker-compose up
```
