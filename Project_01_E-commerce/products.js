const products = [
    {
        "id": 1,
        "name": "Skateboard Parrot",
        "category": "Skateboard",
        "price": 1500,
        "description": "Skateboard Complete 100 Parrot. \n Shape: Classic popsicle shape with a concave deck. \n Best for: Street, park, and vert skating. \n Features: Double kicktails (nose and tail are both upturned) for tricks.",
        "image": "image/products/skateboard/A1-01.jpg"
    },
    {
        "id": 2,
        "name": "Skateboard Galaxy Red",
        "category": "Skateboard",
        "price": 1500,
        "description": "This is Skateboard.  Skateboard Complete 100 Galaxy Red. \n Shape: Classic popsicle shape with a concave deck. \n Best for: Street, park, and vert skating. \n Features: Double kicktails (nose and tail are both upturned) for tricks.",
        "image": "image/products/skateboard/A2-01.jpg"
    },
    {
        "id": 3,
        "name": "Skateboard Deck Bruce Red",
        "category": "Skateboard",
        "price": 800,
        "description": "This is Skateboard. Skateboard Deck 120 Bruce Red. \n Shape: Classic popsicle shape with a concave deck. \n Best for: Street, park, and vert skating. \n Features: Double kicktails (nose and tail are both upturned) for tricks.",
        "image": "image/products/skateboard/A3-01.jpg"
    },
    {
        "id": 4,
        "name": "Skateboard Deck Bruce Blue",
        "category": "Skateboard",
        "price": 800,
        "description": "This is Skateboard. Skateboard Deck 120 Bruce Blue. \n Shape: Classic popsicle shape with a concave deck. \n Best for: Street, park, and vert skating. \n Features: Double kicktails (nose and tail are both upturned) for tricks.",
        "image": "image/products/skateboard/A4-01.jpg"
    },
    {
        "id": 5,
        "name": "Skateboard Deck Bruce Black",
        "category": "Skateboard",
        "price": 800,
        "description": "This is Skateboard. Skateboard Deck 120 Bruce Black. \n Shape: Classic popsicle shape with a concave deck. \n Best for: Street, park, and vert skating. \n Features: Double kicktails (nose and tail are both upturned) for tricks.",
        "image": "image/products/skateboard/A5-01.jpg"
    },
    {
        "id": 6,
        "name": "Skateboard Deck Bruce Yellow",
        "category": "Skateboard",
        "price": 800,
        "description": "This is Skateboard. Skateboard Deck 120 Bruce Yellow. \n Shape: Classic popsicle shape with a concave deck. \n Best for: Street, park, and vert skating. \n Features: Double kicktails (nose and tail are both upturned) for tricks.",
        "image": "image/products/skateboard/A6-01.jpg"
    },
    {
        "id": 7,
        "name": "Longboard Dancing White",
        "category": "Longboard",
        "price": 2500,
        "description": "This is Longboard. Longboard Dancing 100 White. \n Shape: Long, stable deck; often symmetrical. \n Best for: Downhill skating, cruising, and commuting. \n Features: Large, soft wheels for speed and smoothness, less suited for tricks.",
        "image": "image/products/longboard/B1-01.jpg"
    },
    {
        "id": 8,
        "name": "Longboard Pintail Gradient",
        "category": "Longboard",
        "price": 3000,
        "description": "This is Longboard. Longboard Pintail 520 Gradient \n \n Shape: Long, stable deck; often symmetrical. \n Best for: Downhill skating, cruising, and commuting. \n Features: Large, soft wheels for speed and smoothness, less suited for tricks.",
        "image": "image/products/longboard/B2-01.jpg"
    },
    {
        "id": 9,
        "name": "Longboard Dancing Forest",
        "category": "Longboard",
        "price": 2500,
        "description": "This is Longboard. Longboard Dancing 100 Forest. \n Shape: Long, stable deck; often symmetrical. \n Best for: Downhill skating, cruising, and commuting. \n Features: Large, soft wheels for speed and smoothness, less suited for tricks.",
        "image": "image/products/longboard/B3-01.jpg"
    },
    {
        "id": 10,
        "name": "Longboard Free Japan",
        "category": "Longboard",
        "price": 2800,
        "description": "This is Longboard. Longboard Free 520 Japan. \n Shape: Long, stable deck; often symmetrical. \n Best for: Downhill skating, cruising, and commuting. \n Features: Large, soft wheels for speed and smoothness, less suited for tricks.",
        "image": "image/products/longboard/B4-01.jpg"
    },
    {
        "id": 11,
        "name": "Butter Black Lines",
        "category": "Cruiser",
        "price": 5000,
        "description": "This is Cruiser. Butter Black Lines Ultra Carve. \n Shape: Wider and longer than a standard skateboard, often with a kicktail. \n Best for: Smooth rides and cruising around town. \n Features: Softer wheels for better grip and smoother rides on rough terrain.",
        "image": "image/products/cruiser/C1-01.jpg"
    },
    {
        "id": 12,
        "name": "Cruiser Big Yamba",
        "category": "Cruiser",
        "price": 3200,
        "description": "This is Cruiser. Cruiser Big Yamba 120 Raw. \n Shape: Wider and longer than a standard skateboard, often with a kicktail. \n Best for: Smooth rides and cruising around town. \n Features: Softer wheels for better grip and smoother rides on rough terrain.",
        "image": "image/products/cruiser/C2-01.jpg"
    },
    {
        "id": 13,
        "name": "Dinghy Classic Wave",
        "category": "Cruiser",
        "price": 6000,
        "description": "This is Cruiser. Dinghy Classic Wave. \n Shape: Wider and longer than a standard skateboard, often with a kicktail. \n Best for: Smooth rides and cruising around town. \n Features: Softer wheels for better grip and smoother rides on rough terrain.",
        "image": "image/products/cruiser/C3-01.jpg"
    },
    {
        "id": 14,
        "name": "Dinghy White Tiger",
        "category": "Cruiser",
        "price": 6000,
        "description": "This is Cruiser. Dinghy White Tiger. \n Shape: Wider and longer than a standard skateboard, often with a kicktail. \n Best for: Smooth rides and cruising around town. \n Features: Softer wheels for better grip and smoother rides on rough terrain.",
        "image": "image/products/cruiser/C4-01.jpg"
    },
    {
        "id": 15,
        "name": "Fish 500 Black",
        "category": "Cruiser",
        "price": 2700,
        "description": "This is Cruiser. Longboard Cruiser Fish 500 Black. \n Shape: Wider and longer than a standard skateboard, often with a kicktail. \n Best for: Smooth rides and cruising around town. \n Features: Softer wheels for better grip and smoother rides on rough terrain.",
        "image": "image/products/cruiser/C5-01.jpg"
    },
    {
        "id": 16,
        "name": "Fish 500 White",
        "category": "Cruiser",
        "price": 2700,
        "description": "This is Cruiser. Longboard Cruiser Fish 500 White. \n Shape: Wider and longer than a standard skateboard, often with a kicktail. \n Best for: Smooth rides and cruising around town. \n Features: Softer wheels for better grip and smoother rides on rough terrain.",
        "image": "image/products/cruiser/C6-01.jpg"
    },
    {
        "id": 17,
        "name": "Surfskate Carve Blue Green",
        "category": "Surfskate",
        "price": 2700,
        "description": "This is Surfskate. Longboard Surfskate Carve 540 Blue Green \n A surfskate is designed to mimic the feeling of surfing on land. It's a hybrid between a skateboard and a surfboard, and it allows riders to carve and make fluid, wave-like motions, similar to the movements used in surfing.",
        "image": "image/products/surfskate/D1-01.jpg"
    },
    {
        "id": 18,
        "name": "Surfskate Carve Bird",
        "category": "Surfskate",
        "price": 2700,
        "description": "This is Surfskate. Longboard Surfskate Cruising 32 Carve 540 Bird. \n A surfskate is designed to mimic the feeling of surfing on land. It's a hybrid between a skateboard and a surfboard, and it allows riders to carve and make fluid, wave-like motions, similar to the movements used in surfing.",
        "image": "image/products/surfskate/D2-01.jpg"
    },
    {
        "id": 19,
        "name": "Penny Classic High Vibe",
        "category": "Penny",
        "price": 2200,
        "description": "This is Penny. Penny Board Classic 27 High Vibe. \n Shape: Small, lightweight plastic deck. \n Best for: Casual cruising and portability. \n Features: Great for tight spaces, but less stable due to the small deck size.",
        "image": "image/products/penny/E1-01.webp"
    },
    {
        "id": 20,
        "name": "Penny Classic OceanMist",
        "category": "Penny",
        "price": 2200,
        "description": "This is Penny. Penny Board Classic 27 OceanMist \n \n Shape: Small, lightweight plastic deck. \n Best for: Casual cruising and portability. \n Features: Great for tight spaces, but less stable due to the small deck size.",
        "image": "image/products/penny/E2-01.webp"
    }
];

export default products;