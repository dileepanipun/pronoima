interface GroceryItem {
  title: string;
  amount: string;
  checked: boolean;
  category: string;
  estimatedCost: number;
  hidden: boolean;
  removed: boolean;
  notes?: string;
  addedDate: string;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
  store?: string;
  unit?: string;
  imageUrl?: string;
  tags?: string[];
}

interface GroceryData {
  groceryList: GroceryItem[];
  lastUpdated: string;
  categories: string[];
  stores: string[];
  totalEstimatedCost: number;
}

export type { GroceryItem, GroceryData }; 