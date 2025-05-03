type GroceryStore<N, C> = { name: N, city: C };

type GroceryItem<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

type CapreseSalad = GroceryItem<'Caprese Salad', 14.99, true>
