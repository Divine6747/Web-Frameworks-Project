const dessertList = function (req, res){
    res.render('dessert-info', {
        title: 'Simply Perfect Vanilla Cupcakes',
    pageHeader: {
      title: 'Simply Perfect Vanilla Cupcakes',
    },
    dessert: {
      image: '/images/vanilla_cupcake.jpg',
      ingredients: [
        { name: 'Cake flour', description: '1 and 3/4 cups (207g), spooned & leveled' },
        { name: 'Baking powder', description: '3/4 teaspoon' },
        { name: 'Baking soda', description: '1/4 teaspoon' },
        { name: 'Salt', description: '1/4 teaspoon' },
        { name: 'Unsalted butter', description: '1/2 cup (8 Tbsp; 113g), softened to room temperature' },
        { name: 'Granulated sugar', description: '1 cup (200g)' },
        { name: 'Egg whites', description: '3 large, at room temperature' },
        { name: 'Sour cream', description: '1/2 cup (120g), full-fat, at room temperature' },
        { name: 'Vanilla extract', description: '2 teaspoons pure' },
        { name: 'Vanilla bean', description: 'Seeds scraped from 1/2 of a vanilla bean (optional)' },
        { name: 'Whole milk', description: '1/2 cup (120g/ml) at room temperature' },
        { name: 'Vanilla buttercream', description: 'For frosting' },
        { name: 'Sprinkles', description: 'For garnish (optional)' }
      ],
      steps: [
        'Preheat oven to the required temperature.',
        'Cream softened butter with sugar until light and fluffy.',
        'Add egg whites one at a time, mixing well after each addition.',
        'Mix in sour cream, vanilla extract, and vanilla bean seeds.',
        'Sift cake flour with baking powder, baking soda, and salt; fold into wet mixture gently.',
        'Add milk gradually until batter is smooth.',
        'Pour batter into cupcake liners and bake as directed.',
        'Let cupcakes cool completely before frosting.',
        'Frost with vanilla buttercream and decorate with sprinkles if desired.'
      ]
    }
  });
};

module.exports ={
    dessertList
}