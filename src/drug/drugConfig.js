export default [
  {
    name: "regular",
    expiresInDelta: [
      { gte: Number.NEGATIVE_INFINITY, lt: Number.POSITIVE_INFINITY, delta: -1 }
    ],
    benefitDelta: [
      { gte: 0, lt: Number.POSITIVE_INFINITY, delta: -1 },
      { gte: Number.NEGATIVE_INFINITY, lt: 0, delta: -2 }
    ]
  },
  {
    name: "Herbal Tea",
    expiresInDelta: [
      { gte: Number.NEGATIVE_INFINITY, lt: Number.POSITIVE_INFINITY, delta: -1 }
    ],
    benefitDelta: [
      { gte: 0, lt: Number.POSITIVE_INFINITY, delta: 1 },
      { gte: Number.NEGATIVE_INFINITY, lt: 0, delta: 2 }
    ]
  },
  {
    name: "Magic Pill",
    expiresInDelta: [
      { gte: Number.NEGATIVE_INFINITY, lt: Number.POSITIVE_INFINITY, delta: 0 }
    ],
    benefitDelta: [
      { gte: Number.NEGATIVE_INFINITY, lt: Number.POSITIVE_INFINITY, delta: 0 }
    ]
  },
  {
    name: "Fervex",
    expiresInDelta: [
      { gte: Number.NEGATIVE_INFINITY, lt: Number.POSITIVE_INFINITY, delta: -1 }
    ],
    benefitDelta: [
      { gte: 11, lt: Number.POSITIVE_INFINITY, delta: 1 },
      { gte: 6, lt: 11, delta: 2 },
      { gte: 0, lt: 6, delta: 3 },
      { gte: Number.NEGATIVE_INFINITY, lt: 0, value: 0 }
    ]
  },
  {
    name: "Dafalgan",
    expiresInDelta: [
      { gte: Number.NEGATIVE_INFINITY, lt: Number.POSITIVE_INFINITY, delta: -1 }
    ],
    benefitDelta: [
      { gte: 0, lt: Number.POSITIVE_INFINITY, delta: -2 },
      { gte: Number.NEGATIVE_INFINITY, lt: 0, delta: -4 }
    ]
  }
];
