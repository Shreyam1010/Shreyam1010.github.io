// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       const existingItem = state.items.find(item => item.name === action.payload.name);

//       // Ensure cost is a valid number (if it's a string with "$", remove it)
//       let cost = action.payload.cost;
//       if (typeof cost === 'string') {
//         // If it's a string (e.g., "$12"), remove "$" and parse to float
//         cost = parseFloat(cost.replace('$', ''));
//         if (isNaN(cost)) {
//           console.warn(`Invalid cost for ${action.payload.name}:`, action.payload.cost);
//           cost = 0; // Default to 0 if the cost is invalid
//         }
//       } else if (typeof cost !== 'number') {
//         console.warn(`Cost is neither a string nor a number for ${action.payload.name}`);
//         cost = 0; // Default to 0 if it's neither
//       }

//       // Handle adding/updating item in the cart
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1, cost });
//       }
//     },

//     removeItem: (state, action) => {
//       state.items = state.items.filter(item => item.name !== action.payload.name);
//     },

//     updateQuantity: (state, action) => {
//       const { plant, quantity } = action.payload;
//       const item = state.items.find(item => item.name === plant.name);
//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//   },
// });

// export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);

      // Ensure cost is a valid number (if it's a string with "$", remove it)
      let cost = action.payload.cost;
      if (typeof cost === 'string') {
        try {
          // Remove "$" if present and parse the string to a number
          cost = parseFloat(cost.replace('$', ''));
          if (isNaN(cost)) throw new Error('Cost is NaN');
        } catch (error) {
          console.warn(`Invalid cost for ${action.payload.name}:`, action.payload.cost);
          cost = 0; // Default to 0 if the cost is invalid
        }
      } else if (typeof cost !== 'number') {
        console.warn(`Cost is neither a string nor a number for ${action.payload.name}`);
        cost = 0; // Default to 0 if it's neither
      }

      // Handle adding/updating item in the cart
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1, cost });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    updateQuantity: (state, action) => {
      const { plant, quantity } = action.payload;

      // Validate quantity as a positive integer
      if (!Number.isInteger(quantity) || quantity < 0) {
        console.warn(`Invalid quantity for ${plant.name}: ${quantity}`);
        return; // Exit if the quantity is invalid
      }

      const item = state.items.find(item => item.name === plant.name);
      if (item) {
        item.quantity = quantity;
      } else {
        console.warn(`Attempted to update quantity for an item not in cart: ${plant.name}`);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

