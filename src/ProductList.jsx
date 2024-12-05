import React, { useState } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks
import { addItem, removeItem, updateQuantity } from './CartSlice';
function ProductList() {

    const dispatch = useDispatch();  // To dispatch actions
    const cartItems = useSelector(state => state.cart.items); 
    const [showCart, setShowCart] = useState(false); 
    const [addedToCart, setAddedToCart] = useState({}); // To track added products in cart


    const plantsArray = [
        {
            category: "Culinary Herbs",
            plants: [
                {
                    name: "Basil",
                    image: "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/basil-herb.jpg",
                    description: "Popular herb used in Italian and Thai cuisine.",
                    cost: "$10"
                },
                {
                    name: "Rosemary",
                    image: "https://bouqs.com/blog/wp-content/uploads/2022/12/rosemary-plants.jpg",
                    description: "Fragrant herb perfect for meats and bread.",
                    cost: "$12"
                },
                {
                    name: "Thyme",
                    image: "https://th.bing.com/th/id/OIP.1y6mj3jvVTRpvElqBXWgXAHaE8?rs=1&pid=ImgDetMain",
                    description: "Aromatic herb used in soups and stews.",
                    cost: "$9"
                },
                {
                    name: "Coriander",
                    image: "https://th.bing.com/th/id/OIP.5BUVYOlvWXwd68Jy4JgbXgHaEo?w=294&h=183&c=7&r=0&o=5&pid=1.7",
                    description: "Versatile herb for curries and salsas.",
                    cost: "$8"
                },
                {
                    name: "Parsley",
                    image: "https://www.gardeningknowhow.com/wp-content/uploads/2020/11/parsley-in-a-flowerpot-1152x1536.jpg",
                    description: "Adds freshness to salads and garnishes.",
                    cost: "$7"
                },
                {
                    name: "Oregano",
                    image: "https://th.bing.com/th/id/OIP.IrCuO4y3Yo3W3M_k0l0flQHaFj?rs=1&pid=ImgDetMain",
                    description: "Flavorful herb commonly used in Italian and Mediterranean dishes.",
                    cost: "$11"
                }
                
            ]
        },
        
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: "$10"
                },
                {
                    name: "Marigold",
                    image:"https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8"
                },
                {
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$20"
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9"
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "$10"
                },
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "$20"
                },
                {
                    name: "Succulents",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "$22"
                }
            ]
        }
    ];
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff', // Removed `!important` as it's not valid in inline styles
        padding: '0px 0px', // Added padding for better spacing
        display: 'flex',
        justifyContent: 'center', // Center align content horizontally
        alignItems: 'center', // Fixed typo from `alignIems` to `alignItems`
        fontSize: '20px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Added shadow for better appearance
      };
      
      const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%', // Changed to full width for responsive design
        maxWidth: '1200px', // Limit width for a better layout
        listStyle: 'none', // Ensures the list has no default bullets
        padding: '0px',
        margin: '0',
      };
      
      const styleA = {
        color: 'white',
        fontSize: '28px', // Adjusted size for better readability
        textDecoration: 'none',
        fontWeight: 'bold', // Makes links more prominent
        margin: '0 8px', // Added margin between links
        transition: 'color 0.3s ease', // Added hover effect
      };
      
      // Add hover effect
      const styleAHover = {
        color: '#FFD700', // Golden color for hover
      };
      
 
    // Handle add to cart (dispatch action)
    const handleAddToCart = (plant) => {
        // Check if the plant already exists in the cart
        const existingPlant = cartItems.find(item => item.name === plant.name);
        
        if (existingPlant) {
            // If the plant is already in the cart, update its quantity
            const updatedQuantity = existingPlant.quantity + 1;
            dispatch(updateQuantity({ plant, quantity: updatedQuantity }));
        } else {
            // If the plant is not in the cart, add it to the cart
            dispatch(addItem({ ...plant, quantity: 1 }));
        }
    
        // Disable the "Add to Cart" button once added
        setAddedToCart((prev) => ({
            ...prev,
            [plant.name]: true
        }));
    };

    // Handle remove from cart (dispatch action)
    const handleRemoveFromCart = (plant) => {
        dispatch(removeItem(plant));
    
        setAddedToCart((prev) => ({
            ...prev,
            [plant.name]: false
        }));
    };

    // Handle update quantity (dispatch action)
    const handleUpdateQuantity = (plant, quantity) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ plant, quantity }));
        }
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); 
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false); 
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false); 
    };

    // Calculate the total amount of the cart
    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => {
          const cost = typeof item.cost === 'string' ? parseFloat(item.cost.replace('$', '')) : item.cost;
          return total + (cost * item.quantity);
        }, 0);
      };
      

    return (
        <div>
        <div className="navbar">
            <div className="tag">
                <div className="luxury">
                    <img
                        src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                        alt="logo"
                    />
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <div>
                            <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                            <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                        </div>
                    </a>
                </div>
            </div>
            <div style={styleObjUl}>
                <div>
                    <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
                        Plants
                    </a>
                </div>
                <div className='cart'>
                    <a href="#" onClick={(e) => handleCartClick(e)} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="60" width="60">
            <circle cx="80" cy="216" r="12" fill="#fff" />
            <circle cx="194" cy="216" r="12" fill="#fff" />
            <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="#fff"
                stroke-width="2"
            />
        </svg>

                            <span className='cart-number'>
                                {cartItems.length}
                            </span>
                    </a>
                </div>
            </div>
        </div>

        {!showCart ? (
            <div className="product-grid">
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h2>{category.category}</h2>
                        <div className="plants">
                            {category.plants.map((plant, idx) => (
                                <div key={idx} className="product-card">
                                                {/* Sale label for the first 6 items */}

                                                {category.category === "Culinary Herbs" && idx < 6 && (
                <div className="sale-label">Sale</div>
            )}

                                    <img src={plant.image} alt={plant.name} />
                                    <h3>{plant.name}</h3>
                                    <p>{plant.description}</p>
                                    <p>{plant.cost}</p>
                                    <button
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={addedToCart[plant.name]}
                                    >
                                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <CartItem
                onContinueShopping={handleContinueShopping}
                cartItems={cartItems}
                onRemoveItem={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
                totalAmount={getTotalAmount()}
            />
        )}
    </div>
  

    );
}

export default ProductList;
