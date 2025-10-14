const dessertList = function (req, res) {
  res.render('dessert-info', {
    title: 'Delicious Desserts',
    pageHeader: {
      title: 'Our Featured Desserts',
    },
    desserts: [
      {
        name: 'Simply Perfect Vanilla Cupcakes',
        image: '/images/vanilla_cupcake.jpg',
        rating: 4,
        ratingText: '4 out of 5',
        reviewCount: 128,
        description: 'Light, moist, and full of rich vanilla flavor. Decorate with vanilla buttercream and sprinkles.',
        ingredients: [
          { name: 'Cake flour', description: '1 and 3/4 cups (207g), spooned & leveled' },
          { name: 'Baking powder', description: '3/4 teaspoon' },
          { name: 'Baking soda', description: '1/4 teaspoon' },
          { name: 'Salt', description: '1/4 teaspoon' },
          { name: 'Unsalted butter', description: '1/2 cup (113g), softened' },
          { name: 'Granulated sugar', description: '1 cup (200g)' },
          { name: 'Egg whites', description: '3 large, room temperature' },
          { name: 'Sour cream', description: '1/2 cup (120g)' },
          { name: 'Vanilla extract', description: '2 teaspoons' },
          { name: 'Whole milk', description: '1/2 cup (120ml)' },
        ],
        steps: [
          'Preheat oven to the required temperature.',
          'Cream softened butter with sugar until light and fluffy.',
          'Add egg whites one at a time, mixing well after each addition.',
          'Mix in sour cream and vanilla extract.',
          'Fold in dry ingredients gently, alternating with milk.',
          'Pour batter into cupcake liners and bake until golden.',
          'Let cool, frost with vanilla buttercream, and decorate with sprinkles.',
        ]
      },
      {
        name: 'Gooey Chocolate Lava Cake',
        image: '/images/lava_cake.jpg',
        rating: 5,
        ratingText: '5 out of 5',
        reviewCount: 240,
        description: 'Rich, indulgent chocolate cakes with a molten center. Best served warm with ice cream.',
        ingredients: [
          { name: 'Dark chocolate', description: '6 oz (170g), chopped' },
          { name: 'Butter', description: '1/2 cup (115g)' },
          { name: 'Powdered sugar', description: '1 cup (120g)' },
          { name: 'Eggs', description: '2 whole + 2 yolks' },
          { name: 'Flour', description: '6 tablespoons (45g)' },
          { name: 'Salt', description: 'Pinch' }
        ],
        steps: [
          'Preheat oven to 425°F (220°C).',
          'Melt butter and chocolate together until smooth.',
          'Whisk in sugar, then eggs and yolks.',
          'Fold in flour and salt.',
          'Bake until edges are set but the center remains soft and gooey.',
        ]
      },
      {
        name: 'Strawberry Cheesecake',
        image: '/images/strawberry_cheesecake.jpg',
        rating: 5,
        ratingText: '5 out of 5',
        reviewCount: 180,
        description: 'Creamy cheesecake with a fresh strawberry topping.',
        ingredients: [
          { name: 'Cream cheese', description: '16 oz (450g), softened' },
          { name: 'Granulated sugar', description: '3/4 cup (150g)' },
          { name: 'Eggs', description: '3 large' },
          { name: 'Vanilla extract', description: '1 teaspoon' },
          { name: 'Graham cracker crust', description: '1 prepared crust' },
          { name: 'Strawberries', description: '1 cup, sliced' }
        ],
        steps: [
          'Preheat oven to 325°F (163°C).',
          'Beat cream cheese and sugar until smooth.',
          'Add eggs one at a time, mixing well.',
          'Stir in vanilla extract.',
          'Pour mixture into prepared crust and bake for 45 minutes.',
          'Let cool completely and top with fresh strawberries.'
        ]
      }
    ]
  });
};

module.exports = {
  dessertList
};
