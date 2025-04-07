const sampleListings = [
  {
    title: "Skyline Penthouse in New York",
    description: "A luxurious penthouse with breathtaking skyline views in the heart of NYC.",
    category: "trending",
    image: {
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "penthouse_001"
    },
    price: 1200,
    location: "New York, USA",
    country: "USA",
    reviews: [],
    owner: "67e82b9c8c679ca1eeecc805",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128]
    }
  },
  {
    title: "Cozy Room Near Eiffel Tower",
    description: "A charming private room just a walk away from the Eiffel Tower.",
    category: "rooms",
    image: {
      url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "room_002"
    },
    price: 80,
    location: "Paris, France",
    country: "France",
    reviews: [],
    owner: "67e82b9c8c679ca1eeecc805",
    geometry: {
      type: "Point",
      coordinates: [2.2945, 48.8584]
    }
  },
  {
    title: "Venetian Canal House",
    description: "Stay in a historic canal-side home in the heart of Venice.",
    category: "iconic-cities",
    image: {
      url: "https://images.unsplash.com/photo-1699424495026-0a9358f0777d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "venice_003"
    },
    price: 200,
    location: "Venice, Italy",
    country: "Italy",
    reviews: [],
    owner: "67e82b9c8c679ca1eeecc805",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408]
    }
  },
  {
    title: "Luxury Floating Boathouse",
    description: "A modern floating boathouse with stunning ocean views.",
    category: "boat-house",
    image: {
      url: "https://images.unsplash.com/photo-1669269704616-05abb2e1cd81?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "boathouse_004"
    },
    price: 250,
    location: "Amsterdam",
    country: "Netherlands",
    reviews: [],
    owner: "67e82b9c8c679ca1eeecc805",
    geometry: {
      type: "Point",
      coordinates: [4.8952, 52.3702]
    }
  },
  
    {
      title: "Ocean Cliff Villa",
      description: "A stunning villa perched on a cliff with panoramic ocean views.",
      category: "trending",
      image: {
        url: "https://images.unsplash.com/photo-1604205345526-a767b171d799?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "villa_016"
      },
      price: 600,
      location: "Santorini, Greece",
      country: "Greece",
      reviews: [],
      owner: "67e82b9c8c679ca1eeecc805",
      geometry: {
        type: "Point",
        coordinates: [25.4310, 36.3932]
      }
    },
    {
      title: "Historic London Townhouse",
      description: "A charming townhouse in the heart of London, full of history and elegance.",
      category: "rooms",
      image: {
        url: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "townhouse_017"
      },
      price: 300,
      location: "London, UK",
      country: "UK",
      reviews: [],
      owner: "67e82b9c8c679ca1eeecc805",
      geometry: {
        type: "Point",
        coordinates: [-0.1278, 51.5074]
      }
    },
    {
      title: "Floating Bamboo Bungalow",
      description: "A tranquil floating bungalow in a serene natural setting.",
      category: "boat-house",
      image: {
        url: "https://images.unsplash.com/photo-1609634878593-ebcfde37ae74?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "bungalow_018"
      },
      price: 190,
      location: "Kanchanaburi, Thailand",
      country: "Thailand",
      reviews: [],
      owner: "67e82b9c8c679ca1eeecc805",
      geometry: {
        type: "Point",
        coordinates: [99.5215, 14.0256]
      }
    },
    {
      title: "Desert Dome Retreat",
      description: "An off-grid geodesic dome in the middle of the desert.",
      category: "domes",
      image: {
        url: "https://images.unsplash.com/photo-1607525792378-bddbcc739a25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "dome_019"
      },
      price: 250,
      location: "Sahara Desert, Morocco",
      country: "Morocco",
      reviews: [],
      owner: "67e82b9c8c679ca1eeecc805",
      geometry: {
        type: "Point",
        coordinates: [-8.1339, 31.6363]
      }
    },
    {
      title: "Tropical Island Treehouse",
      description: "A secluded treehouse surrounded by lush tropical paradise.",
      category: "others",
      image: {
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "treehouse_020"
      },
      price: 220,
      location: "Fiji",
      country: "Fiji",
      reviews: [],
      owner: "67e82b9c8c679ca1eeecc805",
      geometry: {
        type: "Point",
        coordinates: [178.0650, -17.7134]
      }
    },
    {
      title: "Ice Cave Adventure Stay",
      description: "An adventurous stay in a natural ice cave with guided tours.",
      category: "arctic",
      image: {
        url: "https://images.unsplash.com/photo-1493328967571-819121ed5085?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "icecave_021"
      },
      price: 450,
      location: "Vatnajökull, Iceland",
      country: "Iceland",
      reviews: [],
      owner: "67e82b9c8c679ca1eeecc805",
      geometry: {
        type: "Point",
        coordinates: [-16.7476, 64.4214]
      }
    },
    {
      title: "Alpine Wooden Chalet",
      description: "A cozy wooden chalet with breathtaking views of the Alps.",
      category: "mountains",
      image: {
        url: "https://images.unsplash.com/photo-1584098731526-e3924fad98db?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "chalet_022"
      },
      price: 320,
      location: "Chamonix, France",
      country: "France",
      reviews: [],
      owner: "67e82b9c8c679ca1eeecc805",
      geometry: {
        type: "Point",
        coordinates: [6.8694, 45.9237]
      }
    },
    {
      title: "Countryside Windmill Stay",
      description: "A historic windmill converted into a cozy countryside home.",
      category: "farms",
      image: {
        url: "https://images.unsplash.com/photo-1705051239816-4cf3d4d6d153?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "windmill_023"
      },
      price: 180,
      location: "Bruges, Belgium",
      country: "Belgium",
      reviews: [],
      owner: "67e82b9c8c679ca1eeecc805",
      geometry: {
        type: "Point",
        coordinates: [3.2247, 51.2093]
      }
    },
    {
      title: "Medieval Castle Stay",
      description: "A grand medieval castle with a rich history and luxury amenities.",
      category: "castle",
      image: {
        url: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "castle_024"
      },
      price: 550,
      location: "Bavaria, Germany",
      country: "Germany",
      reviews: [],
      owner: "67e82b9c8c679ca1eeecc805",
      geometry: {
        type: "Point",
        coordinates: [10.4000, 47.5667]
      }
    },
    {
      title: "Glass Cabin Under the Northern Lights",
      description: "A breathtaking glass cabin offering spectacular views of the Aurora Borealis.",
      category: "trending",
      image: {
        url: "https://images.unsplash.com/photo-1580677616212-2fa929e9c2cd?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "glasscabin_025"
      },
      price: 480,
      location: "Tromsø, Norway",
      country: "Norway",
      reviews: [],
      owner: "67e82b9c8c679ca1eeecc805",
      geometry: {
        type: "Point",
        coordinates: [18.9553, 69.6496]
      }
    },
      {
        title: "Mountain View Wooden Cabin",
        description: "A peaceful cabin with stunning mountain views, perfect for nature lovers.",
        category: "mountains",
        image: {
          url: "https://images.unsplash.com/photo-1558636292-3cd4fbdf891b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "cabin_026"
        },
        price: 280,
        location: "Aspen, USA",
        country: "USA",
        reviews: [],
        owner: "67e82b9c8c679ca1eeecc805",
        geometry: {
          type: "Point",
          coordinates: [-106.8175, 39.1911]
        }
      },
      {
        title: "Luxury Overwater Villa",
        description: "An elegant overwater villa with private access to crystal-clear waters.",
        category: "domes",
        image: {
          url: "https://images.unsplash.com/photo-1666542458470-9d1f5cd511e3?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "villa_027"
        },
        price: 750,
        location: "Bora Bora, French Polynesia",
        country: "French Polynesia",
        reviews: [],
        owner: "67e82b9c8c679ca1eeecc805",
        geometry: {
          type: "Point",
          coordinates: [-151.7415, -16.5004]
        }
      },
      {
        title: "Himalayan Monastery Stay",
        description: "A serene stay in a monastery high in the Himalayas, perfect for meditation.",
        category: "farms",
        image: {
          url: "https://images.unsplash.com/photo-1646278717766-7e71f6cb8a3b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "monastery_028"
        },
        price: 150,
        location: "Ladakh, India",
        country: "India",
        reviews: [],
        owner: "67e82b9c8c679ca1eeecc805",
        geometry: {
          type: "Point",
          coordinates: [77.5873, 34.1526]
        }
      },
      {
        title: "Underground Cave Home",
        description: "A unique underground cave house with modern comforts and an ancient feel.",
        category: "iconic-cities",
        image: {
          url: "https://images.unsplash.com/photo-1731875667792-238033cd9b6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "cave_029"
        },
        price: 220,
        location: "Cappadocia, Turkey",
        country: "Turkey",
        reviews: [],
        owner: "67e82b9c8c679ca1eeecc805",
        geometry: {
          type: "Point",
          coordinates: [34.8238, 38.6431]
        }
      },
      {
        title: "Antarctic Ice Hotel",
        description: "An extraordinary stay inside an ice-carved hotel in Antarctica.",
        category: "arctic",
        image: {
          url: "https://images.unsplash.com/photo-1631050237082-81407ab3a3f3?q=80&w=1124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "icehotel_030"
        },
        price: 550,
        location: "Antarctica",
        country: "Antarctica",
        reviews: [],
        owner: "67e82b9c8c679ca1eeecc805",
        geometry: {
          type: "Point",
          coordinates: [-58.7394, -62.7105]
        }
      },
      {
        title: "Amazon River Floating Lodge",
        description: "A floating lodge in the heart of the Amazon Rainforest, surrounded by nature.",
        category: "boat-house",
        image: {
          url: "https://images.unsplash.com/photo-1701500607678-ba65c6d70296?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "floatinglodge_031"
        },
        price: 300,
        location: "Manaus, Brazil",
        country: "Brazil",
        reviews: [],
        owner: "67e82b9c8c679ca1eeecc805",
        geometry: {
          type: "Point",
          coordinates: [-60.025, -3.1019]
        }
      },
      {
        title: "Vintage Train Car Hotel",
        description: "Stay in a restored vintage train car converted into a cozy hotel room.",
        category: "castle",
        image: {
          url: "https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "traincar_032"
        },
        price: 180,
        location: "California, USA",
        country: "USA",
        reviews: [],
        owner: "67e82b9c8c679ca1eeecc805",
        geometry: {
          type: "Point",
          coordinates: [-120.7401, 36.7783]
        }
      },
      {
        title: "Modern Glass Treehouse",
        description: "A contemporary treehouse made of glass, offering incredible forest views.",
        category: "castle",
        image: {
          url: "https://images.unsplash.com/photo-1601164709920-08578d86d2f7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          filename: "glasstreehouse_033"
        },
        price: 260,
        location: "British Columbia, Canada",
        country: "Canada",
        reviews: [],
        owner: "67e82b9c8c679ca1eeecc805",
        geometry: {
          type: "Point",
          coordinates: [-123.3656, 48.4284]
        }
      },
      {
        title: "Hidden Desert Oasis",
        description: "A luxury desert camp offering a secluded escape under the stars.",
        category: "trending",
        image: {
          url: "https://images.unsplash.com/photo-1719582116435-a11ea85bb2f9?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://example.com/desert-oasis.jpg",
          filename: "oasis_034"
        },
        price: 400,
        location: "Dubai, UAE",
        country: "UAE",
        reviews: [],
        owner: "67e82b9c8c679ca1eeecc805",
        geometry: {
          type: "Point",
          coordinates: [55.2708, 25.2048]
        }
      },
      {
        title: "Historic Lighthouse Stay",
        description: "Spend a night in a restored lighthouse with unbeatable ocean views.",
        category: "rooms",
        image: {
          url: "https://images.unsplash.com/photo-1605181063694-e64a8e7a267f?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dttps://example.com/lighthouse.jpg",
          filename: "lighthouse_035"
        },
        price: 320,
        location: "Maine, USA",
        country: "USA",
        reviews: [],
        owner: "67e82b9c8c679ca1eeecc805",
        geometry: {
          type: "Point",
          coordinates: [-69.4455, 43.6591]
        }
      }
    
    
  
]


module.exports = { data: sampleListings };