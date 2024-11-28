interface GroceryItem {
  title: string;
  amount: string;
  checked: boolean;
  category: string;
  estimatedCost: number;
  hidden: boolean;
  removed: boolean;
}

interface GroceryData {
  groceryList: GroceryItem[];
}

export type { GroceryItem, GroceryData }; 