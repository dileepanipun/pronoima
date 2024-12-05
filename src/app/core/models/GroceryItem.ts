/**
 * GroceryItem interface
 * 
 * @interface GroceryItem
 * 
 * @property {string} title - The title of the grocery item
 * @property {string} amount - The amount of the grocery item
 * @property {boolean} checked - Whether the grocery item has been checked
 * @property {string} category - The category of the grocery item
 * @property {number} estimatedCost - The estimated cost of the grocery item
 * @property {boolean} hidden - Whether the grocery item is hidden
 * @property {boolean} removed - Whether the grocery item has been removed
 * @property {string} [notes] - Optional notes for the grocery item
 * @property {string} addedDate - The date when the item was added
 * @property {string} [dueDate] - Optional due date for the item
 * @property {('low'|'medium'|'high')} [priority] - Optional priority level
 * @property {string} [store] - Optional store where the item can be purchased
 * @property {string} [unit] - Optional unit of measurement
 * @property {string} [imageUrl] - Optional URL for item image
 * @property {string[]} [tags] - Optional array of tags for categorization
 */
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

/**
 * GroceryListResponse interface
 * 
 * @interface GroceryListResponse
 * @property {GroceryItem[]} groceryList - The list of grocery items
 */
interface GroceryListResponse {
  groceryList: GroceryItem[];
}

export type { GroceryItem, GroceryListResponse }; 