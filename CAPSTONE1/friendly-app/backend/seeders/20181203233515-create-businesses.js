'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Businesses", [
    {
      business_id: 1,
      name: "McDonald's",
      score: 100
    },
    {
      business_id: 2,
      name: "KFC",
      score: 80
    },
    {
      business_id: 3,
      name: "Burger King",
      score: 95
    },
    {
      business_id: 4,
      name: "Starbucks",
      score: 100
    },
    {
    business_id: 5,
    name: "Pizza Hut",
    score: 80
    },
  {
    business_id: 6,
    name: "Taco Bell",
    score: 80
  },
  {
    business_id: 7,
    name: "Wendy's",
    score: 80
  },
  {
    business_id: 8,
    name: "Domino's Pizza",
    score: 80
  },
  {
    business_id: 9,
    name: "Shell",
    score: 100
  },
  {
    business_id: 10,
    name: "Esso",
    score: 95
  },
  {
    business_id: 11,
    name: "Mobil",
    score: 95
  },
  {
    business_id: 12,
    name: "Choice Hotels",
    score: 100
  },
  {
    business_id: 13,
    name: "Clarion",
    score: 100
  },
  {
    business_id: 14,
    name: "Comfort Inn",
    score: 100
  },
  {
    business_id: 15,
    name: "Comfort Suites",
    score: 100
  },
  {
    business_id: 16,
    name: "Econo Lodge",
    score: 100
  },
  {
    business_id: 17,
    name: "Quality Inn & Suites",
    score: 100
  },
  {
    business_id: 18,
    name: "Quality Hotel & Suites",
    score: 100
  },
  {
    business_id: 19,
    name: "Sleep Inn",
    score: 100
  },
  {
    business_id: 20,
    name: "Hilton",
    score: 100
  },
  {
    business_id: 21,
    name: "Hyatt",
    score: 100
  },
  {
    business_id: 22,
    name: "Intercontinental",
    score: 100
  },
  {
    business_id: 23,
    name: "Holiday Inn",
    score: 100
  },
  {
    business_id: 24,
    name: "Kimpton",
    score: 100
  },
  {
    business_id: 25,
    name: "Marriott",
    score: 100
  },
  {
    business_id: 26,
    name: "Wyndham",
    score: 100
  },
  {
    business_id: 27,
    name: "Avis",
    score: 95
  },
  {
    business_id: 28,
    name: "Budget",
    score: 95
  },
  {
    business_id: 29,
    name: "Radisson",
    score: 95
  },
  {
    business_id: 30,
    name: "Enterprise",
    score: 95
  },
  {
    business_id: 31,
    name: "Hertz",
    score: 95
  },
  {
    business_id: 32,
    name: "Apple",
    score: 100
  },
  {
    business_id: 33,
    name: "Fedex",
    score: 100
  },
  {
    business_id: 34,
    name: "UPS",
    score: 100
  },
  {
    business_id: 35,
    name: "PetSmart",
    score: 100
  },
  {
    business_id: 36,
    name: "Ann Taylor",
    score: 100
  },
  {
    business_id: 37,
    name: "Justice",
    score: 100
  },
  {
    business_id: 38,
    name: "LOFT",
    score: 100
  },
  {
    business_id: 39,
    name: "Best Buy",
    score: 100
  },
  {
    business_id: 40,
    name: "EB Games",
    score: 100
  },
  {
    business_id: 41,
    name: "Hallmark",
    score: 100
  },
  {
    business_id: 42,
    name: "Herman Miller",
    score: 100
  },
  {
    business_id: 43,
    name: "Design Within Reach",
    score: 100
  },
  {
    business_id: 44,
    name: "The Home Depot",
    score: 100
  },
  {
    business_id: 45,
    name: "Bath & Body Works",
    score: 100
  },
  {
    business_id: 46,
    name: "La Senza",
    score: 100
  },
  {
    business_id: 47,
    name: "Victoria's Secret",
    score: 100
  },
  {
    business_id: 48,
    name: "Nike",
    score: 100
  },
  {
    business_id: 49,
    name: "Office Depot",
    score: 100
  },
  {
    business_id: 50,
    name: "Staples",
    score: 100
  },
  {
    business_id: 51,
    name: "Steelcase",
    score: 100
  },
  {
    business_id: 52,
    name: "Winners",
    score: 100
  },
  {
    business_id: 53,
    name: "Marshalls",
    score: 100
  },
  {
    business_id: 54,
    name: "HomeSense",
    score: 100
  },
  {
    business_id: 55,
    name: 'Toys "R" US',
    score: 100
  },
  {
    business_id: 56,
    name: "BabiesRUs",
    score: 100
  },
  {
    business_id: 57,
    name: "Crate & Barrel",
    score: 95
  },
  {
    business_id: 58,
    name: "CB2",
    score: 95
  },
  {
    business_id: 59,
    name: "Brooks Brothers",
    score: 90
  },
  {
    business_id: 60,
    name: "DSW",
    score: 90
  },
  {
    business_id: 61,
    name: "Dunkin' Donuts",
    score: 90
  },
  {
    business_id: 62,
    name: "Baskin Robbins",
    score: 90
  },
  {
    business_id: 63,
    name: "Williams-Sonoma",
    score: 90
  },
  {
    business_id: 64,
    name: "Pottery Barn",
    score: 90
  },
  {
    business_id: 65,
    name: "West Elm",
    score: 90
  },
  {
    business_id: 66,
    name: "IKEA",
    score: 100
  },
  {
    business_id: 67,
    name: "Urban Outfitters",
    score: 85
  },
  {
    business_id: 68,
    name: "Anthropologie",
    score: 85
  },
  {
    business_id: 69,
    name: "Edward Jones",
    score: 100
  },
  {
    business_id: 70,
    name: "HSBC",
    score: 100
  },
  {
    business_id: 71,
    name: "TD Bank",
    score: 100
  },
  {
    business_id: 72,
    name: "CIBC",
    score: 85
  },
  {
    business_id: 73,
    name: "H&R Block",
    score: 80
  },
  {
    business_id: 74,
    name: "Abercrombie & Fitch",
    score: 100
  },
  {
    business_id: 75,
    name: "Hollister",
    score: 100
  },
  {
    business_id: 76,
    name: "American Eagle Outfitters",
    score: 100
  },
  {
    business_id: 77,
    name: "Aerie",
    score: 100
  },
  {
    business_id: 78,
    name: "AEO Factory",
    score: 100
  },
  {
    business_id: 79,
    name: "Adidas",
    score: 100
  },
  {
    business_id: 80,
    name: "Reebok",
    score: 100
  },
  {
    business_id: 81,
    name: "Naturalizer",
    score: 100
  },
  {
    business_id: 82,
    name: "Coach",
    score: 100
  },
  {
    business_id: 83,
    name: "Stuart Weitzman",
    score: 100
  },
  {
    business_id: 84,
    name: "Gap",
    score: 100
  },
  {
    business_id: 85,
    name: "babyGap",
    score: 100
  },
  {
    business_id: 86,
    name: "Banana Republic",
    score: 100
  },
  {
    business_id: 87,
    name: "GapKids",
    score: 100
  },
  {
    business_id: 88,
    name: "Old Navy",
    score: 100
  },
  {
    business_id: 89,
    name: "Levi's",
    score: 100
  },
  {
    business_id: 90,
    name: "Nordstrom",
    score: 100
  },
  {
    business_id: 91,
    name: "Tiffany & Co.",
    score: 100
  },
  {
    business_id: 92,
    name: "Under Armour",
    score: 100
  },
  {
    business_id: 93,
    name: "Warby Parker",
    score: 95
  },
  {
    business_id: 94,
    name: "Ralph Lauren",
    score: 90
  },
  {
    business_id: 95,
    name: "Club Monaco",
    score: 90
  },
  {
    business_id: 96,
    name: "A/X",
    score: 80
  },
  {
    business_id: 97,
    name: "Armani Exchange",
    score: 80
  },
  {
    business_id: 98,
    name: "Free People",
    score: 85
  },
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
